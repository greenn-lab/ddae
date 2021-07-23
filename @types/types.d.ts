export interface Options {
  context?: HTMLElement
  startDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  dayNames?: [string, string, string, string, string, string, string]
}

export type ControlUnit = 'year' | 'month'
