'use client';
import client from '@/assets/imgs/cliente.png';
import client2 from '@/assets/imgs/cliente2.png';
import client3 from '@/assets/imgs/cliente3.png';
import client4 from '@/assets/imgs/cliente4.png';
import HeartLikeSVG from '@/assets/svgs/heartlike';
import PersonaSVG from '@/assets/svgs/persona';
import StarSVG from '@/assets/svgs/star';
import SearchBar from '@/components/searchbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import HeadPerfil from '@/containers/layout/heard-perfil';
import type { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Professional {
  name: string;
  role: string;
  description: string;
  rating: number;
  reviews: number;
  sessions: number;
  tags: string[];
  photo: string | StaticImageData;
}

const professionals: Professional[] = [
  {
    name: 'Sandra Amaral',
    role: 'Psicóloga',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi uta liquip  ex ea commodo consequat.',
    rating: 5,
    reviews: 12,
    sessions: 18,
    tags: ['Angústia', 'Ansiedade'],
    photo: client,
  },
  {
    name: 'André Leal',
    role: 'Psiquiatra',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi uta liquip  ex ea commodo consequat.',
    rating: 5,
    reviews: 12,
    sessions: 18,
    tags: ['Depressão', 'Insônia'],
    photo: client2,
  },
  {
    name: 'Leandro Gomes',
    role: 'Psiquiatra',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi uta liquip  ex ea commodo consequat.',
    rating: 5,
    reviews: 12,
    sessions: 18,
    tags: ['Burnout', 'Estresse'],
    photo: client3,
  },
  {
    name: 'Vanessa Pires',
    role: 'Psicóloga',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi uta liquip  ex ea commodo consequat.',
    rating: 5,
    reviews: 12,
    sessions: 18,
    tags: ['Ansiedade', 'Relacionamentos'],
    photo: client4,
  },
];

function CollaboratorServicesCategory(): React.ReactNode {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [selectedTimezone, setSelectedTimezone] = useState<string>();

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
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen px-10 pb-10  ">
      <SearchBar />
      {/* Filtros e Favoritos */}
      <div className="space-y-4 mt-4">
        <div className="flex flex-wrap gap-4 justify-between items-center text-accent-foreground">
          {/* Filtros */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-semibold pr-10 text-[#4F4F4F]">Filtros</span>
            <div className="flex gap-5">
              <Select>
                <SelectTrigger
                  iconColor="text-[#4F4F4F]"
                  className="w-[210px] border-[#4F4F4F] data-[placeholder]:font-semibold data-[placeholder]:text-[#4F4F4F]"
                >
                  <SelectValue placeholder="Tipos de especialistas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="especialista1">Especialista 1</SelectItem>
                  <SelectItem value="especialista2">Especialista 2</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  iconColor="text-[#4F4F4F]"
                  className="w-[150px]  border-[#4F4F4F] data-[placeholder]:font-semibold data-[placeholder]:text-[#4F4F4F]"
                >
                  <SelectValue placeholder="LGBTQIAPN+" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sim">Sim</SelectItem>
                  <SelectItem value="nao">Não</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  iconColor="text-[#4F4F4F]"
                  className="w-[100px]  border-[#4F4F4F] data-[placeholder]:font-semibold data-[placeholder]:text-[#4F4F4F]"
                >
                  <SelectValue placeholder="Etnia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="negra">Negra</SelectItem>
                  <SelectItem value="branca">Branca</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger
                  iconColor="text-[#4F4F4F]"
                  className="w-[110px]  border-[#4F4F4F] data-[placeholder]:font-semibold data-[placeholder]:text-[#4F4F4F]"
                >
                  <SelectValue placeholder="Gênero" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="masculino">Masculino</SelectItem>
                  <SelectItem value="feminino">Feminino</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Meus Favoritos */}
          <div className="flex items-center gap-4 text-[#4F4F4F] font-bold text-base whitespace-nowrap">
            <span>Meus Favoritos</span>
            <HeartLikeSVG />
          </div>
        </div>

        {/* Ordenação */}
        <div className="flex flex-wrap gap-2 items-center text-accent-foreground mb-4 ">
          <span className="text-[#4F4F4F] pr-3">Ordenar por:</span>

          <div className="flex space-x-1 items-center">
            <Select>
              <SelectTrigger
                iconColor="text-[#4F4F4F]"
                className="w-[200px] border-0! bg-background! shadow-none data-[placeholder]:font-semibold data-[placeholder]:text-[#4F4F4F]"
              >
                <SelectValue placeholder="Mais Relevantes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="avaliacao">Avaliação</SelectItem>
                <SelectItem value="atendimentos">Atendimentos</SelectItem>
              </SelectContent>
            </Select>

            {/* Fuso horário */}
            <Select onValueChange={(value) => setSelectedTimezone(value)}>
              <SelectTrigger className="w-[210px] border-0! bg-background! shadow-none data-[placeholder]:text-[#4F4F4F]">
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

            <Separator
              orientation="vertical"
              className=" min-h-[2rem] mx-4 bg-[#4F4F4F]"
            />

            <div className="ml-2 py-2 border-[#4F4F4F]">
              <div className="flex items-center space-x-2">
                <Label
                  htmlFor="airplane-mode"
                  className="text-[#4F4F4F] font-medium text-sm"
                >
                  Disponível Agora
                  <Switch className="bg-muted" id="airplane-mode" />
                </Label>
              </div>
            </div>
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
                <HeadPerfil
                  name={pro.name}
                  profession={pro.role}
                  photo={pro.photo}
                  isFavorited={isFavorited}
                  toggleFavorite={toggleFavorite}
                />

                {/* Descrição */}
                <p className="text-sm text-[#828282]">{pro.description}</p>

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
                  <Button
                    onClick={() => router.push('/services/7765776/6838732')}
                    className="whitespace-nowrap text-sm rounded-md"
                  >
                    Agendar consulta
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Pagination className=" pt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive={true}>
              1
            </PaginationLink>
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

export default CollaboratorServicesCategory;
