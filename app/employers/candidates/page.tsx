"use client";

import RoleLayout from "@/components/RoleLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

const candidates = [
  {
    id: 1,
    name: "Алмас Сериков",
    avatar: "/avatars/student.png",
    speciality: "Frontend Developer",
    score: 92,
    skills: ["React", "TypeScript", "Next.js"],
    status: "На интервью",
  },
  {
    id: 2,
    name: "Айша Мухамеджан",
    avatar: "/avatars/student-2.png",
    speciality: "Data Scientist",
    score: 88,
    skills: ["Python", "TensorFlow", "SQL"],
    status: "Рассматривается",
  },
  {
    id: 3,
    name: "Нурсултан Кенжебаев",
    avatar: "/avatars/student-3.png",
    speciality: "Product Manager",
    score: 79,
    skills: ["Product Discovery", "UX", "Analytics"],
    status: "Новый",
  },
];

const recommendations = [
  {
    title: "Опубликуйте карьерные истории",
    description: "Вакансии с рассказами сотрудников получают на 34% больше откликов.",
    impact: "+34% откликов",
  },
  {
    title: "Добавьте проверку навыков",
    description: "Попросите кандидатов пройти короткий тест, чтобы быстрее отбирать лучших.",
    impact: "-20% времени найма",
  },
];

export default function EmployerCandidatesPage() {
  return (
    <RoleLayout pageTitle="Кандидаты и отклики">
      <div className="space-y-6">
        <Card className="border-dashed">
          <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle>Талант-пул NAVYK</CardTitle>
              <CardDescription>
                Следите за этапами, просматривайте профили и отправляйте приглашения подходящим кандидатам
              </CardDescription>
            </div>
            <Button variant="secondary">
              Экспортировать отчёт
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {candidates.map((candidate) => (
              <Card key={candidate.id} className="border bg-muted/20">
                <CardContent className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 border">
                      <AvatarImage src={candidate.avatar} alt={candidate.name} />
                      <AvatarFallback>{candidate.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{candidate.name}</h3>
                        <Badge>{candidate.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{candidate.speciality}</p>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs">
                        {candidate.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-full space-y-2 md:w-56">
                    <p className="text-sm text-muted-foreground">Совпадение с вакансией</p>
                    <Progress value={candidate.score} />
                    <p className="text-sm font-medium">{candidate.score}%</p>
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        Пригласить
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Профиль
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
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Улучшения подбора
            </CardTitle>
            <CardDescription>
              Рекомендации платформы NAVYK по повышению эффективности найма
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {recommendations.map((item) => (
              <Card key={item.title} className="border bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-base font-semibold">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <div className="text-sm font-medium text-primary">{item.impact}</div>
                  <Button size="sm" variant="ghost" className="text-primary">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Применить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="border border-dashed bg-primary/5">
          <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary">Новый модуль</p>
              <h3 className="text-xl font-semibold">Автоматические письма кандидатам</h3>
              <p className="text-muted-foreground">
                Настройте цепочку писем для кандидатов на каждом этапе и экономьте до 4 часов в неделю
              </p>
            </div>
            <Button size="lg" className="gap-2">
              Настроить сейчас
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </RoleLayout>
  );
}
