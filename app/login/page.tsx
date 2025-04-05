"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import Logo from "@/components/Logo";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { Alert, AlertDescription } from "@/app/components/ui/alert";
import Link from "next/link";
import { Eye, EyeOff, User, Building, School, BookOpen, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  // Демо-пользователи для быстрого входа
  const demoUsers = [
    { email: "student@example.com", role: "student", icon: <User className="h-4 w-4" />, label: "Студент" },
    { email: "employer@example.com", role: "employer", icon: <Building className="h-4 w-4" />, label: "Работодатель" },
    { email: "university@example.com", role: "university", icon: <School className="h-4 w-4" />, label: "Университет" },
    { email: "mentor@example.com", role: "mentor", icon: <BookOpen className="h-4 w-4" />, label: "Ментор" },
    { email: "admin@example.com", role: "admin", icon: <ShieldCheck className="h-4 w-4" />, label: "Администратор" }
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      router.push(`/`);
    } catch (err) {
      setError("Неверный логин или пароль");
    } finally {
      setLoading(false);
    }
  };

  const loginAsDemoUser = async (email: string) => {
    setEmail(email);
    setPassword("password");
    setLoading(true);

    try {
      await login(email, "password");
      router.push(`/`);
    } catch (err) {
      setError("Ошибка при входе в демо-режиме");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Logo className="text-2xl" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Вход в систему</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Введите email и пароль для входа в учетную запись
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Вход в аккаунт</CardTitle>
            <CardDescription>
              Для демо-версии используйте один из аккаунтов ниже
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Пароль</Label>
                  <Link 
                    href="/forgot-password" 
                    className="text-xs text-primary hover:underline"
                  >
                    Забыли пароль?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Вход..." : "Войти"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Демо аккаунты
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 w-full">
              {demoUsers.map((user) => (
                <Button
                  key={user.email}
                  variant="outline"
                  size="sm"
                  className="flex items-center justify-start gap-2"
                  onClick={() => loginAsDemoUser(user.email)}
                  disabled={loading}
                >
                  {user.icon}
                  <span>{user.label}</span>
                </Button>
              ))}
            </div>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Нет аккаунта? </span>
              <Link href="/signup" className="text-primary hover:underline">
                Зарегистрироваться
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
} 