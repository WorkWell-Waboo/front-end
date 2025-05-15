import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter } from '@/components/ui/dialog';
import React from 'react';

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SuccessDialog({
  open,
  onOpenChange,
}: SuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-6">
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-xl font-bold text-[#333]">Sucesso!</h2>
          <p className="text-sm text-[#4F4F4F]">
            Consulta reagendada com sucesso!
          </p>
          <Button
            className="mt-6 w-full rounded-md bg-[#691FB1] py-2 text-sm text-[#F2F2F2] font-normal hover:bg-purple-700"
            onClick={() => onOpenChange(false)}
          >
            Compreendi
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
