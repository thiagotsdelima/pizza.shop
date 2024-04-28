import { api } from '@/lib/axios'

export interface GetOrdersQuery {
  pageIndex?: number | null
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

export async function getOrders({ pageIndex }: GetOrdersQuery) {
  const response = await api.get<GetOdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  })
  return response.data
}
