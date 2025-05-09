import { cn } from '@/libraries/utils';
import { ChevronRight } from 'lucide-react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
interface SessionCardProps {
  name: string;
  date: string;
  time: string;
  avatar: string | StaticImageData;
  selected?: boolean;
  onClick?: () => void;
}

export function SessionCard({
  name,
  date,
  time,
  avatar,
  selected = false,
  onClick,
}: SessionCardProps) {
  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
      className={cn(
        'flex items-center rounded-lg px-7 py-7 w-full max-w-full shadow-sm',
        selected
          ? 'bg-[#736CCE] text-white border-b-3 border-white'
          : 'bg-white text-gray-800'
      )}
    >
      <div className="flex items-center gap-4 justify-center">
        <Image
          src={avatar}
          alt={name}
          className="h-18 w-18 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span
            className={cn(
              'font-bold text-lg',
              selected ? 'text-white' : 'text-[#736CCE]'
            )}
          >
            {name}
          </span>
          <span className="text-sm font-normal ">{date}</span>
          <span className="text-sm font-normal">{time}</span>
        </div>
      </div>
    </div>
  );
}
