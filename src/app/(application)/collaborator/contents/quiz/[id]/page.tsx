'use client';
import GoBackButton from '@/components/go-back-button';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import PhotoQuiz from '@/assets/imgs/quiz.png';
import { RoundedArrow } from '@/assets/svgs/roundedArrow';
import SearchBar from '@/components/searchbar';
import WBox from '@/components/wbox';
import { Heart, Share2 } from 'lucide-react';

function CollaboratorContentsQuizPost() {
  const [quizPhase, setQuizPhase] = useState('start'); // Define fase inicial como "start"
  const startQuiz = () => setQuizPhase('ongoing'); // Muda para fase "ongoing"
  const endQuiz = () => setQuizPhase('end'); // Muda para fase "end"

  // Funções e array quiz
  const questions = [
    {
      id: 1,
      question:
        'Quando você enfrenta um desafio inesperado, como costuma reagir?',
      options: [
        'Analiso a situação com calma e busco uma solução prática.',
        'Sinto-me ansioso(a), mas tento lidar com o problema.',
        'Peço ajuda a alguém em quem confio.',
        'Evito pensar muito no problema e sigo em frente.',
      ],
    },
    {
      id: 2,
      question:
        'Quando você enfrenta um desafio inesperado, como costuma reagir?',
      options: [
        'Analiso a situação com calma e busco uma solução prática.',
        'Sinto-me ansioso(a), mas tento lidar com o problema.',
        'Peço ajuda a alguém em quem confio.',
        'Evito pensar muito no problema e sigo em frente.',
      ],
    },
    {
      id: 3,
      question:
        'Quando você enfrenta um desafio inesperado, como costuma reagir?',
      options: [
        'Analiso a situação com calma e busco uma solução prática.',
        'Sinto-me ansioso(a), mas tento lidar com o problema.',
        'Peço ajuda a alguém em quem confio.',
        'Evito pensar muito no problema e sigo em frente.',
      ],
    },
    {
      id: 4,
      question:
        'Quando você enfrenta um desafio inesperado, como costuma reagir?',
      options: [
        'Analiso a situação com calma e busco uma solução prática.',
        'Sinto-me ansioso(a), mas tento lidar com o problema.',
        'Peço ajuda a alguém em quem confio.',
        'Evito pensar muito no problema e sigo em frente.',
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const totalSteps = questions.length;

  // Função controla opções selecionadas
  useEffect(() => {
    setSelectedOption(answers[currentQuestion] || '');
  }, [currentQuestion, answers]);

  // Função Proximo
  const handleNext = () => {
    if (!selectedOption)
      return alert('Selecione uma resposta antes de continuar!');
    setAnswers({ ...answers, [currentQuestion]: selectedOption });
    setSelectedOption('');
    setCurrentQuestion((prev) => prev + 1);
  };

  // Função anterior
  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  // Função para gerar as classes da barra de progresso
  const getProgressBarClasses = () => {
    const progress = (currentQuestion / (totalSteps - 1)) * 100;
    return `${progress}%`;
  };

  return (
    <main className="px-10 pb-10">
      <SearchBar inputDisabled={true} />
      <div className="flex flex-col gap-4">
        <GoBackButton />
        <div className="flex gap-2 font-semibold text-lg text-[#4f4f4f]">
          <Link href="/contents/quiz">
            <span>Quiz</span>
          </Link>
          /<span>Descubra quem você realmente é</span>
        </div>

        {quizPhase === 'start' && (
          <div className="block">
            <Image
              src={PhotoQuiz}
              alt="foto blog"
              quality={100}
              className="w-full h-70 object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-start gap-10 mb-4">
              <h1 className="font-semibold text-xl text-[#4f4f4f]">
                Descubra Quem Você Realmente É: Primeiros Passos do
                Autoconhecimento
              </h1>
              <div className="flex items-center">
                <span className="font-normal text-xs text-[#4f4f4f]">
                  Compartilhar
                </span>
                <Button variant="ghost" className="hover:text-primary">
                  <Share2 />
                </Button>
                <Button variant="ghost" className="hover:text-primary">
                  <Heart />
                </Button>
              </div>
            </div>
            <div className="w-full text-sm font-light text-black mb-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <Button onClick={startQuiz} className="rounded-full">
              Começar teste
            </Button>
          </div>
        )}

        {quizPhase === 'ongoing' && (
          <div className="flex flex-col w-[600px] mx-auto">
            {/* Passos no topo */}
            <div className="flex justify-between relative mb-5">
              <div className="absolute w-[95%] h-3 left-[2.5%] top-[15px] z-1 flex">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: getProgressBarClasses() }}
                ></div>
              </div>

              {questions.map((question, index) => (
                <div
                  key={`steps-item-${question.id}`}
                  className="flex flex-col items-center text-md font-normal z-2"
                >
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center border-2 border-[#DDDFE1] text-primary
									${
                    currentQuestion === index
                      ? 'border-primary bg-white'
                      : answers[index] !== undefined
                      ? 'border-primary bg-primary text-white'
                      : 'bg-white'
                  }`}
                  >
                    <span>{question.id}</span>
                  </div>
                  <span className="text-xs">Passo {question.id}</span>
                </div>
              ))}
            </div>

            {/* Pergunta Atual */}
            <div className="text-center mb-5">
              <h3 className="text-xl font-normal mb-4">
                {questions[currentQuestion].question}
              </h3>
              <div className="flex flex-col items-center justify-start gap-2 w-[500px] mx-auto">
                {questions[currentQuestion].options.map((option) => (
                  <Button
                    key={option}
                    onClick={() => setSelectedOption(option)}
                    className={
                      selectedOption === option
                        ? 'rounded-full border-b-4 border-[#D8D5EA] py-6! w-full'
                        : 'rounded-full bg-white border-b-4 border-[#D8D5EA] text-[#2E2E2E] hover:text-white py-6! w-full'
                    }
                  >
                    <span className="whitespace-normal">{option}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Controles */}
            <div className="flex justify-center">
              <Button
                onClick={handlePrevious}
                variant="ghost"
                disabled={currentQuestion === 0}
                className="p-1! text-primary"
              >
                <RoundedArrow className="rotate-180 h-6! w-6!" />
              </Button>
              <Button
                onClick={
                  currentQuestion === totalSteps - 1 ? endQuiz : handleNext
                }
                variant="ghost"
                disabled={!selectedOption}
                className="p-1! text-primary"
              >
                <RoundedArrow className="h-6! w-6!" />
              </Button>
            </div>
          </div>
        )}

        {quizPhase === 'end' && (
          <div className="block">
            <Image
              src={PhotoQuiz}
              alt="foto blog"
              quality={100}
              className="w-full h-70 object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-start gap-10 mb-4">
              <h1 className="font-semibold text-xl text-[#4f4f4f]">
                Parabéns! Você realmente se conhece bem!
              </h1>
              <div className="flex items-center">
                <span className="font-normal text-xs text-[#4f4f4f]">
                  Compartilhar
                </span>
                <Button variant="ghost" className="hover:text-primary">
                  <Share2 />
                </Button>
                <Button variant="ghost" className="hover:text-primary">
                  <Heart />
                </Button>
              </div>
            </div>
            <div className="w-full text-sm font-light text-black mb-10">
              <p>
                Seu nível de autoconhecimento é impressionante. Você tem uma boa
                compreensão de seus sentimentos, escolhas e reações diante das
                situações, o que é essencial para tomar decisões mais
                conscientes e assertivas. Isso não só te ajuda a viver alinhado
                com seus valores, mas também a melhorar seus relacionamentos e a
                alcançar seus objetivos de vida. Continue nessa jornada de
                autodescoberta e aproveite os próximos passos para aprofundar
                ainda mais o seu entendimento sobre si mesmo. Seu caminho de
                crescimento pessoal está em plena evolução.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <h3 className="font-semibold text-lg text-[#4f4f4f] col-span-2">
                Veja outras testes
              </h3>
              {Array.from({ length: 2 }).map((_, index) => (
                <WBox
                  key={`carousel-item-${Date.now()}-${index}`}
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
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default CollaboratorContentsQuizPost;
