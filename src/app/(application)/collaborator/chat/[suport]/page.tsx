'use client';
import AirPlaneSVG from '@/assets/svgs/airplane';
import LetterLogoSVG from '@/assets/svgs/letterLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState } from 'react';
// Formata como hh:mm em pt-BR
function formatTime(date: Date) {
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

// Cria um horário simulado (ex: 14:20)
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
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const now = new Date();
    const time = formatTime(now);

    setMessages([...messages, { text: input.trim(), from: 'user', time }]);
    setInput('');
  };

  return (
    <div className="grid grid-cols-[2fr_1fr] h-screen p-10 gap-2 bg-gray-100">
      {/* Chat principal */}
      <div className="bg-white shadow flex flex-col justify-between">
        <div className="p-5 flex items-center gap-3">
          <LetterLogoSVG />
        </div>

        {/* Mensagens */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx.toString()}
              className={`relative max-w-[75%] px-4 py-4 rounded-xl text-sm ${
                msg.from === 'user'
                  ? 'ml-auto bg-violet-500 text-white rounded-tr-none'
                  : 'mr-auto bg-gray-200 text-[#646464] rounded-tl-none'
              }`}
            >
              {msg.text}
              <span
                className={`absolute bottom-1 right-2 pr-2 pb-1 text-[10px] text-[#969696] ${
                  msg.from === 'user' ? 'text-[#F4F4F4]' : 'text-[#969696]'
                }`}
              >
                {msg.time}
              </span>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 ">
          <div className="relative">
            <textarea
              className="w-full h-30 pr-12 px-4 py-2 rounded-xl  outline-none bg-[#F3F3F3] resize-none placeholder:text-top placeholder:text-[#828282]"
              placeholder="Digite aqui sua mensagem"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <Button
              className="absolute right-2 top-1/2 shadow-2xl -translate-y-1/2 bg-[#307FF4] hover:bg-[#307Ff4]/90 text-white rounded-full"
              onClick={sendMessage}
              size="icon"
            >
              <AirPlaneSVG className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Coluna lateral */}
      <div className="bg-transparent flex flex-col gap-4 p-4">
        <div className=" rounded-xl p-4">
          <Input before={Search} />
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <span className="text-sm text-gray-600">
            Mensagens: {messages.length.toString().padStart(2, '0')}
          </span>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          [Cards personalizados]
        </div>
      </div>
    </div>
  );
}

export default SuportChat;
