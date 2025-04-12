import { EllipsisIcon } from '@/assets/svgs/ellipsis';
import { FlagIcon } from '@/assets/svgs/flag';
import { cn } from '@/libraries/utils';
import Image, { type StaticImageData } from 'next/image';

// Tipos aceitos para os botões
type ButtonType = 'flag' | 'heart' | 'ellipsis' | 'delete';

// Propriedades do componente
interface WBoxProps {
  variant: 'white' | 'purple'; // Duas variantes: branca e roxa
  imageSrc: StaticImageData; // Caminho da imagem
  imageAlt: string; // Texto alternativo para a imagem
  title: string; // Título
  text: string; // Texto descritivo
  time: string; // Tempo de leitura
  buttons?: ButtonType[]; // Array com os botões desejados
}

export default function WBox({
  variant,
  imageSrc,
  imageAlt,
  title,
  text,
  time,
  buttons = [], // Valor padrão: nenhum botão
}: WBoxProps) {
  // Função para renderizar os botões com base no tipo
  const renderButton = (type: ButtonType) => {
    const buttonClasses =
      'flex justify-center items-center cursor-pointer w-[20px] h-[20px]';

    switch (type) {
      case 'flag':
        return (
          <FlagIcon
            className={cn(
              variant === 'white' ? 'text-[#828282]' : 'text-white'
            )}
          />
        );
      case 'ellipsis':
        return (
          <EllipsisIcon
            className={cn(
              variant === 'white' ? 'text-[#828282]' : 'text-white'
            )}
          />
        );
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
      {/* Imagem */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={145}
        height={145}
        className="rounded-lg h-[150px] w-[150px] object-cover"
      />

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 gap-3">
        <h3
          className={cn(
            'font-bold text-sm',
            variant === 'white' ? 'text-primary' : 'text-white'
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            'font-light text-xs',
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
            {time}
          </span>
          {/* Renderização dos botões */}
          <div className="flex gap-2">
            {buttons.map((buttonType) => (
              <button
                key={buttonType}
                type="button"
                className="flex justify-center items-center cursor-pointer w-[20px] h-[20px]"
              >
                {renderButton(buttonType)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
