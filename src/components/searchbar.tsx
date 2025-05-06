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
import { NotificationBell } from './NotificationBell';
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
            placeholder={placeholder || 'Procure por nome'}
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
        <Button
          onClick={() => router.push('plans')}
          className="w-10 h-10 rounded-full text-[#736CCE] bg-[#736CCE0D] flex items-center justify-center hover:bg-[#e0e3f0] transition"
        >
          <CartSVG key="cart" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-10 h-10 rounded-full text-[#736CCE] bg-[#736CCE0D] flex items-center justify-center hover:bg-[#e0e3f0] transition">
              <GloboSVG key="globe" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>Português PT</DropdownMenuItem>
            <DropdownMenuItem>Português BR</DropdownMenuItem>
            <DropdownMenuItem>Inglês</DropdownMenuItem>
            <DropdownMenuItem>Francês</DropdownMenuItem>
            <DropdownMenuItem>Espanhol</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <NotificationBell
          count={3}
          notifications={[
            {
              id: 1,
              title: 'Consulta agendada',
              message: 'Você tem uma consulta amanhã às 10h',
            },
            {
              id: 2,
              title: 'Novo documento',
              message: 'Seu exame foi adicionado ao prontuário',
            },
            {
              id: 3,
              title: 'Mensagem',
              message: 'Seu especialista enviou uma nova mensagem',
            },
          ]}
        />
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
            <DropdownMenuItem
              onClick={() => router.push('/dashboard/favoritos/94095')}
            >
              Meus favoritos
            </DropdownMenuItem>
            <DropdownMenuItem>Botão de pânico</DropdownMenuItem>
            <DropdownMenuItem>Comprar sessões</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push('/dashboard/detalhes/4426')}
            >
              Detalhes sobre consumo
            </DropdownMenuItem>
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
