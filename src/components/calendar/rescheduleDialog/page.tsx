import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog';
import React, { useState } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/libraries/utils';
import { format } from 'date-fns';
import { CalendarIcon, ChevronDown } from 'lucide-react';

interface RescheduleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export default function RescheduleDialog({
  open,
  onOpenChange,
  onSuccess,
}: RescheduleDialogProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedHour, setSelectedHour] = useState<string | undefined>(
    undefined
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-6">
        <DialogHeader>
          <div className="flex justify-center -mt-10 mb-4">
            <div className="bg-white shadow-md rounded-full p-4">
              <CalendarIcon className="text-[#736CCE]" size={24} />
            </div>
          </div>
          <h2 className="text-xl font-bold text-center text-[#333]">
            Reagendar sessão
          </h2>
          <p className="text-sm text-center text-[#4F4F4F] mt-2">
            Escolha uma nova data e horário que se encaixe melhor na sua agenda
            e do paciente.
          </p>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-between border border-[#E6E6E8] bg-[#FFFFFF] text-left font-normal',
                  !date && 'text-muted-foreground'
                )}
              >
                <div className="flex items-center gap-2">
                  {date ? format(date, 'PPP') : <span>Data</span>}
                </div>
                <ChevronDown className="text-[#736CCE] size-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto" align="start">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(d) => {
                  setSelectedDate(d);
                  setDate(d);
                }}
              />
            </PopoverContent>
          </Popover>

          <Select value={selectedHour} onValueChange={setSelectedHour}>
            <SelectTrigger
              iconColor="#736CCE"
              className="w-full border border-[#E6E6E8] bg-[#FFFFFF] data-[placeholder]:text-[#636C77]"
            >
              <SelectValue placeholder="Hora" />
            </SelectTrigger>
            <SelectContent>
              {[
                '09:00',
                '10:00',
                '11:00',
                '14:00',
                '15:00',
                '16:00',
                '17:00',
              ].map((hour) => (
                <SelectItem key={hour} value={hour}>
                  {hour}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <DialogFooter>
          <Button
            disabled={!date || !selectedHour}
            className="mt-6 w-full rounded-md bg-[#691FB1] py-2 text-sm text-[#F2F2F2] font-normal hover:bg-purple-700"
            onClick={() => {
              onSuccess();
            }}
          >
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
