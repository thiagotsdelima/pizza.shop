import { http, HttpResponse } from 'msw'

import { GetOrdersResponse } from '../getOrders'

type Orders = GetOrdersResponse['orders']
type OrdersStatus = GetOrdersResponse['orders'][number]['status']

const statuses: OrdersStatus[] = [
  'pending',
  'processing',
  'canceled',
  'delivered',
  'delivering',
]

const orders: Orders = Array.from({ length: 60 }).map((_, i) => {
  return {
    orderId: `order-${1 + 1}`,
    customerName: `Customer ${i + 1}`,
    createdAt: new Date().toISOString(),
    total: 2400,
    status: statuses[i % 5],
  }
})

export const getOrdersMock = http.get<never, never, GetOrdersResponse>(
  '/orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const pageIndex = searchParams.get('pageIndex')
      ? Number(searchParams.get('pageIndex'))
      : 0

    const customerName = searchParams.get('customerName')
    const orderId = searchParams.get('orderId')
    const status = searchParams.get('status')

    let filteredOrders = orders

    if (customerName) {
      filteredOrders = filteredOrders.filter((order) =>
        order.customerName.includes(customerName),
      )
    }
    if (orderId) {
      filteredOrders = filteredOrders.filter((order) =>
        order.orderId.includes(orderId),
      )
    }
    if (status) {
      filteredOrders = filteredOrders.filter((order) => order.status === status)
    }

    const paginatedOrders = filteredOrders.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    )

    return HttpResponse.json({
      orders: paginatedOrders,
      meta: {
        pageIndex,
        perpage: 10,
        totalCount: filteredOrders.length,
      },
    })
  },
)
