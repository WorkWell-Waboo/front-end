'use client';

import { BellSVG } from '@/assets/svgs/bell';
import CartSVG from '@/assets/svgs/cart';
import GloboSVG from '@/assets/svgs/globo';
import SearchSVG from '@/assets/svgs/search';
import { UserSVG } from '@/assets/svgs/user';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

type SearchBarProps = {
  inputDisabled?: boolean;
  placeholder?: string;
  isManager?: boolean;
};

export default function SearchBar({
  inputDisabled = false,
  placeholder,
  isManager = false,
}: SearchBarProps) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between pt-5 pb-6 rounded-xl bg-transparent">
      {/* Search Input ou mensagem */}
      <div className="rounded-full w-full border-0">
        {inputDisabled ? (
          isManager ? (
            <p className="text-[#9E9EA8]">Olá, nome do gestor</p>
          ) : null
        ) : (
          <Input
            placeholder={placeholder || 'Buscar nome...'}
            rounded="full"
            before={{
              variant: 'ghost',
              content: <SearchSVG className="text-muted-foreground ml-6" />,
            }}
          />
        )}
      </div>

      {/* Icons */}
      <div
        className={`flex gap-4 ${
          !inputDisabled ? 'ml-4' : 'ml-0 w-full justify-end'
        }`}
      >
        {[
          <CartSVG key="cart" />,
          <GloboSVG key="globe" />,
          <BellSVG key="bell" />,
        ].map((Icon, idx) => (
          <Button
            key={idx.toString()}
            className="w-10 h-10 rounded-full text-[#736CCE] bg-[#736CCE0D] flex items-center justify-center hover:bg-[#e0e3f0] transition"
          >
            {Icon}
          </Button>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-10 h-10 rounded-full text-[#736CCE] bg-[#736CCE0D] flex items-center justify-center hover:bg-[#e0e3f0] transition">
              <UserSVG />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem
              onClick={() => router.push('/dashboard/perfil/123')}
            >
              Meu perfil
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push('/dashboard/transactions/456 ')}
            >
              Minhas sessões
            </DropdownMenuItem>
            <DropdownMenuItem>Conteúdos</DropdownMenuItem>
            <DropdownMenuItem>Meus favoritos</DropdownMenuItem>
            <DropdownMenuItem>Botão de pânico</DropdownMenuItem>
            <DropdownMenuItem>Comprar sessões</DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/contents/my-events">Meus eventos</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Política de privacidade</DropdownMenuItem>
            <DropdownMenuItem>Termos e condições</DropdownMenuItem>
            <DropdownMenuItem>Avaliar o app</DropdownMenuItem>
            <DropdownMenuItem>Ajuda</DropdownMenuItem>
            <DropdownMenuItem>Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
