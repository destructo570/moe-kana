import React from "react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { RouteItem } from "@/models/interfaces/Route.interface";
import { Toggle } from "../ui/toggle";
import { ROUTES_LIST } from "@/lib/constants";

interface SideMenuProps {
  active_route: string;
  updateRoute: (new_route: string) => void;
}

const SideMenu: React.FC<SideMenuProps> = (props) => {
  const [is_open, setIsOpen] = useState(false);
  const { active_route, updateRoute } = props;

  const onRouteClick = (item: RouteItem) => {
    updateRoute(item.route);
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
      <SheetContent side="left" close_btn_height="h-6" close_btn_width="w-6">
        <div className="grid gap-4 py-4 mt-10">
          {ROUTES_LIST?.map((item, idx) => {
            return (
              <Toggle
                key={`route_${idx}`}
                pressed={active_route === item.route}
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
