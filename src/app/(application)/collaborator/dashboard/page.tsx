'use client'

import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
	type CarouselApi
} from "@/components/ui/carousel"

import ArrowRight from "@/assets/svgs/arrowRight";
import ArrowLeft from "@/assets/svgs/arrowLeft";


function CollaboratorDashboardPage() {
	const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

	useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

	return (
		<main className="p-10 grid grid-cols-2 gap-4">
			<div className="bg-gradient-to-r from-primary to-primary/50 p-5 rounded-lg">
				<h2 className="font-medium text-2xl text-white mb-2"><span>Olá, Mariana Lemos</span></h2>
				<p className="font-normal text-sm text-white ">Bem-vinda! Que tal dar o próximo passo no cuidado com você? Escolha um profissional e agende um horário para sua sessão.</p>
			</div>
			<div className="bg-white border-b-2 border-b-primary p-5 rounded-lg">
				<div className="flex justify-between items-center">
					<h2 className="font-bold text-xl text-[#4f4f4f] mb-2">Sessões disponíveis</h2>
					<div className="flex gap-4">
						<button className=":hover:cursor-pointer bg-[#F9F3FF] w-[20px] h-[20px] flex justify-center items-center drop-shadow-xs rounded-full " onClick={()=> api?.scrollTo(current - 1)}>
							<ArrowRight/>
						</button>
						<button className="bg-amber-300" onClick={()=> api?.scrollTo(current + 1)}>
							<ArrowLeft/>
						</button>
					</div>
				</div>
				<Carousel  setApi={setApi}> 
					<CarouselContent>
						{Array.from({ length: 5 }).map((_, index) => (
							<CarouselItem key={index}>
								<div className="grid grid-cols-2 gap-0.5">
									<p className="font-bold text-sm text-primary">Psicologia: 
										<span className="font-semibold text-[#4f4f4f]"> 0 sessões</span>
									</p>
									<p className="font-bold text-sm text-primary">Psicologia: 
										<span className="font-semibold text-[#4f4f4f]"> 0 sessões</span>
									</p>
									<p className="font-bold text-sm text-primary">Psicologia: 
										<span className="font-semibold text-[#4f4f4f]"> 0 sessões</span>
									</p>
									<p className="font-bold text-sm text-primary">Psicologia: 
										<span className="font-semibold text-[#4f4f4f]"> 0 sessões</span>
									</p>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		
		</main>
	);
}

export default CollaboratorDashboardPage;
