'use client';

import { type CalendarDay, cn } from '@/libraries/utils';
import { Button } from '../ui/button';

interface CalendarCellProps {
  day: CalendarDay;
  index: number;
  totalDays: number;
  onAppointmentClick: (time: string, name: string, location: string) => void;
}

export function CalendarCell({
  day,
  index,
  totalDays,
  onAppointmentClick,
}: CalendarCellProps) {
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
        {Object.entries(day.times).map(([time, appointment], idx) => {
          const { name, isbloquead, location } = appointment as {
            name: string;
            isbloquead?: boolean;
            location?: string;
          };

          const isBlocked = isbloquead;
          const color = isBlocked ? 'red' : colorCycle[idx % colorCycle.length];

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
              key={`${time}-${name}`} // ✅ Adicionada a key
              className={cn('rounded px-2 py-1 text-[10px] ', colorClass)}
              onClick={() =>
                onAppointmentClick(
                  time,
                  name,
                  location || 'Sala de Videoconferência no Microsoft Teams'
                )
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onAppointmentClick(
                    time,
                    name,
                    location || 'Sala de Videoconferência no Microsoft Teams'
                  );
                }
              }}
            >
              <div className="font-medium text-[10px]">
                {time} - {name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
