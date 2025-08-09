"use client";

import RoleLayout from "@/components/RoleLayout";

interface PageProps {
  params: { section: string };
}

export default function RoleSectionPage({ params }: PageProps) {
  const title = params.section.charAt(0).toUpperCase() + params.section.slice(1);
  return (
    <RoleLayout pageTitle={title}>
      <p className="text-muted-foreground">Раздел «{title}» находится в разработке.</p>
    </RoleLayout>
  );
}
