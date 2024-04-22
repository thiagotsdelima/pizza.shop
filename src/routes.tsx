import { createBrowserRouter } from 'react-router-dom'
import { Dashboarde } from './pages/app/dashboard'
import { SignIn } from './pages/auth/signIn'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { SignUp } from './pages/auth/signUp'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Dashboarde /> }
    ]
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/signIn", element: <SignIn /> },
      { path: "/signUp", element: <SignUp /> }
    ]
  },
])