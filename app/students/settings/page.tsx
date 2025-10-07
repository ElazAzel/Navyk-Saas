"use client";

import React from "react";
import PageLayout from "@/app/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const settings = [
  {
    id: "notifications",
    title: "Уведомления",
    description: "Получайте обновления о курсах, мероприятиях и откликах на вакансии.",
  },
  {
    id: "weekly-report",
    title: "Еженедельный отчет",
    description: "Раз в неделю отправляем сводку по прогрессу на вашу почту.",
  },
  {
    id: "mentors",
    title: "Сессии с менторами",
    description: "Напоминаем о предстоящих консультациях за 24 часа.",
  },
];

export default function StudentSettingsPage() {
  return (
    <PageLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Настройки</h1>
          <p className="text-muted-foreground max-w-2xl">
            Управляйте уведомлениями и персонализацией платформы NAVYK. Эти настройки применяются для вашего аккаунта студента.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Предпочтения</CardTitle>
            <CardDescription>Выберите, какие события для вас наиболее важны.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {settings.map((setting) => (
              <div key={setting.id} className="flex items-start justify-between gap-4">
                <div>
                  <Label htmlFor={setting.id} className="text-base font-medium">
                    {setting.title}
                  </Label>
                  <p className="text-sm text-muted-foreground">{setting.description}</p>
                </div>
                <Switch id={setting.id} defaultChecked className="mt-1" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
