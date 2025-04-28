'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Dados simulados
const reportData = [
  { id: 1, sessions: 10, chat: 8, total: 2, status: 'Ativo' },
  { id: 2, sessions: 15, chat: 10, total: 5, status: 'Em avaliação' },
  { id: 3, sessions: 10, chat: 9, total: 1, status: 'Ativo' },
  { id: 4, sessions: 5, chat: 4, total: 1, status: 'Sem sessões recentes' },
  { id: 5, sessions: 10, chat: 10, total: 0, status: 'Em pausa - usuário' },
  { id: 6, sessions: 3, chat: 2, total: 1, status: 'Inativo' },
  { id: 7, sessions: 5, chat: 5, total: 0, status: 'Em avaliação' },
  { id: 8, sessions: 15, chat: 10, total: 5, status: 'Ativo' },
  { id: 9, sessions: 10, chat: 9, total: 1, status: 'Sem sessões recentes' },
  { id: 10, sessions: 5, chat: 1, total: 4, status: 'Em pausa - usuário' },
];

// Badge de status colorido
function StatusBadge({ status }: { status: string }) {
  const statusClasses: { [key: string]: string } = {
    Ativo: 'bg-green-100 border border-[#659688] rounded-md',
    'Em avaliação': 'bg-[#FFFBDC] border border-[#D2D23C] rounded-md',
    'Sem sessões recentes': 'bg-[#E8F1FB] border border-[#5C7087] rounded-md',
    'Em pausa - usuário': 'bg-[#ECEFEE] border border-[#9B9F9E] rounded-md',
    Inativo: 'bg-[#FFDCDC] border border-[#F05252] rounded-md',
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${
        statusClasses[status] || 'bg-gray-100 text-gray-800'
      }`}
    >
      {status}
    </span>
  );
}

function ManagerReportsPage() {
  const [date, setDate] = useState<Date>();

  return (
    <main className="p-8 bg-[#F4F5FA] min-h-screen">
      {/* Filtros */}
      <div className="flex flex-wrap items-center gap-4 mb-5 justify-end border-none">
        <Select>
          <SelectTrigger
            className="w-[220px] bg-white border-none shadow-none"
            iconColor="text-[#736CCE]"
          >
            <SelectValue placeholder="Uso do colaborador" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="baixo">Uso do Coloborador</SelectItem>
            <SelectItem value="médio">Uso do </SelectItem>
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
            <SelectItem value="psicologia">Psicologia</SelectItem>
            <SelectItem value="nutricao">Nutrição</SelectItem>
            <SelectItem value="coaching">Health Coaching</SelectItem>
          </SelectContent>
        </Select>

        {/* Período (Date Picker) */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="w-[130px] justify-between text-left font-normal bg-white tex"
            >
              {date ? format(date, 'dd/MM/yyyy') : 'Período'}{' '}
              <ChevronDown className="text-[#736CCE] size-5 opacity-100	" />
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

      {/* Tabela */}
      <ScrollArea className="rounded-lg border-none bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código do colaborador</TableHead>
              <TableHead>Sessões utilizadas</TableHead>
              <TableHead>Aconselhamento em chat</TableHead>
              <TableHead>Total utilizado</TableHead>
              <TableHead>Status acompanhamento</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reportData.map((data) => (
              <TableRow key={data.id} className="text-sm text-[#202020]">
                <TableCell className="py-6">COLAB12345</TableCell>
                <TableCell>{data.sessions}</TableCell>
                <TableCell>{data.chat}</TableCell>
                <TableCell>{data.total}</TableCell>
                <TableCell>
                  <StatusBadge status={data.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </main>
  );
}

export default ManagerReportsPage;
