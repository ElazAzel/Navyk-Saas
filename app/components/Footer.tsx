"use client";

import React from "react";
import Link from "next/link";
import { 
  UserIcon, 
  AcademicCapIcon, 
  CalendarIcon, 
  TrophyIcon,
  DocumentTextIcon 
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="py-6 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">NAVYK</h3>
            <p className="text-sm text-muted-foreground">
              Платформа для развития навыков и карьеры, соединяющая студентов, работодателей и университеты.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Для студентов</h3>
            <div className="grid grid-cols-2 gap-x-2 gap-y-3">
              <Link 
                href="/students/profile" 
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <UserIcon className="h-4 w-4" />
                <span>Профиль</span>
              </Link>
              <Link 
                href="/students/roadmap" 
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <DocumentTextIcon className="h-4 w-4" />
                <span>Карьерный план</span>
              </Link>
              <Link 
                href="/students/courses" 
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <AcademicCapIcon className="h-4 w-4" />
                <span>Курсы</span>
              </Link>
              <Link 
                href="/students/events" 
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <CalendarIcon className="h-4 w-4" />
                <span>Мероприятия</span>
              </Link>
              <Link 
                href="/students/achievements" 
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <TrophyIcon className="h-4 w-4" />
                <span>Достижения</span>
              </Link>
              <Link 
                href="/students/jobs" 
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Вакансии</span>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Для партнеров</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/employers/dashboard" className="hover:underline">Работодателям</Link></li>
                <li><Link href="/universities/dashboard" className="hover:underline">Университетам</Link></li>
                <li><Link href="/mentors/dashboard" className="hover:underline">Менторам</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Ресурсы</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/policy" className="hover:underline">Политика конфиденциальности</Link></li>
                <li><Link href="/terms" className="hover:underline">Условия использования</Link></li>
                <li><Link href="/faq" className="hover:underline">Часто задаваемые вопросы</Link></li>
                <li><Link href="/contact" className="hover:underline">Связаться с нами</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} NAVYK. Все права защищены.
        </div>
      </div>
    </footer>
  );
} 