'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarIcon } from 'lucide-react';
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
        <h2 className="text-xl font-bold">histórico de compras</h2>
        <Button variant="outline" className="gap-2">
          <CalendarIcon className="w-4 h-4" />
          Selecionar o período
        </Button>
      </div>

      <div className="space-y-6">
        {initialPurchases.map((purchase, idx) => {
          const isVisible = visibleIndex === idx;

          return (
            <div key={idx.toString()}>
              <p className="text-sm font-semibold text-muted-foreground mb-1">
                {purchase.date}
              </p>

              <Card className="border-0 border-b-4 border-[#7A4DE6] shadow-none relative">
                <CardContent className="p-5 space-y-2">
                  <p className="font-medium">{purchase.title}</p>
                  <p className="text-sm text-muted-foreground">
                    Status:{' '}
                    <span className="text-foreground">{purchase.status}</span>
                  </p>

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

                  <div className="flex justify-end pt-4">
                    <Button
                      variant="outline"
                      className="bg-[#7A4DE6] text-white hover:bg-[#693eda]"
                      onClick={() => toggleDetails(idx)}
                    >
                      {isVisible ? 'Ocultar detalhes' : 'Ver detalhes'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-2 mt-10">
        {[1, 2, 3].map((page) => (
          <Button
            key={page}
            size="icon"
            variant={page === 1 ? 'default' : 'ghost'}
            className={page === 1 ? 'bg-[#7A4DE6]' : ''}
          >
            {page}
          </Button>
        ))}
      </div>
    </div>
  );
}
