import Photo from '@/assets/imgs/cliente.png';
import PersonaSVG from '@/assets/svgs/persona';
import StarSVG from '@/assets/svgs/star';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import type React from 'react';

// Tipagem dos dados de cada profissional
interface Professional {
  name: string;
  role: string;
  description: string;
  rating: number;
  reviews: number;
  sessions: number;
  tags: string[];
}

const professionals: Professional[] = [
  {
    name: 'Sandra Amaral',
    role: 'Psicanalista',
    description:
      'Especialista em atendimento clínico com foco em questões de ansiedade e autoconhecimento.',
    rating: 5,
    reviews: 12,
    sessions: 18,
    tags: ['angústia', 'ansiedade'],
  },
  {
    name: 'Carlos Silva',
    role: 'Psicólogo Clínico',
    description:
      'Carlos atende com escuta ativa e empatia, com foco em depressão, estresse e autoestima.',
    rating: 4.8,
    reviews: 8,
    sessions: 22,
    tags: ['depressão', 'estresse'],
  },
];

function CollaboratorServicesCategory(): React.ReactNode {
  return (
    <div className="p-10 space-y-6">
      <div className="flex justify-between items-center">
        <span className="font-medium text-muted-foreground">Filtros</span>
        <span className="font-medium text-muted-foreground">Ordenar por:</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {professionals.map((pro, index) => (
          <Card key={index.toString()} className="shadow-md border rounded-xl">
            <CardContent className="p-6 space-y-4">
              {/* Header */}
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <Image
                    src={Photo}
                    alt={`Foto de ${pro.name}`}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-accent-foreground">
                      {pro.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{pro.role}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Heart className="text-primary" />
                </Button>
              </div>

              {/* Descrição */}
              <p className="text-sm text-muted-foreground">{pro.description}</p>

              {/* Avaliações e sessões */}
              <div className="flex justify-start gap-2 font-light text-sm text-foreground">
                <span className="flex gap-2 text-sm">
                  <StarSVG /> {pro.rating} ({pro.reviews} comentários)
                </span>
                <span className="flex items-center gap-2">
                  <PersonaSVG className="text-white" />
                  {pro.sessions} atendimentos
                </span>
              </div>

              {/* Tags e botão */}
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex gap-2 flex-wrap">
                  {pro.tags.map((tag, i) => (
                    <span
                      key={i.toString()}
                      className="px-3 py-1 rounded-md bg-[#F2F2F2] text-[#828282]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button className="whitespace-nowrap rounded-xl">
                  Agendar consulta
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CollaboratorServicesCategory;
