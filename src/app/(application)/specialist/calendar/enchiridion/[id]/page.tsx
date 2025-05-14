'use client';
import client from '@/assets/imgs/cliente.png';
import SearchBar from '@/components/searchbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Bell, Globe, User } from 'lucide-react';
import Image from 'next/image';
export default function MedicalRecord() {
  return (
    <div className="min-h-screen px-10">
      <SearchBar inputDisabled={true} />

      <main className="px-5 pb-6">
        <div className="grid grid-cols-[1fr_.16fr]">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-medium text-[#4F4F4F]">
                Prontuário
              </h1>
              <Button
                variant="outline"
                className="text-[#691FB1] border-[#691FB1]"
              >
                Anamnese
              </Button>
            </div>

            <div className="flex justify-between mb-6">
              <div className="bg-[#F2F2F2] border border-[#E6E6E8] p-3 rounded-lg flex-1 mr-4">
                <p className="text-[#636C77]">Maria Fernandes</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#F2F2F2] border border-[#E6E6E8] p-3 rounded-lg">
                  <p className="text-[#636C77]">52 anos</p>
                </div>
                <div className="bg-[#F2F2F2] border border-[#E6E6E8] p-3 rounded-lg">
                  <p className="text-[#636C77]">Feminino</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-4">
            <div className="w-full h-full rounded-lg overflow-hidden bg-amber-50 shadow-lg">
              <Image
                src={client}
                alt="Patient photo"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <h2 className="text-lg font-medium text-gray-700 mb-2 ">Anamnese</h2>

        <div className="flex gap-8 mb-2 text-[#636C77] text-sm font-bold">
          <div className="flex gap-1">
            <span className="font-bold">Data:</span>
            <span>03/12/24</span>
          </div>
          <div className="flex gap-1">
            <span className="font-bold">Horário:</span>
            <span>12:30</span>
          </div>
        </div>

        <div className="mb-6 text-gray-600 text-sm">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit ullamco laboris
            nisi ut aliquip ex ea
          </p>
        </div>

        <div className="flex justify-between items-center mb-2 text-[#333333]">
          <h2 className="text-lg font-semibold text-[#333333]">
            Prontuário da consulta atual
          </h2>
          <div className="flex gap-6">
            <div className="flex gap-1">
              <span className="font-bold">Data:</span>
              <span>03/02/2024</span>
            </div>
            <div className="flex gap-1">
              <span className="font-bold">Horário:</span>
              <span>15:30</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <p className="text-gray-500">Lorem Ipsum</p>
        </div>

        <div className="flex gap-4 justify-end">
          <Button
            variant="outline"
            className="text-purple-600 border-purple-600"
          >
            Baixar PDF
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Enviar prontuário
          </Button>
        </div>
      </main>
    </div>
  );
}
