'use client';
import ParkOutlineSVG from '@/assets/svgs/park-outline';
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

import AconselhamentoFinanceiroSVG from '@/assets/svgs/aconselhamento-financeiro';
import FisioterapiaSVG from '@/assets/svgs/fisioterapia';
import HealthCoachingSVG from '@/assets/svgs/health-coaching';
import MassagemSVG from '@/assets/svgs/massagem';
import NutricaoSVG from '@/assets/svgs/nutricion';
import PsicologiaSVG from '@/assets/svgs/psicologia';
import PsiquiatriaSVG from '@/assets/svgs/psiquiatria';
import SonoSVG from '@/assets/svgs/sono';
import { useRouter } from 'next/navigation';

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
  { name: 'Health Coaching', hasService: true },
  { name: 'Aconselhamento Financeiro', hasService: true },
  { name: 'Massagem', hasService: true },
  { name: 'Fisioterapia', hasService: false },
  { name: 'Sono', hasService: true },
];

export default function CollaboratorServices() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [isSubscriber, setSubscriber] = useState(true);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 p-10">
      {services.map((service) => (
        <ClickableCard
          key={service.name}
          service={service}
          isActive={activeService === service.name}
          setActiveService={setActiveService}
          isSubscriber={isSubscriber}
        />
      ))}
    </div>
  );
}

function ClickableCard({
  service,
  isActive,
  setActiveService,
  isSubscriber,
}: {
  isSubscriber: boolean;
  service: Service;
  isActive: boolean;
  setActiveService: (name: string | null) => void;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const status = service.hasService
    ? isActive
      ? 'active'
      : 'normal'
    : 'disabled';

  const handleClick = () => {
    if (status === 'disabled') return;

    if (isSubscriber) {
      router.push('/services/7765776');
      return;
    }

    setActiveService(service.name);
    setOpen(true);
  };

  const IconComponent = serviceIcons[service.name] || null;

  return (
    <>
      <Card
        data-status={status}
        className={`p-10 cursor-pointer group text-center text-[#4F4F4F]
          ${status === 'active' ? 'bg-primary text-white' : ''} 
          ${
            status === 'disabled'
              ? 'bg-[#D3D3D3] text-[#585858]! cursor-not-allowed'
              : ''
          }`}
        onClick={handleClick}
      >
        <CardContent className="flex flex-col items-center justify-center">
          <Avatar>
            <AvatarFallback
              data-status={status}
              className={` bg-accent 
                    ${status === 'active' ? 'text-primary! bg-[#F9F3FF]!' : ''} 
                    ${status === 'disabled' ? ' bg-[#E7E7E7]! ' : ''}`}
            >
              {IconComponent ? (
                <IconComponent
                  data-status={status}
                  className={` text-primary 
                    ${status === 'active' ? 'text-primary!' : ''} 
                    ${
                      status === 'disabled'
                        ? ' text-[#585858]! cursor-not-allowed'
                        : ''
                    }`}
                />
              ) : (
                <span>?</span>
              )}
            </AvatarFallback>
          </Avatar>
          <p className="font-normal text-xl ">{service.name}</p>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <div className="flex justify-center -mt-13">
            <Avatar>
              <AvatarFallback className="bg-white">
                <ParkOutlineSVG className="w-10 h-10 text-primary" />
              </AvatarFallback>
            </Avatar>
          </div>
          <DialogHeader>
            <DialogTitle className="text-center">
              Consultas indisponíveis
            </DialogTitle>
          </DialogHeader>
          <p className="text-center">
            Para aceder a esta especialidade, terá de adquirir novas consultas
            ou pacotes. Confira os planos disponíveis e continue o seu
            atendimento sem interrupções..
          </p>

          <div className="grid grid-cols-2 gap-2 text-[#691FB1] px-10 mb-5">
            <Button
              variant="ghost"
              className="border border-[#691FB1]"
              onClick={() => setOpen(false)}
            >
              Voltar
            </Button>
            <Button
              className="bg-[#691FB1] text-white "
              onClick={() => router.push('/planos')}
            >
              Ir para planos
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
