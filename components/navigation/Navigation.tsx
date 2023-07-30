import React from "react";
import { Toggle } from "../ui/toggle";
import { MoonStar } from "lucide-react";
import { useTheme } from "next-themes";
import SideMenu from "../sideMenu/SideMenu";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="flex justify-between py-4 px-6">
      <SideMenu />
      <Toggle onPressedChange={changeThemeHandler} className="dark:bg-zinc-800">
        <MoonStar className="h-6 w-6" />
      </Toggle>
    </nav>
  );
};

export default Navigation;
