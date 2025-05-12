'use client';
import PhotoBlog from '@/assets/imgs/blog.png';
import CarouselSection from '@/components/boxcarrosel';
import { SessionCarousel } from '@/components/contentsession/sessionCarrosel';
import SearchBar from '@/components/searchbar';

import { format } from 'date-fns';

import { Button } from '@/components/ui/button';

import { Card } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  CalendarDays,
  CalendarIcon,
  CheckSquare,
  ChevronDown,
  MessageSquareText,
} from 'lucide-react';

import avatar from '@/assets/imgs/avatar.png';
import avatar2 from '@/assets/imgs/avatar2.png';
import avatar3 from '@/assets/imgs/avatar3.png';
import { Calendar } from '@/components/ui/calendar';

import { cn } from '@/libraries/utils';
import React from 'react';
function SpecialistDashboardPage() {
  const [date, setDate] = React.useState<Date>();
  const sessions = [
    {
      name: 'João Silva',
      date: 'Quinta - Jan 16',
      time: '14:00 - 15:00 PM',
      avatar: avatar,
    },
    {
      name: 'Juliana Lima',
      date: 'Quinta - Jan 16',
      time: '14:00 - 15:00 PM',
      avatar: avatar2,
    },
    {
      name: 'Pedro Santos',
      date: 'Quinta - Jan 16',
      time: '14:00 - 15:00 PM',
      avatar: avatar3,
    },
    {
      name: 'Juliana Lima',
      date: 'Quinta - Jan 16',
      time: '14:00 - 15:00 PM',
      avatar: avatar2,
    },
  ];
  return (
    <main className="px-10">
      <SearchBar isSpecility={true} inputDisabled={true} />
      {/* Period selector */}
      <div className="flex justify-end mb-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-[240px] justify-between border-none bg-[#FFFFFF] text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <div className="flex items-center gap-2">
                <CalendarIcon
                  width={14}
                  height={7}
                  className="text-[#736CCE]"
                />
                {date ? format(date, 'PPP') : <span>Selecione o periodo</span>}
              </div>
              <ChevronDown
                width={14}
                height={7}
                className="text-[#736CCE] w-3.5 h-2"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
        <Card className="bg-[#736CCE] text-white p-6 flex flex-row items-center gap-4">
          <div className="bg-white rounded-full p-4 ">
            <MessageSquareText className="h-6 w-6 text-[#736CCE]" />
          </div>
          <div>
            <h2 className=" font-medium">Chat</h2>
            <p className="text-sm font-medium text-[#F2F2F2]">
              04 mensagens
              <br />
              não lidas
            </p>
          </div>
        </Card>

        <Card className="bg-white p-6 flex flex-row items-center gap-4 border-b-3! border-[#736CCE] border-0">
          <div className="p-4 bg-[#F8F7FC] rounded-full ">
            <CalendarDays className="h-6 w-6 text-[#736CCE]" />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-sm text-gray-700">Sessões agendadas</h2>
            <p className="text-5xl font-bold text-[#736CCE] mt-1">210</p>
          </div>
        </Card>

        <Card className="bg-white p-6 flex flex-row items-center gap-4 border-b-3! border-[#736CCE] border-0">
          <div className="p-4 bg-[#F8F7FC] rounded-full ">
            <CheckSquare className="h-6 w-6 text-[#736CCE]" />
          </div>
          <div className="">
            <h2 className="text-sm text-gray-700">Sessões realizadas</h2>
            <p className="text-5xl font-bold text-[#736CCE] mt-1">169</p>
          </div>
        </Card>
      </div>

      <SessionCarousel title="Suas próximas sessões" sessions={sessions} />
      <div className="h-5" />
      <SessionCarousel title="Amanhã" sessions={sessions} />
      <div className="h-5" />

      <CarouselSection
        title="Matéria/Blog"
        link="/contents/blog"
        imageSrc={PhotoBlog}
        imageAlt="foto post"
        items={Array.from({ length: 5 }).map((_, index) => ({
          title: `Descubra Quem Você Realmente É: Primeiros Passos do Autoconhecimento ${index}`,
          text: 'Autoconhecimento é a chave para tomar decisões mais conscientes e viver alinhado aos seus valores. Entenda como começar!',
          href: `/contents/blog/${index}`,
          time: '5 min',
        }))}
      />
    </main>
  );
}

export default SpecialistDashboardPage;
