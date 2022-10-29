export function getEnv<T> (key: string, defaultValue?: T): T {
  if (process.env[key] != null) {
    return process.env[key] as T
  }
  return defaultValue as T
}
