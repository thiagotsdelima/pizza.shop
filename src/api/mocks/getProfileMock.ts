import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../getProfile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'john Doe',
      email: 'johndoe@email.com',
      phone: '9287871936',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
