'use client';

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
import { Calendar, ChevronLeft, Heart, Star, Video } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

export default function SpecialistProfile() {
  const [favorite, setFavorite] = useState(false);

  interface WeekDay {
    day: string;
    date: string;
    month: string;
  }

  const weekDays: WeekDay[] = [
    { day: 'SEG', date: '23', month: 'DEZ' },
    { day: 'TER', date: '24', month: 'DEZ' },
    { day: 'QUA', date: '25', month: 'DEZ' },
    { day: 'QUI', date: '26', month: 'DEZ' },
    { day: 'SEX', date: '27', month: 'DEZ' },
  ];

  const timeSlots: string[] = [
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
  ];

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
    <div className="bg-[#EFF1F7] p-10 rounded-xl max-w-full  mx-auto">
      {/* Cabeçalho */}
      <div className="flex justify-between ">
        <Button
          variant="ghost"
          className="flex items-center text-[#6B5DD3] hover:bg-transparent"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="ml-1 font-medium">Especialista</span>
        </Button>

        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-700">
            Selecione o seu horário
          </span>
          <div className="flex gap-2">
            <Select defaultValue="mes">
              <SelectTrigger className="w-[100px]">
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

      <div className="grid grid-cols-1 gap-6">
        {/* Coluna do especialista */}
        <div className="grid grid-cols-2 w-full rounded-2xl bg-[#FBFBFB]">
          <Card className="">
            <CardContent className="">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
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
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-red-500 hover:bg-transparent"
                  onClick={() => setFavorite(!favorite)}
                >
                  <Heart
                    className={`h-6 w-6 ${
                      favorite ? 'fill-red-500 text-red-500' : ''
                    }`}
                  />
                </Button>
              </div>

              <Button
                variant="outline"
                className="w-full mb-4 text-sm text-[#6B5DD3] border-[#6B5DD3]"
              >
                <Video className="h-4 w-4 mr-2" />
                Meu vídeo de apresentação
              </Button>

              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="flex items-center mb-3 text-sm text-gray-700">
                <div className="flex items-center mr-4">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="font-medium">5</span>
                  <span className="text-xs text-gray-500 ml-1">
                    (12 comentários)
                  </span>
                </div>

                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="font-medium">18 atendimentos</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {specialties.map((tag, index) => (
                  <Badge
                    key={index.toString()}
                    variant="outline"
                    className="bg-gray-100 text-gray-700"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="">
            <CardContent className="p-5">
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                <div className="grid grid-cols-5 text-center">
                  {weekDays.map((day, i) => (
                    <div
                      key={i.toString()}
                      className="p-2 border-b border-r border-gray-200 last:border-r-0"
                    >
                      <div className="text-xs text-gray-500">{day.day}</div>
                      <div className="text-lg font-semibold">{day.date}</div>
                      <div className="text-xs text-gray-500">{day.month}</div>
                    </div>
                  ))}
                  {timeSlots.map((time, i) => (
                    <React.Fragment key={i.toString()}>
                      {weekDays.map((_, j) => (
                        <div
                          key={`${i.toString()}-${j}`}
                          className="p-2 text-sm border-b border-r border-gray-200 last:border-r-0 hover:bg-gray-100 cursor-pointer"
                        >
                          {time}
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-[#6B5DD3] text-white hover:bg-[#594cc3]">
                Agendar
              </Button>
            </CardContent>
          </div>
        </div>

        {/* Coluna do agendamento */}
        <div className="col-span-2 space-y-6">
          <Card>
            <CardHeader className="text-[#6B5DD3] font-semibold text-sm">
              O que dizem sobre mim
            </CardHeader>
            <CardContent className="p-5">
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                “A Sandra é uma profissional incrível! Desde a primeira
                consulta, ela demonstrou muita atenção, empatia e dedicação…
                Recomendo de olhos fechados!”
              </p>
              <div className="flex justify-between items-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
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
  );
}
