import { cn } from '@/libraries/utils';

export interface CalendarDay {
  date: string;
  isCurrentMonth: boolean;
  appointments: {
    time: string;
    name: string;
    isBlocked?: boolean; // flag para bloquear
    status?: string;
  }[];
}

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

  const colorCycle = ['blue', 'green', 'pink'];
  let cycleIndex = 0;

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
        {day.appointments.map((appointment, idx) => {
          const color = appointment.isBlocked
            ? 'red'
            : colorCycle[cycleIndex++ % colorCycle.length];

          return (
            <div
              key={idx.toString()}
              className={cn(
                'rounded px-2 py-1 text-[10px]',
                color === 'blue' && 'bg-[#E9EBFFFA] text-[#212FB1FA]',
                color === 'green' && 'bg-[#F8FFE9FA] text-[#658918]',
                color === 'pink' && 'bg-[#FFE9F6FA] text-[#EF5EB5FA]',
                color === 'red' && 'bg-[#FC5D60FA] text-[#FFFFFFFA]'
              )}
            >
              <div className="font-medium">
                {appointment.time} - {appointment.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
