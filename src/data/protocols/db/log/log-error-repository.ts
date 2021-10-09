export interface ErrorDetails {
  stack: string
  controller?: string
}

export interface LogErrorRepository {
  logError (error: ErrorDetails): Promise<void>
}
