'use client';

import GoBackButton from '@/components/go-back-button';
import SearchBar from '@/components/searchbar';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { useState } from 'react';

export default function Anamnese() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const questions = [
    {
      id: 1,
      text: 'Nas últimas 2 semanas, quantos dias movimentou-se ou falou tão lentamente que as pessoas poderão ter notado. Ou o oposto, estive agitado a ponto de andar de um lado para o outro muito mais do que é habitual.',
      answer: 'Nenhuma vez',
    },
    {
      id: 2,
      text: 'Nas últimas 2 semanas, quantos dias teve pouco interesse ou pouco prazer em fazer as coisas?',
      answer: 'Nenhuma vez',
    },
    {
      id: 3,
      text: 'Nas últimas 2 semanas, quantos dias se sentiu para baixo, deprimido(a) ou sem perspetiva?',
      answer: 'Vários dias',
    },
  ];

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col px-10">
      {/* Header */}
      <SearchBar isSpecility={true} inputDisabled={true} />
      <header className="flex items-center justify-between pb-4 *:">
        <div className="flex gap-2 items-center">
          <GoBackButton />
          <h1 className="text-2xl font-semibold text-[#333333]">Anamnese</h1>
        </div>
        <Button className="bg-white text-[#736CCE] px-4 py-2 rounded-full text-sm">
          Histórico
        </Button>
      </header>

      {/* Content */}
      <div className="flex-1  flex flex-col gap-6">
        {questions.map((question) => (
          <div key={question.id} className="flex flex-col gap-4">
            <p className="text-2xl text-gray-800 leading-relaxed">
              {question.text}
            </p>
            <div className="bg-white rounded-full py-4 px-8 border-b-4 border-[#D8D5EA]">
              <p className="text-gray-800">{question.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mb-16">
        <Button
          className="bg-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium"
          onClick={handleBack}
        >
          Voltar
        </Button>

        <div className="flex items-center ">
          <Button className="justify-center bg-transparent shadow-none">
            <div className="size-4 flex items-center  rounded-full justify-center border border-[#4F4F4F] ">
              {' '}
              <ChevronLeft className="text-[#4F4F4F] size-3 p-0" />
            </div>
          </Button>

          {[1, 2, 3].map((page) => (
            <Button
              key={page}
              className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-none ${
                page === currentPage
                  ? 'bg-[#736CCE] text-white'
                  : 'bg-transparent text-gray-600'
              }`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </Button>
          ))}

          <Button className="justify-center bg-transparent shadow-none">
            <div className="size-4 flex items-center  rounded-full justify-center border border-[#4F4F4F] ">
              {' '}
              <ChevronRight className="text-[#4F4F4F] size-3 p-0" />
            </div>
          </Button>
        </div>

        <Button
          className="bg-[#691FB1] text-white px-8 py-3 rounded-md font-medium"
          onClick={handleNext}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}
