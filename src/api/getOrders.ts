import { api } from '@/lib/axios'

export interface GetOrdersQuery {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export interface GetOdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({
  pageIndex,
  orderID,
  customerName,
  status,
}: GetOrdersQuery) {
  const response = await api.get<GetOdersResponse>('/orders', {
    params: {
      pageIndex,
      orderID,
      customerName,
      status,
    },
  })
  return response.data
}