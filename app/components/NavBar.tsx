"use client";

import Link from "next/link";
import React from "react";
import Logo from "@/components/Logo";
import ToggleButton from "@/components/ToggleButton";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="border-b z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0">
      <nav className="container px-4 sm:px-6 lg:px-8 flex justify-between items-center h-14">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="font-medium hidden sm:block">NAVYK</span>
        </div>
        
        <div className="hidden md:flex gap-1">
          <Link href="/students/profile" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
            Студентам
          </Link>
          <Link href="/employers/dashboard" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
            Компаниям
          </Link>
          <Link href="/universities/dashboard" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
            Вузам
          </Link>
          <Link href="/students/events" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
            Мероприятия
          </Link>
          <Link href="/students/courses" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
            Курсы
          </Link>
          <Link href="/students/achievements" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
            Достижения
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <ToggleButton />
          <div className="hidden sm:flex sm:gap-2">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Войти
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Регистрация</Button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Открыть меню</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar; 