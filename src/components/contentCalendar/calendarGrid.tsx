import { CalendarCell } from './calendarCell';
export type CalendarDay = {
  date: string;
  isCurrentMonth: boolean;
  appointments: {
    time: string;
    name: string;
    color: 'blue' | 'green' | 'pink' | 'red';
    status?: string;
  }[];
};
interface CalendarGridProps {
  days: CalendarDay[];
}

export function CalendarGrid({ days }: CalendarGridProps) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px]">
        <div className="grid grid-cols-7 gap-px">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map((day) => (
            <div
              key={day}
              className="py-2 text-start font-medium text-[#736CCE]"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="relative grid grid-cols-7 border rounded-lg border-[#E4E4E4]">
          {days.map((day, index) => (
            <CalendarCell
              key={day.date + String(day.isCurrentMonth)}
              day={day}
              index={index}
              totalDays={days.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
