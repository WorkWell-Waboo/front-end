'use client';
import PessoasImg from '@/assets/imgs/pessoas.jpeg';
import BancoSVG from '@/assets/svgs/banco';
import { SupportSVG } from '@/assets/svgs/support';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function CollaboratorChatPage() {
  const router = useRouter();
  return (
    <main className="p-10 flex flex-col gap-5">
      <span className="font-bold">Escolha a área de atendimento</span>
      <div className="relative rounded-2xl overflow-hidden h-56 md:h-64 lg:h-72">
        <Image
          src={PessoasImg}
          alt="Grupo de pessoas"
          fill
          className="object-cover scale-107 translate-x-56	"
          // você pode brincar com scale-125, translate-x-16 etc
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#736CCE] from-41%	 to-[#736CCE4D] to-70%" />

        <div className="relative px-6 pt-6 max-w-md text-white pr-20  flex flex-col justify-start h-full">
          <span className=" text-[28px] font-medium leading-snug  ">
            Fale com a equipa <br />
            de Saúde e Bem-Estar
          </span>
          <p className="text-base mt-3 mb-8">
            Para receber aconselhamento profissional de forma rápida e breve
          </p>
          <Button
            variant="ghost"
            onClick={() => router.push('/chat/2090294080')}
            className="text-base mt-4 underline -ml-3 w-fit underline-offset-4 text-white/80 hover:text-white transition"
          >
            Ir para o equipa de saúde
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 ">
        <Card className="border rounded-2xl shadow-sm p-4 pb-8">
          <CardHeader className=" items-center gap-2">
            <SupportSVG className="w-10 h-10 text-[#736CCE]" />
            <span className="text-[#736CCE] font-semibold text-2xl">
              Suporte técnico:
            </span>
          </CardHeader>

          <CardContent className="text-base text-[#4F4F4F]  space-y-2">
            <p>
              Para questões relacionadas a problemas técnicos com o sistema,
              acesso ou funcionalidades da plataforma.
            </p>
            <Button
              className=" underline text-base -ml-4 "
              variant="ghost"
              onClick={() => router.push('/chat/2090294080')}
            >
              Ir para o suporte
            </Button>
          </CardContent>
        </Card>

        <Card className="border rounded-2xl shadow-sm p-4">
          <CardHeader className=" items-center gap-2">
            <BancoSVG className="w-10 h-10 text-[#736CCE]" />
            <span className="text-[#736CCE] font-semibold text-2xl">
              Questões financeiras:
            </span>
          </CardHeader>

          <CardContent className="text-base text-gray-700 space-y-2">
            <p>
              Para questões relacionadas a problemas técnicos com o sistema,
              acesso ou funcionalidades da plataforma.
            </p>
            <Button
              onClick={() => router.push('/chat/2090294080')}
              variant="ghost"
              className="text-base underline -ml-4"
            >
              Ir para o financeiro
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default CollaboratorChatPage;
