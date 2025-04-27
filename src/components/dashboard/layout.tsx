"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Home,
  CreditCard,
  BarChart3,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: CreditCard, label: "Transactions", href: "/transactions" },
    { icon: BarChart3, label: "Analytics", href: "/analytics" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <div className="flex h-screen bg-brand-light">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-0"
        } bg-white shadow-md transition-all duration-300`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-bold text-brand-primary">Fintech</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-brand-primary hover:bg-brand-light"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <Separator className="bg-brand-muted/20" />
          <nav className="flex-1 space-y-1 p-4">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start text-brand-primary hover:bg-brand-light hover:text-brand-secondary"
                onClick={() => router.push(item.href)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>
          <Separator className="bg-brand-muted/20" />
          <div className="p-4">
            <div className="flex items-center space-x-4">
              <Avatar className="border-2 border-brand-secondary">
                <AvatarImage src="/avatars/01.png" />
                <AvatarFallback className="bg-brand-secondary text-white">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium text-brand-primary">John Doe</p>
                <p className="text-xs text-brand-muted">john@example.com</p>
              </div>
              <Button variant="ghost" size="icon" className="text-brand-primary hover:bg-brand-light hover:text-brand-secondary">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
} 