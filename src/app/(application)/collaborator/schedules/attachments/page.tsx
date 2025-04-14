'use client'
import { Arrow } from "@/assets/svgs/arrow";
import { Filter } from "@/assets/svgs/filter";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function SchedulesAttachments() {
  return (
    <main className="p-10 flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Button variant="secondary" className="rounded-full"> 
            <Arrow className="text-primary"/>
          </Button>
          <h2 className="font-bold text-xl text-[#4f4f4f] ">Anexos</h2>
        </div>
        <Button variant="secondary" className="bg-white hover:bg-white/70 font-normal border-1 border-[#DCDCDC]"> 
          <Filter className="text-[#898989]"/>
          Filtro
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-100px)]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Data</TableHead>
              <TableHead className="text-center">Baixar anexos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

          {Array.from({length: 20}).map((_,index)=>
            <TableRow key={`key-${Date.now()}-${index}`}>
              <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</TableCell>
              <TableCell>{`${index+1}/03/2025`}</TableCell>
              <TableCell className="text-center"><Button>Baixar</Button></TableCell>
            </TableRow>
          )}
          </TableBody>
        </Table> 
      </ScrollArea>
    </main>
  );
}

export default SchedulesAttachments;
