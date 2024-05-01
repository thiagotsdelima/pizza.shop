import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import { queryClient } from '@/lib/reactQuery'

import { SignIn } from './signIn'

describe('SignIn', () => {
  it('should set default email input valueif email is present on search params', () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <HelmetProvider>
            <MemoryRouter initialEntries={['/sign-in?email=jhondoe@email.com']}>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </MemoryRouter>
          </HelmetProvider>
        )
      },
    })
    const emailInput = wrapper.getByLabelText('your e-mail') as HTMLInputElement
    expect(emailInput.value).toEqual('jhondoe@email.com')
  })
})
