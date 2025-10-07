"use client";

import React from "react";
import PageLayout from "@/app/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Award, GraduationCap, Briefcase } from "lucide-react";

const activityFeed = [
  {
    id: "course-finished",
    title: "Завершен курс «React для начинающих»",
    description: "Получено 240 баллов и сертификат",
    icon: <GraduationCap className="h-5 w-5" />,
    date: "12 мая",
    badge: "Курс"
  },
  {
    id: "event",
    title: "Участие в воркшопе NAVYK Career Day",
    description: "Выступление ментора Kaspi о построении карьеры",
    icon: <CalendarDays className="h-5 w-5" />,
    date: "8 мая",
    badge: "Мероприятие"
  },
  {
    id: "achievement",
    title: "Получено достижение \"Tech Explorer\"",
    description: "3 проекта защищены подряд",
    icon: <Award className="h-5 w-5" />,
    date: "6 мая",
    badge: "Достижение"
  },
  {
    id: "job-apply",
    title: "Отклик на стажировку в Alem School",
    description: "Статус: приглашение на техническое интервью",
    icon: <Briefcase className="h-5 w-5" />,
    date: "3 мая",
    badge: "Вакансия"
  }
];

export default function StudentActivityPage() {
  return (
    <PageLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Активность</h1>
          <p className="text-muted-foreground max-w-2xl">
            История ваших достижений, мероприятий и карьерных шагов. Используйте ленту активности, чтобы анализировать прогресс и готовиться к следующему шагу.
          </p>
        </div>

        <div className="grid gap-4">
          {activityFeed.map((item) => (
            <Card key={item.id} className="border-l-4 border-primary">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="mt-1 text-primary">{item.icon}</div>
                <div className="flex-1 space-y-1">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
                <Badge variant="secondary">{item.badge}</Badge>
              </CardHeader>
              <CardContent className="pt-0 pl-14 text-sm text-muted-foreground">
                Обновлено {item.date}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
