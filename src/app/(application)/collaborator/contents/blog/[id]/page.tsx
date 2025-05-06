import GoBackButton from '@/components/go-back-button';
import Link from 'next/link';

import PhotoBlog from '@/assets/imgs/blog.png';
import SearchBar from '@/components/searchbar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Heart, Share2 } from 'lucide-react';
import Image from 'next/image';

function CollaboratorContentsBlogPost() {
  return (
    <main className="px-10 pb-10 ">
      <SearchBar inputDisabled={true} />
      <div className="flex flex-col gap-4">
        <GoBackButton />
        <div className="flex gap-2 font-semibold text-lg text-[#4f4f4f]">
          <Link href="/contents/blog">
            <span>Blog</span>
          </Link>
          /<span>Descubra quem você realmente é</span>
        </div>
        <Image
          src={PhotoBlog}
          alt="foto blog"
          quality={100}
          className="w-full h-70 object-cover rounded-lg mb-4"
        />
        <div className="flex justify-between items-start gap-10 pb-4">
          <h1 className="font-semibold text-xl text-[#4f4f4f]">
            Descubra Quem Você Realmente É: Primeiros Passos do Autoconhecimento
          </h1>
          <div className="flex items-center">
            <span className="font-normal text-xs text-[#4f4f4f]">
              Compartilhar
            </span>
            <Button variant="ghost" className="hover:text-primary">
              <Share2 />
            </Button>
            <Button variant="ghost" className="hover:text-primary">
              <Heart />
            </Button>
          </div>
        </div>
        <ScrollArea className="w-full h-[300px] text-sm font-light text-black">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ScrollArea>
      </div>
    </main>
  );
}

export default CollaboratorContentsBlogPost;
