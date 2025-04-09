'use client';
import Photo from '@/assets/imgs/cliente.png';
import HeartLikeSVG from '@/assets/svgs/heartlike';
import PersonaSVG from '@/assets/svgs/persona';
import StarSVG from '@/assets/svgs/star';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import { useState } from 'react';

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
  // Estados para favoritos
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (name: string) => {
    setFavorites((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="p-10 space-y-6">
      {/* Filtros e Favoritos */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          {/* Filtros */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-medium text-muted-foreground">Filtros</span>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Especialistas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="especialista1">Especialista 1</SelectItem>
                <SelectItem value="especialista2">Especialista 2</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="LGBTQIAPN+" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sim">Sim</SelectItem>
                <SelectItem value="nao">Não</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Etnia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="negra">Negra</SelectItem>
                <SelectItem value="branca">Branca</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Gênero" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="masculino">Masculino</SelectItem>
                <SelectItem value="feminino">Feminino</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Meus Favoritos */}
          <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
            <span>Meus Favoritos</span> <HeartLikeSVG />
          </div>
        </div>

        {/* Ordenação */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-medium text-muted-foreground">
            Ordenar por:
          </span>
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Mais bem avaliados" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="avaliacao">Avaliação</SelectItem>
              <SelectItem value="atendimentos">Atendimentos</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Mais recentes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recentes">Recentes</SelectItem>
              <SelectItem value="antigos">Antigos</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {professionals.map((pro, index) => {
          const isFavorited = favorites[pro.name];
          return (
            <Card
              key={index.toString()}
              className="shadow-md border rounded-xl"
            >
              <CardContent className="px-6 space-y-4">
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
                      <p className="text-sm text-muted-foreground">
                        {pro.role}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleFavorite(pro.name)}
                    className={
                      isFavorited ? 'text-red-500' : 'text-muted-foreground'
                    }
                  >
                    <HeartLikeSVG
                      className={`transition-all duration-200 ${
                        isFavorited ? 'fill-red-500' : 'fill-none'
                      }`}
                    />
                  </Button>
                </div>

                {/* Descrição */}
                <p className="text-sm text-muted-foreground">
                  {pro.description}
                </p>

                {/* Avaliações e sessões */}
                <div className="flex justify-start gap-2 font-light text-sm text-foreground">
                  <span className="flex gap-1 text-sm">
                    <StarSVG /> {pro.rating} ({pro.reviews} comentários)
                  </span>
                  <span className="flex items-center gap-1">
                    <PersonaSVG />
                    {pro.sessions} atendimentos
                  </span>
                </div>

                {/* Tags e botão */}
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div className="flex gap-2 flex-wrap">
                    {pro.tags.map((tag, i) => (
                      <span
                        key={i.toString()}
                        className="px-3 py-1 text-sm rounded-md bg-[#F2F2F2] text-[#828282]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button className="whitespace-nowrap text-sm rounded-md">
                    Agendar consulta
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default CollaboratorServicesCategory;
