'use client';
import AirPlaneSVG from '@/assets/svgs/airplane';
import LetterLogoSVG from '@/assets/svgs/letterLogo';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
function SuportChat() {
  const [messages, setMessages] = useState<
    { text: string; from: 'user' | 'support' }[]
  >([
    {
      from: 'user',
      text: 'Olá! Gostaria de informações sobre como posso editar minhas consultas anteriores.',
    },
    {
      from: 'support',
      text: 'Olá! Para isso, acesse sua plataforma e entre no ambiente. Você pode atualizá-las facilmente.',
    },
    { from: 'user', text: 'Ah, beleza! Muito obrigado mesmo.' },
    { from: 'support', text: 'Disponha! Fico à disposição 😊' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input.trim(), from: 'user' }]);
    setInput('');
    // Aqui depois pode simular resposta do suporte ou enviar pro backend
  };

  return (
    <div className="grid grid-cols-[2fr_1fr] h-screen p-10 gap-2 bg-gray-100">
      {/* Chat principal */}
      <div className="bg-white  shadow flex flex-col justify-between">
        <div className="p-5 flex items-center gap-3">
          <LetterLogoSVG />
        </div>

        {/* Mensagens */}
        <div className="flex-1 overflow-y-auto px-5 py-3 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx.toString()}
              className={`max-w-[75%] px-4 py-2 rounded-xl text-sm ${
                msg.from === 'user'
                  ? 'ml-auto bg-violet-500 text-white'
                  : 'mr-auto bg-gray-200 text-gray-800'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t flex items-center gap-2">
          <input
            className="flex-1 px-4 py-2 rounded-full border outline-none bg-[#F3F3F3]"
            placeholder="Digite sua mensagem"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <Button
            className="bg-[#307FF4] hover:bg-violet-600 text-white p-3 rounded-full"
            onClick={sendMessage}
          >
            <AirPlaneSVG className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Coluna lateral */}
      <div className="bg-transparent flex flex-col gap-4 p-4">
        <div className="bg-white rounded-xl shadow p-4">
          <div className="font-semibold mb-2">Categoria</div>
          <select className="w-full border rounded px-2 py-1">
            <option>Dúvida</option>
            <option>Financeiro</option>
            <option>Técnico</option>
          </select>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <span className="text-sm text-gray-600">
            Mensagens: {messages.length.toString().padStart(2, '0')}
          </span>
        </div>
        {/* Aqui você pode adicionar cards com informações do cliente ou da conversa */}
        <div className="bg-white rounded-xl shadow p-4">
          [Cards personalizados]
        </div>
      </div>
    </div>
  );
}

export default SuportChat;
