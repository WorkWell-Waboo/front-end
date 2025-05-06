'use client';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

import { Arrow } from '@/assets/svgs/arrow';

import PhotoBlog from '@/assets/imgs/blog.png';
import PhotoVideo from '@/assets/imgs/pessoas.jpeg';
import PhotoQuiz from '@/assets/imgs/quiz.png';
import PhotoWebnar from '@/assets/imgs/webnar.png';
import CategoriesContents from '@/components/categoriesContents';
import SearchBar from '@/components/searchbar';
import WBox from '@/components/wbox';
import Link from 'next/link';

function CollaboratorContentsPage() {
  // carousel blog
  const [carouselBlog, setCarouselBlog] = useState<CarouselApi>();
  const [currentCarouselBlog, setCurrentCarouselBlog] = useState(0);

  useEffect(() => {
    if (!carouselBlog) {
      return;
    }

    setCurrentCarouselBlog(carouselBlog.selectedScrollSnap());

    carouselBlog.on('select', () => {
      setCurrentCarouselBlog(carouselBlog.selectedScrollSnap());
    });
  }, [carouselBlog]);

  // carousel quiz
  const [carouselQuiz, setCarouselQuiz] = useState<CarouselApi>();
  const [currentCarouselQuiz, setCurrentCarouselQuiz] = useState(0);

  useEffect(() => {
    if (!carouselQuiz) {
      return;
    }

    setCurrentCarouselQuiz(carouselQuiz.selectedScrollSnap());

    carouselQuiz.on('select', () => {
      setCurrentCarouselQuiz(carouselQuiz.selectedScrollSnap());
    });
  }, [carouselQuiz]);

  // carousel video
  const [carouselVideo, setCarouselVideo] = useState<CarouselApi>();
  const [currentCarouselVideo, setCurrentCarouselVideo] = useState(0);

  useEffect(() => {
    if (!carouselVideo) {
      return;
    }

    setCurrentCarouselVideo(carouselVideo.selectedScrollSnap());

    carouselVideo.on('select', () => {
      setCurrentCarouselVideo(carouselVideo.selectedScrollSnap());
    });
  }, [carouselVideo]);

  // carousel webnar
  const [carouselWebnar, setCarouselWebnar] = useState<CarouselApi>();
  const [currentCarouselWebnar, setCurrentCarouselWebnar] = useState(0);

  useEffect(() => {
    if (!carouselWebnar) {
      return;
    }

    setCurrentCarouselWebnar(carouselWebnar.selectedScrollSnap());

    carouselWebnar.on('select', () => {
      setCurrentCarouselWebnar(carouselWebnar.selectedScrollSnap());
    });
  }, [carouselWebnar]);

  return (
    <main className="px-10 pb-10 ">
      <SearchBar />
      <div className="flex flex-col gap-4">
        {/* Menu superior */}
        <CategoriesContents />
        {/* Materia Blog */}
        <div className="block">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-lg text-[#4f4f4f] ">
              Matéria/Blog
            </h2>
            <Link href="/contents/blog">
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
              onClick={() => carouselBlog?.scrollTo(currentCarouselBlog - 1)}
            >
              <Arrow className="text-primary w-1.5 h-2" />
            </button>
            <button
              type="button"
              className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-2 bg-[#F9F3FF] w-7 h-7 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer"
              onClick={() => carouselBlog?.scrollTo(currentCarouselBlog + 1)}
            >
              <Arrow className="text-primary w-1.5 h-2 rotate-180" />
            </button>
            <Carousel
              setApi={setCarouselBlog}
              opts={{ align: 'start', loop: true }}
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    className=" lg:basis-1/2"
                    key={`carousel-item-${Date.now()}-${index}`}
                  >
                    <WBox
                      variant="white"
                      id={index}
                      imageSrc={PhotoBlog}
                      imageAlt="foto post"
                      title={`Descubra Quem Você Realmente É: Primeiros Passos do Autoconhecimento ${index}`}
                      text="Autoconhecimento é a chave para tomar decisões mais conscientes e viver alinhado aos seus valores. Entenda como começar!"
                      link={`/contents/blog/${index}`}
                      time="5 min"
                      buttons={['heart']}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        {/* Quiz */}
        <div className="block">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-lg text-[#4f4f4f] ">Quiz</h2>
            <Link href="/contents/quiz">
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
              onClick={() => carouselQuiz?.scrollTo(currentCarouselQuiz - 1)}
            >
              <Arrow className="text-primary w-1.5 h-2" />
            </button>
            <button
              type="button"
              className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-2 bg-[#F9F3FF] w-7 h-7 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer"
              onClick={() => carouselQuiz?.scrollTo(currentCarouselQuiz + 1)}
            >
              <Arrow className="text-primary w-1.5 h-2 rotate-180" />
            </button>
            <Carousel
              setApi={setCarouselQuiz}
              opts={{ align: 'start', loop: true }}
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    className=" lg:basis-1/2"
                    key={`carousel-item-${Date.now()}-${index}`}
                  >
                    <WBox
                      variant="white"
                      id={index}
                      imageSrc={PhotoQuiz}
                      imageAlt="foto post"
                      title={`Você Se Conhece Bem o Suficiente? Teste Aqui! ${index}`}
                      text="Explore aspectos únicos da sua personalidade e descubra como o autoconhecimento impacta sua rotina."
                      link={`/contents/quiz/${index}`}
                      time="5 min"
                      buttons={['heart']}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        {/* Videos */}
        <div className="block">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-lg text-[#4f4f4f] ">Videos</h2>
            <Link href="/contents/video">
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
              onClick={() => carouselVideo?.scrollTo(currentCarouselVideo - 1)}
            >
              <Arrow className="text-primary w-1.5 h-2" />
            </button>
            <button
              type="button"
              className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-2 bg-[#F9F3FF] w-7 h-7 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer"
              onClick={() => carouselVideo?.scrollTo(currentCarouselVideo + 1)}
            >
              <Arrow className="text-primary w-1.5 h-2 rotate-180" />
            </button>
            <Carousel
              setApi={setCarouselVideo}
              opts={{ align: 'start', loop: true }}
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    className=" lg:basis-1/2"
                    key={`carousel-item-${Date.now()}-${index}`}
                  >
                    <WBox
                      variant="white"
                      id={index}
                      imageSrc={PhotoVideo}
                      imageAlt="foto post"
                      title={`O Que É Autoconhecimento e Por Que Ele Importa? ${index}`}
                      text="Descubra como entender melhor a si mesmo pode transformar sua vida em todos os aspectos!"
                      link={`/contents/video/${index}`}
                      time="5 min"
                      buttons={['heart']}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        {/* Webnars */}
        <div className="block">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-lg text-[#4f4f4f] ">Webnars</h2>
            <Link href="/contents/webnar">
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
              onClick={() =>
                carouselWebnar?.scrollTo(currentCarouselWebnar - 1)
              }
            >
              <Arrow className="text-primary w-1.5 h-2" />
            </button>
            <button
              type="button"
              className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-2 bg-[#F9F3FF] w-7 h-7 flex justify-center items-center drop-shadow-md rounded-full cursor-pointer"
              onClick={() =>
                carouselWebnar?.scrollTo(currentCarouselWebnar + 1)
              }
            >
              <Arrow className="text-primary w-1.5 h-2 rotate-180" />
            </button>
            <Carousel
              setApi={setCarouselWebnar}
              opts={{ align: 'start', loop: true }}
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    className=" lg:basis-1/2"
                    key={`carousel-item-${Date.now()}-${index}`}
                  >
                    <WBox
                      variant="white"
                      id={index}
                      imageSrc={PhotoWebnar}
                      imageAlt="foto post"
                      title={`Movimente-se: sessões de atividade física para seu bem-estar ${index}`}
                      text="Descubra como entender melhor a si mesmo pode transformar sua vida em todos os aspectos!"
                      link={`/contents/webnar/${index}`}
                      time="5 min"
                      buttons={['heart']}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CollaboratorContentsPage;
