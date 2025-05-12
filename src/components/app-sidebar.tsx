import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
 
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
 
// Career Tools items.
const CTitems = [
  {
    title: "Resume Generator",
    url: "#",
    icon: Home,
  },
  {
    title: "Cover Letter Generator",
    url: "#",
    icon: Home,
  },
  {
    title: "Interview Preparation",
    url: "#",
    icon: Home,
  },
  {
    title: "Interview Simulation",
    url: "#",
    icon: Home,
  },
  {
    title: "Statement of Purpose",
    url: "#",
    icon: Home,
  },
  {
    title: "History",
    url: "#",
    icon: Inbox,
  },
]

// Account items.
const Aitems = [
  {
    title: "Profile",
    url: "#",
    icon: Home,
  },
  {
    title: "Account Selector",
    url: "#",
    icon: Home,
  },
  {
    title: "Experience and Education",
    url: "#",
    icon: Home,
  },
  {
    title: "Plan",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]
 
export function AppSidebar() {
  return (
      <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-center px-4 py-4" style={{ backgroundColor: "#F04770" }}>
          <img
            src="/resso-ai.svg"
            alt="CareerSuite Logo"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="flex items-center gap-3 px-4 py-3 border-b">
          <img
            src="/profile-logo.png"
            className="h-15 w-15 rounded-full object-cover"
          />
          <div>
            <p className="text-xl font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">johndoe@example.com</p>
          </div>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel className=" text-3xl mt-2 mb-2" style={{ color: "#1D0B84" }}>Career Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {CTitems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel className=" text-3xl mt-5 mb-2" style={{ color: "#1D0B84" }}>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {Aitems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          </SidebarGroup>

        {/* Log Out Button */}
        <div className="mt-auto px-4 py-4">
          <button
               className="w-full bg-[#F04770] text-white text-xl py-3 rounded-lg hover:bg-[#E03D62] hover:shadow-[0px 0px 15px 5px] transition-all duration-300"
          >
            Log Out
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}