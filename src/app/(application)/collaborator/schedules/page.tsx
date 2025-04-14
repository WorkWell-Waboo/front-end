import Link from "next/link";

import {
} from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "@/libraries/utils";
import Image from "next/image";

import Photo from "@/assets/imgs/cliente.png"

import { CalendarFullColor } from "@/assets/svgs/calendarFullColor";
import { Clip } from "@/assets/svgs/clip";

function CollaboratorSchedulesPage() {

  const nextSessions = [
		{
			id: 1,
			photo:Photo,
			name: "Sandra Amaral",
			profession: "Psicanalista",
			date: "Sun 6, 2025",
			time: "14:00 - 15:00 PM",
			isActive: true, 
		},
		{
			id: 2,
			photo: Photo,
			name: "Carlos Oliveira",
			profession: "Coach de Vida",
			date: "Fev 30, 2025",
			time: "10:00 - 11:00 AM",
			isActive: false, 
		},
		{
			id: 3,
			photo: Photo,
			name: "Adriele Cunha",
			profession: "Nutricionista",
			date: "Jan 15, 2025",
			time: "10:00 - 11:00 AM",
			isActive: false, 
		},
    {
			id: 4,
			photo: Photo,
			name: "Carla Diaz",
			profession: "Psicologa",
			date: "Jan 17, 2025",
			time: "10:00 - 11:00 AM",
			isActive: false, 
		},
	];

  const historics = [
		{
			id: 1,
			photo:Photo,
			name: "Sandra Amaral",
			profession: "Psicanalista",
			date: "Sun 6, 2025",
			time: "14:00 - 15:00 PM",
		},
		{
			id: 2,
			photo: Photo,
			name: "Carlos Oliveira",
			profession: "Coach de Vida",
			date: "Fev 30, 2025",
			time: "10:00 - 11:00 AM",
		},
		{
			id: 3,
			photo: Photo,
			name: "Adriele Cunha",
			profession: "Nutricionista",
			date: "Jan 15, 2025",
			time: "10:00 - 11:00 AM",
		},
    {
			id: 4,
			photo: Photo,
			name: "Carla Diaz",
			profession: "Psicologa",
			date: "Jan 17, 2025",
			time: "10:00 - 11:00 AM",
		},
	];

  return (
    <main className="p-10 flex flex-col gap-4">   
      <Tabs defaultValue="next-sessions">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 font-bold text-xl text-[#4f4f4f]">
          <TabsContent value="next-sessions">
            <h1 className="font-bold text-xl text-[#4f4f4f]">Próximas sessões</h1>
          </TabsContent>
          <TabsContent value="history">
            <h1 className="font-bold text-xl text-[#4f4f4f]">Histórico</h1>
          </TabsContent>
          </div>  
          <TabsList className="flex gap-5">
            <TabsTrigger value="next-sessions">Próximas sessões</TabsTrigger>
            <TabsTrigger value="history">Histórico</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="next-sessions">
          <div className="flex flex-col gap-4 mb-4">
          {nextSessions.map((nextSession) => (
            <div className="flex flex-col gap-2" key={nextSession.id}>
              <div className={cn(
                    "flex flex-row gap-4 font-normal text-sm text-[#4f4f4f]"
              )}>
                  <span>{nextSession.date}</span>
                  <span>{nextSession.time}</span>
              </div>
              <div                     
                  className={cn(
                    "px-8 py-4 rounded-lg flex items-center gap-5 border-b-2 h-full",
                    nextSession.isActive
                      ? "bg-primary border-b-white"
                      : "bg-white border-b-primary"
                )}>
                  <Image
                    src={nextSession.photo}
                    alt={`Foto de ${nextSession.name}`}
                    width={75}
                    height={75}
                    className="rounded-full w-[75] h-[75]"
                  />
                  <div className="flex flex-col flex-1">
                    <span
                      className={cn(
                        "font-bold text-lg",
                        nextSession.isActive ? "text-white" : "text-primary"
                    )}>
                      {nextSession.name}
                    </span>
                    <span
                      className={cn(
                        "font-light text-sm",
                        nextSession.isActive ? "text-white" : "text-[#4f4f4f]"
                    )}>
                      {nextSession.profession}
                    </span>
                  </div>
                  {/* Verifica se esta ativo para mostrar o botao do reagendamento ou não */}
                  {nextSession.isActive ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className={cn(
                            "mt-2 text-xs rounded-md w-fit",
                            nextSession.isActive
                              ? "bg-white hover:bg-white/75 text-black"
                              : "bg-primary text-white "
                          )}>
                          Ir para a sala 
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[450px] px-8 pb-8 pt-10">
                        <DialogHeader className="relative">
                          <div className="w-[60] h-[60] bg-white rounded-full absolute left-[50%] translate-x-[-50%] -top-[70px] flex items-center justify-center">
                            <CalendarFullColor className="text-primary w-[25px]"/>
                          </div>
                          <DialogTitle className="text-center text-[#333333] mb-4">
                            Reagendamento de sessão
                          </DialogTitle>
                          <DialogDescription className="text-center text-[#4f4f4f] text-xs leading-[1.1]">
                            A sua sessão com o especialista Sandra Amaral foi reagenda
                            para o dia 10/04/2025 às 15h30min. Confirma a alteração?
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col gap-4">
                          <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="w-full font-normal">
                              Sugerir Data
                            </Button>
                            <Button  className="w-full font-normal">
                              Confirmar
                            </Button>
                          </div>
                          <Select>
                            <SelectTrigger className="w-full border-none">
                              <SelectValue className="text-[#636C77]" placeholder="Selecione a data" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Datas</SelectLabel>
                                <SelectItem value="data1">Data1</SelectItem>
                                <SelectItem value="data2">Data2</SelectItem>
                                <SelectItem value="data3">Data3</SelectItem>
                                <SelectItem value="data4">Data4</SelectItem>
                                <SelectItem value="data5">Data5</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <Select>
                            <SelectTrigger className="w-full border-none">
                              <SelectValue className="text-[#636C77]" placeholder="Selecione  o horário" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Horários</SelectLabel>
                                <SelectItem value="horario1">Horário 1</SelectItem>
                                <SelectItem value="horario2">Horário 2</SelectItem>
                                <SelectItem value="horario3">Horário 3</SelectItem>
                                <SelectItem value="horario4">Horário 4</SelectItem>
                                <SelectItem value="horario5">Horário 5</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <DialogFooter>
                          <Button className="w-full" type="submit">Enviar</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  ):(
                    <Button asChild
                      className={cn(
                        "mt-2 text-xs rounded-md w-fit",
                        nextSession.isActive
                          ? "bg-white hover:bg-white/75 text-black"
                          : "bg-primary text-white "
                      )}>
                      <Link href="/schedules/call">Ir para a sala </Link>
                    </Button>
                  )}
              </div>
            </div>
            ))}
          </div>
          {/* PAGINATION */}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#"/>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive={true}>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </TabsContent>
        <TabsContent value="history">
          <div className="flex flex-col gap-4 mb-4">
          {historics.map((historic) => (
            <div className="flex flex-col gap-2" key={historic.id}>
              <div className={cn(
                    "flex flex-row gap-4 font-normal text-sm text-[#4f4f4f]"
              )}>
                  <span>{historic.date}</span>
                  <span>{historic.time}</span>
              </div>
              <div className="px-8 py-4 rounded-lg flex items-center gap-5 border-b-2 h-full bg-white border-b-primary">
                  <Image
                    src={historic.photo}
                    alt={`Foto de ${historic.name}`}
                    width={75}
                    height={75}
                    className="rounded-full w-[75] h-[75]"
                  />
                  <div className="flex flex-col flex-1">
                    <span className="font-bold text-lg text-primary">
                      {historic.name}
                    </span>
                    <span
                      className="font-light text-sm text-[#4f4f4f]">
                      {historic.profession}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="secondary" asChild>
                      <Link href="/schedules">
                        <Clip className="text-primary"/> Anexos
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href="/schedules/evaluate">
                        Avaliar sessão
                      </Link>
                    </Button>
                  </div>
                  
              </div>
            </div>
            ))}
          </div>
            {/* PAGINATION */}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#"/>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive={true}>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default CollaboratorSchedulesPage;
