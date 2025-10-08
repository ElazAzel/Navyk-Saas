"use client";

import React from "react";
import RoleLayout from "@/components/RoleLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Clock3 } from "lucide-react";

const roadmap = [
  {
    id: "foundation",
    title: "Базовые навыки",
    description: "Освойте основы программирования и веб-разработки.",
    completed: true,
    progress: 100,
    milestones: [
      "JavaScript и TypeScript",
      "HTML & CSS",
      "Git и командная работа"
    ]
  },
  {
    id: "specialization",
    title: "Углубление в специальность",
    description: "Сфокусируйтесь на выбранном направлении — фронтенд, бэкенд или аналитика данных.",
    completed: false,
    progress: 65,
    milestones: [
      "Современные фреймворки (React, Next.js)",
      "Работа с API и базами данных",
      "Построение UI/UX"
    ]
  },
  {
    id: "career",
    title: "Карьерный рост",
    description: "Подготовьтесь к трудоустройству и собеседованиям.",
    completed: false,
    progress: 35,
    milestones: [
      "Карьерное портфолио",
      "Собеседования и HR-навыки",
      "Профессиональные сертификаты"
    ]
  }
];

export default function StudentRoadmapPage() {
  return (
    <RoleLayout pageTitle="Карьерный план">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Карьерный план</h1>
          <p className="text-muted-foreground max-w-2xl">
            Навык помогает студентам развиваться последовательно: от фундаментальных знаний до подготовки к трудоустройству. Следите за прогрессом и отмечайте завершенные этапы.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {roadmap.map((stage) => (
            <Card key={stage.id} className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>{stage.title}</CardTitle>
                  <Badge variant={stage.completed ? "default" : "outline"}>
                    {stage.completed ? "Завершено" : "В процессе"}
                  </Badge>
                </div>
                <CardDescription>{stage.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  {stage.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : stage.progress > 0 ? (
                    <Clock3 className="h-5 w-5 text-amber-500" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Прогресс</span>
                      <span>{stage.progress}%</span>
                    </div>
                    <Progress value={stage.progress} className="h-2" />
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Ключевые шаги</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {stage.milestones.map((milestone) => (
                      <li key={milestone} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </RoleLayout>
  );
}
