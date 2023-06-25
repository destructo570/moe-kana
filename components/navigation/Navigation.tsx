import React from "react";
import { Toggle } from "../ui/toggle";
import { MoonStar } from "lucide-react";
import { useTheme } from "next-themes";

const Navigation: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex justify-between py-4 px-6">
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
