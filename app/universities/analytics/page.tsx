"use client";

import RoleLayout from "@/components/RoleLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, FileText } from "lucide-react";

const metrics = [
  {
    label: "Трудоустройство выпускников",
    value: "71%",
    change: "+6%",
    description: "Рост по сравнению с прошлым годом",
    trend: "positive",
  },
  {
    label: "Средний рейтинг работодателей",
    value: "4.6 / 5",
    change: "+0.4",
    description: "Оценки стажеров и выпускников",
    trend: "positive",
  },
  {
    label: "Участие студентов в мероприятиях",
    value: "1 245",
    change: "-8%",
    description: "Снижение по сравнению с прошлым кварталом",
    trend: "negative",
  },
];

const programs = [
  {
    name: "Data Science",
    employment: 82,
    satisfaction: 4.8,
    partners: ["Kaspi", "BI Innovations"],
  },
  {
    name: "Software Engineering",
    employment: 76,
    satisfaction: 4.6,
    partners: ["EPAM", "Yandex", "Astana Hub"],
  },
  {
    name: "Product Management",
    employment: 64,
    satisfaction: 4.4,
    partners: ["Jusan", "Chocofamily"],
  },
];

export default function UniversityAnalyticsPage() {
  return (
    <RoleLayout pageTitle="Университетская аналитика">
      <div className="space-y-6">
        <Card className="border-dashed">
          <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-xl">
                <BarChart3 className="h-5 w-5 text-primary" />
                Ключевые показатели
              </CardTitle>
              <CardDescription>
                Мониторинг эффективности образовательных программ и трудоустройства выпускников
              </CardDescription>
            </div>
            <Button variant="secondary" className="gap-2">
              <FileText className="h-4 w-4" />
              Скачать отчёт
            </Button>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {metrics.map((metric) => (
              <Card key={metric.label} className="border bg-muted/30">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-base font-semibold">{metric.label}</CardTitle>
                  <CardDescription>{metric.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-3xl font-bold">{metric.value}</p>
                  <Badge
                    className={
                      metric.trend === "positive"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-700"
                    }
                  >
                    {metric.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Сравнение программ</CardTitle>
            <CardDescription>
              Выберите направления, требующие внимания, и планируйте совместные мероприятия с индустрией
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.name} className="border bg-muted/20">
                <CardContent className="space-y-4 p-4">
                  <div>
                    <h3 className="text-lg font-semibold">{program.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Партнёры: {program.partners.join(", ")}
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Трудоустройство</p>
                      <Progress value={program.employment} />
                      <p className="mt-1 font-medium">{program.employment}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Удовлетворённость студентов</p>
                      <p className="text-lg font-semibold">{program.satisfaction}/5</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    План действий
                    <TrendingUp className="ml-2 h-4 w-4" />
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
