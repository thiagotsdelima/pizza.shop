import { Helmet } from 'react-helmet-async'

import { Input } from '@/components/ui/input'

export function Orders() {
  return (
    <>
      <Helmet title="Orders" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filter</span>
          <Input placeholder="Name of client" className="h-8 w-[320px]" />
        </form>
      </div>
    </>
  )
}
