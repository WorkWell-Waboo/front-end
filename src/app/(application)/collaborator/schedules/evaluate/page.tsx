'use client'
import Photo from "@/assets/imgs/cliente.png"
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

function CollaboratorSchedulesEvaluate() {
  return (
    <main className="p-10 flex flex-col gap-4">   
     <div className="bg-gradient-to-r from-primary to-primary/50 p-5 rounded-lg">
        <h2 className="font-medium text-2xl text-white mb-2"><span>Olá, Mariana Lemos</span></h2>
        <p className="font-normal text-sm text-white ">A sua opinião é muito importante para nós. Avalie a sessão e partilhe o seu feedback. 😊</p>
      </div>
      <h3 className="font-bold text-xl text-[#4f4f4f] ">Avalie a sessão</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col bg-white rounded-lg gap-4 p-5">
          <div className="flex gap-2">
            <Image src={Photo} alt="" width={50} height={50} className="rounded-full"/>
            <div className="flex flex-col justify-center gap-0 text-[#333333]">
              <span className=" text-sm font-semibold">Sandra Amaral</span>
              <span className="text-xs font-medium">Psicologa</span>
            </div>
          </div> 
          <p className="text-md font-normal w-[200px]">
            De 0 a 5, quanto avalia o atendimento?
          </p>
          <div className="flex gap-0">
            {[1, 2, 3, 4, 5].map((star) => (
              <Button
                key={star}
                className=" focus:outline-none bg-transparent hover:bg-transparent shadow-none w-6 h-6"
              >
                <Star
                  className={`h-6 w-6 ${
                    star <= 4 ? "text-[#FFC700] fill-[#FFC700]" : "text-[#D9D9D9] fill-[#D9D9D9] "
                  }`}
                />
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="font-semibold text-2xl text-[#4F4F4F] mb-2"><span>Deixe um elogio ao profissional</span></h2>
        <p className="font-normal text-sm text-[##828282] ">O seu comentário pode ser exibido no perfil do profissional e ajudar outras pessoas. O envio é opcional.</p>
      </div>
      
    </main>
  );
}

export default CollaboratorSchedulesEvaluate;