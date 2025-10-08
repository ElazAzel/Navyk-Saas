import { UserRole } from "@/context/auth-context";

type DefinedRole = Exclude<UserRole, null>;

export const ROLE_ROUTE_PREFIX: Record<DefinedRole, string> = {
  student: "students",
  employer: "employers",
  university: "universities",
  mentor: "mentors",
  admin: "admin",
};

const ROLE_SEGMENT_ALIASES: Record<string, DefinedRole> = {
  student: "student",
  students: "student",
  employer: "employer",
  employers: "employer",
  university: "university",
  universities: "university",
  mentor: "mentor",
  mentors: "mentor",
  admin: "admin",
};

export function normalizeRoleSegment(segment: string | undefined): DefinedRole | null {
  if (!segment) return null;
  return ROLE_SEGMENT_ALIASES[segment] ?? null;
}

export function getDashboardPath(role: DefinedRole): string {
  return `/${ROLE_ROUTE_PREFIX[role]}/dashboard`;
}

export function getSettingsPath(role: DefinedRole): string {
  return `/${ROLE_ROUTE_PREFIX[role]}/settings`;
}

export function buildRolePath(role: DefinedRole, suffix: string): string {
  const prefix = ROLE_ROUTE_PREFIX[role];
  return `/${prefix}/${suffix}`.replace(/\/+/g, "/");
}
