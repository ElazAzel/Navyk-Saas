"use client";

import RoleLayout from "@/components/RoleLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, Video, Download } from "lucide-react";

const sessions = [
  {
    id: "SES-1051",
    mentee: "Айгуль Абдикарим",
    topic: "Разбор портфолио и позиционирование",
    date: "12 мая 2024",
    time: "19:00 - 20:00",
    format: "Онлайн",
    status: "Запланирована",
  },
  {
    id: "SES-1046",
    mentee: "Мария Исламова",
    topic: "Подготовка к product case",
    date: "10 мая 2024",
    time: "20:00 - 21:00",
    format: "Онлайн",
    status: "Завершена",
  },
  {
    id: "SES-1042",
    mentee: "Данияр Ораз",
    topic: "Обратная связь по ML-проекту",
    date: "8 мая 2024",
    time: "19:00 - 20:00",
    format: "Офлайн",
    status: "Перенесена",
  },
];

const materials = [
  {
    title: "Шаблон плана развития",
    description: "Формат для фиксации целей и метрик роста",
    updatedAt: "1 мая 2024",
  },
  {
    title: "Список вопросов для mock-интервью",
    description: "Подборка вопросов от менторов NAVYK",
    updatedAt: "25 апреля 2024",
  },
];

export default function MentorSessionsPage() {
  return (
    <RoleLayout pageTitle="Сессии и материалы">
      <div className="space-y-6">
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle>Расписание наставничества</CardTitle>
            <CardDescription>
              Управляйте встречами, записывайте результаты и отправляйте материалы студентам
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {sessions.map((session) => (
              <Card key={session.id} className="border bg-muted/20">
                <CardContent className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      <span>{session.date}</span>
                      <Clock className="ml-3 h-4 w-4" />
                      <span>{session.time}</span>
                    </div>
                    <h3 className="mt-1 text-lg font-semibold">{session.topic}</h3>
                    <p className="text-sm text-muted-foreground">{session.mentee}</p>
                  </div>
                  <div className="flex flex-col items-start gap-2 md:items-end">
                    <Badge variant="secondary">{session.format}</Badge>
                    <Badge>{session.status}</Badge>
                    <div className="flex gap-2">
                      <Button size="sm" className="gap-2">
                        <Video className="h-4 w-4" />
                        Начать звонок
                      </Button>
                      <Button size="sm" variant="outline">
                        Заметки
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Материалы для студентов</CardTitle>
            <CardDescription>
              Делитесь руководствами и чек-листами для самостоятельной работы
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {materials.map((material) => (
              <Card key={material.title} className="border bg-muted/30">
                <CardContent className="space-y-3 p-4">
                  <h3 className="text-lg font-semibold">{material.title}</h3>
                  <p className="text-sm text-muted-foreground">{material.description}</p>
                  <p className="text-xs text-muted-foreground">Обновлено {material.updatedAt}</p>
                  <Button size="sm" variant="secondary" className="gap-2">
                    <Download className="h-4 w-4" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </RoleLayout>
  );
}
