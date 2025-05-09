'use client';
import { Arrow } from '@/assets/svgs/arrow';
import { Filter } from '@/assets/svgs/filter';
import SearchBar from '@/components/searchbar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

function SchedulesAttachments() {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <main className="px-10">
      <SearchBar inputDisabled={true} />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <Button
              variant="secondary"
              className="rounded-full"
              onClick={handleBack}
            >
              <Arrow className="text-primary h-3! w-2.5!" />
            </Button>
            <h2 className="font-bold text-xl text-[#4f4f4f] ">Anexos</h2>
          </div>
          <Button
            variant="secondary"
            className="bg-white hover:bg-white/70 font-normal border-1 border-[#DCDCDC]"
          >
            <Filter className="text-[#898989]" />
            Filtro
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-160px)] rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Data</TableHead>
                <TableHead className="text-center">Baixar anexos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 20 }).map((_, index) => (
                <TableRow key={`key-${Date.now()}-${index}`}>
                  <TableCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </TableCell>
                  <TableCell>{`${index + 1}/03/2025`}</TableCell>
                  <TableCell className="text-center">
                    <Button>Baixar</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </main>
  );
}

export default SchedulesAttachments;
