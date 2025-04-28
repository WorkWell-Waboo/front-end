'use client';

import ImageEquipe from '@/assets/imgs/AppWorkwell.jpg';
import InfinitySVG from '@/assets/svgs/infinity';
import { HotTopicsChart } from '@/components/bar-chart';
import { DonutChart } from '@/components/donutsChart';
import { LineCharts } from '@/components/line-chart';
import TermsModal from '@/components/termsmodal';
import {} from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {} from '@/components/ui/chart';
import {} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {} from '@/components/ui/tabs';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ManagerDashboardPage() {
  const [period, setPeriod] = useState('mes');
  const [year, setYear] = useState('');
  const [visibleCount, setVisibleCount] = useState(3);
  const [termsAccepted, setTermsAccepted] = useState(false); // Controle do termo de uso
  const [dialogOpen, setDialogOpen] = useState(true); // Estado para abrir o diálogo

  const colaboradores = [
    'COLAB12345',
    'COLAB98765',
    'COLAB12356',
    'COLAB12346',
    'COLAB42346',
    'COLAB54321',
    'COLAB67890',
    'COLAB13579',
  ];

  useEffect(() => {
    // Verifica se o termo foi aceito anteriormente
    const accepted = localStorage.getItem('termsAccepted');
    if (accepted === 'true') {
      setDialogOpen(false); // Fecha o diálogo se já tiver sido aceito
    }
  }, []);

  const handleAccept = () => {
    setTermsAccepted(true);
    localStorage.setItem('termsAccepted', 'true');
    setDialogOpen(false);
  };

  const handleReject = () => {
    setDialogOpen(false);
    // Aqui você pode redirecionar ou exibir outra mensagem se necessário
  };

  return (
    <main className="container mx-auto p-4 sm:p-10 space-y-6 overflow-auto">
      {/* Dialog for Terms of Use */}
      <TermsModal />

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_.6fr] gap-4">
        {/* Left Card - Call to Action */}
        <Card className="relative overflow-hidden rounded-xl h-fit ">
          <Image
            src={ImageEquipe}
            alt="Equipe"
            className="absolute transform scale-x-[-1] -translate-y-26  scale-90 object-cover filter grayscale brightness-150"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#736CCE] to-[#736CCE]/80" />
          <CardContent className="relative z-10 text-white">
            <h2 className="text-2xl font-bold">
              Invista no bem-estar da sua equipe
            </h2>
            <p className="mt-2 text-sm">
              Adquira sessões e ofereça mais recursos para o desenvolvimento dos
              seus colaboradores.
            </p>
            <Button className="mt-4 bg-white text-[#736CCE] font-semibold text-xs px-4 py-2 rounded-md">
              Comprar sessões
            </Button>
          </CardContent>
        </Card>

        {/* Right Card - Available Sessions */}
        <Card className="border-b-primary! border-b-3! rounded-lg border-0">
          <CardContent className="flex flex-col items-start my-auto">
            <span className="text-gray-500 mb-2">Sessões disponíveis</span>
            <div className="flex items-center justify-center">
              <InfinitySVG />
            </div>
            <span className="font-medium mt-2">3 por colaborador</span>
          </CardContent>
        </Card>
      </div>

      {/* Overview Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xl font-semibold">Visão geral</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Selecione um período</span>
            <div className="flex gap-2">
              <Select value={period} onValueChange={setPeriod}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Mês" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mes">Mês</SelectItem>
                  <SelectItem value="trimestre">Trimestre</SelectItem>
                  <SelectItem value="semestre">Semestre</SelectItem>
                </SelectContent>
              </Select>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Ano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Card className="bg-[#736CCE]">
            <CardContent className="flex flex-col items-start">
              <div className="flex items-center gap-1 mb-2 ">
                <span className="text-sm text-[#F2F2F2]">
                  Sessões realizadas
                </span>
                <Badge
                  variant="outline"
                  className="bg-[#25B72E] text-[#FFFFFF] border-none p-1 w-4 h-4 rounded"
                >
                  <ArrowUpRight className="w-2 h-2" />
                </Badge>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-[#FFFFFF]">12000</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-start">
              <div className="flex items-center justify-center gap-1 mb-2 ">
                <span className="text-sm text-[#828282]">
                  Sessões agendadas
                </span>
                <Badge
                  variant="outline"
                  className="bg-[#25B72E] text-[#FFFFFF] border-none p-1 w-4 h-4 rounded"
                >
                  <ArrowUpRight className="w-fit h-fit" />
                </Badge>
              </div>
              <span className="text-3xl font-bold text-[#736CCE]">12000</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-start">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-sm text-[#828282]">
                  Colaboradores ativos
                </span>
                <Badge
                  variant="outline"
                  className="bg-[#25B72E] text-[#FFFFFF] border-none p-1 w-4 h-4 rounded"
                >
                  <ArrowUpRight className="w-fit h-fit" />
                </Badge>
              </div>
              <span className="text-3xl font-bold text-[#736CCE]">12000</span>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-start">
              <span className="text-sm text-[#828282] mb-2">
                Tempo médio nas consultas
              </span>
              <span className="text-3xl font-bold text-[#736CCE]">50min</span>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Service Utilization Chart */}
          <DonutChart />

          {/* Collaborators Card */}
          <Card className="">
            <CardHeader className="pb-2 flex flex-row items-center justify-between px-7">
              <CardTitle className="text-lg font-medium">
                Colaboradores
              </CardTitle>
              <span className="text-sm flex gap-1 items-center ">
                <ChevronDown className="text-[#504DA6]" />
                Hoje
              </span>
            </CardHeader>
            <CardContent className="space-y-2 px-4 overflow-y-auto max-h-[200px] scrollbar-custom">
              {/* Contêiner de colaboradores com rolagem vertical */}
              <div className="flex flex-col ">
                {colaboradores.map((colab) => (
                  <div
                    key={colab}
                    className="px-4 py-4.5 rounded-sm hover:bg-[#504DA6]/10 transition-colors flex items-center justify-between"
                  >
                    <span className="text-sm text-[#736CCE] font-semibold">
                      {colab}
                    </span>
                    <Button
                      onClick={() => console.log(`Ver relatório de ${colab}`)}
                      variant="ghost"
                      className="text-xs font-normal p-0 text-[#504DA6] underline hover:text-[#504DA6] focus:outline-none focus:ring-1 focus:ring-[#C4B5FD] rounded-sm"
                    >
                      Ver relatório
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Risk Level Chart */}
          <LineCharts />

          {/* Most Used Tags */}
          <HotTopicsChart />
        </div>
      </div>
    </main>
  );
}
