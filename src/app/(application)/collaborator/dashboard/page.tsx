'use client'

import { useEffect, useState } from "react";

import {
  Carousel,
	type CarouselApi,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

import ArrowLeft from "@/assets/svgs/arrowLeft";
import ArrowRight from "@/assets/svgs/arrowRight";


function CollaboratorDashboardPage() {
	const [carousel1, setCarousel1] = useState<CarouselApi>()
  const [currentCarousel1, setCurrentCarousel1] = useState(0)

	useEffect(() => {
    if (!carousel1) {
      return
    }

    setCurrentCarousel1(carousel1.selectedScrollSnap())
 
    carousel1.on("select", () => {
      setCurrentCarousel1(carousel1.selectedScrollSnap())
    })
  }, [carousel1])

	const [carousel2, setCarousel2] = useState<CarouselApi>()
  const [currentCarousel2, setCurrentCarousel2] = useState(0)

	useEffect(() => {
    if (!carousel2) {
      return
    }

    setCurrentCarousel2(carousel2.selectedScrollSnap())
 
    carousel2.on("select", () => {
      setCurrentCarousel2(carousel2.selectedScrollSnap())
    })
  }, [carousel2])

	return (
		<main className="p-10 flex flex-col gap-4">
			<div className="grid grid-cols-2 gap-4">
				<div className="bg-gradient-to-r from-primary to-primary/50 p-5 rounded-lg">
					<h2 className="font-medium text-2xl text-white mb-2"><span>Olá, Mariana Lemos</span></h2>
					<p className="font-normal text-sm text-white ">Bem-vinda! Que tal dar o próximo passo no cuidado com você? Escolha um profissional e agende um horário para sua sessão.</p>
				</div>
				<div className="bg-white border-b-2 border-b-primary p-5 rounded-lg">
					<div className="flex justify-between items-center">
						<h2 className="font-bold text-xl text-[#4f4f4f] mb-2">Sessões disponíveis</h2>
						<div className="flex gap-2">
							<button type="button" className="bg-[#F9F3FF] w-5 h-5 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer" onClick={()=> carousel1?.scrollTo(currentCarousel1 - 1)}>
								<ArrowRight/>
							</button>
							<button type="button" className="bg-[#F9F3FF] w-5 h-5 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer" onClick={()=> carousel1?.scrollTo(currentCarousel1 + 1)}>
								<ArrowLeft/>
							</button>
						</div>
					</div>
					<Carousel  setApi={setCarousel1}> 
						<CarouselContent>
							{Array.from({ length: 5 }).map((_, index) => (
								<CarouselItem key={`carousel-item-${Date.now()}-${index}`}>
									<div className="grid grid-cols-2 gap-0.5">
										<p className="font-bold text-sm text-primary">Psicologia: 
											<span className="font-semibold text-[#4f4f4f]"> 0 sessões</span>
										</p>
										<p className="font-bold text-sm text-primary">Psiquiatria: 
											<span className="font-semibold text-[#4f4f4f]"> 0 sessões</span>
										</p>
										<p className="font-bold text-sm text-primary">Nutrição: 
											<span className="font-semibold text-[#4f4f4f]"> 0 sessões</span>
										</p>
										<p className="font-bold text-sm text-primary">Health coaching: 
											<span className="font-semibold text-[#4f4f4f]"> 0 sessões</span>
										</p>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="col-span-full">
					<h2 className="font-bold text-lg text-[#4f4f4f] ">Agendamentos futuros</h2>
				</div>
				<div className="w-full">
					<button type="button" className="bg-[#F9F3FF] w-5 h-5 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer" onClick={()=> carousel2?.scrollTo(currentCarousel2 - 1)}>
						<ArrowRight/>
					</button>
					<Carousel setApi={setCarousel2} opts={{align: "start", loop: true}}> 
						<CarouselContent >
							{Array.from({ length: 6 }).map((_, index) => (
								<CarouselItem className="basis-1/2"  key={`carousel-item-${Date.now()}-${index}`}>
									<div className="bg-white border-b-2 border-b-primary p-5 rounded-lg">
										
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
					<button type="button" className="bg-[#F9F3FF] w-5 h-5 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer" onClick={()=> carousel2?.scrollTo(currentCarousel2 + 1)}>
						<ArrowLeft/>
					</button>
				</div>
			</div>
		</main>
	);
}

export default CollaboratorDashboardPage;
