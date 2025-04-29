'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function SharedItems() {
  const router = useRouter();

  const items = [
    'Descubra Quem Você Realmente É: Primeiros Passos do Autoconhecimento',
    'Descubra Quem Você Realmente É: Primeiros Passos do Autoconhecimento',
    'Descubra Quem Você Realmente É: Primeiros Passos do Autoconhecimento',
  ];

  const handleViewDetails = () => {
    router.push('/manager-reports');
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-800">
          Itens compartilhados
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">10</span>
          <Button
            variant="outline"
            className="bg-white border-[#7B6CD9] text-[#7B6CD9] hover:bg-[#7B6CD9] hover:text-white"
            onClick={handleViewDetails}
          >
            Ver detalhes
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-100 p-3 rounded-md">
            <p className="text-[#7B6CD9]">{item}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
