'use client'
import { Arrow } from "@/assets/svgs/arrow";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import { useState } from "react";

function plansCheckout() {
  const handleBack = () => {
    window.history.back();
  };
  const [counts, setCounts] = useState(Array.from({ length: 5 }, () => 1)); 

  const handleIncrement = (index: number) => {
    setCounts((prev) => {
      const newCounts = [...prev];
      newCounts[index] += 1; // Incrementa o contador do item correspondente
      return newCounts;
    });
  };

  const handleDecrement = (index: number) => {
    setCounts((prev) => {
      const newCounts = [...prev];
      if (newCounts[index] > 0) newCounts[index] -= 1; // Decrementa, mas evita valores negativos
      return newCounts;
    });
  };
  
  return (
    <main className="p-10 flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button variant="secondary" className="rounded-full" onClick={handleBack}> 
          <Arrow className="text-primary h-3! w-2.5!"/>
        </Button>
        <h2 className="font-bold text-xl text-[#666666] ">Pagamento</h2>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col p-4 bg-[#F4F5FB] rounded-md">
          <span className=" font-bold text-md text-[#666666] mb-4">Reveja o seu pedido</span>
          {Array.from({length: 5}).map((_,index)=>
          <div className="flex justify-between items-start" key={`key-${Date.now()}-${index}`}>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-sm text-[#4f4f4f]">Plano premium</span>
              <span className="font-normal text-sm text-[#8F8F8F]">10 sessões</span>
              <span className="font-normal text-sm text-[#8F8F8F]">Psicologia</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  className="bg-white hover:bg-primary hover:text-white text-[#666666]"
                  onClick={() => handleIncrement(index)} // Chama a função de incremento
                >
                  <Plus/>
                </Button>
                <span className="font-semibold text-[#3B3B3B] w-8 text-center">{counts[index]}</span>
                <Button
                  variant="ghost"
                  className="bg-white hover:bg-primary hover:text-white text-[#666666]"
                  onClick={() => handleDecrement(index)} // Chama a função de decremento
                >
                  <Minus/>
                </Button>
              </div>
              <span className="font-medium text-[#3B3B3B] w-21 text-center">€ 1500</span>
              <Button
                variant="ghost"
                className="bg-white hover:bg-primary hover:text-white text-primary"
              >
                <Trash/>
              </Button>
            </div>
          </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default plansCheckout;
