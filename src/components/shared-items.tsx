'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SharedItems() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const items = [
    'Descubra Quem Você Realmente É: Primeiros Passos do Autoconhecimento',
    'Descubra Quem Você Realmente É: Primeiros Passos do Autoconhecimento',
    'Descubra Quem Você Realmente É: Primeiros Passos do Autoconhecimento',
  ];

  const handleViewDetails = () => {
    router.push('/manager-reports');
  };

  return (
    <Card className="py-0 gap-0">
      <div className="flex justify-between items-center p-6">
        <h3 className="text-lg font-medium text-gray-800">
          Itens compartilhados
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">10</span>
        </div>
      </div>

      <div className="pl-6">
        {items.map((item, index) => {
          const isActive = selectedIndex === index;

          return (
            <div className="relative">
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`relative cursor-pointer p-3 transition-all mr-1
    ${isActive ? 'bg-primary/10' : 'hover:bg-gray-100'}
    rounded-md pr-6`}
              >
                <p className="text-[#7B6CD9]">{item}</p>
              </div>
              {isActive && (
                <span className="absolute top-0 bottom-2 right-0 w-1.5 rounded-full bg-primary h-full" />
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
