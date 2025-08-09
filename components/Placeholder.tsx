"use client";

import PageLayout from "@/components/PageLayout";
import React from "react";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description = "Раздел находится в разработке." }: PlaceholderProps) {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p>{description}</p>
    </PageLayout>
  );
}
