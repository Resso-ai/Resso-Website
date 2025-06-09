"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import React from 'react';
import data from "@/app/history/data.json"
interface HistoryItem {
  company: string;
  date: string;
  description: string;
  service: string;
  content: string;
}


export default function Home() {
  const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null); // Set the type to HistoryItem | null

  useEffect(() => {
    if (data.history.length > 0) {
      setSelectedItem(data.history[0]) // Set the most recent item (first item in the array)
    }
  }, []);

  const handleClick = (item: HistoryItem) => {
    setSelectedItem(item); // Set the clicked item in state
  }
  return (
    <div className="flex">
    <div className="flex-1">
      <SiteHeader
        breadcrumbs={[
          ["Home", "/"],
          ["History", "/history"],
        ]}
      />
        {data.history.map((item) => (
          <Card key={item.company} className="hover:shadow-lg hover:ring-2 hover:ring-accent cursor-pointer max-w-[300]" onClick={() => handleClick(item)}>
            <CardContent className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <CardTitle>{item.company}</CardTitle>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              <CardDescription className="text-sm text-gray-700 truncate">{item.description}</CardDescription>
              <Badge className="mt-2">{item.service}</Badge>
            </CardContent>
          </Card>
        ))}
        </div>
        {selectedItem && (
          <div className="w-full h-full  p-6 transition-transform transform ease-in-out duration-300 mt-5">
            <h3 className="text-2xl font-semibold">{selectedItem.company}</h3>
            <p className="text-sm text-gray-500">{selectedItem.date}</p>
            <strong>Type:</strong> {selectedItem.service}
            <div
              className="mt-4 text-lg"
              dangerouslySetInnerHTML={{ __html: selectedItem.content }} // Render HTML content safely
            />
          </div>
        )}
    </div>
  );
}