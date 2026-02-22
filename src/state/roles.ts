export type Role =
  | "Admin"
  | "Manager"
  | "Operator"
  | "Viewer"

export type User = {
  id: string
  name: string
  role: Role
}

export const defaultUser: User = {
  id: "u1",
  name: "Admin User",
  role: "Admin"
}
