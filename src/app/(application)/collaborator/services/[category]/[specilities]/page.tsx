'use client';
import ImageClient from '@/assets/imgs/cliente.png';
import HeartLikeSVG from '@/assets/svgs/heartlike';
import PersonaSVG from '@/assets/svgs/persona';
import StarOpSVG from '@/assets/svgs/starop';
import YoutubeSVG from '@/assets/svgs/youtube';
import { AgendaScroll } from '@/components/agenda-scroll';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { addDays, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronLeft, Heart, Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
export default function SpecialistProfile() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const toggleFavorite = (name: string) => {
    setFavorites((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };
  const today = new Date();
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(today, i);
    return {
      day: format(date, 'EEE', { locale: ptBR }).toUpperCase(),
      date: format(date, 'd'),
      month: format(date, 'MMM', { locale: ptBR }).toUpperCase(),
      fullDate: date,
    };
  });

  const timeSlots: string[] = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, '0')}:00`
  );

  const specialties: string[] = ['Angústia', 'Ansiedade', 'Autoestima'];

  const experiences: string[] = [
    'Alterações de Humor',
    'Ansiedade',
    'Autoconhecimento',
    'Autoestima',
    'Habilidades de Liderança',
    'Ideação Suicida / Ideias Suicidas',
    'Propósito de Vida',
    'Relacionamentos Profissionais',
  ];

  return (
    <div className="bg-[#EFF1F7] p-10 rounded-xl max-w-full">
      {/* Cabeçalho */}
      <div className="flex justify-between">
        <Button
          variant="ghost"
          className="flex items-center text-[#6B5DD3] hover:bg-transparent"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="ml-1 font-medium">Especialista</span>
        </Button>

        <div className="flex justify-between gap-3 items-center mb-4">
          <span className="text-sm font-medium text-gray-700">
            Selecione o seu horário
          </span>
          <div className="flex gap-2">
            <Select defaultValue="mes">
              <SelectTrigger className="w-[90px] border-ring">
                <SelectValue placeholder="Mês" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mes">Mês</SelectItem>
                <SelectItem value="dezembro">Dezembro</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="ano">
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Ano" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Coluna do especialista */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl bg-[#FBFBFB]">
          <Card className="h-full">
            <CardContent className="h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <Image
                        src={ImageClient}
                        alt="Sandra Amaral"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div className="ml-3">
                        <h2 className="text-base font-semibold text-gray-900">
                          Sandra Amaral
                        </h2>
                        <p className="text-sm text-gray-600">Psicanalista</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleFavorite('Sandra Amaral')}
                    >
                      <HeartLikeSVG
                        className={
                          favorites['Sandra Amaral']
                            ? 'fill-primary text-primary'
                            : 'text-primary'
                        }
                      />
                    </button>

                    <Button
                      variant="outline"
                      className=" mb-4 text-sm text-white bg-primary border-[#6B5DD3]"
                    >
                      <YoutubeSVG />
                      Meu vídeo de apresentação
                    </Button>

                    <p className="text-sm text-gray-600 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3 text-sm text-gray-700">
                      <div className="flex items-center mr-4">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                        <span className="font-medium">5</span>
                        <span className="text-xs text-gray-500 ml-1">
                          (12 comentários)
                        </span>
                      </div>

                      <div className="flex items-center">
                        <PersonaSVG className="h-4 w-4 mr-1" />
                        <span className="font-medium">18 atendimentos</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {specialties.map((tag, index) => (
                        <Badge
                          key={index.toString()}
                          variant="default"
                          className="bg-gray-100 text-[#828282] text-md"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Coluna do agendamento */}
          <div className="w-full py-4 ">
            <AgendaScroll />
          </div>
        </div>

        {/* Avaliações */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <span className=" text-sm font-medium text-muted-foreground mb-1">
                Tipos de consulta:
              </span>
              <Select>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Selecione um tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="presencial">Presencial</SelectItem>
                  <SelectItem value="domicilio">Domicílio</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Card>
              <CardHeader className="text-[#6B5DD3] font-semibold text-sm">
                Experiência:
              </CardHeader>
              <CardContent className="pb-14">
                <ul>
                  {experiences.map((exp) => {
                    return (
                      <li
                        key={exp}
                        className="text-sm text-gray-600 leading-relaxed"
                      >
                        • {exp}
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-2">
            <Button className="w-full bg-[#6B5DD3] text-white hover:bg-[#594cc3]">
              Agendar
            </Button>
            <Card>
              <CardHeader className="text-[#6B5DD3] font-semibold text-sm ">
                O que dizem sobre mim
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  "A Sandra é uma profissional incrível! Desde a primeira
                  consulta, ela demonstrou muita atenção, empatia e dedicação, o
                  que me fez sentir totalmente à vontade para compartilhar
                  minhas questões. Sua abordagem é acolhedora e, ao mesmo tempo,
                  muito assertiva, sempre trazendo reflexões e orientações que
                  realmente fazem a diferença. Sinto que evoluí muito desde o
                  início do tratamento, e cada sessão tem sido essencial para
                  meu crescimento e bem-estar. Sou extremamente grato pelo seu
                  trabalho e pela forma cuidadosa com que conduz cada
                  atendimento. Recomendo de olhos fechados!"
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <StarOpSVG
                        key={i.toString()}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
