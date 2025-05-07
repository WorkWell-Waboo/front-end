'use client';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import AconselhamentoFinanceiroSVG from '@/assets/svgs/aconselhamento-financeiro';
import { Arrow } from '@/assets/svgs/arrow';
import FisioterapiaSVG from '@/assets/svgs/fisioterapia';
import HealthCoachingSVG from '@/assets/svgs/health-coaching';
import MassagemSVG from '@/assets/svgs/massagem';
import NutricaoSVG from '@/assets/svgs/nutricion';
import PsicologiaSVG from '@/assets/svgs/psicologia';
import PsiquiatriaSVG from '@/assets/svgs/psiquiatria';
import SonoSVG from '@/assets/svgs/sono';

import SearchBar from '@/components/searchbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, CircleHelp, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Expertise {
  id: number;
  icon: React.ElementType;
  name: string;
}

export default function ManagerPlansPage() {
  //Array de especialidades
  const expertises: Expertise[] = [
    { id: 1, icon: PsicologiaSVG, name: 'Psicologia' },
    { id: 2, icon: PsiquiatriaSVG, name: 'Psiquiatria' },
    { id: 3, icon: NutricaoSVG, name: 'Nutrição' },
    { id: 4, icon: HealthCoachingSVG, name: 'Health Coaching' },
    {
      id: 5,
      icon: AconselhamentoFinanceiroSVG,
      name: 'Aconselhamento Financeiro',
    },
    { id: 6, icon: FisioterapiaSVG, name: 'Fisioterapia' },
    { id: 7, icon: MassagemSVG, name: 'Massagem' },
    { id: 8, icon: SonoSVG, name: 'Sono' },
    { id: 9, icon: PsiquiatriaSVG, name: 'Psiquiatria' },
    { id: 10, icon: PsiquiatriaSVG, name: 'Psiquiatria' },
    { id: 11, icon: PsiquiatriaSVG, name: 'Psiquiatria' },
    { id: 12, icon: PsiquiatriaSVG, name: 'Psiquiatria' },
  ];

  //Array de planos
  const plans = [
    {
      id: 1,
      name: 'Pacote Individual',
      sessions: 1,
      description:
        'Perfeito para quem deseja o primeiro contato com a plataforma.',
      coin: '€',
      price: '200,00',
    },
    {
      id: 2,
      name: 'Pacote Essencial',
      sessions: 4,
      description:
        'Para quem a um acompanhamento inicial com qualidade e flexibilidade.',
      coin: '€',
      price: '800,00',
    },
    {
      id: 3,
      name: 'Plano Premium',
      sessions: 8,
      description:
        'Ideal para quem deseja um acompanhamento consistente e aprofundado.',
      coin: '€',
      price: '1.500,00',
    },
  ];

  const subscriptions = [
    {
      id: 1,
      name: 'Mensal',
      sessions: 'Acesso ilimitado',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      coin: '€',
      price: '800,00',
    },
    {
      id: 2,
      name: 'Trimestral',
      sessions: 'Acesso ilimitado',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      coin: '€',
      price: '2000,00',
    },
    {
      id: 3,
      name: 'Anual',
      sessions: 'Acesso Ilimitado',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      coin: '€',
      price: '5000,00',
    },
  ];
  //Separa as especialidade em grupos para o caroucel
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

  //Função seleção das especialidades
  const [activeId, setActiveId] = useState<number | null>(null);
  const handleClick = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const [carousel, setCarousel] = useState<CarouselApi>();
  const [currentCarousel, setCurrentCarousel] = useState(0);
  // Função do caroucel
  useEffect(() => {
    if (!carousel) return;
    setCurrentCarousel(carousel.selectedScrollSnap());
    carousel.on('select', () =>
      setCurrentCarousel(carousel.selectedScrollSnap())
    );
  }, [carousel]);

  return (
    <main className="px-10 pb-2 flex flex-col ">
      <SearchBar inputDisabled={true} />

      <div className="-mt-2">
        <h2 className="font-semibold text-bases">Assinaturas</h2>
        <p className="text-sm mb-3">
          Com o plano ilimitado, os seus colaboradores têm acesso a várias
          especialidades, sem limite de consumo
        </p>

        <div className="flex flex-col gap-4">
          {/* Simulação de pacotes */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {subscriptions.map((subscription) => (
              <div
                className="flex flex-col gap-1 justify-between p-4 bg-[#736CCE] rounded-md"
                key={subscription.id}
              >
                <div className="block">
                  <h3 className="text-[#FFFFFF] font-medium text-xl">
                    {subscription.name}
                  </h3>
                  <span className="font-normal text-md text-[#F2F2F2]">
                    {subscription.sessions}
                  </span>
                  <hr className="border-[#F2F2F2] my-2" />
                  <p className="font-normal text-sm text-[#F2F2F2] mb-2">
                    {subscription.description}
                  </p>
                  <div className="flex gap-1 items-center text-[#FFFFFF] font-medium">
                    <span className="text-2xl mr-2">{subscription.coin}</span>
                    {subscription.price.split(',')[0] && (
                      <span className="text-4xl">
                        {subscription.price.split(',')[0]}
                      </span>
                    )}
                    {subscription.price.split(',')[1] && (
                      <span className="text-lg -mt-2">
                        ,{subscription.price.split(',')[1]}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="secondary" className="flex-1 " asChild>
                    <Link href="/plans/checkout">Comprar agora</Link>
                  </Button>
                  <Button variant="outline" className="border border-[#FFFFFF]">
                    <ShoppingCart color="#FFFFFF" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Titulo e controles do carousel de especialidades */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-md text-[#4f4f4f] mb-2">
          Compre por especialidade
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

      {/* Carousel de especialidades */}
      <Carousel setApi={setCarousel} opts={{ align: 'start', loop: true }}>
        <CarouselContent>
          {expertiseChunks.map((chunk, index) => (
            <CarouselItem
              key={`carousel-item-${Date.now()}-${index}`}
              className="lg:basis-1/2 flex flex-col gap-2"
            >
              {chunk.map((expertise) => {
                const Icon = expertise.icon;
                const isActive = activeId === expertise.id;
                return (
                  <div className="flex" key={expertise.id}>
                    <Button
                      className={`flex justify-start items-center gap-2 py-1 px-2 h-fit rounded-md cursor-pointer text-[#333333] hover:text-white flex-1 ${
                        isActive ? 'bg-primary text-white' : 'bg-white'
                      }`}
                      onClick={() => handleClick(expertise.id)}
                    >
                      <div className="w-8 h-8 flex justify-center items-center rounded-full bg-white text-primary">
                        <Icon className="w-4 h-4" />
                      </div>
                      <p className="font-medium text-sm">{expertise.name}</p>
                    </Button>
                    {/* Modal detalhes especialidades */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost">
                          <CircleHelp className="w-6! h-6! text-primary hover:text-primary/70" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[450px] px-8 pb-8 pt-10">
                        <DialogHeader className="relative">
                          <div className="w-[60] h-[60] bg-white rounded-full absolute left-[50%] translate-x-[-50%] -top-[70px] flex items-center justify-center">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                          <DialogTitle className="text-2xl! text-[#333333] mb-4">
                            {expertise.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="block">
                          <p className="text-[#4f4f4f] text-sm leading-[1.1] font-normal mb-2">
                            A Psicologia é uma ciência que estuda o
                            comportamento humano, os processos mentais e
                            emocionais, ajudando as pessoas a compreenderem
                            melhor os seus desafios e a desenvolverem
                            estratégias para lidar com eles.
                            <br />
                            Na WoW, as consultas de Psicologia são conduzidas
                            por profissionais especializados em diferentes
                            áreas, desde a saúde mental e emocional até ao
                            desempenho profissional e bem-estar.
                            <br />
                            Quer esteja a passar por momentos de stress,
                            ansiedade, dificuldades emocionais, desafios no
                            trabalho ou questões pessoais, um psicólogo pode
                            ajudá-lo a encontrar equilíbrio e desenvolver
                            estratégias eficazes para melhorar a sua qualidade
                            de vida.
                          </p>
                          <p className="text-[#4f4f4f] text-sm leading-[1.1] font-semibold mb-3">
                            As consultas podem abordar temas como:
                          </p>
                          <ul className="space-y-1 mb-3">
                            <li className="flex items-center gap-1">
                              <Check className="text-[#464646] h-3 w-3" />
                              <span className="text-[#4f4f4f] text-sm leading-[1.1] font-normal">
                                Gestão do stress e da ansiedade
                              </span>
                            </li>
                            <li className="flex items-center gap-1">
                              <Check className="text-[#464646] h-3 w-3" />
                              <span className="text-[#4f4f4f] text-sm leading-[1.1] font-normal">
                                Depressão e questões emocionais
                              </span>
                            </li>
                            <li className="flex items-center gap-1">
                              <Check className="text-[#464646] h-3 w-3" />
                              <span className="text-[#4f4f4f] text-sm leading-[1.1] font-normal">
                                Autoestima e desenvolvimento pessoal
                              </span>
                            </li>
                            <li className="flex items-center gap-1">
                              <Check className="text-[#464646] h-3 w-3" />
                              <span className="text-[#4f4f4f] text-sm leading-[1.1] font-normal">
                                Relacionamentos interpessoais
                              </span>
                            </li>
                            <li className="flex items-center gap-1">
                              <Check className="text-[#464646] h-3 w-3" />
                              <span className="text-[#4f4f4f] text-sm leading-[1.1] font-normal">
                                Saúde mental no trabalho
                              </span>
                            </li>
                            <li className="flex items-center gap-1">
                              <Check className="text-[#464646] h-3 w-3" />
                              <span className="text-[#4f4f4f] text-sm leading-[1.1] font-normal">
                                Psicologia positiva e bem-estar
                              </span>
                            </li>
                          </ul>
                        </div>
                        <DialogFooter className="flex gap-4">
                          <DialogClose asChild>
                            <Button
                              variant="outline"
                              className="flex-1 font-normal"
                            >
                              Voltar
                            </Button>
                          </DialogClose>
                          <Button className="flex-1 font-normal">
                            Falar com o suporte
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                );
              })}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Blocos dos planos */}
      <div className="flex flex-col gap-2 mt-4">
        <h2 className="font-bold text-md text-[#4f4f4f] mb-2">
          Pacotes de sessões
        </h2>
        {/* Simulação de pacotes */}
        <div className="grid grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              className="flex flex-col gap-4 justify-between p-4 bg-white rounded-md"
              key={plan.id}
            >
              <div className="block">
                <h3 className="text-primary font-medium text-xl">
                  {plan.name}
                </h3>
                <span className="font-normal text-md text-[#4F4F4F]">
                  {plan.sessions >= 1
                    ? `${plan.sessions} sessão`
                    : `${plan.sessions} sessões`}{' '}
                </span>
                <hr className="border-[#4F4F4F] my-2" />
                <p className="font-normal text-sm text-[#4F4F4F] mb-2">
                  {plan.description}
                </p>
                <div className="flex gap-1 items-center text-primary font-medium">
                  <span className="text-2xl mr-2">{plan.coin}</span>
                  {plan.price.split(',')[0] && (
                    <span className="text-4xl">{plan.price.split(',')[0]}</span>
                  )}
                  {plan.price.split(',')[1] && (
                    <span className="text-lg -mt-2">
                      ,{plan.price.split(',')[1]}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="flex-1" asChild>
                  <Link href="/plans/checkout">Comprar agora</Link>
                </Button>
                <Button variant="outline">
                  <ShoppingCart />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
