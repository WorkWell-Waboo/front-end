'use client';
import { CalendarGrid } from '@/components/contentCalendar/calendarGrid';
import { CalendarHeader } from '@/components/contentCalendar/calendarHeader';
import { CalendarStats } from '@/components/contentCalendar/calendarStats';
import SearchBar from '@/components/searchbar';
import type { CalendarDay } from '@/libraries/utils';
import React from 'react';

import type { Appointment } from '@/app/(application)/specialist/calendar/page';
import { generateCalendarDays } from '@/libraries/utils';

const calendarDays = generateCalendarDays();
interface CalendarContainerProps {
  currentMonth: string;
  calendarDays: CalendarDay[];
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
  onDateSelect: (date: Date | undefined) => void;
  onAppointmentClick: (time: string, name: string, location: string) => void;
}

export default function CalendarContainer({
  currentMonth,
  calendarDays,
  onPrevMonth,
  onNextMonth,
  onToday,
  onDateSelect,
  onAppointmentClick,
}: CalendarContainerProps) {
  return (
    <>
      <SearchBar inputDisabled />
      <CalendarStats />
      <div className="rounded-lg bg-white pl-6 pr-8 py-4 shadow-sm">
        <CalendarHeader
          currentMonth={currentMonth}
          onPrevMonth={onPrevMonth}
          onNextMonth={onNextMonth}
          onToday={onToday}
          onDateSelect={onDateSelect}
        />
        <CalendarGrid
          days={calendarDays}
          onAppointmentClick={onAppointmentClick}
        />
      </div>
    </>
  );
}
