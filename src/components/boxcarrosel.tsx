'use client';
import { Arrow } from '@/assets/svgs/arrow';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import WBox from '@/components/wbox';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
interface CarouselSectionProps {
  title: string;
  link: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  items: {
    title: string;
    text: string;
    href: string;
    time: string;
  }[];
}

export default function CarouselSection({
  title,
  link,
  imageSrc,
  imageAlt,
  items,
}: CarouselSectionProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    setCurrentIndex(carouselApi.selectedScrollSnap());
    carouselApi.on('select', () =>
      setCurrentIndex(carouselApi.selectedScrollSnap())
    );
  }, [carouselApi]);

  return (
    <div className="block">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-lg text-[#4f4f4f] ">{title}</h2>
        <Link href={link}>
          <Button
            variant="outline"
            className="border-[#BDBDBD] rounded-lg text-sm text-[#333333] hover:text-[#333333]"
          >
            Ver mais
          </Button>
        </Link>
      </div>

      <div className="relative w-full">
        <button
          type="button"
          className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-2 bg-[#F9F3FF] w-7 h-7 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer"
          onClick={() => carouselApi?.scrollTo(currentIndex - 1)}
        >
          <Arrow className="text-primary w-1.5 h-2" />
        </button>
        <button
          type="button"
          className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-2 bg-[#F9F3FF] w-7 h-7 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer"
          onClick={() => carouselApi?.scrollTo(currentIndex + 1)}
        >
          <Arrow className="text-primary w-1.5 h-2 rotate-180" />
        </button>

        <Carousel setApi={setCarouselApi} opts={{ align: 'start', loop: true }}>
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem className="lg:basis-1/2" key={index.toString()}>
                <WBox
                  variant="white"
                  id={index}
                  imageSrc={imageSrc}
                  imageAlt={imageAlt}
                  title={item.title}
                  text={item.text}
                  link={item.href}
                  time={item.time}
                  buttons={['heart']}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
