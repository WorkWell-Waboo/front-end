'use client';

import InfinitySVG from '@/assets/svgs/infinity';
import {} from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

export default function ManagerDashboardPage() {
  const [period, setPeriod] = useState('mes');
  const [year, setYear] = useState('2023');

  return (
    <main className="container mx-auto p-10 space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
        {/* Left Card - Call to Action */}
        <Card className="bg-[#7C3AED] text-white">
          <CardContent className=" flex flex-col gap-2">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">
                Invista no bem-estar da sua equipe
              </h2>
              <p className="text-white/80">
                Adquira sessões e ofereça mais recursos para o desenvolvimento
                dos seus colaboradores.
              </p>
              <Button variant="secondary" className="mt-4">
                Comprar sessões
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Right Card - Available Sessions */}
        <Card>
          <CardContent className="flex flex-col items-start">
            <span className="text-sm text-gray-500 mb-2">
              Sessões disponíveis
            </span>
            <div className="flex items-center justify-center">
              <InfinitySVG />
            </div>
            <span className="text-sm font-medium mt-2">3 por colaborador</span>
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
              <CardTitle className="text-sm font-medium">
                Percentual de utilização por serviço
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">d</div>
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
