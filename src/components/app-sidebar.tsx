"use client"

import type * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Settings,
  Calendar,
  SquareTerminal,
} from "lucide-react"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "./team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "JohnDoe",
    email: "JohnDoe@example.com",
    avatar: "/avatars/pfp.jpg",
  },
  teams: [
    {
      name: "ENG4U1",
      logo: GalleryVerticalEnd,
      plan: "Education",
    },
    {
      name: "ICS4U1",
      logo: AudioWaveform,
      plan: "Education",
    },
    {
      name: "MDM4U1",
      logo: Command,
      plan: "Education",
    },
    {
      name: "Joe Doe",
      logo: Command,
      plan: "Personal",
    },
  ],
  navMain: [
    {
      title: "Career Tools",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Resume Builder",
          url: "#",
        },
        {
          title: "Cover Letter Generator",
          url: "#",
        },
        {
          title: "Portfolio Builder",
          url: "#",
        },
        {
          title: "Skills Assessment",
          url: "#",
        },
      ],
    },
        {
      title: "Interviews",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Interview Prep",
          url: "#",
        },
        {
          title: "Interview Simulaton",
          url: "#",
        },
        {
          title: "Interview Feedback",
          url: "#",
        },
      ],
    },
    
    {
      title: "Tutoring",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Math",
          url: "#",
        },
        {
          title: "English",
          url: "#",
        },
        {
          title: "Science",
          url: "#",
        },
      ],
    },
    {
      title: "Community",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Forums",
          url: "#",
        },
        {
          title: "Student Groups",
          url: "#",
        },
        {
          title: "Events & Webinars",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Experience and Education",
      url: "#",
      icon: Frame,
    },
    {
      name: "Plan",
      url: "#",
      icon: Calendar,
    },
    {
      name: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-center px-2 py-4 mb-2" >
          <img src="/resso-ai.svg"/>
        </div>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
