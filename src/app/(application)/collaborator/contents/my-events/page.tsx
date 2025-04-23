'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {  CircleCheck} from "lucide-react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import PhotoWebnar from "@/assets/imgs/webnar.png"

function CollaboratorContentsMyEvents() {
  const [step, setStep] = useState("details"); 

	return (
		<main className="p-10 flex flex-col gap-4">
			<div className="grid grid-cols-2 gap-4">
				<h2 className="font-semibold text-lg text-[#4f4f4f] col-span-2">Webnars</h2>
					<div className="p-4 rounded-lg flex items-center gap-5 border-b-2 bg-primary border-b-white" >
            <Image
              src={PhotoWebnar}
              alt=""
              width={145}
              height={145}
              className="rounded-lg h-[150px] w-[150px] object-cover"
            />
            <div className="flex flex-col flex-1 gap-3">
              <h3 className="font-bold text-sm line-clamp-2 text-white">
                Expanda sua mente: Webinars exclusivos todo mês
              </h3>
              <p className="font-light text-xs line-clamp-3 text-white">
                Aprofunde seu autoconhecimento com encontros mensais sobre bem-estar, reflexões e novas perspectivas.
              </p>
              <div className="grid grid-cols-2 gap-4 items-end">
                <Button variant="secondary" className="text-primary rounded-full w-full text-xs p-1 h-fit">
                  Ir para sala
                </Button>
                <Dialog>				
                  <DialogTrigger asChild className="p-0">
                    <Button variant="outline" className="border-white text-white rounded-full w-full hover:text-white text-xs p-1 h-fit">
                      Cancelar Inscrição
                    </Button>
                  </DialogTrigger>
                    {step === "details" && (
                    <DialogContent className="max-w-[350px] p-5">
                      {/* Etapa: Detalhes do Evento */}
                      <DialogHeader>
                        <DialogTitle className="text-2xl! text-[#333333] mb-4 text-center!">
                          Cancelar inscrição ?
                        </DialogTitle>
                      </DialogHeader>
                      <p className="text-[#4f4f4f] text-sm leading-[1.1] text-center font-normal mb-2">
                        Tem a certeza que deseja cancelar a inscrição deste evento?
                      </p>
                      <DialogFooter className="grid grid-cols-2 gap-2">
                        <DialogClose asChild>
                          <Button variant="outline" className="font-normal">
                            Voltar
                          </Button>
                        </DialogClose>
                        <Button onClick={() => setStep("confirmation")}>
                          Cancelar
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                    )}

                    {step === "confirmation" && (
                      <DialogContent className="max-w-[350px] pt-10">
                        <DialogHeader className="relative">
                          <div className="w-[60px] h-[60px] bg-white rounded-full absolute left-[50%] translate-x-[-50%] -top-[70px] flex items-center justify-center">
                            <CircleCheck className="w-7 h-7 text-primary" />
                          </div>
                          <DialogTitle className="text-2xl! text-center text-[#333333] mb-4">
                             Cancelamento confirmado!
                          </DialogTitle>
                        </DialogHeader>
                        <p className="text-[#4f4f4f] text-sm leading-[1.1] text-center font-normal mb-2">
                          A sua sessão encontra-se cancelada!
                        </p>
                        <DialogFooter className="flex gap-4">
                          <DialogClose asChild>
                            <Button className="flex-1 font-normal" onClick={() => setStep("details")}>
                              Fechar
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    )}

                </Dialog>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-lg flex items-center gap-5 border-b-2 bg-primary border-b-white" >
            <Image
              src={PhotoWebnar}
              alt=""
              width={145}
              height={145}
              className="rounded-lg h-[150px] w-[150px] object-cover"
            />
            <div className="flex flex-col flex-1 gap-3">
              <h3 className="font-bold text-sm line-clamp-2 text-white">
                Expanda sua mente: Webinars exclusivos todo mês
              </h3>
              <p className="font-light text-xs line-clamp-3 text-white">
                Aprofunde seu autoconhecimento com encontros mensais sobre bem-estar, reflexões e novas perspectivas.
              </p>
              <div className="grid grid-cols-2 gap-4 items-end">
                <Button variant="secondary" className="text-primary rounded-full w-full text-xs p-1 h-fit">
                  Ir para sala
                </Button>
                <Dialog>				
                  <DialogTrigger asChild className="p-0">
                    <Button variant="outline" className="border-white text-white rounded-full w-full hover:text-white text-xs p-1 h-fit">
                      Cancelar Inscrição
                    </Button>
                  </DialogTrigger>
                    {step === "details" && (
                    <DialogContent className="max-w-[350px] p-5">
                      {/* Etapa: Detalhes do Evento */}
                      <DialogHeader>
                        <DialogTitle className="text-2xl! text-[#333333] mb-4 text-center!">
                          Cancelar inscrição ?
                        </DialogTitle>
                      </DialogHeader>
                      <p className="text-[#4f4f4f] text-sm leading-[1.1] text-center font-normal mb-2">
                        Tem a certeza que deseja cancelar a inscrição deste evento?
                      </p>
                      <DialogFooter className="grid grid-cols-2 gap-2">
                        <DialogClose asChild>
                          <Button variant="outline" className="font-normal">
                            Voltar
                          </Button>
                        </DialogClose>
                        <Button onClick={() => setStep("confirmation")}>
                          Cancelar
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                    )}

                    {step === "confirmation" && (
                      <DialogContent className="max-w-[350px] pt-10">
                        <DialogHeader className="relative">
                          <div className="w-[60px] h-[60px] bg-white rounded-full absolute left-[50%] translate-x-[-50%] -top-[70px] flex items-center justify-center">
                            <CircleCheck className="w-7 h-7 text-primary" />
                          </div>
                          <DialogTitle className="text-2xl! text-center text-[#333333] mb-4">
                             Cancelamento confirmado!
                          </DialogTitle>
                        </DialogHeader>
                        <p className="text-[#4f4f4f] text-sm leading-[1.1] text-center font-normal mb-2">
                          A sua sessão encontra-se cancelada!
                        </p>
                        <DialogFooter className="flex gap-4">
                          <DialogClose asChild>
                            <Button className="flex-1 font-normal" onClick={() => setStep("details")}>
                              Fechar
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    )}

                </Dialog>
              </div>
            </div>
          </div>

			</div>	

      
		
		</main>
	);
}

export default CollaboratorContentsMyEvents;
