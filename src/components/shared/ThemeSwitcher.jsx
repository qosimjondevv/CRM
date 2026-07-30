import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui"
import { useTheme } from "@/hooks"
import { cn } from "@/lib/utils"

export function ThemeSwitcher({ className }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      className={cn("cursor-pointer", className)}
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}
