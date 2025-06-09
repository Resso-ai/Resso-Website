"use client";
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function SiteHeader({
  breadcrumbs,
}: {
  breadcrumbs: [string, string][];
}) {
  return (
      <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
        <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map(([label, href], index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <div key={href} className="flex items-center">
                    {index > 0 && <BreadcrumbSeparator />}
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage className="text-xs">{label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link className="text-xs" href={href}>{label}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </div>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
    );
  }