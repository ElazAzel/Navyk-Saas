"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth, UserRole } from "@/context/auth-context";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  User,
  Building,
  School,
  BookOpen,
  Calendar,
  Award,
  Briefcase,
  Users,
  FileText,
  BarChart3,
  MessageSquare,
  Settings,
  Mail,
  Bell,
  HelpCircle,
  ShieldCheck
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const studentNavItems: NavItem[] = [
  {
    title: "Дашборд",
    href: "/student/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />
  },
  {
    title: "Профиль",
    href: "/student/profile",
    icon: <User className="h-5 w-5" />
  },
  {
    title: "Карьерный план",
    href: "/student/roadmap",
    icon: <FileText className="h-5 w-5" />
  },
  {
    title: "Курсы",
    href: "/student/courses",
    icon: <BookOpen className="h-5 w-5" />
  },
  {
    title: "Мероприятия",
    href: "/student/events",
    icon: <Calendar className="h-5 w-5" />
  },
  {
    title: "Вакансии",
    href: "/student/jobs",
    icon: <Briefcase className="h-5 w-5" />
  },
  {
    title: "Достижения",
    href: "/student/achievements",
    icon: <Award className="h-5 w-5" />
  }
];

const employerNavItems: NavItem[] = [
  {
    title: "Дашборд",
    href: "/employer/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />
  },
  {
    title: "Профиль компании",
    href: "/employer/profile",
    icon: <Building className="h-5 w-5" />
  },
  {
    title: "Управление вакансиями",
    href: "/employer/jobs",
    icon: <Briefcase className="h-5 w-5" />
  },
  {
    title: "Статистика и аналитика",
    href: "/employer/analytics",
    icon: <BarChart3 className="h-5 w-5" />
  },
  {
    title: "Кандидаты",
    href: "/employer/candidates",
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "Мероприятия",
    href: "/employer/events",
    icon: <Calendar className="h-5 w-5" />
  }
];

const universityNavItems: NavItem[] = [
  {
    title: "Дашборд",
    href: "/university/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />
  },
  {
    title: "Профиль университета",
    href: "/university/profile",
    icon: <School className="h-5 w-5" />
  },
  {
    title: "Студенты",
    href: "/university/students",
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "Аналитика",
    href: "/university/analytics",
    icon: <BarChart3 className="h-5 w-5" />
  },
  {
    title: "Мероприятия университета",
    href: "/university/events",
    icon: <Calendar className="h-5 w-5" />
  },
  {
    title: "Партнерские программы",
    href: "/university/partnerships",
    icon: <Building className="h-5 w-5" />
  }
];

const mentorNavItems: NavItem[] = [
  {
    title: "Дашборд",
    href: "/mentor/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />
  },
  {
    title: "Профиль ментора",
    href: "/mentor/profile",
    icon: <User className="h-5 w-5" />
  },
  {
    title: "Мои студенты",
    href: "/mentor/students",
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "Календарь встреч",
    href: "/mentor/meetings",
    icon: <Calendar className="h-5 w-5" />
  },
  {
    title: "Материалы и ресурсы",
    href: "/mentor/resources",
    icon: <FileText className="h-5 w-5" />
  },
  {
    title: "Сообщения",
    href: "/mentor/messages",
    icon: <MessageSquare className="h-5 w-5" />
  }
];

const adminNavItems: NavItem[] = [
  {
    title: "Дашборд",
    href: "/admin/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />
  },
  {
    title: "Пользователи",
    href: "/admin/users",
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "Компании",
    href: "/admin/companies",
    icon: <Building className="h-5 w-5" />
  },
  {
    title: "Университеты",
    href: "/admin/universities",
    icon: <School className="h-5 w-5" />
  },
  {
    title: "Курсы и контент",
    href: "/admin/content",
    icon: <BookOpen className="h-5 w-5" />
  },
  {
    title: "Мероприятия",
    href: "/admin/events",
    icon: <Calendar className="h-5 w-5" />
  },
  {
    title: "Уведомления",
    href: "/admin/notifications",
    icon: <Bell className="h-5 w-5" />
  },
  {
    title: "Безопасность",
    href: "/admin/security",
    icon: <ShieldCheck className="h-5 w-5" />
  },
  {
    title: "Настройки платформы",
    href: "/admin/settings",
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