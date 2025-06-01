"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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

const dynamicSchema = data.inputInfo.reduce<Record<string, z.ZodType>>((acc, { input, validation }) => {
  acc[input] = validation
  return acc
}, {})

const formSchema = z.object(dynamicSchema)

export default function ProfileForm() {
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
        <SiteHeader />
        <div className="w-full min-h-screenp p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {data.inputInfo.map((fieldData, index) => (
              <FormField
                key={index}
                control={form.control}
                name={fieldData.input}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-2xl">{fieldData.input}</FormLabel>
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

            <div className="space-y-2">
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
            </div>

              <FormLabel className=" text-2xl">Analytics</FormLabel>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Checkbox id="ana1" />
                  <Label htmlFor="ana1">Hire ChanceTM Score</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="ana2" />
                  <Label htmlFor="ana2">Answers</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="ana3" />
                  <Label htmlFor="ana3">Sentiment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="ana4" />
                  <Label htmlFor="ana4">Pace</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="ana5" />
                  <Label htmlFor="ana5">Decisiveness</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="ana6" />
                  <Label htmlFor="ana6">Repetitive Language</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="ana7" />
                  <Label htmlFor="ana7">Inclusiveness</Label>
                </div>
              </div>

            {/* Overview Report Toggle */}
            <div className="flex items-center justify-between">
              <Label htmlFor="toggle">Overview Report</Label>
              <Switch id="toggle" />
            </div>

            {/* Action Buttons: Save / Cancel */}
            <div className="flex justify-end space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Form>
        </div>
    </div>
  )
}
