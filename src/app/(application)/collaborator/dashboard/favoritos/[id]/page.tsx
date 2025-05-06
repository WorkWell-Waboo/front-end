'use client';
import PhotoBlog from '@/assets/imgs/blog.png';
import cliente from '@/assets/imgs/cliente.png';
import cliente2 from '@/assets/imgs/cliente2.png';
import cliente3 from '@/assets/imgs/cliente3.png';
import cliente4 from '@/assets/imgs/cliente4.png';
import PhotoVideo from '@/assets/imgs/pessoas.jpeg';
import PhotoQuiz from '@/assets/imgs/quiz.png';
import PhotoWebnar from '@/assets/imgs/webnar.png';
import { SectionHeader } from '@/components/contentSection/section';
import { SectionCarousel } from '@/components/contentSection/sectionCarrosel';
import ProfessionalStats from '@/components/professioanalStats';

import SearchBar from '@/components/searchbar';
import TagList from '@/components/tagList';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HeadPerfil from '@/containers/layout/heard-perfil';
import { useState } from 'react';

const specialists = [
  {
    name: 'Sandra Amaral',
    role: 'Psicóloga',
    image: cliente,
    rating: 5,
    comments: 12,
    sessions: 18,
    tags: ['Angústia', 'Ansiedade', 'Autoestima'],
  },
  {
    name: 'André Leal',
    role: 'Psiquiatra',
    image: cliente2,
    rating: 5,
    comments: 12,
    sessions: 18,
    tags: ['Angústia', 'Ansiedade', 'Autoestima'],
  },
  {
    name: 'Leandro Gomes',
    role: 'Psiquiatra',
    image: cliente3,
    rating: 5,
    comments: 12,
    sessions: 18,
    tags: ['Angústia', 'Ansiedade', 'Autoestima'],
  },
  {
    name: 'Vanessa Pires',
    role: 'Psicóloga',
    image: cliente4,
    rating: 5,
    comments: 12,
    sessions: 18,
    tags: ['Angústia', 'Ansiedade', 'Autoestima'],
  },
  {
    name: 'Sandra Amaral',
    role: 'Psicóloga',
    image: cliente,
    rating: 5,
    comments: 12,
    sessions: 18,
    tags: ['Angústia', 'Ansiedade', 'Autoestima'],
  },
  {
    name: 'André Leal',
    role: 'Psiquiatra',
    image: cliente2,
    rating: 5,
    comments: 12,
    sessions: 18,
    tags: ['Angústia', 'Ansiedade', 'Autoestima'],
  },
];

function MyFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((fav) => fav !== name) : [...prev, name]
    );
  };
  const [activeTab, setActiveTab] = useState('profissionais');
  return (
    <main className="px-6 pb-10 max-w-7xl mx-auto">
      <SearchBar />

      <h1 className="text-2xl font-semibold text-[#4F4F4F] mt-2 mb-4">
        Meus favoritos
      </h1>

      <div className="flex items-center justify-between flex-wrap ">
        <Tabs
          defaultValue="profissionais"
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="w-full flex justify-between">
            <TabsList className="space-x-3 mb-2">
              <TabsTrigger
                value="profissionais"
                className="data-[state=active]:shadow-none text-[#333333]"
              >
                Profissionais
              </TabsTrigger>
              <TabsTrigger
                value="content"
                className="data-[state=active]:shadow-none text-[#333333]"
              >
                Conteúdos
              </TabsTrigger>
            </TabsList>

            {activeTab === 'profissionais' ? (
              <Select>
                <SelectTrigger className="w-fit border-[#4F4F4F]">
                  <SelectValue placeholder="Tipos de especialistas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="psicologo">Psicólogo</SelectItem>
                  <SelectItem value="psiquiatra">Psiquiatra</SelectItem>
                  <SelectItem value="todos">Todos</SelectItem>
                </SelectContent>
              </Select>
            ) : (
              <Select>
                <SelectTrigger className="w-fit border-[#4F4F4F]">
                  <SelectValue placeholder="Tipos de conteúdo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blog">Blog</SelectItem>
                  <SelectItem value="video">Vídeo</SelectItem>
                  <SelectItem value="quiz">Quiz</SelectItem>
                  <SelectItem value="webnar">Webnar</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>
          <TabsContent value="profissionais">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {specialists.map((specialist, index) => (
                <Card key={`${specialist.name}-${index}`}>
                  <CardContent className="space-y-4">
                    <HeadPerfil
                      name={specialist.name}
                      profession={specialist.role}
                      photo={specialist.image}
                      isFavorited={favorites.includes(specialist.name)}
                      toggleFavorite={() => toggleFavorite(specialist.name)}
                    />
                    <div>
                      <ProfessionalStats
                        rating={specialist.rating}
                        comments={specialist.comments}
                        sessions={specialist.sessions}
                      />
                      <TagList tags={specialist.tags} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="content" className="flex flex-col gap-6">
            <div className="block">
              <SectionHeader title="Matéria/Blog" link="/contents/blog" />
              <SectionCarousel
                imageSrc={PhotoBlog}
                imageAlt="foto post"
                titleGenerator={(i) => `Descubra Quem Você Realmente É ${i}`}
                text="Autoconhecimento é a chave para tomar decisões mais conscientes e viver alinhado aos seus valores. Entenda como começar!"
                linkBase="/contents/blog"
              />
            </div>

            <div className="block">
              <SectionHeader title="Quiz" link="/contents/quiz" />
              <SectionCarousel
                imageSrc={PhotoQuiz}
                imageAlt="foto post"
                titleGenerator={(i) => `Você Se Conhece Bem o Suficiente? ${i}`}
                text="Explore aspectos únicos da sua personalidade e descubra como o autoconhecimento impacta sua rotina."
                linkBase="/contents/quiz"
              />
            </div>

            <div className="block">
              <SectionHeader title="Videos" link="/contents/video" />
              <SectionCarousel
                imageSrc={PhotoVideo}
                imageAlt="foto post"
                titleGenerator={(i) => `O Que É Autoconhecimento? ${i}`}
                text="Descubra como entender melhor a si mesmo pode transformar sua vida em todos os aspectos!"
                linkBase="/contents/video"
              />
            </div>

            <div className="block">
              <SectionHeader title="Webnars" link="/contents/webnar" />
              <SectionCarousel
                imageSrc={PhotoWebnar}
                imageAlt="foto post"
                titleGenerator={(i) => `Movimente-se: sessão de bem-estar ${i}`}
                text="Descubra como entender melhor a si mesmo pode transformar sua vida em todos os aspectos!"
                linkBase="/contents/webnar"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

export default MyFavorites;
