
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "@/libraries/utils";
import Image from "next/image";

 import Photo from "@/assets/imgs/cliente.png"
import { Button } from "@/components/ui/button";

function CollaboratorSchedulesPage() {

  const historics = [
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

  return (
    <main className="p-10 flex flex-col gap-4">
      
       <Tabs defaultValue="next-sessions">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 font-bold text-xl text-[#4f4f4f]">
            <TabsContent value="next-sessions">
              <h1>Próximas sessões</h1>
            </TabsContent>
            <TabsContent value="history">
              <h1>Histórico</h1>
            </TabsContent>
            </div>  
            <TabsList className="flex gap-5">
              <TabsTrigger value="next-sessions">Próximas sessões</TabsTrigger>
              <TabsTrigger value="history">Histórico</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="next-sessions">
            <h1>teste</h1>
          </TabsContent>
          <TabsContent value="history">
            <div className="flex flex-col gap-4">
            {historics.map((historic) => (
              <div className="flex flex-col gap-2" key={historic.id}>
                <div className={cn(
                      "flex flex-row gap-4 font-normal text-sm text-[#4f4f4f]"
                )}>
                    <span>{historic.date}</span>
                    <span>{historic.time}</span>
                </div>
                <div                     
                    className={cn(
                      "px-8 py-4 rounded-lg flex items-center gap-5 border-b-2 h-full",
                      historic.isActive
                        ? "bg-primary border-b-white"
                        : "bg-white border-b-primary"
                  )}>
                    <Image
                      src={historic.photo}
                      alt={`Foto de ${historic.name}`}
                      width={75}
                      height={75}
                      className="rounded-full w-[75] h-[75]"
                    />
                    <div className="flex flex-col flex-1">
                      <span
                        className={cn(
                          "font-bold text-lg",
                          historic.isActive ? "text-white" : "text-primary"
                      )}>
                        {historic.name}
                      </span>
                      <span
                        className={cn(
                          "font-light text-sm",
                          historic.isActive ? "text-white" : "text-[#4f4f4f]"
                      )}>
                        {historic.profession}
                      </span>
                    </div>
                    <Button
                      className={cn(
                        "mt-2 text-xs rounded-md w-fit",
                        historic.isActive
                          ? "bg-white hover:bg-white/75 text-black"
                          : "bg-primary text-white "
                      )}>
                      Ir para a sala 
                    </Button>
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
