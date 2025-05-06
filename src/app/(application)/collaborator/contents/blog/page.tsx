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
import WBox from '@/components/wbox';

import PhotoBlog from '@/assets/imgs/blog.png';
import GoBackButton from '@/components/go-back-button';
import SearchBar from '@/components/searchbar';

function CollaboratorContentsBlog() {
  return (
    <main className="px-10 pb-10 ">
      <SearchBar />
      {/* Menu superior */}
      <div className="flex flex-col gap-4">
        {' '}
        <GoBackButton />
        <CategoriesContents />
        <div className="grid grid-cols-2 gap-4">
          <h2 className="font-semibold text-lg text-[#4f4f4f] col-span-2">
            Matéria/Blog
          </h2>
          {Array.from({ length: 6 }).map((_, index) => (
            <WBox
              key={`carousel-item-${Date.now()}-${index}`}
              variant="white"
              id={index}
              imageSrc={PhotoBlog}
              imageAlt="foto post"
              title={`Descubra Quem Você Realmente É: Primeiros Passos do Autoconhecimento ${index}`}
              text="Autoconhecimento é a chave para tomar decisões mais conscientes e viver alinhado aos seus valores. Entenda como começar!"
              link={`/contents/blog/${index}`}
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

export default CollaboratorContentsBlog;
