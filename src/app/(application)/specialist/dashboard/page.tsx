import PhotoBlog from '@/assets/imgs/blog.png';
import CarouselSection from '@/components/boxcarrosel';
import { SessionCarousel } from '@/components/contentsession/sessionCarrosel';
import SearchBar from '@/components/searchbar';
import { Button } from '@/components/ui/button';

import { Card } from '@/components/ui/card';
import {
  CalendarDays,
  CheckSquare,
  ChevronRight,
  MessageSquareText,
} from 'lucide-react';

import avatar from '@/assets/imgs/avatar.png';
import avatar2 from '@/assets/imgs/avatar2.png';
import avatar3 from '@/assets/imgs/avatar3.png';
function SpecialistDashboardPage() {
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
  ];
  return (
    <main className="px-10">
      <SearchBar isSpecility={true} inputDisabled={true} />
      {/* Period selector */}
      <div className="flex justify-end mb-6">
        <Button
          variant="outline"
          className="bg-white rounded-full px-4 py-2 flex items-center gap-2 text-gray-800"
        >
          <span>Selecionar o período</span>
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
      <div className="h-10" />
      <SessionCarousel title="Amanhã" sessions={sessions} />

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
