'use client';
import { BrainSVG } from '@/assets/svgs/brain';
import { HeaderCogSVG } from '@/assets/svgs/header-cog';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';

function CollaboratorServicesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid lg:grid-cols-4 gap-5 p-10">
      <Card
        data-active={true}
        className="data-[active=true]:bg-primary group p-10 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <CardContent className="flex flex-col items-center justify-center">
          <Avatar>
            <AvatarFallback className="bg-accent">
              <HeaderCogSVG className="text-primary" />
            </AvatarFallback>
          </Avatar>
          <p className="group-data-[active=true]:text-white font-normal text-xl text-[rgba(79, 79, 79, 1)]">
            Psicologia
          </p>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Detalhes sobre Psicologia</DialogTitle>
          </DialogHeader>
          <p>Aqui você pode adicionar mais informações sobre Psicologia.</p>
          <Button onClick={() => setOpen(false)}>Fechar</Button>
        </DialogContent>
      </Dialog>

      <Card className="p-10">
        <CardContent className="flex flex-col gap-2 items-center justify-center">
          <Avatar>
            <AvatarFallback className="bg-accent">
              <BrainSVG className="text-primary" />
            </AvatarFallback>
          </Avatar>
          <p className="font-normal text-xl text-[rgba(79, 79, 79, 1)]">
            Psiquiatria
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default CollaboratorServicesPage;
