import { http, HttpResponse } from 'msw'

import { DispatchOrderParams } from '../dispatchOrder'

export const dispatchOrderMock = http.patch<DispatchOrderParams, never, never>(
  '/order/:orderId/dispatch',
  async ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }
    return new HttpResponse(null, { status: 204 })
  },
)
