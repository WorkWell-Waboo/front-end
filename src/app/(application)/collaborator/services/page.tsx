'use client';
import AconselhamentoFinanceiroSVG from '../../../../assets/svgs/aconselhamento-financeiro';
import FisioterapiaSVG from '../../../../assets/svgs/fisioterapia';
import HealthCoachingSVG from '../../../../assets/svgs/health-coaching';
import MassagemSVG from '../../../../assets/svgs/massagem';
import NutricaoSVG from '../../../../assets/svgs/nutricion';
import PsicologiaSVG from '../../../../assets/svgs/psicologia';
import PsiquiatriaSVG from '../../../../assets/svgs/psiquiatria';
import SonoSVG from '../../../../assets/svgs/sono';

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

interface Service {
  name: string;
  hasService: boolean;
}

const serviceIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Psicologia: PsicologiaSVG,
  Psiquiatria: PsiquiatriaSVG,
  Nutrição: NutricaoSVG,
  'Health Coaching': HealthCoachingSVG,
  'Aconselhamento Financeiro': AconselhamentoFinanceiroSVG,
  Massagem: MassagemSVG,
  Fisioterapia: FisioterapiaSVG,
  Sono: SonoSVG,
};
const services: Service[] = [
  { name: 'Psicologia', hasService: true },
  { name: 'Psiquiatria', hasService: true },
  { name: 'Nutrição', hasService: true },
  { name: 'Health Coaching', hasService: false },
  { name: 'Aconselhamento Financeiro', hasService: true },
  { name: 'Massagem', hasService: false },
  { name: 'Fisioterapia', hasService: true },
  { name: 'Sono', hasService: false },
];

export default function ServicesGrid() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 p-10">
      {services.map((service) => (
        <ClickableCard
          key={service.name}
          service={service}
          isActive={activeService === service.name}
          setActiveService={setActiveService}
        />
      ))}
    </div>
  );
}

function ClickableCard({
  service,
  isActive,
  setActiveService,
}: {
  service: Service;
  isActive: boolean;
  setActiveService: (name: string | null) => void;
}) {
  const [open, setOpen] = useState(false);
  const status = service.hasService
    ? isActive
      ? 'active'
      : 'normal'
    : 'disabled';

  const handleClick = () => {
    if (status === 'disabled') return;
    setActiveService(service.name);
    setOpen(true);
  };
  const IconComponent = serviceIcons[service.name] || null;
  return (
    <>
      <Card
        data-status={status}
        className={`p-10 cursor-pointer group 
          ${status === 'active' ? 'bg-primary text-white' : ''} 
          ${
            status === 'disabled'
              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
              : ''
          }`}
        onClick={handleClick}
      >
        <CardContent className="flex flex-col items-center justify-center">
          <Avatar>
            <AvatarFallback className="bg-accent">
              {IconComponent ? (
                <IconComponent className="text-primary" />
              ) : (
                <span>?</span>
              )}
            </AvatarFallback>
          </Avatar>
          <p className="font-normal text-xl">{service.name}</p>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Detalhes sobre {service.name}</DialogTitle>
          </DialogHeader>
          <p>Aqui você pode adicionar mais informações sobre {service.name}.</p>
          <Button onClick={() => setOpen(false)}>Fechar</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
