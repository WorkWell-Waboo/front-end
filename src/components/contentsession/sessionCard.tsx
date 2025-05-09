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
  showArrow?: boolean;
}

export function SessionCard({
  name,
  date,
  time,
  avatar,
  selected = false,
  showArrow = true,
}: SessionCardProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-2xl px-6 py-4 w-full max-w-sm shadow-sm',
        selected ? 'bg-[#736CCE] text-white' : 'bg-white text-gray-800'
      )}
    >
      <div className="flex items-center gap-4">
        <Image
          src={avatar}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span
            className={cn(
              'font-semibold',
              selected ? 'text-white' : 'text-[#736CCE]'
            )}
          >
            {name}
          </span>
          <span className="text-sm">{date}</span>
          <span className="text-sm">{time}</span>
        </div>
      </div>
    </div>
  );
}
