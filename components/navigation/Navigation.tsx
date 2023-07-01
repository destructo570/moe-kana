import React from "react";
import { Toggle } from "../ui/toggle";
import { MoonStar } from "lucide-react";
import { useTheme } from "next-themes";
import SideMenu from "../sideMenu/SideMenu";

interface NavigationProps {
  active_route: string;
  updateRoute: (new_route: string) => void;
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const { active_route, updateRoute } = props;
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex justify-between py-4 px-6">
      <SideMenu active_route={active_route} updateRoute={updateRoute} />
      <p className="font-bold text-xl">MoeKana</p>
      <Toggle
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="dark:bg-zinc-800 "
      >
        <MoonStar className="h-6 w-6" />
      </Toggle>
    </nav>
  );
};

export default Navigation;
