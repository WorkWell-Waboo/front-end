import { cn } from '@/libraries/utils';

export interface CalendarDay {
  date: string;
  isCurrentMonth: boolean;
  appointments: {
    time: string;
    name: string;
    color: 'blue' | 'green' | 'pink' | 'red';
    status?: string;
  }[];
}

interface CalendarCellProps {
  day: CalendarDay;
}

export function CalendarCell({ day }: CalendarCellProps) {
  return (
    <div
      className={cn(
        'min-h-[120px] border-b border-r p-1',
        day.isCurrentMonth ? 'bg-white' : 'bg-gray-50'
      )}
    >
      <div className="p-1 text-sm font-medium">{day.date}</div>
      <div className="space-y-1  max-h-[90px] overflow-y-auto scrollbar-custom">
        {day.appointments.map((appointment, idx) => (
          <div
            key={idx.toString()}
            className={cn(
              'rounded px-2 py-1 text-xs',
              appointment.color === 'blue' && 'bg-[#E9EBFFFA] text-[#212FB1FA]',
              appointment.color === 'green' && 'bg-[#F8FFE9FA] text-[#658918]',
              appointment.color === 'pink' && 'bg-[#FFE9F6FA] text-[#EF5EB5FA]',
              appointment.color === 'red' && 'bg-[#FC5D60FA] text-[#FFFFFFFA]'
            )}
          >
            <div className="font-medium">
              {appointment.time} - {appointment.name}
            </div>
            {appointment.status && (
              <div className="text-xs">{appointment.status}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
