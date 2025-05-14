'use client';

import client from '@/assets/imgs/cliente.png';
import { CalendarGrid } from '@/components/contentCalendar/calendarGrid';
import { CalendarHeader } from '@/components/contentCalendar/calendarHeader';
import { CalendarStats } from '@/components/contentCalendar/calendarStats';
import SearchBar from '@/components/searchbar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { generateCalendarDays } from '@/libraries/utils';
import { addMonths, format, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  Calendar,
  CalendarPlus,
  CircleUserRound,
  Clock,
  Edit,
  FileText,
  MapPin,
  MessageSquare,
  MessageSquareText,
  Paperclip,
  TriangleAlert,
  User,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
type Appointment = {
  id: number;
  name: string;
  time: string;
  location: string;
};

function SpecialistCalendarPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Obter os dias do calendário da função utilitária
  const calendarDays = generateCalendarDays();

  // Função para abrir o modal com os detalhes do compromisso selecionado
  const handleAppointmentClick = (
    time: string,
    name: string,
    location: string
  ) => {
    // Criar um objeto de compromisso com os dados fornecidos
    const appointment: Appointment = {
      id: Math.floor(Math.random() * 1000), // ID aleatório para este exemplo
      name,
      time,
      location,
    };

    setSelectedAppointment(appointment);
    setIsOpen(true);
  };

  // Funções para navegação do calendário
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
      {/* Dialog do shadcn/ui */}
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
              {/* Ícones de Ação */}

              {/* Localização e Horário */}
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
              {/* Aviso */}
              <div className="flex items-start gap-2 rounded-md  ">
                <div className="flex-shrink-0 text-[#F2C94C]  ">
                  <TriangleAlert size={16} />
                </div>
                <p className="text-sm text-[#4F4F4F]">
                  Antes de cancelar/reagendar a sessão entre em contato com o
                  paciente.
                </p>
              </div>

              {/* Botões de Ação */}
              <DialogFooter className=" flex gap-3 sm:justify-start mt-1 ">
                <Button
                  variant={'outline'}
                  className="flex-1 rounded-md border border-[#691FB1] py-2 text-sm text-[#691FB1] font-normal hover:bg-purple-50"
                >
                  Cancelar consulta
                </Button>
                <Button className="flex-1 rounded-md bg-[#691FB1] py-2 text-sm text-[#F2F2F2] font-normal hover:bg-purple-700">
                  Reagendar
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}

export default SpecialistCalendarPage;
