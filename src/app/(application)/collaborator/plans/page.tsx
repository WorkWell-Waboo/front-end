'use client';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import AconselhamentoFinanceiroSVG from "@/assets/svgs/aconselhamento-financeiro";
import { Arrow } from "@/assets/svgs/arrow";
import FisioterapiaSVG from "@/assets/svgs/fisioterapia";
import HealthCoachingSVG from "@/assets/svgs/health-coaching";
import MassagemSVG from "@/assets/svgs/massagem";
import NutricaoSVG from "@/assets/svgs/nutricion";
import PsicologiaSVG from "@/assets/svgs/psicologia";
import PsiquiatriaSVG from "@/assets/svgs/psiquiatria";
import SonoSVG from "@/assets/svgs/sono";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface Expertise {
  id: number;
  icon: React.ElementType; // Define como um componente React
  name: string;
}

const expertises: Expertise[] = [
  { id: 1, icon: PsicologiaSVG, name: "Psicologia" },
  { id: 2, icon: PsiquiatriaSVG, name: "Psiquiatria" },
  { id: 3, icon: NutricaoSVG, name: "Nutrição" },
  { id: 4, icon: HealthCoachingSVG, name: "Health Coaching" },
  { id: 5, icon: AconselhamentoFinanceiroSVG, name: "Aconselhamento Financeiro" },
  { id: 6, icon: FisioterapiaSVG, name: "Fisioterapia" },
  { id: 7, icon: MassagemSVG, name: "Massagem" },
  { id: 8, icon: SonoSVG, name: "Sono" },
  { id: 9, icon: PsiquiatriaSVG, name: "Psiquiatria" },
  { id: 10, icon: PsiquiatriaSVG, name: "Psiquiatria" },
  { id: 11, icon: PsiquiatriaSVG, name: "Psiquiatria" },
  { id: 12, icon: PsiquiatriaSVG, name: "Psiquiatria" },
];

const chunkArray = <T,>(array: T[], size: number): T[][] =>
  array.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }
    chunks[chunkIndex].push(item);
    return chunks;
  }, [] as T[][]);

const expertiseChunks = chunkArray(expertises, 4);

export default function CollaboratorPlansPage() {
  const [carousel, setCarousel] = useState<CarouselApi>();
  const [currentCarousel, setCurrentCarousel] = useState(0);

	const [activeId, setActiveId] = useState<number | null>(null);
	const handleClick = (id: number) => {
		setActiveId(prev => (prev === id ? null : id)); // alterna se quiser desmarcar
	};

  useEffect(() => {
    if (!carousel) return;
    setCurrentCarousel(carousel.selectedScrollSnap());
    carousel.on("select", () => setCurrentCarousel(carousel.selectedScrollSnap()));
  }, [carousel]);

  return (
    <main className="p-10 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-md text-[#4f4f4f] mb-2">
          Escolha a especialidade de interesse
        </h2>
        <div className="flex gap-2">
          <Button
            className="bg-[#F9F3FF] hover:bg-[#F9F3FF] drop-shadow-md rounded-full cursor-pointer w-6 h-6"
            onClick={() => carousel?.scrollTo(currentCarousel - 1)}
          >
            <Arrow className="text-primary h-2! w-2!" />
          </Button>
          <Button
            className="bg-[#F9F3FF] hover:bg-[#F9F3FF] drop-shadow-md rounded-full cursor-pointer w-6 h-6"
            onClick={() => carousel?.scrollTo(currentCarousel + 1)}
          >
            <Arrow className="text-primary rotate-180 h-2! w-2!" />
          </Button>
        </div>
      </div>
      <Carousel setApi={setCarousel} opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {expertiseChunks.map((chunk, index) => (
            <CarouselItem key={`carousel-item-${Date.now()}-${index}`} className="lg:basis-1/2 flex flex-col gap-2">
              {chunk.map((expertise) => {
                const Icon = expertise.icon; 
                const isActive = activeId === expertise.id;
                return (
									<div className="flex gap-4" key={expertise.id}>
										<Button
											className={`flex justify-start items-center gap-2 py-1 px-2 h-fit rounded-md cursor-pointer text-[#333333] hover:text-white ${
												isActive ? "bg-primary text-white" : "bg-white"
											}`}
											onClick={() => handleClick(expertise.id)} 
										>
											<div className="w-8 h-8 flex justify-center items-center rounded-full bg-white text-primary">
												<Icon className="w-4 h-4" />
											</div>
											<p className="font-medium text-sm" >
												{expertise.name}
											</p>
										</Button>
									</div>
                );
              })}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </main>
  );
} 
