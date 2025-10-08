"use client";

import React from "react";
import RoleLayout from "@/components/RoleLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    category: "Технические навыки",
    items: [
      { name: "JavaScript", level: 80, trend: "+5%" },
      { name: "React", level: 74, trend: "+8%" },
      { name: "Node.js", level: 52, trend: "+3%" },
    ],
  },
  {
    category: "Аналитика и данные",
    items: [
      { name: "SQL", level: 68, trend: "+4%" },
      { name: "Data Visualization", level: 60, trend: "+2%" },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Коммуникация", level: 82, trend: "+6%" },
      { name: "Работа в команде", level: 88, trend: "+3%" },
      { name: "Лидерство", level: 54, trend: "+2%" },
    ],
  },
];

export default function StudentSkillsPage() {
  return (
    <RoleLayout pageTitle="Навыки и прогресс">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Навыки и прогресс</h1>
          <p className="text-muted-foreground max-w-2xl">
            Аналитика по вашим компетенциям. Усиливайте сильные стороны и закрывайте пробелы, чтобы увеличить рейтинг и привлекательность для работодателей.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category) => (
            <Card key={category.category} className="flex flex-col">
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{skill.name}</p>
                      <Badge variant="outline">{skill.trend}</Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-xs text-muted-foreground">Уровень {skill.level}/100</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </RoleLayout>
  );
}
