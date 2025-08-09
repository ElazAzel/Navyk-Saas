"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

async function generate(type: string, input: string): Promise<string> {
  const res = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, input }),
  });
  if (!res.ok) {
    return "Ошибка генерации";
  }
  const data = await res.json();
  return data.result as string;
}

export default function AiDemo() {
  const [skill, setSkill] = useState("");
  const [plan, setPlan] = useState("");
  const [keywords, setKeywords] = useState("");
  const [job, setJob] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <section className="mt-16 space-y-4">
      <h2 className="text-2xl font-bold text-center">AI возможности</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>План обучения</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>AI-помощник ментора</DialogTitle>
            </DialogHeader>
            <Input
              placeholder="Введите навык"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />
            <DialogFooter>
              <Button
                onClick={async () => setPlan(await generate("mentor", skill))}
              >
                Сгенерировать
              </Button>
            </DialogFooter>
            {plan && <p className="mt-4 whitespace-pre-wrap">{plan}</p>}
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Описание вакансии</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Генератор описаний вакансий</DialogTitle>
            </DialogHeader>
            <Input
              placeholder="Ключевые слова"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
            <DialogFooter>
              <Button
                onClick={async () => setJob(await generate("job", keywords))}
              >
                Сгенерировать
              </Button>
            </DialogFooter>
            {job && <p className="mt-4 whitespace-pre-wrap">{job}</p>}
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button>AI-чат</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>AI-чат для студентов</DialogTitle>
            </DialogHeader>
            <Input
              placeholder="Ваш вопрос"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <DialogFooter>
              <Button
                onClick={async () => setAnswer(await generate("chat", question))}
              >
                Спросить
              </Button>
            </DialogFooter>
            {answer && <p className="mt-4 whitespace-pre-wrap">{answer}</p>}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

