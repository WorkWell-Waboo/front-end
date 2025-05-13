'use client';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ArrowLeft, ArrowRight, CalendarIcon, ChevronDown } from 'lucide-react';
import React from 'react';

import { format } from 'date-fns';

import { cn } from '@/libraries/utils';

interface CalendarHeaderProps {
  currentMonth: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
  onDateSelect: (date: Date | undefined) => void;
}

export function CalendarHeader({
  currentMonth,
  onPrevMonth,
  onNextMonth,
  onToday,
  onDateSelect,
}: CalendarHeaderProps) {
  const [date, setDate] = React.useState<Date>();

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    onDateSelect(newDate);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-medium">{currentMonth}</h2>
      <div className="flex items-center gap-2 p-1 bg-[#FAFAFA] rounded-xl">
        <Button
          className="rounded-lg text-[#736CCE] shadow-xl bg-[#FFFFFF] h-8 w-8"
          onClick={onPrevMonth}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          className="rounded-md px-3 py-1 text-sm font-medium text-[#333333]"
          onClick={onToday}
        >
          Hoje
        </Button>

        <Button
          className="rounded-lg text-[#736CCE] shadow-xl bg-[#FFFFFF] h-8 w-8"
          onClick={onNextMonth}
        >
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
              onSelect={handleDateChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
