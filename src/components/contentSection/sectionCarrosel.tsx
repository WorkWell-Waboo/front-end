import { Arrow } from '@/assets/svgs/arrow';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import WBox from '@/components/wbox';
import type { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

interface SectionCarouselProps {
  imageSrc: string | StaticImageData;
  imageAlt: string;
  titleGenerator: (index: number) => string;
  text: string;
  linkBase: string;
}

export function SectionCarousel({
  imageSrc,
  imageAlt,
  titleGenerator,
  text,
  linkBase,
}: SectionCarouselProps) {
  const [carousel, setCarousel] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carousel) return;

    setCurrentIndex(carousel.selectedScrollSnap());

    carousel.on('select', () => {
      setCurrentIndex(carousel.selectedScrollSnap());
    });
  }, [carousel]);

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-2 bg-[#F9F3FF] w-7 h-7 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer"
        onClick={() => carousel?.scrollTo(currentIndex - 1)}
      >
        <Arrow className="text-primary w-1.5 h-2" />
      </button>
      <button
        type="button"
        className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-2 bg-[#F9F3FF] w-7 h-7 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer"
        onClick={() => carousel?.scrollTo(currentIndex + 1)}
      >
        <Arrow className="text-primary w-1.5 h-2 rotate-180" />
      </button>
      <Carousel setApi={setCarousel} opts={{ align: 'start', loop: true }}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              className="lg:basis-1/2"
              key={`${titleGenerator(index)}-${index}`}
            >
              <WBox
                variant="white"
                id={index}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                title={titleGenerator(index)}
                text={text}
                link={`${linkBase}/${index}`}
                time="5 min"
                buttons={['heart']}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
