import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Bell } from 'lucide-react';
import { useState } from 'react';

export function NotificationBell({
  count = 0,
  notifications = [],
}: {
  count?: number;
  notifications?: { id: number; title: string; message: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="w-10 h-10 rounded-full relative text-[#736CCE] bg-[#736CCE0D] hover:bg-[#e0e3f0] transition flex items-center justify-center"
        >
          <Bell className="w-5 h-5" />
          {count > 0 && (
            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow">
              {count}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <div className="p-4 border-b font-semibold text-sm text-gray-700">
          Notificações
        </div>
        <div className="max-h-60 overflow-y-auto">
          {notifications.length > 0 ? (
            notifications.map((n) => (
              <div
                key={n.id}
                className="p-4 border-b hover:bg-gray-50 cursor-pointer"
              >
                <div className="font-medium text-sm">{n.title}</div>
                <div className="text-sm text-gray-500">{n.message}</div>
              </div>
            ))
          ) : (
            <div className="p-4 text-sm text-gray-500 text-center">
              Sem notificações.
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
