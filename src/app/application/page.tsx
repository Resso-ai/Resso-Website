import data from "@/app/application/data.json"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Card, CardTitle, CardDescription } from "@/components/ui/card"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-row flex-wrap p-4">
        <Link
          href="/application/create-project"
          className="block m-4 w-54 h-54 cursor-pointer hover:shadow-xl transition"
        >
          <Card className="flex flex-col justify-center items-center text-center h-full">
            <CardTitle className="text-6xl">+</CardTitle>
            <CardDescription className="text-xl mt-2">New</CardDescription>
          </Card>
        </Link>

        {data.presets.map((preset) => (
          <Link
            key={preset.id}
            href={`/application/${preset.id}`}
            className="block m-4 w-54 h-54 cursor-pointer hover:shadow-xl transition"
          >
            <Card className="flex flex-col justify-center items-center text-center h-full">
              <CardTitle className="text-xl">{preset.id}. {preset.type}</CardTitle>
              <CardDescription className="text-xl mt-2">{preset.description}</CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
