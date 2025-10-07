"use client";

import React from "react";
import PageLayout from "@/app/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart2, TrendingUp, Target } from "lucide-react";

const analytics = [
  {
    id: "weekly-progress",
    title: "Прогресс за неделю",
    description: "+12% к активности и +2 завершенных задания",
    metric: "+12%",
    icon: <TrendingUp className="h-6 w-6 text-green-500" />,
  },
  {
    id: "competency-index",
    title: "Индекс компетенций",
    description: "Средний уровень навыков — 73/100",
    metric: "73",
    icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
  },
  {
    id: "goal-tracking",
    title: "Цели месяца",
    description: "3 из 5 целей выполнено, добавлено 2 новых",
    metric: "60%",
    icon: <Target className="h-6 w-6 text-amber-500" />,
  }
];

const courseStats = [
  { name: "Курсы", completed: 7, inProgress: 3 },
  { name: "Мероприятия", completed: 5, inProgress: 2 },
  { name: "Вакансии", completed: 1, inProgress: 2 },
];

export default function StudentAnalyticsPage() {
  return (
    <PageLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Личная аналитика</h1>
          <p className="text-muted-foreground max-w-2xl">
            Отслеживайте динамику развития и сравнивайте прогресс с целями. Отчеты обновляются автоматически после каждого действия на платформе.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {analytics.map((item) => (
            <Card key={item.id} className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{item.title}</CardTitle>
                  <Badge variant="secondary">Обновлено</Badge>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-semibold">{item.metric}</p>
                </div>
                {item.icon}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Распределение времени</CardTitle>
            <CardDescription>
              Анализируем, куда уходит ваше внимание: обучение, мероприятия, поиски вакансий.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {courseStats.map((stat) => (
              <div key={stat.name} className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">{stat.name}</p>
                <p className="text-2xl font-bold mt-2">{stat.completed}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  В процессе: {stat.inProgress}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
