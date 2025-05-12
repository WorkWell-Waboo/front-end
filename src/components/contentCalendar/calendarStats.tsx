import { CalendarIcon } from 'lucide-react';
import { Button } from '../ui/button';

export function CalendarStats() {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_0.5fr] mb-2 gap-4 sm:items-center sm:justify-between">
      <div className=" rounded-lg bg-white px-4 py-2 text-base font-normal sm:flex-none">
        Agendadas no mês: 24
      </div>

      <div className="rounded-lg bg-white px-4 py-2 text-base font-normal text-gray-700 sm:flex-none">
        Agendadas na semana: 240
      </div>

      <div className="rounded-lg bg-white px-4 py-2 text-base font-normal text-gray-700 sm:flex-none">
        Agendadas na dia: 24
      </div>

      <Button className="h-full items-center gap-2 rounded-lg bg-white hover:bg-[#e6e6e1] px-4 py-2 text-sm font-normal text-[#333333 ] shadow-none  ">
        <CalendarIcon className="h-5 w-5 text-[#736CCE]" />
        Editar agenda
      </Button>
    </div>
  );
}
