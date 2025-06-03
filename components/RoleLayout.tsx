"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import NavBar from "@/app/components/NavBar";
import SideNav from "./SideNav";
import { cn } from "@/lib/utils";
import { AnimatedBackground } from "@/app/components/animations";
import { Bell, Mail, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

interface RoleLayoutProps {
  children: ReactNode;
  showSideNav?: boolean;
  pageTitle?: string;
}

export default function RoleLayout({ 
  children, 
  showSideNav = true,
  pageTitle
}: RoleLayoutProps) {
  const { user, isLoading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [messages, setMessages] = useState(2);
  
  // Проверяем авторизацию и соответствие роли
  useEffect(() => {
    setMounted(true);
    
    if (!isLoading && !user) {
      router.push("/login");
      return;
    }

    if (user && user.role) {
      const currentRole = pathname.split("/")[1]; // например, "student" из "/student/profile"
      if (currentRole !== user.role) {
        // Если пользователь пытается получить доступ к ресурсам другой роли,
        // перенаправляем его на главную страницу его роли
        router.push(`/${user.role}/dashboard`);
      }
    }
  }, [user, isLoading, pathname, router]);

  if (!mounted || isLoading) {
    // Показываем анимированную загрузку
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <AnimatedBackground />
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <div className="absolute inset-2 border-4 border-secondary border-b-transparent rounded-full animate-spin animate-reverse" />
        </div>
        <p className="mt-4 text-muted-foreground animate-pulse">Загрузка...</p>
      </div>
    );
  }

  if (!user) return null; // Пользователь будет перенаправлен на страницу входа

  // Эффект подсветки для текущей страницы
  const pageBorders = {
    dashboard: "border-l-primary",
    profile: "border-l-secondary",
    events: "border-l-accent",
    courses: "border-l-green-500",
    achievements: "border-l-amber-500",
    jobs: "border-l-indigo-500",
    analytics: "border-l-cyan-500",
    settings: "border-l-gray-500",
  };
  
  // Определяем текущий раздел для подсветки
  const currentSection = pathname.split("/")[2] || "dashboard";
  const borderClass = pageBorders[currentSection as keyof typeof pageBorders] || "border-l-primary";
  
  return (
    <div className={cn(
      "min-h-screen bg-background transition-colors duration-300",
      `${borderClass} border-l-4`
    )}>
      <AnimatedBackground />
      
      {showSideNav ? (
        <>
          <SideNav />
          <div className={cn(
            "ml-64 min-h-screen"
          )}>
            <NavBar />
            
            <div className="sticky top-14 z-20 bg-background/80 backdrop-blur-sm border-b">
              <div className="container mx-auto p-4 flex items-center justify-between">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center space-x-4"
                >
                  <h1 className="text-2xl font-semibold tracking-tight">
                    {pageTitle || (() => {
                      const last = pathname.split("/").pop() ?? "";
                      return last ? last.charAt(0).toUpperCase() + last.slice(1) : "Дашборд";
                    })()}
                  </h1>
                </motion.div>
                
                <div className="flex items-center space-x-2">
                  <div className="relative w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Поиск..." 
                      className="pl-8 bg-muted/50 border-none h-9" 
                    />
                  </div>
                  
                  <Button size="icon" variant="ghost" className="relative">
                    <Mail className="h-5 w-5" />
                    {messages > 0 && (
                      <Badge 
                        variant="destructive" 
                        className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                      >
                        {messages}
                      </Badge>
                    )}
                  </Button>
                  
                  <Button size="icon" variant="ghost" className="relative">
                    <Bell className="h-5 w-5" />
                    {notifications > 0 && (
                      <Badge 
                        variant="destructive" 
                        className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                      >
                        {notifications}
                      </Badge>
                    )}
                  </Button>
                </div>
              </div>
            </div>
            
            <motion.main 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="container mx-auto p-4 sm:p-6 lg:p-8"
            >
              {children}
            </motion.main>
          </div>
        </>
      ) : (
        <>
          <NavBar />
          <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto p-4 sm:p-6 lg:p-8"
          >
            {children}
          </motion.main>
        </>
      )}
    </div>
  );
}