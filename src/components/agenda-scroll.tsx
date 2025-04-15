import ArrowLeft from '@/assets/svgs/arrowLeft';
import ArrowRight from '@/assets/svgs/arrowRight';
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
import { CheckCircleIcon, InfoIcon } from 'lucide-react';
import { useState } from 'react';

export function AgendaScroll() {
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
    if (startIndex > 0) setStartIndex(startIndex - visibleCount);
  };

  const handleNext = () => {
    if (startIndex + visibleCount < totalDays)
      setStartIndex(startIndex + visibleCount);
  };

  const handleTimeClick = (date: Date, time: string) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const isUnavailable = unavailableSlots.some(
      (slot) => slot.date === dateStr && slot.time === time
    );

    setSelectedSlot({ date, time });
    setDialogType(isUnavailable ? 'unavailable' : 'confirm');
  };

  const confirmAgendamento = async () => {
    if (!selectedSlot) return;

    try {
      const response = await fetch('/api/agendamentos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: selectedSlot.date.toISOString(),
          time: selectedSlot.time,
        }),
      });

      if (!response.ok) throw new Error('Erro ao agendar');
      console.log('Agendamento enviado com sucesso');
      setDialogType('success');
    } catch (error) {
      console.error('Erro ao enviar agendamento:', error);
    }
  };

  return (
    <>
      {/* Navegação e dias */}
      <div className="flex items-start gap-2 overflow-y-auto scrollbar-custom">
        <Button
          className="mt-3"
          variant="ghost"
          size="icon"
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-1 w-full justify-center pb-2">
          {visibleDays.map((date, index) => {
            const isDateSelected =
              selectedSlot &&
              selectedSlot.date.getDate() === date.getDate() &&
              selectedSlot.date.getMonth() === date.getMonth() &&
              selectedSlot.date.getFullYear() === date.getFullYear();

            return (
              <div key={index.toString()} className="min-w-[85px] rounded-xl">
                <div
                  className={`text-center mb-4 p-1 rounded-md ${
                    isDateSelected ? 'bg-[#F1E8FB] border border-primary' : ''
                  }`}
                >
                  <div className="text-xs uppercase text-gray-500">
                    {format(date, 'EEE', { locale: ptBR })}
                  </div>
                  <div className="text-lg font-normal text-[#6B5DD3]">
                    {format(date, 'd')}
                  </div>
                  <div className="text-xs uppercase text-gray-500">
                    {format(date, 'MMM', { locale: ptBR })}
                  </div>
                </div>

                <div className="flex flex-col gap-2 max-h-[300px]">
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
                        disabled={isUnavailable}
                        className={`text-sm text-center px-2 py-3 rounded-md 
                          ${
                            isSelected
                              ? 'bg-[#F1E8FB] text-[#333333] border border-primary'
                              : isUnavailable
                              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                              : 'bg-white text-[#333333] hover:bg-gray-100'
                          }
                        `}
                        aria-label={`Horário ${time}`}
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
          <ArrowRight className="w-5 h-5 text-primary" />
        </Button>
      </div>

      {/* Diálogo de confirmação, lembrete, sucesso e indisponível */}
      <Dialog
        open={dialogType !== null}
        onOpenChange={() => setDialogType(null)}
      >
        <DialogContent>
          <div className="flex justify-center -mt-12">
            <Avatar>
              <AvatarFallback className="bg-white">
                {dialogType === 'success' ? (
                  <CheckCircleIcon className="w-10 h-10 text-primary" />
                ) : (
                  <InfoIcon className="w-10 h-10 text-primary" />
                )}
              </AvatarFallback>
            </Avatar>
          </div>

          <DialogHeader>
            <DialogTitle className="text-center">
              {dialogType === 'confirm' && 'Confirmar Consulta'}
              {dialogType === 'reminder' && 'Fique Atento!'}
              {dialogType === 'success' && 'Consulta Agendada'}
              {dialogType === 'unavailable' && 'Horário Indisponível'}
            </DialogTitle>
          </DialogHeader>

          <DialogDescription className="text-center text-sm text-muted-foreground">
            {dialogType === 'confirm' &&
              selectedSlot &&
              `Você selecionou ${selectedSlot.time} do dia ${format(
                selectedSlot.date,
                'dd/MM/yyyy'
              )}. Deseja confirmar esse agendamento?`}

            {dialogType === 'reminder' &&
              'Sua consulta será em 2 dias. Verifique seus dados e esteja disponível no horário.'}

            {dialogType === 'success' &&
              'Sua consulta foi agendada com sucesso! Você receberá mais informações por e-mail.'}

            {dialogType === 'unavailable' &&
              selectedSlot &&
              `O horário ${selectedSlot.time} do dia ${format(
                selectedSlot.date,
                'dd/MM/yyyy'
              )} está indisponível. Por favor, escolha outro horário.`}
          </DialogDescription>

          <div className="flex justify-end gap-2 mt-4">
            {dialogType === 'confirm' && (
              <>
                <Button variant="outline" onClick={() => setDialogType(null)}>
                  Cancelar
                </Button>
                <Button onClick={() => setDialogType('reminder')}>
                  Confirmar
                </Button>
              </>
            )}

            {dialogType === 'reminder' && (
              <Button onClick={confirmAgendamento}>Compreendi</Button>
            )}

            {dialogType === 'success' && (
              <Button onClick={() => setDialogType(null)}>Fechar</Button>
            )}

            {dialogType === 'unavailable' && (
              <Button variant="outline" onClick={() => setDialogType(null)}>
                Fechar
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
