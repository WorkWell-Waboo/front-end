'use client';

import { CalendarGrid } from '@/components/contentCalendar/calendarGrid';
import { CalendarHeader } from '@/components/contentCalendar/calendarHeader';
import { CalendarStats } from '@/components/contentCalendar/calendarStats';
import SearchBar from '@/components/searchbar';
import { generateCalendarDays } from '@/libraries/utils';
import { useState } from 'react';
function SpecialistCalendarPage() {
  const [currentMonth] = useState('Janeiro de 2025');
  const days = generateCalendarDays();
  return (
    <main className="px-10">
      <SearchBar inputDisabled={true} />
      <CalendarStats />
      <div className="rounded-lg bg-white px-6 py-4 shadow-sm">
        <CalendarHeader currentMonth={currentMonth} />
        <CalendarGrid days={days} />
      </div>
    </main>
  );
}

export default SpecialistCalendarPage;
