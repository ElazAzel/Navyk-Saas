"use client";

import RoleLayout from "@/components/RoleLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Shield, UserPlus, Ban } from "lucide-react";

const users = [
  {
    id: "USR-101",
    name: "Александр Студент",
    email: "student@example.com",
    role: "student",
    status: "active",
    lastActive: "15 минут назад",
    avatar: "/avatars/student.png",
  },
  {
    id: "USR-205",
    name: "ТОО Работодатель",
    email: "employer@example.com",
    role: "employer",
    status: "pending",
    lastActive: "1 день назад",
    avatar: "/avatars/employer.png",
  },
  {
    id: "USR-310",
    name: "Университет Example",
    email: "university@example.com",
    role: "university",
    status: "active",
    lastActive: "2 часа назад",
    avatar: "/avatars/university.png",
  },
];

const accessPolicies = [
  {
    title: "Ротация API ключей",
    description: "Каждый ключ автоматически обновляется каждые 30 дней",
  },
  {
    title: "Настройка RBAC",
    description: "Гибкие роли и разрешения для команд университета и компаний",
  },
  {
    title: "Журнал аудита",
    description: "Полная история действий пользователей и изменений прав",
  },
];

export default function AdminUsersPage() {
  return (
    <RoleLayout pageTitle="Управление пользователями">
      <div className="space-y-6">
        <Card className="border-dashed">
          <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle>Пользователи платформы</CardTitle>
              <CardDescription>
                Управляйте доступом, приглашайте коллег и отслеживайте статус команд
              </CardDescription>
            </div>
            <Button className="gap-2">
              <UserPlus className="h-4 w-4" />
              Пригласить пользователя
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {users.map((user) => (
              <Card key={user.id} className="border bg-muted/20">
                <CardContent className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">{user.name}</h3>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <div className="mt-2 flex gap-2 text-xs">
                        <Badge variant="outline">Роль: {user.role}</Badge>
                        <Badge>{user.status === "active" ? "Активен" : "Ожидает"}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 md:items-end">
                    <p className="text-xs text-muted-foreground">Последняя активность: {user.lastActive}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Настроить доступ
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-500">
                        <Ban className="mr-2 h-4 w-4" />
                        Блокировать
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
              <Shield className="h-5 w-5 text-primary" />
              Политики доступа
            </CardTitle>
            <CardDescription>
              Контролируйте безопасность аккаунтов и действия пользователей
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {accessPolicies.map((policy) => (
              <Card key={policy.title} className="border bg-muted/30">
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-base font-semibold">{policy.title}</h3>
                  <p className="text-sm text-muted-foreground">{policy.description}</p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </RoleLayout>
  );
}
