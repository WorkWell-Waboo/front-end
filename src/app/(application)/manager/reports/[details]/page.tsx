import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { HotTopicsChart } from '../../../../../components/bar-chart';
import { LineCharts } from '../../../../../components/line-chart';
import SharedItems from '../../../../../components/shared-items';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <Button
            variant="outline"
            className="bg-white justify-between w-full md:w-auto"
          >
            Uso do colaborador
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="bg-white justify-between w-full md:w-auto"
          >
            Especialidade
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="bg-white justify-between w-full md:w-auto"
          >
            Período
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <Button className="bg-[#7B6CD9] hover:bg-[#6a5bc0] w-full md:w-auto">
          Baixar relatório
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card className="p-6 bg-[#7B6CD9] text-white">
          <h3 className="text-lg font-medium mb-2">Sessões realizadas</h3>
          <p className="text-5xl font-bold">12000</p>
        </Card>
        <Card className="p-6 bg-white">
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            Sessões agendadas
          </h3>
          <p className="text-5xl font-bold text-[#7B6CD9]">12000</p>
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
