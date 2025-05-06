import { Badge } from '@/components/ui/badge';

interface TagListProps {
  tags: string[];
  className?: string;
}

export default function TagList({ tags, className = '' }: TagListProps) {
  return (
    <div className={`flex flex-wrap gap-2  ${className}`}>
      {tags.map((tag) => (
        <Badge
          variant="secondary"
          key={tag}
          className="bg-[#F2F2F2] text-[#828282]"
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}
