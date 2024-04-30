import { render } from '@testing-library/react'

import { OrderStatus } from './orderStatus'

describe('Order Status', () => {
  it('should display the right text when order status pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    const statusText = wrapper.getByText('Pending')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })

  it('should display the right text when order status canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)

    const statusText = wrapper.getByText('Canceled')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })
  it('should display the right text when order status delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)

    const statusText = wrapper.getByText('delivering')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })
  it('should display the right text when order status processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)

    const statusText = wrapper.getByText('In delivered')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })
  it('should display the right text when order status delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)

    const statusText = wrapper.getByText('Ongoing')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})
