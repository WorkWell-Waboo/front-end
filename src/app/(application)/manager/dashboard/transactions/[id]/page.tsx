'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { CalendarIcon, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function PurchaseHistory() {
  const initialPurchases = [
    {
      date: '09 Jan, 2025',
      title: 'Compra #12345 - Plano Individual (5 Sessões)',
      status: 'Concluído',
      fullDetails: {
        data: '15/02/2025',
        valor: 'R$ 200,00',
        pagamento: 'Cartão de Crédito',
        plano: 'Plano Individual (5 Sessões)',
        nota: '#',
      },
    },
    {
      date: '08 Jan, 2025',
      title: 'Compra #12345 - Plano Individual (5 Sessões)',
      status: 'Concluído',
      fullDetails: {
        data: '15/02/2025',
        valor: 'R$ 200,00',
        pagamento: 'Cartão de Crédito',
        plano: 'Plano Individual (5 Sessões)',
        nota: '#',
      },
    },
    {
      date: '02 Jan, 2025',
      title: 'Compra #12345 - Plano Individual (5 Sessões)',
      status: 'Concluído',
      fullDetails: {
        data: '15/02/2025',
        valor: 'R$ 200,00',
        pagamento: 'Cartão de Crédito',
        plano: 'Plano Individual (5 Sessões)',
        nota: '#',
      },
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setVisibleIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-[#f5f6fb] min-h-screen px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#333333]">
          Histórico de transações
        </h2>
        <Button
          variant="secondary"
          className="gap-2 bg-[#FFFFFF] text-[#202020] font-normal shadow-none "
        >
          <CalendarIcon className="w-4 h-4 text-[#736CCE]" />
          Selecionar o período
          <ChevronDown className=" text-[#736CCE]" />
        </Button>
      </div>

      <div className="space-y-6">
        {initialPurchases.map((purchase, idx) => {
          const isVisible = visibleIndex === idx;

          return (
            <div key={idx.toString()}>
              <p className="text-sm font-semibold text-[#4F4F4F] mb-1">
                {purchase.date}
              </p>

              <Card className="border-0 border-b-4 border-[#7A4DE6] shadow-none relative">
                <CardContent className="px-8 py-5 space-y-2">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium text-[#333333]">
                        {purchase.title}
                      </p>
                      <p className="text-sm text-[#333333]">
                        Status:{' '}
                        <span className="text-[#828282]">
                          {purchase.status}
                        </span>
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="bg-[#736CCE] text-[#FFFFFF] hover:bg-[#4f4b94] hover:text-white rounded-xl px-10"
                      onClick={() => toggleDetails(idx)}
                    >
                      {isVisible ? 'Ocultar detalhes' : 'Ver detalhes'}
                    </Button>
                  </div>

                  {isVisible && (
                    <div className="pt-3 space-y-1 text-sm text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">
                          Data:
                        </span>{' '}
                        {purchase.fullDetails.data}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">
                          Valor Total:
                        </span>{' '}
                        {purchase.fullDetails.valor}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">
                          Status:
                        </span>{' '}
                        {purchase.status}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">
                          Método de Pagamento:
                        </span>{' '}
                        {purchase.fullDetails.pagamento}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">
                          Detalhes do plano:
                        </span>{' '}
                        {purchase.fullDetails.plano}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">
                          Notas adicionais:
                        </span>{' '}
                        <a
                          href={purchase.fullDetails.nota}
                          className="text-[#7A4DE6] underline"
                        >
                          Clique aqui
                        </a>{' '}
                        para fazer o download da nota fiscal
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      <Pagination className="flex justify-center pt-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
