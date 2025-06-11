"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { X } from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const data = {
  inputInfo: [
    { input: "Title", validation: z.string().min(1, { message: "Please input a title." }) },
    { input: "Description", validation: z.string().min(1, { message: "Please input a description." }) },
  ]
}
const analyticsOptions = [
  "Hire Chance Score", 
  "Answers", 
  "Sentiment", 
  "Pace", 
  "Decisiveness", 
  "Repetitive Language", 
  "Inclusiveness",
  "Filler Words"
]

const dynamicSchema = data.inputInfo.reduce<Record<string, z.ZodType>>((acc, { input, validation }) => {
  acc[input] = validation
  return acc
}, {})

const formSchema = z.object(dynamicSchema)

export default function ProfileForm() {
  const [checkedStates, setCheckedStates] = useState<Record<string, boolean>>({})
  const handleCheckboxChange = (label: string) => {
    setCheckedStates((prev) => ({
      ...prev,
      [label]: !prev[label], // Toggle the specific checkbox state
    }))
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Title: "",
      Description: "",
    },
  })

  const [logicItems, setLogicItems] = useState<string[]>([""])

  const addLogicItem = () => setLogicItems([...logicItems, ""])
  const removeLogicItem = (index: number) => {
    setLogicItems(logicItems.filter((_, i) => i !== index))
  }
  const updateLogicItem = (index: number, value: string) => {
    const updatedLogicItems = [...logicItems]
    updatedLogicItems[index] = value
    setLogicItems(updatedLogicItems)
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  
  return (
    <div>
        <SiteHeader
          breadcrumbs={[
            ["Home", "/"],
            ["Application", "/application"],
            ["Create New", "/application/create-new"],
          ]}
        />
    <div className="custom-min-width">
      <div className="w-[600px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {data.inputInfo.map((fieldData, index) => (
              <FormField
                key={index}
                control={form.control}
                name={fieldData.input}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-2xl mt-4">{fieldData.input}</FormLabel>
                    <FormControl>
                      {fieldData.input === "Description" ? (
                        <Textarea placeholder={fieldData.input} {...field} />
                      ) : (
                        <Input className="w-full" placeholder={fieldData.input} {...field} />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <FormItem className="space-y-2">
              <FormLabel className=" text-2xl">Logic</FormLabel>
              {logicItems.map((item, index) => (
                <div className="flex items-center space-x-2" key={index}>
                  <Input 
                    value={item} 
                    onChange={(e) => updateLogicItem(index, e.target.value)} 
                    placeholder={`Logic ${index + 1}`} 
                  />
                  <Button variant="ghost" size="icon" onClick={() => removeLogicItem(index)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" onClick={addLogicItem}>Add</Button>
            </FormItem>
              <FormLabel className=" text-2xl">Analytics</FormLabel>
              <div className="space-y-1">
                {analyticsOptions.map((label, index) => (
                  <div className="space-y-2" key={index}>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id={`ana${index + 1}`} 
                        checked={checkedStates[label] || false} 
                        onCheckedChange={() => handleCheckboxChange(label)} 
                      />
                      <Label htmlFor={`ana${index + 1}`}>{label}</Label>
                    </div>

                    {checkedStates[label] && (
                      <div className="mt-2">
                        <Input placeholder="Enter passing grade"/>
                      </div>
                    )}
                  </div>
                ))}
              </div>


            {/* Overview Report Toggle */}
            <div className="flex items-center justify-between">
              <Label htmlFor="toggle">Overview Report</Label>
              <Switch id="toggle" />
            </div>

            {/* Action Buttons: Save / Cancel */}
            <div className="flex justify-end space-x-2">
              <Button variant="outline">
                <Link href="/application">Cancel</Link>
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Form>
        </div>
    </div>
    </div>
  )
}
