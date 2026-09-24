import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from "@/lib/utils";

export const ThemeToogle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if(storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }

  return (
    //usando a função da tw merge pra diminuir o tanto de estilo dentro de uma mesma linha
    <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-4 right-5 z-50 p-2 rounded-full transition-colors duration-300",
      "focus:outlin-hidden"
    )}>
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
