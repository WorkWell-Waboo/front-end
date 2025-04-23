'use client';

import ImageEquipe from '@/assets/imgs/AppWorkwell.jpg';
import InfinitySVG from '@/assets/svgs/infinity';
import {} from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { useState } from 'react';
import { Pie, PieChart } from 'recharts';
const chartData = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
  { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
  { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
];
const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Psicologia',
    color: '#4067E9',
  },
  safari: {
    label: 'Psiquiatria',
    color: '#905DF3',
  },
  firefox: {
    label: 'Nutrição',
    color: '#3B3498',
  },
  edge: {
    label: 'Fisioterapia',
    color: '#9F9CCF',
  },
  other: {
    label: 'Coach',
    color: '#133AB9',
  },
} satisfies ChartConfig;
export default function ManagerDashboardPage() {
  const [period, setPeriod] = useState('mes');
  const [year, setYear] = useState('ano');

  return (
    <main className="container mx-auto p-10 space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_.6fr] gap-4">
        {/* Left Card - Call to Action */}
        <Card className="relative overflow-hidden  rounded-xl">
          {/* Imagem de fundo */}
          <Image
            src={ImageEquipe}
            alt="Equipe"
            className="absolute inset-0 w-full h-full object-cover "
          />

          {/* Overlay roxo com transparência */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#736CCE] to-[#736CCE80] via-20% via-[#736CCE]" />

          <CardContent className="relative z-10 text-white p-6">
            <h2 className="text-2xl font-bold">
              Invista no bem-estar da sua equipe
            </h2>
            <p className="mt-2">
              Adquira sessões e ofereça mais recursos para o desenvolvimento dos
              seus colaboradores.
            </p>
            <Button className="mt-4 bg-white text-purple-700 font-semibold px-4 py-2 rounded">
              Comprar sessões
            </Button>
          </CardContent>
        </Card>

        {/* Right Card - Available Sessions */}
        <Card className="border-b-primary! border-b-3! rounded-lg border-0">
          <CardContent className="flex flex-col items-start my-auto ">
            <span className=" text-gray-500 mb-2">Sessões disponíveis</span>
            <div className="flex items-center justify-center">
              <InfinitySVG />
            </div>
            <span className=" font-medium mt-2">3 por colaborador</span>
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
                  <SelectItem value="mes">Ano</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 flex flex-col items-center">
              <span className="text-sm text-gray-500 mb-2">
                Sessões realizadas
              </span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#7C3AED]">1200</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-sm text-gray-500">Sessões agendadas</span>
                <Badge
                  variant="outline"
                  className="bg-green-100 text-green-800 border-green-200"
                >
                  5
                </Badge>
              </div>
              <span className="text-2xl font-bold text-[#7C3AED]">12000</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-sm text-gray-500">
                  Colaboradores ativos
                </span>
                <Badge
                  variant="outline"
                  className="bg-green-100 text-green-800 border-green-200"
                >
                  5
                </Badge>
              </div>
              <span className="text-2xl font-bold text-[#7C3AED]">12000</span>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center">
              <span className="text-sm text-gray-500 mb-2">
                Tempo médio nas consultas
              </span>
              <span className="text-2xl font-bold text-[#7C3AED]">50min</span>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Service Utilization Chart */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold">
                Percentual de utilização por serviço
              </CardTitle>
            </CardHeader>

            <CardContent>
              <ChartContainer
                config={chartConfig}
                className="flex items-center justify-center gap-6"
              >
                <PieChart width={200} height={200}>
                  <ChartTooltip
                    cursor={true}
                    content={
                      <ChartTooltipContent
                        hideLabel
                        hideIndicator={true}
                        indicator="dashed"
                      />
                    }
                  />
                  <Pie
                    data={chartData}
                    dataKey="visitors"
                    nameKey="browser"
                    innerRadius={60}
                    outerRadius={100}
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  />{' '}
                  <ChartLegend
                    content={<ChartLegendContent nameKey="browser" />}
                    className="flex flex-col gap-2 text-sm text-muted-foreground"
                  />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Collaborators Card */}
          <Card>
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium">
                Colaboradores
              </CardTitle>
              <Badge variant="outline" className="text-xs">
                Hoje
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-xs text-gray-500">COLABORADOR</span>
                <span className="text-xs text-[#7C3AED]">Ver relatório</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">COLABORADOR</span>
                <span className="text-xs text-[#7C3AED]">Ver relatório</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">COLABORADOR</span>
                <span className="text-xs text-[#7C3AED]">Ver relatório</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">COLABORADOR</span>
                <span className="text-xs text-[#7C3AED]">Ver relatório</span>
              </div>
            </CardContent>
          </Card>

          {/* Risk Level Chart */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Percentual de nível de risco
              </CardTitle>
              <Badge className="bg-[#7C3AED] text-white">Alto</Badge>
            </CardHeader>
            <CardContent>
              <div className="h-[150px] w-full">d</div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Jan</span>
                <span>Fev</span>
                <span>Mar</span>
                <span>Abr</span>
                <span>Mai</span>
                <span>Jun</span>
              </div>
            </CardContent>
          </Card>

          {/* Most Used Tags */}
          <Card>
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium">
                Tags mais utilizadas
              </CardTitle>
              <Tabs defaultValue="especialidades">
                <TabsList className="h-8">
                  <TabsTrigger value="especialidades" className="text-xs">
                    Especialidades
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between h-[150px] pt-4">
                d
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
