import { Button } from '@/components/ui/button';
import { addDays, format, setHours, setMinutes } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function AgendaScroll() {
  const totalDays = 30; // Total de dias disponíveis
  const visibleCount = 5; // Quantos dias mostrar por vez
  const [startIndex, setStartIndex] = useState(0);

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

  return (
    <div className="flex items-start gap-2">
      {/* Botão Esquerda */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handlePrev}
        disabled={startIndex === 0}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      {/* Dias e horários */}
      <div className="flex gap-1 overflow-y-auto scrollbar-thin-">
        {visibleDays.map((date, index) => (
          <div key={index.toString()} className="min-w-[60px] rounded-xl  ">
            {/* Cabeçalho com Dia */}
            <div className="text-center mb-2">
              <div className="text-xs text-gray-500 uppercase">
                {format(date, 'EEE', { locale: ptBR })}
              </div>
              <div className="text-lg font-bold text-[#6B5DD3]">
                {format(date, 'd')}
              </div>
              <div className="text-xs text-gray-500 uppercase">
                {format(date, 'MMM', { locale: ptBR })}
              </div>
            </div>

            {/* Horários */}
            <div className="">
              {' '}
              <div className="flex flex-col gap-2 max-h-[300px] ">
                {getTimeSlots().map((time, i) => (
                  <div
                    key={i.toString()}
                    className="text-sm text-center px-2 py-1 rounded-md bg-[#FFFFFF] hover:bg-gray-100 cursor-pointer"
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botão Direita */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handleNext}
        disabled={startIndex + visibleCount >= totalDays}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
}
