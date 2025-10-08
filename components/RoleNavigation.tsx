"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth, UserRole } from "@/context/auth-context";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  User,
  BookOpen,
  Calendar,
  Award,
  Briefcase,
  Users,
  FileText,
  BarChart3,
  Settings
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const studentNavItems: NavItem[] = [
  {
    title: "Дашборд",
    href: ROUTES.STUDENT.DASHBOARD,
    icon: <LayoutDashboard className="h-5 w-5" />
  },
  {
    title: "Профиль",
    href: ROUTES.STUDENT.PROFILE,
    icon: <User className="h-5 w-5" />
  },
  {
    title: "Карьерный план",
    href: ROUTES.STUDENT.ROADMAP,
    icon: <FileText className="h-5 w-5" />
  },
  {
    title: "Курсы",
    href: ROUTES.STUDENT.COURSES,
    icon: <BookOpen className="h-5 w-5" />
  },
  {
    title: "Вакансии",
    href: ROUTES.STUDENT.JOBS,
    icon: <Briefcase className="h-5 w-5" />
  },
  {
    title: "Мероприятия",
    href: ROUTES.STUDENT.EVENTS,
    icon: <Calendar className="h-5 w-5" />
  },
  {
    title: "Достижения",
    href: ROUTES.STUDENT.ACHIEVEMENTS,
    icon: <Award className="h-5 w-5" />
  }
];

const employerNavItems: NavItem[] = [
  {
    title: "Дашборд",
    href: ROUTES.EMPLOYER.DASHBOARD,
    icon: <LayoutDashboard className="h-5 w-5" />
  },
  {
    title: "Вакансии",
    href: ROUTES.EMPLOYER.JOBS,
    icon: <Briefcase className="h-5 w-5" />
  },
  {
    title: "Кандидаты",
    href: ROUTES.EMPLOYER.CANDIDATES,
    icon: <Users className="h-5 w-5" />
  }
];

const universityNavItems: NavItem[] = [
  {
    title: "Дашборд",
    href: ROUTES.UNIVERSITY.DASHBOARD,
    icon: <LayoutDashboard className="h-5 w-5" />
  },
  {
    title: "Студенты",
    href: ROUTES.UNIVERSITY.STUDENTS,
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "Аналитика",
    href: ROUTES.UNIVERSITY.ANALYTICS,
    icon: <BarChart3 className="h-5 w-5" />
  }
];

const mentorNavItems: NavItem[] = [
  {
    title: "Дашборд",
    href: ROUTES.MENTOR.DASHBOARD,
    icon: <LayoutDashboard className="h-5 w-5" />
  },
  {
    title: "Мои студенты",
    href: ROUTES.MENTOR.STUDENTS,
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "Сессии",
    href: ROUTES.MENTOR.SESSIONS,
    icon: <Calendar className="h-5 w-5" />
  }
];

const adminNavItems: NavItem[] = [
  {
    title: "Дашборд",
    href: ROUTES.ADMIN.DASHBOARD,
    icon: <LayoutDashboard className="h-5 w-5" />
  },
  {
    title: "Пользователи",
    href: ROUTES.ADMIN.USERS,
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "Настройки",
    href: ROUTES.ADMIN.SETTINGS,
    icon: <Settings className="h-5 w-5" />
  }
];

const roleNavigationMap: Record<NonNullable<UserRole>, NavItem[]> = {
  student: studentNavItems,
  employer: employerNavItems,
  university: universityNavItems,
  mentor: mentorNavItems,
  admin: adminNavItems
};

interface RoleNavigationProps {
  className?: string;
  vertical?: boolean;
}

export default function RoleNavigation({ 
  className, 
  vertical = false 
}: RoleNavigationProps) {
  const { user } = useAuth();
  const pathname = usePathname();
  
  if (!user || !user.role) return null;
  
  const navItems = roleNavigationMap[user.role as NonNullable<UserRole>] || [];
  
  if (vertical) {
    return (
      <div className={cn("space-y-1", className)}>
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center py-2 px-3 text-sm rounded-md w-full hover:bg-accent hover:text-accent-foreground transition-colors",
                isActive 
                  ? "bg-accent text-accent-foreground font-medium" 
                  : "text-muted-foreground"
              )}
            >
              <div className={cn(
                "mr-3",
                isActive ? "text-primary" : "text-muted-foreground"
              )}>
                {item.icon}
              </div>
              {item.title}
            </Link>
          );
        })}
      </div>
    );
  }
  
  return (
    <nav className={cn("flex space-x-4", className)}>
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <div className="mr-2">
              {item.icon}
            </div>
            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
} 