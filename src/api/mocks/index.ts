import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { aprroveOrderMock } from './approveOrderMock'
import { cancelOrderMock } from './cancelOrderMock'
import { deliverOrderMock } from './deliverOrderMock'
import { dispatchOrderMock } from './dispatchOrderMock'
import { getDailyRevenueInPeriodMock } from './getDailyRevenueInPeriodMock'
import { getDayOrdersAmountMock } from './getDayOrdersAmount'
import { getManagedRestaurantMock } from './getManagedRestaurentMock'
import { getMonthCanceledOrdersAmountMock } from './getMonthCanceledOrdersAmount'
import { getMonthOrdersAmountMock } from './getMonthOrdersAmount'
import { getMonthRevenueMock } from './getMonthRevenue'
import { getOrderDetailsMock } from './getOrderDetailsMock'
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
  getOrderDetailsMock,
  aprroveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
