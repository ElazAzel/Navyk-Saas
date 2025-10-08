"use client";

import RoleLayout from "@/components/RoleLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { GraduationCap, Search } from "lucide-react";

const cohorts = [
  {
    id: "CO-2024-AI",
    name: "Искусственный интеллект",
    students: 142,
    employmentRate: 68,
    topSkill: "Machine Learning",
  },
  {
    id: "CO-2024-FE",
    name: "Frontend разработка",
    students: 215,
    employmentRate: 74,
    topSkill: "React",
  },
  {
    id: "CO-2024-PM",
    name: "Продуктовый менеджмент",
    students: 96,
    employmentRate: 61,
    topSkill: "Product Discovery",
  },
];

const spotlight = [
  {
    name: "Айдана Ержан",
    avatar: "/avatars/student-4.png",
    program: "Data Science",
    achievements: ["TOP-10 выпускников", "3 научные публикации"],
    employment: "Яндекс, Junior Data Scientist",
  },
  {
    name: "Тимур Калыков",
    avatar: "/avatars/student-5.png",
    program: "Cybersecurity",
    achievements: ["Победитель CTF 2024", "Капитан студенческого клуба"],
    employment: "Kaspi.kz, Security Analyst",
  },
];

export default function UniversityStudentsPage() {
  return (
    <RoleLayout pageTitle="Студенты и выпускники">
      <div className="space-y-6">
        <Card className="border-dashed">
          <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-xl">
                <GraduationCap className="h-5 w-5 text-primary" />
                Отчёты по потокам
              </CardTitle>
              <CardDescription>
                Анализируйте успеваемость и карьерный путь студентов по программам и выпускам
              </CardDescription>
            </div>
            <Button variant="secondary" className="gap-2">
              <Search className="h-4 w-4" />
              Найти студента
            </Button>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {cohorts.map((cohort) => (
              <Card key={cohort.id} className="border bg-muted/30">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-base font-semibold">{cohort.name}</CardTitle>
                  <CardDescription>{cohort.id}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Студентов</p>
                    <p className="text-2xl font-semibold">{cohort.students}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Трудоустроены</p>
                    <Progress value={cohort.employmentRate} />
                    <p className="mt-1 font-medium">{cohort.employmentRate}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Сильнейшая компетенция</p>
                    <Badge variant="outline">{cohort.topSkill}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Истории успеха</CardTitle>
            <CardDescription>
              Лучшие выпускники текущего года и их карьерные достижения
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {spotlight.map((student) => (
              <Card key={student.name} className="border bg-muted/20">
                <CardContent className="flex flex-col gap-4 p-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={student.avatar} alt={student.name} />
                      <AvatarFallback>{student.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">{student.name}</h3>
                      <p className="text-sm text-muted-foreground">{student.program}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {student.achievements.map((achievement) => (
                      <li key={achievement}>• {achievement}</li>
                    ))}
                  </ul>
                  <Badge variant="secondary">{student.employment}</Badge>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </RoleLayout>
  );
}
