import type { Role } from "../state/roles"

export function hasPermission(
  userRole: Role,
  allowed: Role[]
): boolean {
  return allowed.includes(userRole)
}
