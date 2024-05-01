import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../getOrderDetails'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    orderId: params.orderId,
    customer: {
      name: 'john Doe',
      email: 'johndoe@email.com',
      phone: '9287871936',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000, 
    orderItems: [
      {
        id: 'order-items-1',
        priceInCents: 1000,
        product: { name: 'Pizza Pepperoni' },
        quantity: 1,
      },
      {
        id: 'order-items-2',
        priceInCents: 2000,
        product: { name: 'Pizza Maguerita' },
        quantity: 2,
      },
    ],
  })
})
