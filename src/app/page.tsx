import { SiteHeader } from "@/components/site-header";
export default function Home() {
  return (
    <div>
      <SiteHeader
        breadcrumbs={[
          ["Home", "/"],
        ]}
      />
      <h1 className="text-5xl">Hello</h1>
    </div>
  );
}
