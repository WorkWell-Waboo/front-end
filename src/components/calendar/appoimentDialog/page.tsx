import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';

import {
  CalendarPlus,
  CircleUserRound,
  Clock,
  FileText,
  MapPin,
  MessageSquareText,
  Paperclip,
  TriangleAlert,
} from 'lucide-react';

import type { Appointment } from '@/app/(application)/specialist/calendar/page';
import client from '@/assets/imgs/cliente.png';
import type { useRouter } from 'next/navigation';

interface AppointmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  appointment: Appointment | null;
  onReagendar: () => void;
  onCancel: () => void;
  router: ReturnType<typeof useRouter>;
}

export default function AppointmentDialog({
  open,
  onOpenChange,
  appointment,
  onReagendar,
  onCancel,
  router,
}: AppointmentDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Image
              src={client}
              alt="Profile"
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-[#333333]">
                {appointment?.name}
              </h2>
              <div className="h-5 mt-2 flex gap-4 text-[#736CCE]">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => router.push('calendar/enchiridion/3808403')}
                >
                  <CircleUserRound size={16} />
                </Button>
                <Button variant="ghost" size="icon">
                  <CalendarPlus size={16} />
                </Button>
                <Button variant="ghost" size="icon">
                  <FileText size={16} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Paperclip size={16} />
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageSquareText size={16} />
                </Button>
              </div>
            </div>
          </div>
        </DialogHeader>

        {appointment && (
          <>
            <div className="mt-2 space-y-3">
              <div className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-[#736CCE]"
                />
                <span className="text-gray-700 text-sm">
                  {appointment.location}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="flex-shrink-0 text-[#736CCE]" />
                <span className="text-gray-700 text-sm">
                  {appointment.time}h
                </span>
              </div>
            </div>
            <Separator className="bg-[#DADADA]" orientation="horizontal" />
            <div className="flex items-start gap-2 rounded-md">
              <div className="flex-shrink-0 text-[#F2C94C]">
                <TriangleAlert size={16} />
              </div>
              <p className="text-sm text-[#4F4F4F]">
                Antes de cancelar/reagendar a sessão entre em contato com o
                paciente.
              </p>
            </div>

            <DialogFooter className="flex gap-3 sm:justify-start mt-1">
              <Button
                variant="outline"
                className="flex-1 rounded-md border border-[#691FB1] py-2 text-sm text-[#691FB1] font-normal hover:bg-purple-50"
                onClick={onCancel}
              >
                Cancelar consulta
              </Button>
              <Button
                className="flex-1 rounded-md bg-[#691FB1] py-2 text-sm text-[#F2F2F2] font-normal hover:bg-purple-700"
                onClick={onReagendar}
              >
                Reagendar
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
