'use client';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import CategoriesContents from '@/components/categoriesContents';
import GoBackButton from '@/components/go-back-button';
import WBox from '@/components/wbox';

import PhotoVideo from '@/assets/imgs/video.jpg';
import SearchBar from '@/components/searchbar';

function CollaboratorContentsVideo() {
  return (
    <main className="px-10 pb-10 ">
      <SearchBar />
      <div className="flex flex-col gap-4">
        {' '}
        <GoBackButton />
        <CategoriesContents />
        <div className="grid grid-cols-2 gap-4">
          <h2 className="font-semibold text-lg text-[#4f4f4f] col-span-2">
            Vídeos
          </h2>
          {Array.from({ length: 6 }).map((_, index) => (
            <WBox
              key={`carousel-item-${Date.now()}-${index}`}
              variant="white"
              id={index}
              imageSrc={PhotoVideo}
              imageAlt="foto post"
              title={`O Que É Autoconhecimento e Por Que Ele Importa? ${index}`}
              text="Descubra como entender melhor a si mesmo pode transformar sua vida em todos os aspectos!"
              link={`/contents/video/${index}`}
              time="5 min"
              buttons={['heart']}
            />
          ))}
        </div>
        {/* PAGINATION */}
        <Pagination>
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
              <PaginationEllipsis />
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
    </main>
  );
}

export default CollaboratorContentsVideo;
