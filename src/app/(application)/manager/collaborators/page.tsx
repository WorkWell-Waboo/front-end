
'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import Photo from "@/assets/imgs/cliente.png"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Ellipsis, FileX2, Filter, Plus } from "lucide-react";

function ManagerCollaboratorsPage() {
  return (
    <main className="p-10 flex flex-col gap-4">
      <div className="flex justify-between items-center gap-5">
        <div className="flex items-center gap-2 bg-primary text-white rounded-md py-1 px-4">
          <span className=" text-xs font-normal">
            Colaboradores registrados  
          </span>
          <span className="text-lg font-bold">12354</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-white text-[#202020] border-[#DCDCDC]">
            <Filter/>
            Filtrar
          </Button>
          <Button variant="outline" className="bg-white text-[#202020] border-[#DCDCDC]">
            <FileX2/>
            Upload de Arquivo Excel
          </Button>
          <Button >
            <Plus/>
            Adicionar
          </Button>
        </div>
      </div>
       <ScrollArea className="h-[calc(100vh-100px)]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome do colaborador</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Função</TableHead>
              <TableHead> </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {Array.from({length: 20}).map((_,index)=>
            <TableRow key={`key-${Date.now()}-${index}`} >
              <TableCell className="flex items-center gap-4">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={Photo.src} alt="foto" />
                  <AvatarFallback>FOTO</AvatarFallback>
                </Avatar>
                Ana Beatriz Souza
              </TableCell>
              <TableCell>(12) 1234 - 5678</TableCell>
              <TableCell>loremipsum@gmail.com</TableCell>
              <TableCell>Lorem Ipsum</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Ellipsis/>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Desvincular</DropdownMenuItem>
                    <DropdownMenuItem>Bloquear acesso</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          )}
          </TableBody>
        </Table> 
      </ScrollArea>
    </main>
  );
}

export default ManagerCollaboratorsPage;
