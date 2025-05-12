'use client';
import {
  ArrowLeft,
  ArrowRight,
  CalendarIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

import { format } from 'date-fns';

import { cn } from '@/libraries/utils';
interface CalendarHeaderProps {
  currentMonth: string;
}

export function CalendarHeader({ currentMonth }: CalendarHeaderProps) {
  const [date, setDate] = React.useState<Date>();
  return (
    <div className=" flex items-center justify-between">
      <h2 className="text-2xl font-medium">{currentMonth}</h2>
      <div className="flex items-center gap-2 p-1 bg-[#FAFAFA] rounded-xl">
        <Button className="rounded-lg text-[#736CCE] shadow-xl bg-[#FFFFFF] h-8 w-8">
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          className="rounded-md px-3 py-1 text-sm font-medium text-[#333333] "
        >
          Hoje
        </Button>

        <Button className="rounded-lg text-[#736CCE] shadow-xl bg-[#FFFFFF] h-8 w-8">
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-[240px] justify-between border-none bg-[#FFFFFF] text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <div className="flex items-center gap-2">
                <CalendarIcon
                  width={14}
                  height={7}
                  className="text-[#736CCE]"
                />
                {date ? format(date, 'PPP') : <span>Selecione o periodo</span>}
              </div>
              <ChevronDown
                width={14}
                height={7}
                className="text-[#736CCE] w-3.5 h-2"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
