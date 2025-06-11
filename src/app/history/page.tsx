"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import React from 'react';
import data from "@/app/history/data.json"
import { Combobox } from "@/components/ui/combobox"
import { Separator } from "@radix-ui/react-separator"
interface HistoryItem {
  company: string;
  date: string;
  description: string;
  service: string;
  content: string;
}
const serviceColors: Record<string, string> = {
  "Cover Letter": "#f04770",
  "Resume": "#06d7a0",
  "Interview Preparation": "#2c1b89",
};

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    if (data.history.length > 0) {
      setSelectedItem(data.history[0]);
    }
  }, []);

  const handleClick = (item: HistoryItem) => {
    setSelectedItem(item);
  }

  const uniqueServices = ["All", ...Array.from(new Set(data.history.map(item => item.service)))];

  const filteredData = filter === "All"
    ? data.history
    : data.history.filter(item => item.service === filter);

  return (
    <div className="flex">
    <div className="flex-1">
      <SiteHeader
        breadcrumbs={[
          ["Home", "/"],
          ["History", "/history"],
        ]}
      />
      <Combobox
        options={uniqueServices.map(service => ({ label: service, value: service }))}
        selectedValue={filter}
        onChange={setFilter}
      />
        {filteredData.map((item) => (
          <Card key={item.company} className="rounded-none border-none shadow-none cursor-pointer max-w-[300]" onClick={() => handleClick(item)}>
            <CardContent className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <CardTitle>{item.company}</CardTitle>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              <CardDescription className="text-sm text-gray-700 truncate">{item.description}</CardDescription>
              <Badge style={{backgroundColor:serviceColors[item.service] || "bg-gray-300 text-black"}} className="mt-2">{item.service}</Badge>
            </CardContent>
            <Separator
            orientation="horizontal"
            className="data-[orientation=horizontal]:h-0.5 bg-gray-200 mx-auto w-65 rounded"
          />
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