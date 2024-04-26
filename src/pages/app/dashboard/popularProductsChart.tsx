import { BarChart } from 'lucide-react'
import { Pie, PieChart, ResponsiveContainer } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { product: 'Pepperoni', amount: 30 },
  { product: 'Mussarela', amount: 20 },
  { product: 'Marguerita', amount: 12 },
  { product: 'four cheese', amount: 67 },
  { product: 'Frango', amount: 45 },
]

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pd-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Product popular
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie data={data} dataKey="amount" nameKey="product" />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
