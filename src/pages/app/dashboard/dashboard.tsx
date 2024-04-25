import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './dayOrdersAmountCard'
import { MonthCanceledOrdersAmountCard } from './monthCanceledOrdersAmountCard'
import { MonthOrdersAmountCard } from './monthOrdersAmountCard'
import { MonthRevenueCard } from './monthRevenueCard'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
      </div>
    </>
  )
}
