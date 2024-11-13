import * as React from "react";
import { BadgeCheck, ChevronsUpDown, LogOut} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { useSession,signOut } from "next-auth/react"
export function TeamSwitcher() {
  const { isMobile } = useSidebar();
  // const [activeTeam, setActiveTeam] = React.useState(teams[0])
  const { data: session } = useSession()
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground dark:bg-zinc-500 dark:text-zinc-50"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Avatar>
                  <AvatarImage src={session?.user?.image ?? ""}  alt={session?.user?.name ?? ""}/>
                  <AvatarFallback className="rounded-lg" style={{ color: "black" }}>{session?.user?.name ? session?.user?.name.split("")[0].toLocaleUpperCase() : ""}</AvatarFallback>
                </Avatar>
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <Image
                  src="/logo-transparent-svg.svg"
                  alt="Next.js logo"
                  width={180}
                  height={38}
                />
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="start"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={session?.user?.image ?? ""} alt={session?.user?.name ?? ""} />
                  <AvatarFallback className="rounded-lg">{session?.user?.name ? session?.user?.name.split("")[0].toLocaleUpperCase() : ""}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{session?.user?.name}</span>
                  <span className="truncate text-xs">{session?.user?.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
            <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut({ redirect: false })} style={{cursor: "pointer"}}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}