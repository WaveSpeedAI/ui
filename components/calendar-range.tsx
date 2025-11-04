import { Calendar } from "./calendar"
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from "./button"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

interface CalendarRangeProps {
  value: any
  onChange: (date: any) => void
}

export const CalendarRange = ({ value, onChange }: CalendarRangeProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className='relative w-full md:w-[288px] border border-border rounded-lg bg-background flex justify-between items-center overflow-hidden'>
          <Button
            id="date"
            variant={"ghost"}
            className={cn(
              "justify-start text-left font-normal flex-1",
              !value && "text-muted-foreground"
            )}
          >
            {value?.from ? (
              value.to ? (
                <span className='text-sm text-foreground flex-1'>
                  {format(value.from, "LLL dd, y")} -{" "}
                  {format(value.to, "LLL dd, y")}
                </span>
              ) : (
                <span className='text-sm text-foreground flex-1'>
                  {format(value.from, "LLL dd, y")}
                </span>
              )
            ) : (
              <span className='text-sm text-muted-foreground flex-1'>Pick a date</span>
            )}
            <CalendarIcon className="text-muted-foreground" />
          </Button>
          {value && <X className='mr-3 h-4 w-4 shrink-0 opacity-50 cursor-pointer hover:opacity-100 text-muted-foreground' onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onChange(null)
          }} />}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-background" align="start">
        <Calendar
          className="dark:bg-[#282A2F] dark:border-white/20 dark:text-white/60"
          initialFocus
          mode="range"
          defaultMonth={value?.from}
          selected={value}
          onSelect={onChange}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  )
}