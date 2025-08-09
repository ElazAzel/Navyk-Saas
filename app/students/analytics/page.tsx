"use client";

import RoleLayout from "@/components/RoleLayout";
import RealTimeAnalytics from "@/app/components/analytics/RealTimeAnalytics";

export default function StudentAnalyticsPage() {
  return (
    <RoleLayout pageTitle="Аналитика">
      <RealTimeAnalytics />
    </RoleLayout>
  );
}
