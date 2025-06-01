"use client"

import {type LucideIcon } from "lucide-react"
import Link from 'next/link';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavProjects({
  projects,
}: {
  projects: {
    name: string
    url: string
    icon: LucideIcon
  }[]
}) {
  // const { isMobile } = useSidebar() .

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Account</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        <Link href="/application">
          <SidebarMenuButton
              className="min-w-8 bg-[#1D0B84] text-primary-foreground duration-200 ease-linear hover:bg-[#3A2FA3] hover:text-primary-foreground active:bg-[#160A66] active:text-primary-foreground mb-4" 
            >
              <span className="flex justify-center">Application</span>
            </SidebarMenuButton>
            </Link>
      </SidebarMenu>
    </SidebarGroup>
  )
}