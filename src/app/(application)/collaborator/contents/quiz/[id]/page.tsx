'use client'
import GoBackButton from "@/components/go-back-button";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import PhotoQuiz from "@/assets/imgs/quiz.png"

function CollaboratorContentsQuizPost() {
	
	const [quizPhase, setQuizPhase] = useState("start"); // Define fase inicial como "start"
  const startQuiz = () => setQuizPhase("ongoing"); // Muda para fase "ongoing"
  const endQuiz = () => setQuizPhase("end"); // Muda para fase "end"

	return (
		<main className="p-10 flex flex-col gap-4">
			<GoBackButton/>
      <div className="flex gap-2 font-semibold text-lg text-[#4f4f4f]">
				<Link href='/contents/quiz'>
					<span>
						Quiz
					</span>
				</Link>
				/
				<span>
					Descubra quem você realmente é
				</span>
			</div>

			{quizPhase === "start" && (
				<div className="block">
					<Image src={PhotoQuiz} alt="foto blog" quality={100} className="w-full h-70 object-cover rounded-lg mb-4"/>
					<div className="flex justify-between items-start gap-10 mb-4">
						<h1 className="font-semibold text-xl text-[#4f4f4f]">
							Descubra Quem Você Realmente É: Primeiros Passos do Autoconhecimento 
						</h1>
						<div className="flex items-center">
							<span className="font-normal text-xs text-[#4f4f4f]">Compartilhar</span>
							<Button variant="ghost" className="hover:text-primary">
								<Share2/>
							</Button>
							<Button variant="ghost" className="hover:text-primary">
								<Heart/>
							</Button>
						</div>
					</div>
					<ScrollArea className="w-full h-max-[300] text-sm font-light text-black mb-4">
						<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</ScrollArea>
					<Button
						onClick={startQuiz}
						className="rounded-full"
					>
						Começar teste
					</Button>

				</div>
			)}

			{quizPhase === "ongoing" && (
				<div className="text-center">
					<h2 className="text-lg font-bold mb-4">Pergunta 1</h2>
					{/* Adicione lógica para carregar as perguntas e respostas */}
					<Button
						onClick={endQuiz}
						className="bg-red-500 text-white py-2 px-4 rounded"
					>
						Finalizar Quiz
					</Button>
				</div>
			)}

			{quizPhase === "end" && (
				<div className="text-center">
					<img src="/end-image.jpg" alt="Fim do Quiz" className="mx-auto mb-4" />
					<h1 className="text-xl font-bold mb-2">Parabéns, você terminou o quiz!</h1>
					<p className="text-gray-700 mb-4">Aqui está o resultado do quiz.</p>
					<Button
						onClick={() => setQuizPhase("start")}
						className="bg-green-500 text-white py-2 px-4 rounded"
					>
						Refazer Quiz
					</Button>
				</div>
			)}

		</main>
	);
}

export default CollaboratorContentsQuizPost;
