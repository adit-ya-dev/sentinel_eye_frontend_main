"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Prevent hydration mismatch
  if (!mounted) return null;

  const isLight = theme === "light";

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
      disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground
      h-10 w-10"
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      {isLight ? "🌙" : "☀️"}
    </button>
  );
}
