'use client';

import { BellSVG } from '@/assets/svgs/bell';
import CartSVG from '@/assets/svgs/cart';
import GloboSVG from '@/assets/svgs/globo';
import SearchSVG from '@/assets/svgs/search';
import { UserSVG } from '@/assets/svgs/user';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';

type SearchBarProps = {
  inputDisabled?: boolean;
  placeholder?: string;
};

export default function SearchBar({
  inputDisabled = false,
  placeholder,
}: SearchBarProps) {
  return (
    <div className="flex items-center justify-between p-10 rounded-xl ">
      {/* Search Input (condicional) */}
      {!inputDisabled && (
        <div className="rounded-full w-full border-0">
          <Input
            placeholder={placeholder || 'Procurar por nome'}
            rounded="full"
            before={{
              variant: 'ghost',
              content: <SearchSVG className="text-muted-foreground ml-6" />,
            }}
          />
        </div>
      )}

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
          <UserSVG key="user" />,
        ].map((Icon, idx) => (
          <Button
            key={idx.toString()}
            className="w-10 h-10 rounded-full text-[#736CCE] bg-[#736CCE0D] flex items-center justify-center hover:bg-[#e0e3f0] transition"
          >
            {Icon}
          </Button>
        ))}
      </div>
    </div>
  );
}
