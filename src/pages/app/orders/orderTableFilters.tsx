import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function OrederTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filter:</span>
      <Input placeholder="ID of order" className="h-8 w-auto" />
      <Input placeholder="Name of client" className="h-8 w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All status</SelectItem>
          <SelectItem value="pending">Pendind</SelectItem>
          <SelectItem value="canceled">Canceled</SelectItem>
          <SelectItem value="processing">In preparation</SelectItem>
          <SelectItem value="delivering">In delivery</SelectItem>
          <SelectItem value="delivered">delivered</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 h-4 w-4" />
        Filter result
      </Button>
      <Button type="button" variant="outline" size="xs">
        <X className="mr-2 h-4 w-4" />
        Remove filter
      </Button>
    </form>
  )
}
