'use client';

import { Input } from '@/components/ui/input';
import {
  FaBell,
  FaGlobe,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from 'react-icons/fa';
import { Button } from './ui/button';

type SearchBarProps = {
  inputDisabled?: boolean;
};

export default function SearchBar({ inputDisabled = false }: SearchBarProps) {
  return (
    <div className="flex items-center justify-between bg-[#f5f7fc] p-4 rounded-xl">
      {/* Search Input */}
      <div className="flex items-center bg-white px-4 py-2 rounded-full w-full max-w-xl">
        <FaSearch className="text-gray-400 mr-2" />
        <Input
          type="text"
          placeholder="Procure por nome"
          disabled={inputDisabled}
          className={`border-none shadow-none focus:outline-none focus:ring-0 w-full text-sm ${
            inputDisabled
              ? 'text-gray-300 cursor-not-allowed bg-gray-100'
              : 'text-gray-600'
          } placeholder:text-gray-400`}
        />
      </div>

      {/* Icons */}
      <div className="flex gap-4 ml-4">
        {[
          <FaShoppingCart key="cart" />,
          <FaGlobe key="globe" />,
          <FaBell key="bell" />,
          <FaUser key="user" />,
        ].map((Icon, idx) => (
          <Button
            key={idx.toString()}
            className="w-10 h-10 rounded-full bg-[#eef0f8] flex items-center justify-center text-[#7b84d9] hover:bg-[#e0e3f0] transition"
          >
            {Icon}
          </Button>
        ))}
      </div>
    </div>
  );
}
