import { ChevronDown } from 'lucide-react'

import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuTrigger } from './ui/dropdown-menu'
export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none"
        >
          Pizza Shop
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
