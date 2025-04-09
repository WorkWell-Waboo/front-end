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
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [selectedTimezone, setSelectedTimezone] = useState<string | undefined>(
    undefined
  );

  const toggleFavorite = (name: string) => {
    setFavorites((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const timezones = [
    'America/Sao_Paulo',
    'America/Boa_Vista',
    'America/Manaus',
    'America/New_York',
    'Europe/London',
  ];

  const formatarNomeFuso = (str: string) =>
    str.split('/')[1]?.replace(/_/g, ' ') || str;

  const capitalize = (text: string) =>
    text.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());

  const timezoneAtual = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const fusoFormatado = capitalize(
    formatarNomeFuso(selectedTimezone || timezoneAtual)
  );

  return (
    <div className="p-10 space-y-6">
      {/* Filtros e Favoritos */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4 justify-between items-center text-accent-foreground">
          {/* Filtros */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-medium pr-10">Filtros</span>
            <Select>
              <SelectTrigger className="w-[210px]">
                <SelectValue
                  placeholder="Tipos de especialistas"
                  className=""
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="especialista1">Especialista 1</SelectItem>
                <SelectItem value="especialista2">Especialista 2</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="LGBTQIAPN+" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sim">Sim</SelectItem>
                <SelectItem value="nao">Não</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Etnia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="negra">Negra</SelectItem>
                <SelectItem value="branca">Branca</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="md:w-[110px]">
                <SelectValue placeholder="Gênero" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="masculino">Masculino</SelectItem>
                <SelectItem value="feminino">Feminino</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Meus Favoritos */}
          <div className="flex items-center gap-2 text-accent-foreground whitespace-nowrap">
            <span>Meus Favoritos</span> <HeartLikeSVG />
          </div>
        </div>

        {/* Ordenação */}
        <div className="flex flex-wrap gap-2 items-center text-accent-foreground">
          <span className="font-normal">Ordenar por:</span>
          <Select>
            <SelectTrigger className="w-[200px] border-0! bg-background! shadow-none data-[placeholder]:font-medium">
              <SelectValue placeholder="Mais Relevantes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="avaliacao">Avaliação</SelectItem>
              <SelectItem value="atendimentos">Atendimentos</SelectItem>
            </SelectContent>
          </Select>

          {/* Fuso horário */}
          <Select onValueChange={(value) => setSelectedTimezone(value)}>
            <SelectTrigger className="w-[180px] border-0! bg-background! shadow-none">
              <SelectValue placeholder={`Fuso horário: ${fusoFormatado}`} />
            </SelectTrigger>
            <SelectContent>
              {timezones.map((tz) => (
                <SelectItem key={tz} value={tz}>
                  {capitalize(formatarNomeFuso(tz))}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="-m-4 pl-4 border-l border-[#4F4F4F]">
            <span className="text-[#4F4F4F] font-medium text-sm">
              Disponível Agora
            </span>
          </div>
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
