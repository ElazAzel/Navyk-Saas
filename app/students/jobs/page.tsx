"use client";

import React from "react";
import RoleLayout from "@/components/RoleLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Building2 } from "lucide-react";

const jobs = [
  {
    id: "frontend-junior",
    title: "Junior Frontend разработчик",
    company: "Astana Hub",
    location: "Астана",
    type: "Полная занятость",
    tags: ["React", "TypeScript", "UI"],
    description: "Работа с компонентами дизайна, внедрение новых функций и поддержка платформы NAVYK.",
  },
  {
    id: "data-analyst",
    title: "Младший аналитик данных",
    company: "Kaspi Tech",
    location: "Алматы",
    type: "Стажировка",
    tags: ["Python", "SQL", "BI"],
    description: "Подготовка аналитических отчетов, автоматизация дэшбордов и поддержка продукта для студентов.",
  },
  {
    id: "product-assistant",
    title: "Ассистент продакта",
    company: "Navyk Labs",
    location: "Удаленно",
    type: "Частичная занятость",
    tags: ["Product", "Research", "Communication"],
    description: "Сбор обратной связи от пользователей, подготовка исследований и участие в запуске новых модулей.",
  },
];

export default function StudentJobsPage() {
  return (
    <RoleLayout pageTitle="Подходящие вакансии">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Подходящие вакансии</h1>
          <p className="text-muted-foreground max-w-2xl">
            Мы подобрали позиции, соответствующие вашим навыкам и карьерным целям. Отслеживайте новые предложения и откликайтесь в один клик.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <Card key={job.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl leading-tight">{job.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-2">
                      <Building2 className="h-4 w-4" />
                      {job.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline">{job.type}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </p>
                <p className="text-sm text-muted-foreground">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <Button variant="outline" size="sm">
                  Подробнее
                </Button>
                <Button size="sm" className="gap-2">
                  <Briefcase className="h-4 w-4" />
                  Откликнуться
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </RoleLayout>
  );
}
