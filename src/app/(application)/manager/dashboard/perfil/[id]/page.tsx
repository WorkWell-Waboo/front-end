'use client';
import { CameraSVG } from '@/assets/svgs/camera';
import { UserFormSVG } from '@/assets/svgs/userForm';
import SearchBar from '@/components/searchbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

export default function PerfilUsuario() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  return (
    <div className="px-10 pb-10">
      <SearchBar inputDisabled={true} />
      <div className="max-w-6xl mx-auto  space-y-6">
        {/* Header com nome e avatar */}
        <div className="flex items-center gap-6 bg-[#736CCE1A] p-6 rounded-2xl">
          <div className="relative shadow-sm shadow-gray-400 w-35 h-35 bg-gradient-to-b from-[#691FB1] to-[#736CCE] rounded-xl flex items-center justify-center text-white text-3xl font-semibold ">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Foto de perfil"
                className="object-cover w-full h-full rounded-lg"
              />
            ) : (
              <UserFormSVG className="text-white w-10 h-10" />
            )}

            {!profileImage && (
              <div className="absolute -top-4 -right-3 bg-white rounded-full w-fit h-fit p-2 shadow cursor-pointer">
                <CameraSVG className="text-primary" />
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setProfileImage(reader.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </div>
            )}

            {/* Ícone da câmera opcional aqui */}
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-semibold text-[#504DA6]">
              Adriano Leite
            </h1>
            <p className="text-muted-foreground text-base block w-fit">
              Diretor da Empresa Global
            </p>
            <Button
              variant="secondary"
              className="mt-2 shadow-lg shadow-gray-300"
            >
              Editar perfil
            </Button>
          </div>
        </div>
        {/* Tabs */}
        <Tabs defaultValue="dados" className="w-full">
          <TabsList className="grid grid-cols-4 w-full bg-transparent gap-2 ">
            <TabsTrigger
              value="empresa"
              className="data-[state=active]:bg-[#736CCE] data-[state=active]:text-white! text-[#333333]!"
            >
              Dados da empresa
            </TabsTrigger>

            <TabsTrigger
              value="dados"
              className="data-[state=active]:bg-[#736CCE] data-[state=active]:text-white! text-[#333333]!"
            >
              Dados do responsável
            </TabsTrigger>

            <TabsTrigger
              value="seguranca"
              className="data-[state=active]:bg-[#736CCE] data-[state=active]:text-white! text-[#333333]!"
            >
              Segurança
            </TabsTrigger>
          </TabsList>

          <TabsContent value="empresa">
            <Card className="bg-background">
              <CardContent className="space-y-2 p-0">
                <h2 className="font-semibold text-lg pl-4 -mt-2 text-[#4F4F4F]">
                  Dados Pessoais
                </h2>
                <div className="gap-4 border-t p-4 space-y-3">
                  <div className="grid grid-cols-[2fr_1fr_1fr] gap-4">
                    <div className="space-y-2">
                      <Label>Nome da empresa</Label>
                      <Input placeholder="Belle Beautry" />
                    </div>
                    <div className="space-y-2">
                      <Label>Telefone 1</Label>
                      <Input placeholder="(+351) 1234 - 5678" />
                    </div>
                    <div className="space-y-2">
                      <Label>Telefone 2</Label>
                      <Input placeholder="(+351) 1234 - 5678" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>NIF empresa</Label>
                      <Input placeholder="Belle Beatry" />
                    </div>
                    <div className="space-y-2">
                      <Label>Setor de atividade</Label>
                      <Input placeholder="Beleza" />
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input placeholder="contato@bellebeauty.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-[1fr_1.7fr_.6fr_1fr] gap-4">
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
                    <div className="space-y-2">
                      <Label>Cidade</Label>
                      <Input placeholder="Cidade X" />
                    </div>
                    <div className="space-y-2">
                      <Label>Estado</Label>
                      <Input placeholder="Estado X" />
                    </div>
                    <div className="space-y-2">
                      <Label>País</Label>
                      <Input placeholder="País X" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-end pt-6 pr-5">
              <Button className="bg-[#691FB1] text-white px-10">Salvar</Button>
            </div>
          </TabsContent>

          <TabsContent value="dados">
            <Card className="bg-background">
              <CardContent className="space-y-2 p-0">
                <h2 className="font-semibold text-lg pl-4 -mt-2 text-[#4F4F4F]">
                  Dados Pessoais
                </h2>
                <div className="gap-4 border-t p-4 space-y-3">
                  <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4">
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

                  <div className="grid grid-cols-[1fr_1.7fr_.6fr_1fr] gap-4">
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
                    <div className="space-y-2">
                      <Label>Cidade</Label>
                      <Input placeholder="Cidade X" />
                    </div>
                    <div className="space-y-2">
                      <Label>Estado</Label>
                      <Input placeholder="Estado X" />
                    </div>
                    <div className="space-y-2">
                      <Label>País</Label>
                      <Input placeholder="País X" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-end pt-6 pr-5">
              <Button className="bg-[#691FB1] text-white px-10">Salvar</Button>
            </div>
          </TabsContent>

          <TabsContent value="seguranca">
            <Card className="bg-background h-44">
              <CardContent className=" space-y-2 p-0">
                <h2 className="font-semibold text-lg pl-4 -mt-2  text-[#4F4F4F]">
                  Segurança
                </h2>
                <div className="gap-4 border-t p-4 space-y-4">
                  <div className="grid grid-rows-3 gap-4 ">
                    <div className="grid grid-cols-[2fr_1fr_1fr] gap-4">
                      <div className="space-y-2">
                        <Label>Senha atual</Label>
                        <Input placeholder="0990192Th" />
                      </div>
                      <div className="space-y-2">
                        <Label>Nova senha</Label>
                        <Input placeholder="9093093Hf" />
                      </div>
                      <div className="space-y-2">
                        <Label>Confirmação de senha</Label>
                        <Input placeholder="9093093Hf" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-end pt-6 pr-5">
              <Button className="bg-[#691FB1] text-white px-10">Salvar</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
