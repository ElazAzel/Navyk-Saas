import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { type, input } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenAI API key is missing" },
      { status: 500 }
    );
  }

  if (!input || !type) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }

  const prompts: Record<string, string> = {
    mentor: `Составь план обучения для навыка: ${input}`,
    job: `Напиши подробное описание вакансии по ключевым словам: ${input}`,
    chat: `Ответь на вопрос студента: ${input}`,
  };

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompts[type] || input }],
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    return NextResponse.json({ error: err }, { status: 500 });
  }

  const data = await response.json();
  const result = data.choices?.[0]?.message?.content || "";
  return NextResponse.json({ result });
}
