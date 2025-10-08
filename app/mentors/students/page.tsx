"use client";

import RoleLayout from "@/components/RoleLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { MessageCircle, Target } from "lucide-react";

const mentees = [
  {
    id: 1,
    name: "Айгуль Абдикарим",
    avatar: "/avatars/student-6.png",
    track: "Frontend",
    progress: 72,
    nextMilestone: "Подготовить портфолио",
    focus: ["React", "UI/UX", "Собеседования"],
  },
  {
    id: 2,
    name: "Данияр Ораз",
    avatar: "/avatars/student-7.png",
    track: "Data Science",
    progress: 58,
    nextMilestone: "Кейс по прогнозированию",
    focus: ["ML", "Python", "SQL"],
  },
  {
    id: 3,
    name: "Мария Исламова",
    avatar: "/avatars/student-8.png",
    track: "Product Management",
    progress: 81,
    nextMilestone: "MVP и метрики",
    focus: ["Product Discovery", "JTBD", "Аналитика"],
  },
];

const goals = [
  {
    title: "Подготовить 3 кейса для интервью",
    deadline: "20 июня",
    owner: "Айгуль",
  },
  {
    title: "Провести mock-интервью",
    deadline: "15 июня",
    owner: "Мария",
  },
  {
    title: "Разработать ML-проект",
    deadline: "30 июня",
    owner: "Данияр",
  },
];

export default function MentorStudentsPage() {
  return (
    <RoleLayout pageTitle="Мои студенты">
      <div className="space-y-6">
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle>Активные наставничества</CardTitle>
            <CardDescription>
              Отслеживайте прогресс, помечайте ключевые цели и поддерживайте регулярный контакт
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {mentees.map((mentee) => (
              <Card key={mentee.id} className="border bg-muted/20">
                <CardContent className="space-y-4 p-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={mentee.avatar} alt={mentee.name} />
                      <AvatarFallback>{mentee.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{mentee.name}</h3>
                      <Badge variant="outline">{mentee.track}</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Прогресс программы</p>
                    <Progress value={mentee.progress} />
                    <p className="mt-1 text-sm font-medium">{mentee.progress}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Следующий шаг</p>
                    <p className="text-sm font-medium">{mentee.nextMilestone}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {mentee.focus.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      Прогресс
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Связаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Активные цели студентов
            </CardTitle>
            <CardDescription>
              Приоритизируйте наставнические сессии и отмечайте выполненные этапы
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {goals.map((goal) => (
              <Card key={goal.title} className="border bg-muted/30">
                <CardContent className="space-y-3 p-4">
                  <p className="text-sm text-muted-foreground">До {goal.deadline}</p>
                  <h3 className="text-lg font-semibold">{goal.title}</h3>
                  <Badge variant="secondary">Ответственный: {goal.owner}</Badge>
                  <Button size="sm" variant="outline" className="gap-2">
                    Отметить выполненной
                    <MessageCircle className="h-4 w-4" />
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
