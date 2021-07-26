export declare global {
  export interface Options {
    context?: HTMLElement
    startDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    dayNames?: [string, string, string, string, string, string, string]
  }

  export interface Currently {
    control: 'day' | 'month' | 'year'
    date: number
    month: number
    year: number
  }
}
