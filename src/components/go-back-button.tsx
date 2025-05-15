'use client';

import { Arrow } from '@/assets/svgs/arrow';
import { Button } from '@/components/ui/button';
import { cn } from '@/libraries/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GoBackButtonProps {
  className?: string;
}

function GoBackButton({ className }: GoBackButtonProps) {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <Button
      variant="secondary"
      className={cn(
        'size-9 p-2 rounded-full bg-[#E9EAF5] hover:bg-[#E9EAF5]/70 ',
        className
      )}
      onClick={handleBack}
    >
      <ChevronLeft className={cn('text-primary', 'size-6')} />
    </Button>
  );
}

export default GoBackButton;
