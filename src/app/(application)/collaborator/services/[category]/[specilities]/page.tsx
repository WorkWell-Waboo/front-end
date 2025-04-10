'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { ChevronLeft, Heart, Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function SpecialistProfile() {
  const [favorite, setFavorite] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('Mês');
  const [selectedYear, setSelectedYear] = useState('Ano');

  const weekDays = [
    { day: 'SEG', date: '23', month: 'DEZ' },
    { day: 'TER', date: '24', month: 'DEZ' },
    { day: 'QUA', date: '25', month: 'DEZ' },
    { day: 'QUI', date: '26', month: 'DEZ' },
    { day: 'SEX', date: '27', month: 'DEZ' },
  ];

  const timeSlots = ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00'];

  const specialties = ['Ansiedade', 'Autoestima'];

  const experiences = [
    'Transtornos de Humor',
    'Ansiedade',
    'Autoconhecimento',
    'Autoestima',
    'Habilidades de Liderança',
    'Ideação Suicida / Ideias Suicidas',
    'Propósito de Vida',
    'Relacionamentos Profissionais',
  ];

  return (
    <div className="bg-white rounded-lg">
      <div className="flex items-center mb-6">
        <Button className="flex items-center text-[#6B5DD3]">
          <ChevronLeft className="h-5 w-5" />
          <span className="ml-1">Especialista</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna da esquerda - Perfil do especialista */}
        <div className="md:col-span-1">
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
                <h2 className="text-lg font-semibold">Sandra Amaral</h2>
                <p className="text-sm text-gray-600">Psicanálise</p>
              </div>
            </div>
            <button
              className="text-gray-400 hover:text-red-500"
              onClick={() => setFavorite(!favorite)}
            >
              <Heart
                className={`h-6 w-6 ${
                  favorite ? 'fill-red-500 text-red-500' : ''
                }`}
              />
            </button>
          </div>

          <div className="mb-6 bg-gray-100 rounded-md p-3 flex items-center">
            <div className="bg-red-500 rounded-full p-1 mr-2">
              <Image
                src="/placeholder.svg?height=20&width=20"
                alt="Vídeo"
                width={20}
                height={20}
                className="invert"
              />
            </div>
            <span className="text-sm">Meu vídeo de apresentação</span>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi uta liquip. ex ea commodo consequat.
            </p>

            <div className="flex items-center mb-2">
              <div className="flex items-center mr-4">
                <Image
                  src="/placeholder.svg?height=16&width=16"
                  alt="Estrela"
                  width={16}
                  height={16}
                  className="mr-1"
                />
                <span className="text-sm font-medium">5</span>
                <span className="text-xs text-gray-500 ml-1">
                  (12 comentários)
                </span>
              </div>

              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=16&width=16"
                  alt="Calendário"
                  width={16}
                  height={16}
                  className="mr-1"
                />
                <span className="text-sm font-medium">18</span>
                <span className="text-xs text-gray-500 ml-1">atendimentos</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium">Tipo de consulta:</label>
              <Select>
                <option>Particular</option>
                <option>Convênio</option>
              </Select>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-[#6B5DD3] font-medium mb-2">Experiência:</h3>
            <ul className="text-sm space-y-1">
              {experiences.map((exp, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#6B5DD3] mr-2">•</span>
                  {exp}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Coluna da direita - Calendário e depoimentos */}
        <div className="md:col-span-2">
          <div className="mb-6 flex justify-between items-center">
            <span className="text-sm">Selecione o seu horário</span>
            <div className="flex gap-2">
              <select
                className="bg-white border border-gray-200 rounded-md px-3 py-1 text-sm"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                <option>Mês</option>
                <option>Janeiro</option>
                <option>Fevereiro</option>
                <option>Março</option>
              </select>

              <select
                className="bg-white border border-gray-200 rounded-md px-3 py-1 text-sm"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option>Ano</option>
                <option>2025</option>
                <option>2026</option>
              </select>
            </div>
          </div>

          {/* Calendário */}
          <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-5 text-center">
              {weekDays.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className="p-2 border-b border-r border-gray-200 last:border-r-0"
                >
                  <div className="text-xs text-gray-500">{day.day}</div>
                  <div className="text-lg font-semibold">{day.date}</div>
                  <div className="text-xs text-gray-500">{day.month}</div>
                </div>
              ))}

              {timeSlots.map((time, timeIndex) => (
                <>
                  {weekDays.map((_, dayIndex) => (
                    <div
                      key={`${timeIndex}-${dayIndex}`}
                      className="p-2 text-center border-b border-r border-gray-200 last:border-r-0 last:border-b-0 hover:bg-gray-50 cursor-pointer"
                    >
                      {time}
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>

          <button className="w-full bg-[#6B5DD3] text-white py-3 rounded-md font-medium hover:bg-[#5A4DC3] transition-colors mb-8">
            Agendar
          </button>

          {/* Depoimentos */}
          <div>
            <h3 className="text-[#6B5DD3] font-medium mb-3">
              O que dizem sobre mim
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-4">
                "A Sandra é uma profissional incrível! Desde a primeira
                consulta, ela demonstrou muita atenção, empatia e dedicação, o
                que me fez sentir totalmente à vontade para compartilhar minhas
                questões. Sua abordagem é cuidadosa e ao mesmo tempo muito
                assertiva, sempre atendendo às minhas necessidades que realmente
                fazem a diferença. Sinto que evolui muito desde o início do
                tratamento e cada sessão tem sido essencial para meu crescimento
                e bem-estar. Sou extremamente grato pelo seu trabalho e pela
                forma cuidadosa com que conduz cada atendimento. Recomendo de
                olhos fechados!"
              </p>
              <div className="flex justify-between items-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Avatar do cliente"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
