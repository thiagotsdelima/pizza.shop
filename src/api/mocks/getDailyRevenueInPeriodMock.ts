import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../getDailyRevenueInPeriod'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2025', receipt: 2000 },
    { date: '02/01/2025', receipt: 800 },
    { date: '03/01/2025', receipt: 8000 },
    { date: '04/01/2025', receipt: 3000 },
    { date: '05/01/2025', receipt: 250 },
    { date: '06/01/2025', receipt: 12000 },
    { date: '07/01/2025', receipt: 6547 },
  ])
})
