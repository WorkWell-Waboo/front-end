'use client';
import { EllipsisIcon } from '@/assets/svgs/ellipsis';
import { FlagIcon } from '@/assets/svgs/flag';
import HeartLikeSVG from '@/assets/svgs/heartlike';
import { cn } from '@/libraries/utils';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type ButtonType = 'flag' | 'heart' | 'ellipsis' | 'delete';

interface WBoxProps {
  id: number;
  variant: 'white' | 'purple' | null;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  title: string;
  text: string;
  link: string | '#';
  time: string | null;
  buttons?: ButtonType[] | null;
}

export default function WBox({
  id,
  variant,
  imageSrc,
  imageAlt,
  title,
  text,
  link,
  time,
  buttons = [],
}: WBoxProps) {
  // Estado para armazenar favoritos (botões ativos)
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({}); // Usa ID como chave

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id], // Alterna entre ativo e inativo
    }));
  };

  const renderButton = (type: ButtonType) => {
    const buttonClasses =
      'flex justify-center items-center cursor-pointer w-[20px] h-[20px]';

    switch (type) {
      case 'flag':
        return (
          <button type="button" className={cn(buttonClasses)}>
            <FlagIcon
              className={cn(
                variant === 'white' ? 'text-[#828282]' : 'text-white'
              )}
            />
          </button>
        );
      case 'ellipsis':
        return (
          <button type="button" className={cn(buttonClasses)}>
            <EllipsisIcon
              className={cn(
                variant === 'white' ? 'text-[#828282]' : 'text-white'
              )}
            />
          </button>
        );
      case 'heart': {
        const isFavorite = favorites[id]; // Verifica se este ID está ativo
        return (
          <button
            type="button"
            className={cn(buttonClasses)}
            onClick={() => toggleFavorite(id)} // Alterna favorito
          >
            <HeartLikeSVG
              className={cn(
                isFavorite
                  ? variant === 'white'
                    ? 'fill-primary text-primary'
                    : 'fill-white text-white'
                  : variant === 'white'
                  ? 'text-[#828282]'
                  : 'text-white'
              )}
            />
          </button>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        'p-4 rounded-lg flex items-center gap-5 border-b-2',
        variant === 'white'
          ? 'bg-white border-b-primary'
          : 'bg-primary border-b-white'
      )}
    >
      <Link href={link}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={145}
          height={145}
          className="rounded-lg h-[150px] w-[150px] object-cover"
        />
      </Link>
      <div className="flex flex-col flex-1 gap-3">
        <Link href={link}>
          <h3
            className={cn(
              'font-bold text-sm line-clamp-2',
              variant === 'white' ? 'text-primary' : 'text-white'
            )}
          >
            {title}
          </h3>
        </Link>
        <p
          className={cn(
            'font-light text-xs line-clamp-3',
            variant === 'white' ? 'text-[#4f4f4f]' : 'text-white'
          )}
        >
          {text}
        </p>
        <div className="flex justify-between items-center">
          <span
            className={cn(
              'font-light text-xs',
              variant === 'white' ? 'text-[#828282]' : 'text-white'
            )}
          >
            {time ? time : ''}
          </span>
          <div className="flex gap-2">
            {buttons
              ? buttons.map((buttonType) => (
                  <div key={buttonType}>{renderButton(buttonType)}</div>
                ))
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
}
