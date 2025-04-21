'use client'
import { Button } from "@/components/ui/button"; // Componente Button do Shadcn
import { useState } from "react";

const Teste = () => {
  const questions = [
    {
      id: 1,
      question: "Qual é a capital da França?",
      options: ["Paris", "Londres", "Berlim", "Madri"],
      correct: "Paris",
    },
    {
      id: 2,
      question: "Qual é o maior planeta do sistema solar?",
      options: ["Marte", "Júpiter", "Saturno", "Terra"],
      correct: "Júpiter",
    },
    {
      id: 3,
      question: "Quem pintou a Mona Lisa?",
      options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
      correct: "Leonardo da Vinci",
    },
    {
      id: 4,
      question: "Quem pintou a Mona Lisa?",
      options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
      correct: "Leonardo da Vinci",
    },
    {
      id: 5,
      question: "Quem pintou a Mona Lisa?",
      options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
      correct: "Leonardo da Vinci",
    },
    {
      id: 6,
      question: "Quem pintou a Mona Lisa?",
      options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
      correct: "Leonardo da Vinci",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState({});
  const totalSteps = questions.length;

  const handleNext = () => {
    if (!selectedOption) return alert("Selecione uma resposta antes de continuar!");
    setAnswers({ ...answers, [currentQuestion]: selectedOption });
    setSelectedOption("");
    setCurrentQuestion((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="container mx-auto p-4">
      {/* Passos no topo */}
      <div className="flex space-x-4 mb-4">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full ${
              currentQuestion === index
                ? "bg-blue-500"
                : answers[index] !== undefined
                ? "bg-green-500"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Pergunta Atual */}
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">
          {questions[currentQuestion].question}
        </h2>
        <div className="flex flex-col space-y-2">
          {questions[currentQuestion].options.map((option) => (
            <Button
              key={option}
              onClick={() => setSelectedOption(option)}
              variant={selectedOption === option ? "default" : "outline"}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className="flex justify-between mt-6">
        <Button
          onClick={handlePrevious}
          variant="secondary"
          disabled={currentQuestion === 0}
        >
          Voltar
        </Button>
        <Button
          onClick={handleNext}
          disabled={!selectedOption}
        >
          {currentQuestion === totalSteps - 1 ? "Finalizar" : "Avançar"}
        </Button>
      </div>
    </div>
  );
};

export default Teste;
