'use client';

import { addMonths, format, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import AppointmentDialog from '@/components/calendar/appoimentDialog/page';
import CalendarContainer from '@/components/calendar/calendarContent/page';
import RescheduleDialog from '@/components/calendar/rescheduleDialog/page';
import SuccessDialog from '@/components/calendar/sucessDialog/page';

import { generateCalendarDays } from '@/libraries/utils';

export type Appointment = {
  id: number;
  name: string;
  time: string;
  location: string;
};

export default function SpecialistCalendarPage() {
  const router = useRouter();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const calendarDays = generateCalendarDays();

  const currentMonthName = format(currentDate, 'MMMM yyyy', { locale: ptBR });

  const handleAppointmentClick = (
    time: string,
    name: string,
    location: string
  ) => {
    setSelectedAppointment({
      id: Math.floor(Math.random() * 1000),
      name,
      time,
      location,
    });
    setIsAppointmentOpen(true);
  };

  const goToPreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const goToNextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const goToToday = () => setCurrentDate(new Date());
  const handleDateSelect = (date: Date | undefined) =>
    date && setCurrentDate(date);

  return (
    <main className="px-10">
      <CalendarContainer
        currentMonth={currentMonthName}
        calendarDays={calendarDays}
        onPrevMonth={goToPreviousMonth}
        onNextMonth={goToNextMonth}
        onToday={goToToday}
        onDateSelect={handleDateSelect}
        onAppointmentClick={handleAppointmentClick}
      />

      <AppointmentDialog
        open={isAppointmentOpen}
        onOpenChange={setIsAppointmentOpen}
        appointment={selectedAppointment}
        onReagendar={() => {
          setIsAppointmentOpen(false);
          setTimeout(() => setIsRescheduleOpen(true), 300);
        }}
        onCancel={() => setIsAppointmentOpen(false)}
        router={router}
      />

      <RescheduleDialog
        open={isRescheduleOpen}
        onOpenChange={setIsRescheduleOpen}
        onSuccess={() => {
          setIsRescheduleOpen(false);
          setIsSuccessOpen(true);
        }}
      />

      <SuccessDialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen} />
    </main>
  );
}
