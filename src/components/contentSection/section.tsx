import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SectionProps {
  title: string;
  link: string;
}

export function SectionHeader({ title, link }: SectionProps) {
  return (
    <div className="flex justify-between items-center mb-3">
      <h2 className="font-semibold text-lg text-[#4f4f4f]">{title}</h2>
      <Link href={link}>
        <Button
          variant="outline"
          className="border-[#BDBDBD] rounded-lg text-sm text-[#333333] hover:text-[#333333]"
        >
          Ver mais
        </Button>
      </Link>
    </div>
  );
}
