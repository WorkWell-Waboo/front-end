'use client';
import client from '@/assets/imgs/cliente.png';
import { CalendarForm } from '@/components/calendarinput/page';
import { CalendarGrid } from '@/components/contentCalendar/calendarGrid';
import { CalendarHeader } from '@/components/contentCalendar/calendarHeader';
import { CalendarStats } from '@/components/contentCalendar/calendarStats';
import SearchBar from '@/components/searchbar';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/libraries/utils';
import { generateCalendarDays } from '@/libraries/utils';
import { addMonths, format, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CalendarIcon, ChevronDown } from 'lucide-react';
import {
  CalendarPlus,
  CircleUserRound,
  Clock,
  FileText,
  MapPin,
  MessageSquareText,
  Paperclip,
  TriangleAlert,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type Appointment = {
  id: number;
  name: string;
  time: string;
  location: string;
};
interface CalendarHeaderProps {
  currentMonth: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
  onDateSelect: (date: Date | undefined) => void;
}

function SpecialistCalendarPage({ onDateSelect }: CalendarHeaderProps) {
  const router = useRouter();
  const [date, setDate] = React.useState<Date>();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedHour, setSelectedHour] = useState<string | undefined>();

  const [isOpen, setIsOpen] = useState(false);
  const [showReagendarDialog, setShowReagendarDialog] = useState(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const calendarDays = generateCalendarDays();

  const handleAppointmentClick = (
    time: string,
    name: string,
    location: string
  ) => {
    const appointment: Appointment = {
      id: Math.floor(Math.random() * 1000),
      name,
      time,
      location,
    };

    setSelectedAppointment(appointment);
    setIsOpen(true);
  };
  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    setSelectedDate(newDate);
    onDateSelect(newDate);
  };
  const goToPreviousMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setCurrentDate(date);
    }
  };

  const currentMonthName = format(currentDate, 'MMMM yyyy', { locale: ptBR });

  return (
    <main className="px-10">
      <SearchBar inputDisabled={true} />
      <CalendarStats />
      <div className="rounded-lg bg-white pl-6 pr-8 py-4 shadow-sm">
        <CalendarHeader
          currentMonth={currentMonthName}
          onPrevMonth={goToPreviousMonth}
          onNextMonth={goToNextMonth}
          onToday={goToToday}
          onDateSelect={handleDateSelect}
        />
        <CalendarGrid
          days={calendarDays}
          onAppointmentClick={handleAppointmentClick}
        />
      </div>

      {/* Dialog 1 - Detalhes da Sessão */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-4">
              <Image
                src={client}
                alt="Profile"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-semibold text-[#333333]">
                  {selectedAppointment?.name}
                </h2>
                <div className="h-5 mt-2 flex gap-4 text-[#736CCE]">
                  <Button
                    variant={'ghost'}
                    size="icon"
                    onClick={() => router.push('calendar/enchiridion/3808403')}
                  >
                    <CircleUserRound size={16} />
                  </Button>
                  <Button variant={'ghost'} size="icon">
                    <CalendarPlus size={16} />
                  </Button>
                  <Button variant={'ghost'} size="icon">
                    <FileText size={16} />
                  </Button>
                  <Button variant={'ghost'} size="icon">
                    <Paperclip size={16} />
                  </Button>
                  <Button variant={'ghost'} size="icon">
                    <MessageSquareText size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </DialogHeader>

          {selectedAppointment && (
            <>
              <div className="mt-2 space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-[#736CCE]"
                  />
                  <span className="text-gray-700 text-sm">
                    {selectedAppointment.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="flex-shrink-0 text-[#736CCE]" />
                  <span className="text-gray-700 text-sm">
                    {selectedAppointment.time}h
                  </span>
                </div>
              </div>
              <Separator className="bg-[#DADADA]" orientation="horizontal" />
              <div className="flex items-start gap-2 rounded-md">
                <div className="flex-shrink-0 text-[#F2C94C]">
                  <TriangleAlert size={16} />
                </div>
                <p className="text-sm text-[#4F4F4F]">
                  Antes de cancelar/reagendar a sessão entre em contato com o
                  paciente.
                </p>
              </div>

              <DialogFooter className="flex gap-3 sm:justify-start mt-1">
                <Button
                  variant={'outline'}
                  className="flex-1 rounded-md border border-[#691FB1] py-2 text-sm text-[#691FB1] font-normal hover:bg-purple-50"
                >
                  Cancelar consulta
                </Button>
                <Button
                  className="flex-1 rounded-md bg-[#691FB1] py-2 text-sm text-[#F2F2F2] font-normal hover:bg-purple-700"
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => {
                      setShowReagendarDialog(true);
                    }, 300);
                  }}
                >
                  Reagendar
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Dialog 2 - Reagendamento (pode ser formulário ou confirmação) */}
      <Dialog open={showReagendarDialog} onOpenChange={setShowReagendarDialog}>
        <DialogContent className="sm:max-w-md p-6">
          <DialogHeader>
            <div className="flex justify-center -mt-10 mb-4">
              <div className="bg-white shadow-md rounded-full p-4">
                <CalendarIcon className="text-[#736CCE]" size={24} />
              </div>
            </div>
            <h2 className="text-xl font-bold text-center text-[#333]">
              Reagendar sessão
            </h2>
            <p className="text-sm text-center text-[#4F4F4F] mt-2">
              Escolha uma nova data e horário que se encaixe melhor na sua
              agenda e do paciente.
            </p>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {/* Campo de Data */}
            <CalendarForm />
            {/* Campo de Hora */}
            <Select value={selectedHour} onValueChange={setSelectedHour}>
              <SelectTrigger
                iconColor="#736CCE"
                className="w-full border border-[#E6E6E8] bg-[#FFFFFF] data-[placeholder]:text-[#636C77]"
              >
                <SelectValue placeholder="Hora" />
              </SelectTrigger>
              <SelectContent>
                {[
                  '09:00',
                  '10:00',
                  '11:00',
                  '12:00',
                  '15:00',
                  '16:00',
                  '18:00',
                  '19:00',
                  '20:00',
                  '21:00',
                  '22:00',
                ].map((hour) => (
                  <SelectItem key={hour} value={hour} className="max-h-48">
                    {hour}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="mt-6 flex gap-4">
            <Button
              variant="outline"
              className="flex-1 border border-[#736CCE] text-[#736CCE]"
              onClick={() => setShowReagendarDialog(false)}
            >
              Cancelar
            </Button>
            <Button
              className="flex-1 bg-[#736CCE] hover:bg-[#5c52b5] text-white"
              disabled={!selectedDate || !selectedHour}
              onClick={() => {
                console.log('Nova data:', selectedDate);
                console.log('Novo horário:', selectedHour);
                setShowReagendarDialog(false);
              }}
            >
              Reagendar sessão
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}

export default SpecialistCalendarPage;
