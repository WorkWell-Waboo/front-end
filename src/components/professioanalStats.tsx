import PersonaSVG from '@/assets/svgs/persona';
import { Star } from 'lucide-react';

interface ProfessionalStatsProps {
  rating: number;
  comments: number;
  sessions: number;
}

export default function ProfessionalStats({
  rating,
  comments,
  sessions,
}: ProfessionalStatsProps) {
  return (
    <div className="flex items-center mb-3 text-sm text-gray-700">
      <div className="flex items-center mr-4">
        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
        <span className="text-base">{rating}</span>
        <span className="text-xs text-[#333333] ml-1">
          ({comments} comentários)
        </span>
      </div>

      <div className="flex items-center">
        <PersonaSVG className="h-4 w-4 mr-1" />
        <span className="font-normal text-[#333333] text-xs">
          <span className="text-base">{sessions}</span> atendimentos
        </span>
      </div>
    </div>
  );
}
