import React, { useMemo } from "react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { InfoIcon, Joystick, Menu } from "lucide-react";
import { RouteItem } from "@/models/interfaces/Route.interface";
import { Toggle } from "../ui/toggle";
import { GraduationCap } from "lucide-react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SideMenuProps { }

const SideMenu: React.FC<SideMenuProps> = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [is_open, setIsOpen] = useState(false);

  const toggleOpenState = () => {
    setIsOpen((prev) => !prev);
  };

  const ROUTES_LIST: RouteItem[] = [
    {
      route: "/learn-kana",
      title: "Learn Kana",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      route: "/tataku",
      title: "Tataku",
      icon: <Joystick className="h-5 w-5" />,
    },
    {
      route: "/about",
      title: "About",
      icon: <InfoIcon className="h-5 w-5" />,
    },
  ];
  
  let isActive = (route='') => {
    return pathname?.includes(route);
  }

  return (
    <Sheet open={is_open} onOpenChange={toggleOpenState}>
      <SheetTrigger asChild>
        <Menu className="hover:cursor-pointer" />
      </SheetTrigger>
      <SheetContent
        side="left"
        close_btn={false}
        className="dark:bg-zinc-800 dark:border-none"
      >
        <SheetHeader className="flex flex-row justify-between">
          <SheetTitle>MoeKana</SheetTitle>
          <X
            className="h-6 w-6 hover:cursor-pointer"
            onClick={toggleOpenState}
          />
        </SheetHeader>
        <div className="grid gap-4 py-4 mt-10">
          {ROUTES_LIST?.map((item, idx) => {
            return (
              <Link
                href={item.route}
                className={cn({'dark:bg-zinc-600 bg-zinc-200 px-3 py-2 rounded-lg' : isActive(item.route)})}
                onClick={() => {
                  toggleOpenState();
                }}
              >
                <div className="w-full text-left flex gap-3 items-center">
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
