"use client";

import RoleLayout from "@/components/RoleLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Plus } from "lucide-react";

const jobs = [
  {
    id: "JOB-2411",
    title: "Frontend Developer",
    type: "Полная занятость",
    location: "Алматы",
    applicants: 27,
    status: "Активна",
    publishedAt: "14 мая 2024",
  },
  {
    id: "JOB-2404",
    title: "Data Analyst",
    type: "Гибрид",
    location: "Астана",
    applicants: 18,
    status: "На модерации",
    publishedAt: "2 мая 2024",
  },
  {
    id: "JOB-2397",
    title: "Junior QA Engineer",
    type: "Стажировка",
    location: "Удаленно",
    applicants: 45,
    status: "Активна",
    publishedAt: "18 апреля 2024",
  },
];

const pipelines = [
  {
    stage: "Новые отклики",
    candidates: 16,
    change: "+5",
    status: "positive",
  },
  {
    stage: "Собеседования",
    candidates: 9,
    change: "-1",
    status: "negative",
  },
  {
    stage: "Предложения",
    candidates: 3,
    change: "+1",
    status: "positive",
  },
];

export default function EmployerJobsPage() {
  return (
    <RoleLayout pageTitle="Управление вакансиями">
      <div className="space-y-6">
        <Card className="border-dashed">
          <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Briefcase className="h-5 w-5 text-primary" />
                Ваши открытые позиции
              </CardTitle>
              <CardDescription>
                Управляйте статусами, отслеживайте отклики и закрывайте вакансии быстрее
              </CardDescription>
            </div>
            <Button size="lg">
              <Plus className="mr-2 h-4 w-4" />
              Создать вакансию
            </Button>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {jobs.map((job) => (
              <Card key={job.id} className="border bg-muted/30">
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">{job.title}</CardTitle>
                    <Badge variant={job.status === "Активна" ? "default" : "secondary"}>{job.status}</Badge>
                  </div>
                  <CardDescription>{job.id}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Формат</p>
                      <p className="font-medium">{job.type}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Локация</p>
                      <p className="font-medium">{job.location}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Отклики</p>
                      <p className="flex items-center gap-1 font-medium">
                        <Users className="h-4 w-4 text-primary" />
                        {job.applicants}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Опубликована</p>
                      <p className="font-medium">{job.publishedAt}</p>
                    </div>
                  </div>
                  <Button variant="secondary" className="w-full">
                    Просмотреть кандидатов
                  </Button>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          {pipelines.map((pipeline) => (
            <Card key={pipeline.stage}>
              <CardHeader>
                <CardTitle className="text-base font-semibold">{pipeline.stage}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <div className="text-3xl font-bold">{pipeline.candidates}</div>
                <p
                  className={`text-sm ${
                    pipeline.status === "positive"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {pipeline.change} за неделю
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </RoleLayout>
  );
}
