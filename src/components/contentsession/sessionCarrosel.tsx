'use client';

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { ArrowLeft, ChevronLeft } from 'lucide-react';
import type { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { SessionCard } from './sessionCard';

export interface SessionData {
  name: string;
  date: string;
  time: string;
  avatar: string | StaticImageData;
  selected?: boolean;
}

interface SessionCarouselProps {
  title: string;
  sessions: SessionData[];
}

export function SessionCarousel({ title, sessions }: SessionCarouselProps) {
  const [carousel, setCarousel] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carousel) return;

    setCurrentIndex(carousel.selectedScrollSnap());

    carousel.on('select', () => {
      setCurrentIndex(carousel.selectedScrollSnap());
    });
  }, [carousel]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <div className="space-y-4">
      {/* Título + botão */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <Button
          variant="outline"
          className="text-sm border px-3 py-1 rounded-2xl border-[#BDBDBD] text-[#333333]"
        >
          Ver todas
        </Button>
      </div>

      {/* Botões customizados */}
      <div className="relative w-full">
        <Button
          type="button"
          className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#F9F3FF] w-7 h-7 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer"
          onClick={() => carousel?.scrollTo(currentIndex + 1)}
        >
          <ChevronLeft className="text-primary w-1.5 h-2 rotate-180" />
        </Button>

        {/* Carrossel */}
        <Carousel setApi={setCarousel} opts={{ align: 'start', loop: true }}>
          <CarouselContent className="ml-0 -mr-1">
            {sessions.map((_, index) => (
              <CarouselItem
                key={index.toString()}
                className="basis-1/1 lg:basis-1/2 xl:basis-1/3 pl-0 pr-4 "
              >
                <SessionCard
                  {...sessions[index]}
                  selected={selectedIndex === index}
                  onClick={() => setSelectedIndex(index)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
