import { api } from '@/lib/axios'

export interface GetMonthOrersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrersAmount() {
  const response = await api.get<GetMonthOrersAmountResponse>(
    '/metrics/month-orders-amount',
  )
  return response.data
}
