
import {
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
 

function CollaboratorSchedulesPage() {
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
            <h1>teste2</h1>
          </TabsContent>
        </Tabs>
    </main>
  );
}

export default CollaboratorSchedulesPage;
