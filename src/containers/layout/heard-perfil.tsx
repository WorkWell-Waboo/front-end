import { Heart } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';

interface HeadPerfilProps {
  name: string;
  profession: string;
  photo: string | StaticImageData;
  isFavorited?: boolean;
  toggleFavorite: (name: string) => void;
}

function HeadPerfil({
  name,
  profession,
  photo,
  isFavorited,
  toggleFavorite,
}: HeadPerfilProps) {
  return (
    <div className="flex justify-between items-start w-full">
      <div className="flex gap-2">
        <Image
          src={photo}
          alt={`Foto de ${name}`}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg text-accent-foreground">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{profession}</p>
        </div>
      </div>
      <button type="button" onClick={() => toggleFavorite(name)}>
        <Heart
          size={20}
          className={
            isFavorited ? 'fill-primary text-primary' : 'text-[#4F4F4F] '
          }
        />
      </button>
    </div>
  );
}

export default HeadPerfil;
