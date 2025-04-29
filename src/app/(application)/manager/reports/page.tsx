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
import SearchBar from '@/components/searchbar';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useRouter } from 'next/navigation';
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
  { id: 11, sessions: 5, chat: 1, total: 4, status: 'Em pausa - usuário' },
  { id: 12, sessions: 5, chat: 1, total: 4, status: 'Em pausa - usuário' },
  { id: 13, sessions: 5, chat: 1, total: 4, status: 'Em pausa - usuário' },
  { id: 14, sessions: 5, chat: 1, total: 4, status: 'Em pausa - usuário' },
];

const serviceData = [
  { especialidade: 'Psicologia', compradas: 10, utilizadas: 8, saldo: 2 },
  { especialidade: 'Psiquiatria', compradas: 15, utilizadas: 10, saldo: 5 },
  { especialidade: 'Nutrição', compradas: 10, utilizadas: 9, saldo: 1 },
  { especialidade: 'Coach', compradas: 5, utilizadas: 4, saldo: 1 },
  { especialidade: 'Fisioterapia', compradas: 10, utilizadas: 10, saldo: 0 },
  { especialidade: 'Psicologia', compradas: 3, utilizadas: 2, saldo: 1 },
  { especialidade: 'Psiquiatria', compradas: 5, utilizadas: 5, saldo: 0 },
  { especialidade: 'Nutrição', compradas: 15, utilizadas: 10, saldo: 5 },
  { especialidade: 'Coach', compradas: 10, utilizadas: 9, saldo: 1 },
  { especialidade: 'Fisioterapia', compradas: 5, utilizadas: 1, saldo: 4 },
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
      className={`px-3 py-1 text-xs ${
        statusClasses[status] || 'bg-gray-200 border border-gray-400 rounded-md'
      }`}
    >
      {status}
    </span>
  );
}

function ManagerReportsPage() {
  const [date, setDate] = useState<Date>();
  const [filterType, setFilterType] = useState<'collaborator' | 'service'>(
    'collaborator'
  );
  const filteredData = filterType === 'collaborator' ? reportData : serviceData;
  const router = useRouter();
  return (
    <div className="px-10 pb-10 min-h-screen">
      <SearchBar inputDisabled={true} />
      <main>
        {/* Filtros */}
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

        {/* Tabela */}
        <ScrollArea className="border-none">
          <Table className="border-none">
            <TableHeader>
              <TableRow>
                {filterType === 'collaborator' ? (
                  <>
                    <TableHead>Código do colaborador</TableHead>
                    <TableHead>Sessões utilizadas</TableHead>
                    <TableHead>Aconselhamento em chat</TableHead>
                    <TableHead>Total utilizado</TableHead>
                    <TableHead>Status acompanhamento</TableHead>
                  </>
                ) : (
                  <>
                    <TableHead>Especialidade</TableHead>
                    <TableHead>Sessões compradas</TableHead>
                    <TableHead>Sessões utilizadas</TableHead>
                    <TableHead>Saldo</TableHead>
                    <TableHead></TableHead>
                  </>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((data, index) => (
                <TableRow key={index} className="text-sm text-[#202020]">
                  {filterType === 'collaborator' ? (
                    <>
                      <TableCell className="py-4">
                        COLAB57{(data as { id: number }).id}
                      </TableCell>
                      <TableCell>
                        {(data as { sessions: number }).sessions}
                      </TableCell>
                      <TableCell>{(data as { chat: number }).chat}</TableCell>
                      <TableCell>{(data as { total: number }).total}</TableCell>
                      <TableCell>
                        <StatusBadge
                          status={(data as { status: string }).status}
                        />
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell className="py-4">
                        {(data as { especialidade: string }).especialidade}
                      </TableCell>
                      <TableCell>
                        {(data as { compradas: number }).compradas}
                      </TableCell>
                      <TableCell>
                        {(data as { utilizadas: number }).utilizadas}
                      </TableCell>
                      <TableCell>{(data as { saldo: number }).saldo}</TableCell>
                      <TableCell className="flex justify-end">
                        <Button
                          onClick={() => router.push('/reports/2894820904')}
                        >
                          Ver detalhes
                        </Button>
                      </TableCell>
                    </>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>

        {/* Paginação */}
        <Pagination className="justify-end pt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive={true}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
    </div>
  );
}

export default ManagerReportsPage;
