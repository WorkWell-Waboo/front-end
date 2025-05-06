'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import Image from 'next/image';

import Boleto from '@/assets/imgs/boleto.png';
import Qrcode from '@/assets/imgs/qrcode.png';
import { Arrow } from '@/assets/svgs/arrow';
import { Barcode } from '@/assets/svgs/barcode';
import { Card } from '@/assets/svgs/card';
import { Pix } from '@/assets/svgs/pix';
import SearchBar from '@/components/searchbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus, Trash, UserCheck } from 'lucide-react';
import { useState } from 'react';

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
    <main className="px-10 ">
      <SearchBar inputDisabled={true} />
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <Button
            variant="secondary"
            className="rounded-full"
            onClick={handleBack}
          >
            <Arrow className="text-primary h-3! w-2.5!" />
          </Button>
          <h2 className="font-bold text-xl text-[#666666] ">Pagamento</h2>
        </div>
        <div className="grid grid-cols-2 gap-5 items-start">
          {/* Items do carrinho */}
          <div className="flex flex-col p-4 bg-[#F4F5FB] rounded-md">
            <span className=" font-bold text-md text-[#666666] mb-5">
              Reveja o seu pedido
            </span>

            {Array.from({ length: 4 }).map((_, index) => (
              <div
                className="flex justify-between items-start border-b border-gray-300 last:border-none py-5"
                key={`key-${Date.now()}-${index}`}
              >
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-sm text-[#4f4f4f]">
                    Plano premium
                  </span>
                  <span className="font-normal text-sm text-[#8F8F8F]">
                    10 sessões
                  </span>
                  <span className="font-normal text-sm text-[#8F8F8F]">
                    Psicologia
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      className="bg-white hover:bg-primary hover:text-white text-[#666666]"
                      onClick={() => handleIncrement(index)} // Chama a função de incremento
                    >
                      <Plus />
                    </Button>
                    <span className="font-semibold text-[#3B3B3B] w-8 text-center">
                      {counts[index]}
                    </span>
                    <Button
                      variant="ghost"
                      className="bg-white hover:bg-primary hover:text-white text-[#666666]"
                      onClick={() => handleDecrement(index)} // Chama a função de decremento
                    >
                      <Minus />
                    </Button>
                  </div>
                  <span className="font-medium text-[#3B3B3B] w-21 text-center">
                    € 1500
                  </span>
                  <Button
                    variant="ghost"
                    className="bg-white hover:bg-primary hover:text-white text-primary"
                  >
                    <Trash />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          {/* Formas de pagamento */}
          <div className="flex flex-col p-4 bg-[#F4F5FB] rounded-md">
            <span className=" font-bold text-md text-[#666666] mb-5">
              Selecione a forma de pagamento
            </span>
            <Tabs defaultValue="card">
              <TabsList className="grid grid-cols-3 w-full gap-5">
                <TabsTrigger
                  className="w-full rounded-md border-1 border-primary data-[state=active]:shadow-none! py-3"
                  value="card"
                >
                  <Card />
                  Cartão
                </TabsTrigger>
                <TabsTrigger
                  className="w-full rounded-md border-1 border-primary data-[state=active]:shadow-none! py-3"
                  value="bank-slip"
                >
                  <Barcode />
                  Boleto
                </TabsTrigger>
                <TabsTrigger
                  className="w-full rounded-md border-1 border-primary data-[state=active]:shadow-none! py-3"
                  value="pix"
                >
                  <Pix />
                  Pix
                </TabsTrigger>
              </TabsList>

              <TabsContent value="card">
                <div className="grid grid-cols-2 gap-4 my-4">
                  <div className="col-span-2">
                    <Input type="text" placeholder="Nome do titular" />
                  </div>
                  <div className="col-span-2">
                    <Input type="text" placeholder="NIF do titular" />
                  </div>
                  <div className="col-span-2">
                    <Input type="number" placeholder="Número do cartão" />
                  </div>
                  <div className="col-span-1">
                    <Input type="text" placeholder="Data de validade" />
                  </div>
                  <div className="col-span-1">
                    <Input type="number" placeholder="CVV" />
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="hover:cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Salvar cartão para futuras compras
                  </label>
                </div>
              </TabsContent>
              <TabsContent value="bank-slip">
                <div className="flex justify-between">
                  <div className="flex flex-col text-[#4F4F4F]">
                    <span className="font-medium">Vencimento</span>
                    <span className="font-regular text-right">
                      Amanhã, 4 Fev.
                    </span>
                  </div>
                  <div className="flex flex-col text-[#4F4F4F]">
                    <span className="font-medium">Valor do pedido</span>
                    <span className="font-regular text-left">€1200.00</span>
                  </div>
                </div>
                <Image
                  src={Boleto}
                  alt=""
                  className="max-w-full mx-auto my-5"
                />
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1/2">
                    Baixar boleto
                  </Button>
                  <Button variant="outline" className="flex-1/2">
                    Copiar código de boleto
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="pix">
                <div className="flex justify-between">
                  <div className="flex flex-col text-[#4F4F4F]">
                    <span className="font-medium">Vencimento</span>
                    <span className="font-regular text-right">
                      Amanhã, 4 Fev.
                    </span>
                  </div>
                  <div className="flex flex-col text-[#4F4F4F]">
                    <span className="font-medium">Valor do pedido</span>
                    <span className="font-regular text-left">€1200.00</span>
                  </div>
                </div>
                <Image src={Qrcode} alt="" className=" mx-auto my-5" />
                <Button variant="outline" className="w-full py-3">
                  Copiar código pix
                </Button>
              </TabsContent>
              <div className="flex justify-between">
                <span className="font-semibold text-[#666666]">Total</span>
                <span className="font-semibold text-[#3B3B3B] text-right">
                  €1200.00
                </span>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="">Finalizar compra</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[450px] px-8 pb-8 pt-10">
                  <DialogHeader className="relative">
                    <div className="w-[60] h-[60] bg-white rounded-full absolute left-[50%] translate-x-[-50%] -top-[70px] flex items-center justify-center">
                      <UserCheck className="text-primary w-[25px]" />
                    </div>
                    <DialogTitle className="text-center text-[#333333] mb-4">
                      Pagamento confirmado!
                    </DialogTitle>
                  </DialogHeader>
                  <p className="text-center text-[#4f4f4f] text-xs leading-[1.1]">
                    O seu pedido foi processado com sucesso! Em breve receberá
                    um e-mail com todos os detalhes.
                  </p>
                  <p className="text-center text-[#4f4f4f] text-xs leading-[1.1]">
                    Pode acompanhar o status das suas comprar a qualquer momento
                    no histórico de transções.
                  </p>
                  <DialogFooter>
                    <Button className="w-full" type="submit">
                      Voltar para o início
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}

export default plansCheckout;
