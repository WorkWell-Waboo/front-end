import { cn } from '@/libraries/utils';
import type { CalendarDay } from '@/libraries/utils';

interface CalendarCellProps {
  day: CalendarDay;
  index: number;
  totalDays: number;
}

export function CalendarCell({ day, index, totalDays }: CalendarCellProps) {
  const isFirstRow = index < 7;
  const isLastRow = index >= totalDays - 7;
  const isFirstCol = index % 7 === 0;
  const isLastCol = (index + 1) % 7 === 0;

  // Definindo um ciclo de cores
  const colorCycle = ['blue', 'green', 'pink']; // Azul, Verde, Pink

  return (
    <div
      className={cn(
        'min-h-[120px] p-1 overflow-auto border-[#E4E4E4]',
        !isLastCol && 'border-r ',
        !isLastRow && 'border-b',
        'border-[#E4E4E4]',
        day.isCurrentMonth ? 'bg-white' : 'text-[#B6B6B6]',
        isFirstRow && isFirstCol && 'rounded-tl-lg',
        isFirstRow && isLastCol && 'rounded-tr-lg',
        isLastRow && isFirstCol && 'rounded-bl-lg',
        isLastRow && isLastCol && 'rounded-br-lg'
      )}
    >
      <div className="p-1 text-sm font-medium">{day.date}</div>
      <div className="space-y-1 max-h-[90px] overflow-y-auto scrollbar-custom">
        {Object.entries(day.times).map(
          (
            [time, appointment]: [
              string,
              { name: string; isbloquead?: boolean }
            ],
            idx
          ) => {
            // Se o horário estiver bloqueado, aplicamos a cor vermelha
            const isBlocked = appointment.isbloquead;
            const color = isBlocked
              ? 'red'
              : colorCycle[idx % colorCycle.length];

            // Definindo a classe com base na cor
            const colorClass =
              color === 'blue'
                ? 'bg-[#E9EBFFFA] text-[#212FB1FA]'
                : color === 'green'
                ? 'bg-[#F8FFE9FA] text-[#658918]'
                : color === 'pink'
                ? 'bg-[#FFE9F6FA] text-[#EF5EB5FA]'
                : color === 'red'
                ? 'bg-[#FC5D60FA] text-[#FFFFFFFA]'
                : '';

            return (
              <div
                key={idx.toString()}
                className={cn('rounded px-2 py-1 text-[10px]', colorClass)}
              >
                <div className="font-medium">
                  {time} - {appointment.name}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
