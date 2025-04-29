'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import Photo from '@/assets/imgs/cliente.png';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis, FileX2, Filter, Plus, UserCheck } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { useState } from 'react';
import SearchBar from '@/components/searchbar';

function ManagerCollaboratorsPage() {
  const [step, setStep] = useState('details');
  return (
    <main className="px-10 pb-10 flex flex-col ">
      <SearchBar placeholder="Procure por nome" />

      <div className="flex justify-between items-center gap-5 mb-5">
        <div className="flex items-center gap-2 bg-primary text-white rounded-md py-1 px-4">
          <span className=" text-xs font-normal">
            Colaboradores registrados
          </span>
          <span className="text-lg font-bold">12354</span>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="bg-white text-[#202020] border-[#DCDCDC]"
          >
            <Filter />
            Filtrar
          </Button>
          <Button
            variant="outline"
            className="bg-white text-[#202020] border-[#DCDCDC]"
          >
            <FileX2 />
            Upload de Arquivo Excel
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus />
                Adicionar
              </Button>
            </DialogTrigger>
            {step === 'details' && (
              <DialogContent className="max-w-[450px] pt-10 px-12">
                <DialogHeader className="relative">
                  <div className="w-[60px] h-[60px] bg-white rounded-full absolute left-[50%] translate-x-[-50%] -top-[70px] flex items-center justify-center">
                    <UserCheck className="w-7 h-7 text-primary" />
                  </div>
                  <DialogTitle className="text-2xl! text-center text-[#333333] mb-4">
                    Adicionar colaboradores
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    Insira o nome e e-mail abaixo para cadastrar um novo
                    colaborador
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                  <Input type="text" placeholder="Nome" className="text-sm" />
                  <Input type="email" placeholder="Email" className="text-sm" />
                  <Input
                    type="number"
                    placeholder="Telefone"
                    className="text-sm"
                  />
                  <Input type="text" placeholder="Função" className="text-sm" />
                </div>
                <DialogFooter className="flex gap-4">
                  <DialogClose asChild>
                    <Button variant="outline" className="font-normal">
                      Cancelar
                    </Button>
                  </DialogClose>
                  <Button
                    className="flex-1 font-normal"
                    onClick={() => setStep('confirmation')}
                  >
                    Confirmar registo
                  </Button>
                </DialogFooter>
              </DialogContent>
            )}

            {step === 'confirmation' && (
              <DialogContent className="max-w-[450px] pt-10 px-12">
                <DialogHeader className="relative">
                  <div className="w-[60px] h-[60px] bg-white rounded-full absolute left-[50%] translate-x-[-50%] -top-[70px] flex items-center justify-center">
                    <UserCheck className="w-7 h-7 text-primary" />
                  </div>
                  <DialogTitle className="text-2xl! text-center text-[#333333] mb-4">
                    Solicitação confirmada
                  </DialogTitle>
                </DialogHeader>
                <p className="text-[#4f4f4f] text-sm leading-[1.1] text-center font-normal mb-2">
                  O colaborador deve aceder ao email enviado para concluir o
                  registo e ter acesso à plataforma
                </p>
                <DialogFooter className="flex gap-4">
                  <DialogClose asChild>
                    <Button
                      className="flex-1 font-normal"
                      onClick={() => setStep('details')}
                    >
                      Fechar
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            )}
          </Dialog>
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
            {Array.from({ length: 20 }).map((_, index) => (
              <TableRow key={`key-${Date.now()}-${index}`}>
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
                      <Ellipsis />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Desvincular</DropdownMenuItem>
                      <DropdownMenuItem>Bloquear acesso</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </main>
  );
}

export default ManagerCollaboratorsPage;
