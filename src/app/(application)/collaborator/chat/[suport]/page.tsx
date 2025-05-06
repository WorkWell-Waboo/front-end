'use client';
import AirPlaneSVG from '@/assets/svgs/airplane';
import { BellSVG } from '@/assets/svgs/bell';
import LetterLogoSVG from '@/assets/svgs/letterLogo';
import WLetterSVG from '@/assets/svgs/wLetter';
import SearchBar from '@/components/searchbar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Search } from 'lucide-react';
import { useState } from 'react';

// Utilitários
function formatTime(date: Date) {
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });
}
function makeTime(hour: number, minute: number) {
  const date = new Date();
  date.setHours(hour);
  date.setMinutes(minute);
  date.setSeconds(0);
  return formatTime(date);
}

function SuportChat() {
  const [messages, setMessages] = useState<
    { text: string; from: 'user' | 'support'; time: string }[]
  >([
    {
      from: 'user',
      text: 'Olá! Gostaria de informações sobre como posso editar minhas consultas anteriores.',
      time: makeTime(9, 15),
    },
    {
      from: 'support',
      text: 'Olá! Para isso, acesse sua plataforma e entre no ambiente. Você pode atualizá-las facilmente.',
      time: makeTime(9, 17),
    },
    {
      from: 'user',
      text: 'Ah, beleza! Muito obrigado mesmo.',
      time: makeTime(9, 20),
    },
    {
      from: 'support',
      text: 'Disponha! Fico à disposição 😊',
      time: makeTime(9, 21),
    },
  ]);
  const typeMessage = [
    {
      title: 'Suporte Workwell',
      type: 'Suporte técnico',
      date: '20 Jan 2025',
    },
    {
      title: 'Suporte Workwell',
      type: 'Questões financeiras',
      date: '07 Jan 2025',
    },
    {
      title: 'Saúde Workwell',
      type: 'Saúde Workwell',
      date: '02 Jan 2025',
    },
  ];
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false); // controle do dialog

  const sendMessage = () => {
    if (!input.trim()) return;
    const now = new Date();
    const time = formatTime(now);
    setMessages([...messages, { text: input.trim(), from: 'user', time }]);
    setInput('');
  };

  const handleConfirmSOS = () => {
    console.log('SOS ativado');
    setOpen(false);
    // aqui pode disparar lógica de backend, alerta, etc.
  };

  return (
    <div className="px-10 pb-5">
      <SearchBar inputDisabled={true} />
      <div className="grid grid-cols-[2fr_1fr] h-full gap-4 bg-gray-100">
        {/* Chat principal */}
        <div className="bg-white shadow flex flex-col overflow-hidden ">
          <div className="p-5 flex items-center gap-3">
            <LetterLogoSVG />
          </div>

          <div className="flex-1 min-h-120 overflow-y-auto px-5 py-6 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx.toString()}
                className={`relative px-4 py-4 rounded-xl text-sm ${
                  msg.from === 'user'
                    ? 'ml-auto bg-violet-500 max-w-[75%] text-white rounded-tr-none'
                    : 'mr-auto bg-gray-200 text-[#646464] rounded-tl-none pr-10'
                }`}
              >
                {msg.text}
                <span
                  className={`absolute bottom-1 right-2 pr-2 pb-1 text-[10px] ${
                    msg.from === 'user' ? 'text-[#F4F4F4]' : 'text-[#969696]'
                  }`}
                >
                  {msg.time}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4">
            <div className="relative">
              <textarea
                className="w-full h-30 pr-12 px-4 py-2 rounded-xl outline-none bg-[#F3F3F3] resize-none placeholder:text-[#828282]"
                placeholder="Digite aqui sua mensagem"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              />
              <Button
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#307FF4] hover:bg-[#307Ff4]/90 text-white rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
                onClick={sendMessage}
                size="icon"
              >
                <AirPlaneSVG className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="rounded-xl w-full">
              <Input
                className="placeholder:text-[#ADA7A7] w-full"
                placeholder="Pesquisar"
                before={{
                  variant: 'ghost',
                  content: <Search className="text-[#ADA7A7]" />,
                }}
              />
            </div>

            <div className="mt-6 mb-1">
              <span className="text-lg text-[#000000] font-medium ">
                Mensagens: {typeMessage.length.toString().padStart(2, '0')}
              </span>
            </div>

            <div className="rounded-xl flex flex-col gap-2">
              {typeMessage.map((item, i) => (
                <div
                  key={i.toString()}
                  className="flex bg-[#FFFFFF] flex-col pt-4 pb-4 px-4 gap-2"
                >
                  <div className="flex gap-2 items-center">
                    <WLetterSVG className="w-15 h-16" />

                    <div className="flex flex-col">
                      <p className="font-medium text-xl">{item.title}</p>
                      <span className="font-light text-[#9C9C9C]">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <span className="font-light  text-[#9C9C9C] pl-2">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex py-4">
              <Pagination className="flex justify-end">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>

          {/* SOS Saúde mental */}
          <div className="bg-white p-4 text-center space-y-2">
            <p className="text-lg font-medium text-[#4B4B4B]">
              SOS Saúde mental 24/7
            </p>
            <p className="text-xs text-[#969696]">
              Clique no botão de SOS Saúde mental 24/7 para receber ajuda
              imediata.
            </p>
            <Button
              onClick={() => setOpen(true)}
              className="w-full font-normal bg-[#D94040] hover:bg-[#c53333] text-white rounded-full text-sm"
            >
              <BellSVG /> Ativar SOS Saúde mental
            </Button>
          </div>
        </div>

        {/* Dialog do SOS */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-sm text-center rounded-none! space-y-4">
            <DialogHeader>
              <DialogTitle className="text-lg font-medium text-center">
                SOS Saúde mental
              </DialogTitle>
              <DialogDescription className="text-[#717171] text-sm text-center">
                Deseja realmente acionar o botão do pânico?
                <br />
                Estamos prontos para o ajudar.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center gap-4 ">
              <Button
                onClick={handleConfirmSOS}
                className="bg-[#D94040] hover:bg-[#c53333] text-white font-normal  rounded-full px-9 py-6"
              >
                Sim
              </Button>
              <Button
                variant="outline"
                onClick={() => setOpen(false)}
                className="border-[#6E56CF] text-[#333333] rounded-full font-normal px-9 py-6"
              >
                Não
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default SuportChat;
