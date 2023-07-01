import React from "react";
import { Toggle } from "../ui/toggle";
import { MoonStar } from "lucide-react";
import { useTheme } from "next-themes";
import SideMenu from "../sideMenu/SideMenu";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex justify-between py-4 px-6">
      <SideMenu />
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
