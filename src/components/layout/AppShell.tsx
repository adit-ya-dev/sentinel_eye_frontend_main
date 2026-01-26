"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";

import {
  LayoutDashboard,
  Map,
  FileSearch,
  Database,
  Siren,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Shield,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Map Analysis", href: "/analysis", icon: Map },
  { name: "Scan Result", href: "/scan-result", icon: FileSearch },
  { name: "Data Logs", href: "/data-logs", icon: Database },
  { name: "Alerts Centre", href: "/alerts", icon: Siren },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  const adjustFont = (type: "increase" | "decrease" | "reset") => {
    if (type === "increase" && fontSize < 120) setFontSize((p) => p + 5);
    if (type === "decrease" && fontSize > 85) setFontSize((p) => p - 5);
    if (type === "reset") setFontSize(100);
  };

  return (
    <div className="min-h-screen font-sans bg-background text-foreground">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-30 h-[80px] flex items-center px-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex-1 hidden md:block" />

        <div className="flex flex-1 items-center justify-center gap-6">
          <div className="relative w-14 h-14">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-black tracking-[0.35em] text-primary">
            SENTINEL EYE
          </h1>
        </div>

        {/* CONTROLS */}
        <div className="flex flex-1 items-center justify-end gap-4 text-sm">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border bg-muted/40">
            <button
              onClick={() => adjustFont("decrease")}
              className="px-2 py-1 rounded-md transition hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary/30"
              aria-label="Decrease font size"
            >
              A-
            </button>

            <button
              onClick={() => adjustFont("reset")}
              className="px-2 py-1 rounded-md font-semibold transition hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary/30"
              aria-label="Reset font size"
            >
              A
            </button>

            <button
              onClick={() => adjustFont("increase")}
              className="px-2 py-1 rounded-md transition hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary/30"
              aria-label="Increase font size"
            >
              A+
            </button>

            <span className="mx-1 text-muted-foreground">|</span>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* SIDEBAR */}
      <aside className="fixed left-0 top-[80px] bottom-0 z-20 w-[260px] flex flex-col border-r bg-card">
        <nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;

            // ✅ active also works for nested routes
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-primary/25",
                  active
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                ].join(" ")}
              >
                {/* Left indicator (subtle like shadcn) */}
                <span
                  className={[
                    "absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[3px] rounded-r-full transition-all",
                    active
                      ? "bg-primary opacity-100"
                      : "bg-primary/40 opacity-0 group-hover:opacity-100",
                  ].join(" ")}
                />

                {/* Icon with slight hover move */}
                <Icon
                  size={18}
                  className={[
                    "transition-transform duration-200",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground group-hover:translate-x-[1px]",
                  ].join(" ")}
                />

                <span className="transition-transform duration-200 group-hover:translate-x-[1px]">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* USER FOOTER */}
        <div className="mt-auto p-4 border-t bg-muted/10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start gap-2 h-12 rounded-xl"
              >
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10 shadow-lg">
                  <Image
                    src="/avatar.png"
                    alt="User Avatar"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 text-left leading-tight">
                  <p className="text-sm font-semibold">Aditya Pamar</p>
                  <p className="text-xs text-muted-foreground">Premium</p>
                </div>

                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="w-4 h-4 mr-2" />
                Profile
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Shield className="w-4 h-4 mr-2" />
                Security
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-red-600">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="ml-[260px] mt-[80px] min-h-[calc(100vh-80px)] p-6 bg-background">
        {children}
      </main>
    </div>
  );
}
