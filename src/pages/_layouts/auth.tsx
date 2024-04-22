import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <h1>registred</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}