'use client';
import { UserFormSVG } from '@/assets/svgs/userForm';
import SearchBar from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function PerfilUsuario() {
  return (
    <div>
      <SearchBar inputDisabled={true} />
      <div className="max-w-6xl mx-auto p-10 space-y-6">
        {/* Header com nome e avatar */}
        <div className="flex items-center gap-6 bg-[#736CCE1A] p-6 rounded-2xl">
          <div className="relative shadow-sm w-30 h-30 bg-gradient-to-b from-[#691FB1] to-[#736CCE] rounded-xl flex items-center justify-center text-white text-3xl font-semibold p-4">
            <UserFormSVG />
            {/* Ícone da câmera opcional aqui */}
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-semibold text-[#504DA6]">
              Mariana Lemos
            </h1>
            <p className="text-muted-foreground block w-50">
              Assistente Administrativo na Empresa Global
            </p>
            <Button variant="secondary" className="mt-2 p ">
              Editar perfil
            </Button>
          </div>
        </div>
        {/* Tabs */}
        <Tabs defaultValue="dados" className="w-full">
          <TabsList className="grid grid-cols-4 w-full bg-transparent gap-2 ">
            <TabsTrigger
              value="dados"
              className="data-[state=active]:bg-[#736CCE] data-[state=active]:text-white! text-[#333333]!"
            >
              Dados pessoais
            </TabsTrigger>
            <TabsTrigger
              value="id"
              className="data-[state=active]:bg-[#736CCE] data-[state=active]:text-white! text-[#333333]!"
            >
              Identificação
            </TabsTrigger>
            <TabsTrigger
              value="emergencia"
              className="data-[state=active]:bg-[#736CCE] data-[state=active]:text-white! text-[#333333]!"
            >
              Contato de emergência
            </TabsTrigger>
            <TabsTrigger
              value="seguranca"
              className="data-[state=active]:bg-[#736CCE] data-[state=active]:text-white! text-[#333333]!"
            >
              Segurança
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dados">
            <Card className="bg-background">
              <CardContent className="space-y-4 p-0">
                <h2 className="font-semibold text-lg pl-4">Dados Pessoais</h2>
                <div className="gap-4 border-t p-4 space-y-2">
                  <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr] gap-4">
                    <div className="space-y-2">
                      <Label>Nome</Label>
                      <Input placeholder="Mariana Lemos" />
                    </div>
                    <div className="space-y-2">
                      <Label>Telefone 1</Label>
                      <Input placeholder="(+351) 1234 - 5678" />
                    </div>
                    <div className="space-y-2">
                      <Label>Telefone 2</Label>
                      <Input placeholder="(+351) 1234 - 5678" />
                    </div>
                    <div className="space-y-2">
                      <Label>Data de nascimento</Label>
                      <Input placeholder="23/06/1996" />
                    </div>
                  </div>

                  <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr] gap-4">
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input placeholder="marianalemos@gmail.com" />
                    </div>
                    <div className="space-y-2">
                      <Label>Seguro de saúde</Label>
                      <Input placeholder="Lorem Ipsum" />
                    </div>
                    <div className="space-y-2">
                      <Label>Empresa</Label>
                      <Input placeholder="Empresa XYZ" />
                    </div>
                    <div className="space-y-2">
                      <Label>NIF/CPF</Label>
                      <Input placeholder="123456789" />
                    </div>
                  </div>

                  <div className="grid grid-cols-[1fr_1.7fr_.5fr_1fr] gap-4">
                    <div className="space-y-2">
                      <Label>Código postal</Label>
                      <Input placeholder="123456-789" />
                    </div>
                    <div className="space-y-2">
                      <Label>Morada</Label>
                      <Input placeholder="Rua X" />
                    </div>
                    <div className="space-y-2">
                      <Label>Número</Label>
                      <Input placeholder="123456789" />
                    </div>
                    <div className="space-y-2">
                      <Label>Localidade</Label>
                      <Input placeholder="123456789" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label>Cidade</Label>
                      <Input placeholder="Cidade X" />
                    </div>
                    <div>
                      <Label>Estado</Label>
                      <Input placeholder="Estado X" />
                    </div>
                    <div>
                      <Label>País</Label>
                      <Input placeholder="País X" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-end pt-6 pr-5">
              <Button className="bg-[#736CCE] text-white px-10">Salvar</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
