'use client';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { HotTopicsChart } from '@/components/bar-chart';
import { LineCharts } from '@/components/line-chart';
import SharedItems from '@/components/shared-items';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { format } from 'date-fns';
export default function Dashboard() {
  const [date, setDate] = useState<Date>();
  const [filterType, setFilterType] = useState<'collaborator' | 'service'>(
    'collaborator'
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="flex flex-wrap items-center gap-4 mb-5 justify-end border-none">
        <Select
          onValueChange={(value) =>
            setFilterType(value as 'collaborator' | 'service')
          }
        >
          <SelectTrigger
            className="w-[220px] bg-white border-none shadow-none"
            iconColor="text-[#736CCE]"
          >
            <SelectValue placeholder="Uso do colaborador" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="collaborator">Uso do colaborador</SelectItem>
            <SelectItem value="service">Uso do serviço</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger
            className="w-[220px] bg-white border-none shadow-none"
            iconColor="text-[#736CCE]"
          >
            <SelectValue placeholder="Especialidade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Psicologia">Psicologia</SelectItem>
            <SelectItem value="Psiquiatria">Psiquiatria</SelectItem>
            <SelectItem value="Nutrição">Nutrição</SelectItem>
            <SelectItem value="Coach">Coach</SelectItem>
            <SelectItem value="Fisioterapia">Fisioterapia</SelectItem>
          </SelectContent>
        </Select>

        {/* Filtro de especialidade apenas se for "service" */}
        {filterType === 'service' ? (
          <Select>
            <SelectTrigger
              className="w-[220px] bg-white border-none shadow-none"
              iconColor="text-[#736CCE]"
            >
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Psicologia">Psicologia</SelectItem>
              <SelectItem value="Psiquiatria">Psiquiatria</SelectItem>
              <SelectItem value="Nutrição">Nutrição</SelectItem>
              <SelectItem value="Coach">Coach</SelectItem>
              <SelectItem value="Fisioterapia">Fisioterapia</SelectItem>
            </SelectContent>
          </Select>
        ) : null}

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="w-[130px] justify-between text-left font-normal bg-white"
            >
              {date ? format(date, 'dd/MM/yyyy') : 'Período'}
              <ChevronDown className="text-[#736CCE] size-5 opacity-100" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Button className="bg-[#736CCE] hover:bg-[#6a51e6] text-white">
          Baixar relatório
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card className="py-y bg-[#7B6CD9] text-white pl-14">
          <strong className="text-lg font-medium text-[#F2F2F2]">
            Sessões realizadas
          </strong>
          <span className="text-3xl font-bold">12000</span>
        </Card>

        <Card className="py-7 bg-white pl-14">
          <h3 className="text-lg font-medium text-[#828282] ">
            Sessões agendadas
          </h3>
          <p className="text-3xl font-bold text-[#7B6CD9]">12000</p>
        </Card>
      </div>

      <div className="mb-6">
        <LineCharts />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HotTopicsChart />
        <SharedItems />
      </div>
    </div>
  );
}
