import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodMock } from './getDailyRevenueInPeriodMock'
import { getDayOrdersAmountMock } from './getDayOrdersAmount'
import { getManagedRestaurantMock } from './getManagedRestaurentMock'
import { getMonthCanceledOrdersAmountMock } from './getMonthCanceledOrdersAmount'
import { getMonthOrdersAmountMock } from './getMonthOrdersAmount'
import { getMonthRevenueMock } from './getMonthRevenue'
import { getOrdersMock } from './getOrdersMock'
import { getPopularProductsMock } from './getPopularProductsMock'
import { getProfileMock } from './getProfileMock'
import { registerRestaurantMock } from './registerRestaurantMock'
import { signInMock } from './signInMock'
import { updateProfileMock } from './updateProfileMock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
