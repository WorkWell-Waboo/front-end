'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar, Calendar1, CalendarDays } from 'lucide-react';
import { useState } from 'react';

interface BlockTimeModalProps {
  onClose: () => void;
}

export default function BlockTimeModal({ onClose }: BlockTimeModalProps) {
  const [open, setOpen] = useState(true);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([
    '07:00',
    '08:00',
    '13:00',
    '21:00',
    '22:00',
  ]);

  const timeSlots = [
    ['07:00', '11:00', '15:00', '19:00'],
    ['08:00', '12:00', '16:00', '20:00'],
    ['09:00', '13:00', '17:00', '21:00'],
    ['10:00', '14:00', '18:00', '22:00'],
  ];

  const toggleTimeSelection = (time: string) => {
    if (selectedTimes.includes(time)) {
      setSelectedTimes(selectedTimes.filter((t) => t !== time));
    } else {
      setSelectedTimes([...selectedTimes, time]);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="p-8">
        <div className="flex justify-center -mt-13">
          <Avatar>
            <AvatarFallback className="bg-white">
              <CalendarDays className="w-10 h-10 text-[#736CCE]" />
            </AvatarFallback>
          </Avatar>
        </div>
        <DialogHeader>
          <DialogTitle className="text-center">Bloquear horário</DialogTitle>
        </DialogHeader>
        <p className="text-center text-sm text-[#4F4F4F]">
          Selecione o dia e o horário que deseja bloquear. Não é possível
          bloquear horários já agendados pelos pacientes.
        </p>

        <div className="mb-4">
          <Select>
            <SelectTrigger className="w-full data-[placeholder]:text-[#636C77] border-[#E6E6E8] bg-[#FFFFFF] shadow-none! ">
              <SelectValue placeholder="Seleciona a data" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025-01-01">1 de Janeiro de 2025</SelectItem>
              <SelectItem value="2025-01-02">2 de Janeiro de 2025</SelectItem>
              <SelectItem value="2025-01-03">3 de Janeiro de 2025</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-3">
            Selecione os horários que deseja bloquear
          </p>

          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((row, rowIndex) =>
              row.map((time, colIndex) => (
                <Button
                  key={`${rowIndex.toString()}-${colIndex.toString()}`}
                  className={`py-2 px-3 rounded-md text-sm text-[#333333] shadow-none hover:bg-[#F1E8FB] ${
                    selectedTimes.includes(time)
                      ? 'bg-[#F1E8FB] text-[#333333] border border-[#736CCE]'
                      : 'bg-[#fbfbfc] '
                  }`}
                  onClick={() => toggleTimeSelection(time)}
                >
                  {time}
                </Button>
              ))
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 text-[#736CCE] mb-5">
          <Button
            className="bg-[#691FB1] text-white hover:bg-[#6258c4]"
            onClick={() => handleOpenChange(false)}
          >
            Enviar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
