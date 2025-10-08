"use client";

import RoleLayout from "@/components/RoleLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save, RefreshCw } from "lucide-react";

const toggles = [
  {
    id: "feature-flags",
    title: "Новые функции",
    description: "Включить ранний доступ к модулям AI-рекомендаций",
    defaultChecked: true,
  },
  {
    id: "security-alerts",
    title: "Уведомления безопасности",
    description: "Получать письма обо всех подозрительных входах",
    defaultChecked: true,
  },
  {
    id: "weekly-report",
    title: "Еженедельный отчёт",
    description: "Автоматически отправлять дайджест метрик руководству",
    defaultChecked: false,
  },
];

export default function AdminSettingsPage() {
  return (
    <RoleLayout pageTitle="Настройки платформы">
      <div className="space-y-6">
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle>Основные параметры</CardTitle>
            <CardDescription>
              Управляйте глобальными настройками безопасности и уведомлений
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="companyName">Название организации</Label>
                <Input id="companyName" defaultValue="NAVYK" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supportEmail">Почта поддержки</Label>
                <Input id="supportEmail" type="email" defaultValue="support@navyk.kz" />
              </div>
            </div>
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Сохранить изменения
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Уведомления и безопасность</CardTitle>
            <CardDescription>
              Настройте каналы оповещений и уровень контроля безопасности
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {toggles.map((toggle) => (
              <div key={toggle.id} className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium">{toggle.title}</p>
                  <p className="text-sm text-muted-foreground">{toggle.description}</p>
                </div>
                <Switch defaultChecked={toggle.defaultChecked} id={toggle.id} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border border-dashed bg-muted/30">
          <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Инфраструктура</p>
              <h3 className="text-xl font-semibold">Перезапустить воркеры рекомендаций</h3>
              <p className="text-muted-foreground">
                Используйте при обновлении моделей или конфигурации интеграций
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Запустить перезагрузку
            </Button>
          </CardContent>
        </Card>
      </div>
    </RoleLayout>
  );
}
