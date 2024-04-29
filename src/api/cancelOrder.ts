import { api } from '@/lib/axios'

export interface CancelOrderParams {
  orderId: string
}
// uso o pactch por que vou so altera o estado dele, nao vou cancelar o epdido
export async function cancelOrder({ orderId }: CancelOrderParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}
