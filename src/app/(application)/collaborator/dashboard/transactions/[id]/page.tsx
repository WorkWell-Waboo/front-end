'use client';

import SearchBar from '@/components/searchbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function TransactionList() {
  // Dados simulados de transações
  const transactions = [
    {
      id: 1,
      date: '01/05/2024',
      description: 'Sessão de terapia',
      amount: '€50.00',
      status: 'Concluído',
    },
    {
      id: 2,
      date: '15/04/2024',
      description: 'Plano mensal',
      amount: '€120.00',
      status: 'Concluído',
    },
    {
      id: 3,
      date: '01/04/2024',
      description: 'Sessão de terapia',
      amount: '€50.00',
      status: 'Concluído',
    },
  ];

  return (
    <div>
      <SearchBar inputDisabled={true} />
      <div className="max-w-6xl mx-auto p-10">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-[#504DA6]">
                Histórico de Transações
              </h2>
              <Button variant="secondary" className="bg-[#736CCE] text-white">
                Exportar
              </Button>
            </div>
            <ScrollArea className="h-[calc(100vh-300px)]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-800">
                          {transaction.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
