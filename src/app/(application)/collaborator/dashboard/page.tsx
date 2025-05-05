'use client';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/libraries/utils';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import PhotoBlog from '@/assets/imgs/blog.png';
import Photo from '@/assets/imgs/cliente.png';
import PhotoQuiz from '@/assets/imgs/quiz.png';
import PhotoWebinar1 from '@/assets/imgs/webinar-1.png';

import ArrowLeft from '@/assets/svgs/arrowLeft';
import ArrowRight from '@/assets/svgs/arrowRight';
import { EllipsisIcon } from '@/assets/svgs/ellipsis';
import { FlagIcon } from '@/assets/svgs/flag';
import TermsModal from '@/components/termsmodal';

function CollaboratorDashboardPage() {
  const appointments = [
    {
      id: 1,
      photo: Photo,
      name: 'Sandra Amaral',
      profession: 'Psicanalista',
      date: 'Quinta - Jan 16',
      time: '14:00 - 15:00 PM',
      isActive: true,
    },
    {
      id: 2,
      photo: Photo,
      name: 'Carlos Oliveira',
      profession: 'Coach de Vida',
      date: 'Sexta - Jan 17',
      time: '10:00 - 11:00 AM',
      isActive: false,
    },
    {
      id: 3,
      photo: Photo,
      name: 'Adriele Cunha',
      profession: 'Nutricionista',
      date: 'Sexta - Jan 17',
      time: '10:00 - 11:00 AM',
      isActive: false,
    },
  ];

  const [carousel1, setCarousel1] = useState<CarouselApi>();
  const [currentCarousel1, setCurrentCarousel1] = useState(0);

  useEffect(() => {
    if (!carousel1) {
      return;
    }

    setCurrentCarousel1(carousel1.selectedScrollSnap());

    carousel1.on('select', () => {
      setCurrentCarousel1(carousel1.selectedScrollSnap());
    });
  }, [carousel1]);

  const [carousel2, setCarousel2] = useState<CarouselApi>();
  const [currentCarousel2, setCurrentCarousel2] = useState(0);

  useEffect(() => {
    if (!carousel2) {
      return;
    }

    setCurrentCarousel2(carousel2.selectedScrollSnap());

    carousel2.on('select', () => {
      setCurrentCarousel2(carousel2.selectedScrollSnap());
    });
  }, [carousel2]);

  return (
    <main className="p-10 flex flex-col gap-4">
      {/* TOPO */}
      <TermsModal />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="bg-gradient-to-r from-primary to-primary/50 p-5 rounded-lg">
          <h2 className="font-medium text-2xl text-white mb-2">
            <span>Olá, Mariana Lemos</span>
          </h2>
          <p className="font-normal text-sm text-white ">
            Bem-vinda! Que tal dar o próximo passo no cuidado com você? Escolha
            um profissional e agende um horário para sua sessão.
          </p>
        </div>
        <div className="bg-white border-b-2 border-b-primary p-5 rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl text-[#4f4f4f] mb-2">
              Sessões disponíveis
            </h2>
            <div className="flex gap-2">
              <button
                type="button"
                className="bg-[#F9F3FF] w-5 h-5 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer"
                onClick={() => carousel1?.scrollTo(currentCarousel1 - 1)}
              >
                <ArrowRight />
              </button>
              <button
                type="button"
                className="bg-[#F9F3FF] w-5 h-5 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer"
                onClick={() => carousel1?.scrollTo(currentCarousel1 + 1)}
              >
                <ArrowLeft />
              </button>
            </div>
          </div>
          <Carousel setApi={setCarousel1}>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={`carousel-item-${Date.now()}-${index}`}>
                  <div className="grid grid-cols-2 gap-2">
                    <p className="font-bold text-sm text-primary">
                      Psicologia:
                      <span className="font-semibold text-[#4f4f4f]">
                        {' '}
                        0 sessões
                      </span>
                    </p>
                    <p className="font-bold text-sm text-primary">
                      Psiquiatria:
                      <span className="font-semibold text-[#4f4f4f]">
                        {' '}
                        0 sessões
                      </span>
                    </p>
                    <p className="font-bold text-sm text-primary">
                      Nutrição:
                      <span className="font-semibold text-[#4f4f4f]">
                        {' '}
                        0 sessões
                      </span>
                    </p>
                    <p className="font-bold text-sm text-primary">
                      Health coaching
                      <span className="font-semibold text-[#4f4f4f]">
                        {' '}
                        0 sessões
                      </span>
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      {/* Agendamentos futuros */}
      <div className="flex flex-col gap-4">
        <div className="col-span-full">
          <h2 className="font-semibold text-lg text-[#4f4f4f] ">
            Agendamentos futuros
          </h2>
        </div>
        <div className="relative w-full">
          <button
            type="button"
            className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-2 bg-[#F9F3FF] w-7 h-7 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer"
            onClick={() => carousel2?.scrollTo(currentCarousel2 - 1)}
          >
            <ArrowRight />
          </button>
          <button
            type="button"
            className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-2 bg-[#F9F3FF] w-7 h-7 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer"
            onClick={() => carousel2?.scrollTo(currentCarousel2 + 1)}
          >
            <ArrowLeft />
          </button>
          <Carousel setApi={setCarousel2} opts={{ align: 'start', loop: true }}>
            <CarouselContent>
              {appointments.map((appointment) => (
                <CarouselItem className=" lg:basis-1/2" key={appointment.id}>
                  <div
                    className={cn(
                      'px-8 py-4 rounded-lg flex items-center gap-5 border-b-2 h-full',
                      appointment.isActive
                        ? 'bg-primary border-b-white'
                        : 'bg-white border-b-primary'
                    )}
                  >
                    <Image
                      src={appointment.photo}
                      alt={`Foto de ${appointment.name}`}
                      width={75}
                      height={75}
                      className="rounded-full w-[75] h-[75]"
                    />
                    <div className="flex flex-col flex-1">
                      <span
                        className={cn(
                          'font-bold text-lg',
                          appointment.isActive ? 'text-white' : 'text-primary'
                        )}
                      >
                        {appointment.name}
                      </span>
                      <span
                        className={cn(
                          'font-light text-sm',
                          appointment.isActive ? 'text-white' : 'text-[#4f4f4f]'
                        )}
                      >
                        {appointment.profession}
                      </span>
                    </div>
                    <div
                      className={cn(
                        'flex flex-col font-light text-xs text-right w-[110px]',
                        appointment.isActive ? 'text-white' : 'text-[#4f4f4f]'
                      )}
                    >
                      <span>{appointment.date}</span>
                      <span>{appointment.time}</span>
                      <Button
                        className={cn(
                          'mt-2 text-xs rounded-full',
                          appointment.isActive
                            ? 'bg-white hover:bg-white/75 text-black'
                            : 'bg-primary text-white '
                        )}
                      >
                        Ver agenda
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      {/* Webinars */}
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-full">
          <h2 className="font-semibold text-lg text-[#4f4f4f] ">Webinars</h2>
        </div>
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            className="bg-primary border-b-2 border-b-white p-4 rounded-lg flex items-center gap-5"
            key={`carousel-item-${Date.now()}-${index}`}
          >
            <Image
              src={PhotoWebinar1}
              alt="foto cliente"
              width={145}
              height={145}
              className="rounded-lg h-[150] w-[150] object-cover"
            />
            <div className="flex flex-col flex-1 gap-3">
              <h3 className="font-bold text-sm text-white">
                Expanda sua mente: Webinars exclusivos todo mês
              </h3>
              <p className="font-light text-xs text-white">
                Aprofunde seu autoconhecimento com encontros mensais sobre
                bem-estar, reflexões e novas perspectivas.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-light text-xs text-white">
                  5 min read
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex justify-center items-center cursor-pointer w-[20] h-[20]"
                  >
                    <FlagIcon className="text-white" />
                  </button>
                  <button
                    type="button"
                    className="flex justify-center items-center cursor-pointer w-[20] h-[20]"
                  >
                    <EllipsisIcon className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* blog e quiz */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg text-[#4f4f4f] ">
              Matéria/Blog
            </h2>
            <Button variant="outline" className="rounded-full text-sm">
              Ver mais
            </Button>
          </div>
          <div className="bg-white border-b-2 border-b-primary p-4 rounded-lg flex items-center gap-5">
            <Image
              src={PhotoBlog}
              alt="foto cliente"
              width={145}
              height={145}
              className="rounded-lg h-[150] w-[150] object-cover"
            />
            <div className="flex flex-col flex-1 gap-3">
              <h3 className="font-bold text-sm text-primary">
                Descubra Quem Você Realmente É: Primeiros Passos do
                Autoconhecimento
              </h3>
              <p className="font-light text-xs text-[#4f4f4f]">
                Autoconhecimento é a chave para tomar decisões mais conscientes
                e viver alinhado aos seus valores. Entenda como começar!
              </p>
              <div className="flex justify-between items-center">
                <span className="font-light text-xs text-[#828282]">
                  5 min read
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex justify-center items-center cursor-pointer w-[20] h-[20]"
                  >
                    <FlagIcon className="text-[#828282]" />
                  </button>
                  <button
                    type="button"
                    className="flex justify-center items-center cursor-pointer w-[20] h-[20]"
                  >
                    <EllipsisIcon className="text-[#828282]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg text-[#4f4f4f] ">Quiz</h2>
            <Button variant="outline" className="rounded-full text-sm">
              Ver mais
            </Button>
          </div>
          <div className="bg-white border-b-2 border-b-primary p-4 rounded-lg flex items-center gap-5">
            <Image
              src={PhotoQuiz}
              alt="foto cliente"
              width={145}
              height={145}
              className="rounded-lg h-[150] w-[150] object-cover"
            />
            <div className="flex flex-col flex-1 gap-3">
              <h3 className="font-bold text-sm text-primary">
                Você Se Conhece Bem o Suficiente? Teste Aqui!
              </h3>
              <p className="font-light text-xs text-[#4f4f4f]">
                Explore aspectos únicos da sua personalidade e descubra como o
                autoconhecimento impacta sua rotina.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-light text-xs text-[#828282]">
                  5 min read
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex justify-center items-center cursor-pointer w-[20] h-[20]"
                  >
                    <FlagIcon className="text-[#828282]" />
                  </button>
                  <button
                    type="button"
                    className="flex justify-center items-center cursor-pointer w-[20] h-[20]"
                  >
                    <EllipsisIcon className="text-[#828282]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CollaboratorDashboardPage;
