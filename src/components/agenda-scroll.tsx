import AgendaSVG from '@/assets/svgs/agenda';
import ArrowLeft from '@/assets/svgs/arrowLeft';
import ArrowRight from '@/assets/svgs/arrowRight';
import ParkOutlineSVG from '@/assets/svgs/park-outline';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { addDays, format, setHours, setMinutes } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CheckCircleIcon } from 'lucide-react';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function AgendaScroll() {
  const router = useRouter();
  const totalDays = 30;
  const visibleCount = 5;
  const [startIndex, setStartIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<{
    date: Date;
    time: string;
  } | null>(null);
  const [dialogType, setDialogType] = useState<
    null | 'confirm' | 'reminder' | 'success' | 'unavailable'
  >(null);

  const unavailableSlots = [
    { date: '2025-04-14', time: '09:00' },
    { date: '2025-04-16', time: '13:00' },
  ];

  const today = new Date();
  const days = Array.from({ length: totalDays }, (_, i) => addDays(today, i));
  const visibleDays = days.slice(startIndex, startIndex + visibleCount);

  const getTimeSlots = () =>
    Array.from({ length: 16 }, (_, i) =>
      format(setMinutes(setHours(today, 7 + i), 0), 'HH:mm')
    );

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

  const handleNext = () => {
    if (startIndex + visibleCount < totalDays) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const handleTimeClick = (date: Date, time: string) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const isUnavailable = unavailableSlots.some(
      (slot) => slot.date === dateStr && slot.time === time
    );

    setSelectedSlot({ date, time });
    setDialogType(isUnavailable ? 'unavailable' : 'confirm');
  };

  const confirmAgendamento = () => {
    setDialogType('success');
  };

  return (
    <>
      <div className="flex items-start gap-2 overflow-y-auto scrollbar-custom px-3">
        <Button
          className={`mt-3 ${startIndex === 0 ? 'invisible' : ''}`}
          variant="ghost"
          size="icon"
          onClick={handlePrev}
        >
          <ArrowRight className="w-5 h-5 text-primary" />
        </Button>

        <div className="flex gap-1 w-full justify-center pb-2">
          {visibleDays.map((date, index) => {
            const isDateSelected =
              selectedSlot &&
              selectedSlot.date.getDate() === date.getDate() &&
              selectedSlot.date.getMonth() === date.getMonth() &&
              selectedSlot.date.getFullYear() === date.getFullYear();

            return (
              <div
                key={index.toString()}
                className="min-w-[100px] rounded-xl mx-0.5"
              >
                <div
                  className={`text-center mb-4 p-1 rounded-md  ${
                    isDateSelected ? 'bg-[#F1E8FB] border border-primary' : ''
                  }`}
                >
                  <div className="text-xs uppercase text-gray-500">
                    {format(date, 'EEE', { locale: ptBR })
                      .slice(0, 3)
                      .replace(/^./, (str) => str.toUpperCase())}
                  </div>
                  <div className="text-lg font-normal text-[#6B5DD3]">
                    {format(date, 'd')}
                  </div>
                  <div className="text-xs uppercase text-gray-500">
                    {format(date, 'MMM', { locale: ptBR })}
                  </div>
                </div>

                <div className="flex flex-col gap-2 max-h-[300px] ">
                  {getTimeSlots().map((time, i) => {
                    const isSelected =
                      selectedSlot?.date.getDate() === date.getDate() &&
                      selectedSlot?.date.getMonth() === date.getMonth() &&
                      selectedSlot?.date.getFullYear() === date.getFullYear() &&
                      selectedSlot?.time === time;

                    const dateStr = format(date, 'yyyy-MM-dd');
                    const isUnavailable = unavailableSlots.some(
                      (slot) => slot.date === dateStr && slot.time === time
                    );

                    return (
                      <Button
                        key={i.toString()}
                        onClick={() => handleTimeClick(date, time)}
                        className={`text-sm font-normal text-center rounded-md shadow-none
                          ${
                            isSelected
                              ? 'bg-[#F1E8FB] text-[#333333] border border-primary'
                              : isUnavailable
                              ? 'bg-gray-200 text-[#333333] '
                              : 'bg-white text-[#333333] hover:bg-gray-100'
                          }
                        `}
                        aria-pressed={isSelected}
                        onKeyDown={(e) => {
                          if (
                            !isUnavailable &&
                            (e.key === 'Enter' || e.key === ' ')
                          ) {
                            handleTimeClick(date, time);
                          }
                        }}
                        tabIndex={0}
                      >
                        {time}
                      </Button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <Button
          className="mt-3"
          variant="ghost"
          size="icon"
          onClick={handleNext}
          disabled={startIndex + visibleCount >= totalDays}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
      </div>

      <Dialog
        open={dialogType !== null}
        onOpenChange={() => setDialogType(null)}
      >
        <DialogContent>
          <div className="flex justify-center -mt-14">
            <Avatar>
              <AvatarFallback className=" bg-white">
                {dialogType === 'success' ? (
                  <CheckCircleIcon className="w-8 h-8 text-[#736CCE]" />
                ) : dialogType === 'confirm' || dialogType === 'reminder' ? (
                  <AgendaSVG className="w-8 h-8 text-[#736CCE]" />
                ) : (
                  <ParkOutlineSVG className="w-10 h-10 text-[#736CCE]" />
                )}
              </AvatarFallback>
            </Avatar>
          </div>

          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-semibold">
              {dialogType === 'confirm' && 'Confirme a sua Consulta'}
              {dialogType === 'reminder' && 'Lembrete sobre a sua consulta'}
              {dialogType === 'success' && 'Horário confirmado!'}
              {dialogType === 'unavailable' && 'Sem consultas disponíveis'}
            </DialogTitle>
          </DialogHeader>

          <DialogDescription className="text-center text-sm text-black ">
            {dialogType === 'confirm' && selectedSlot && (
              <div className="space-y-4 text-sm text-card-foreground text-center">
                <p className="text-[#4F4F4F]">
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria
                  tipográfica e de impressos.
                </p>

                <div className="flex flex-col gap-2">
                  <span className="font-medium ">Informações da consulta:</span>
                  <div className="text-[#636C77] bg-[#FFFFFF] border border-[#E6E6E8] rounded-md py-2">
                    Tipo de consulta: Particular
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium ">
                    A consulta está agendada para:
                  </span>
                  <div className="text-[#636C77] bg-[#FFFFFF] border border-[#E6E6E8] rounded-md  py-2">
                    {format(selectedSlot.date, "EEEE',' dd 'de' MMMM", {
                      locale: ptBR,
                    })}{' '}
                    às {selectedSlot.time} hrs
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Fuso horário: Açores, Portugual(GMT-1)
                  </p>
                </div>
              </div>
            )}

            {dialogType === 'reminder' && (
              <span className=" block px-10">
                Por favor, certifique-se de que pode comparecer à consulta
                agendada. Caso cancele com menos de 24 horas de antecedência, o
                acesso a novas marcações ficará temporariamente limitado até
                <strong> [data exata daqui a 3 semanas]</strong>
              </span>
            )}

            {dialogType === 'success' && (
              <div className="px-12">
                <p>
                  O seu agendamento foi realizado com sucesso. Vemo-nos em breve
                  :) Verifique o seu email para mais detalhes sobre o seu
                  agendamento
                </p>
              </div>
            )}

            {dialogType === 'unavailable' && selectedSlot && (
              <>
                Não possui agendamentos disponíveis.
                <br />
                Por favor entre em contato connosco.
              </>
            )}
          </DialogDescription>

          <div>
            {dialogType === 'confirm' && (
              <div className="w-full grid grid-cols-2 gap-2">
                <Button
                  className="text-[#691FB1] border-[#691FB1] font-normal"
                  variant="outline"
                  onClick={() => setDialogType(null)}
                >
                  Cancelar
                </Button>
                <Button
                  className="bg-[#691FB1] font-normal"
                  onClick={() => setDialogType('reminder')}
                >
                  Confirmar
                </Button>
              </div>
            )}

            {dialogType === 'reminder' && (
              <div className=" w-full flex justify-center">
                <Button
                  className="bg-[#691FB1] px-12 py-5 font-normal"
                  onClick={confirmAgendamento}
                >
                  Compreendi
                </Button>
              </div>
            )}

            {dialogType === 'success' && (
              <div className="flex justify-center pb-3">
                <Button
                  className="bg-[#691FB1] px-16 py-5 font-normal"
                  onClick={() => setDialogType(null)}
                >
                  Fechar
                </Button>
              </div>
            )}

            {dialogType === 'unavailable' && (
              <div className="flex gap-2 justify-center">
                <Button
                  variant="outline"
                  className="border-[#691FB1] bg-[#F2F2F2] text-[#691FB1]"
                  onClick={() => router.push('/plans')}
                >
                  Ir para planos
                </Button>
                <Button
                  variant="default"
                  className="bg-[#691FB1] px-11 font-normal"
                  onClick={() => router.push('/chat')}
                >
                  Chat
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
