import React from "react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { RouteItem } from "@/models/interfaces/Route.interface";
import { Toggle } from "../ui/toggle";
import { ROUTES_LIST } from "@/lib/constants";
import { usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";

interface SideMenuProps {}

const SideMenu: React.FC<SideMenuProps> = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [is_open, setIsOpen] = useState(false);

  const onRouteClick = (item: RouteItem) => {
    router.push(item.route);
    toggleOpenState();
  };

  const toggleOpenState = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Sheet open={is_open} onOpenChange={toggleOpenState}>
      <SheetTrigger asChild>
        <Menu className="hover:cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" close_btn={false}>
        <SheetHeader className="flex flex-row justify-between">
          <SheetTitle>MoeKana</SheetTitle>
          <X className="h-6 w-6" onClick={toggleOpenState} />
        </SheetHeader>
        <div className="grid gap-4 py-4 mt-10">
          {ROUTES_LIST?.map((item, idx) => {
            return (
              <Toggle
                key={`route_${idx}`}
                pressed={pathname.startsWith(item.route)}
                onPressedChange={onRouteClick.bind(null, item)}
                className="border-none"
              >
                {item.title}
              </Toggle>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
