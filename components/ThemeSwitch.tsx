"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4 text-yellow-500" />
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`relative inline-flex h-6 w-11 items-center rounded-full border-2 border-brand-green/50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 ${
          isDark ? "bg-brand-green" : "bg-gray-200"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full border-2 border-white bg-black transition-transform ${
            isDark ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      <Moon className="h-4 w-4 text-white" />
    </div>
  )
}
