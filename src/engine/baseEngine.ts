export type EngineResult<T> = {
  status: "success" | "warning" | "error"
  data: T
  messages: string[]
}

export function createEngineResult<T>(
  status: "success" | "warning" | "error",
  data: T,
  messages: string[] = []
): EngineResult<T> {
  return { status, data, messages }
}
