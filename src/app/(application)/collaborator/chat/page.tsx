import PessoasImg from '@/assets/imgs/pessoas.jpeg';
import BancoSVG from '@/assets/svgs/banco';
import { SupportSVG } from '@/assets/svgs/support';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
function CollaboratorChatPage() {
  return (
    <main className="p-10 flex flex-col gap-5">
      <span>Escolha a área de atendimento</span>
      <div className="relative rounded-2xl overflow-hidden h-56 md:h-64 lg:h-72">
        <Image
          src={PessoasImg}
          alt="Grupo de pessoas"
          fill
          className="object-cover scale-100	 translate-x-58	"
          // você pode brincar com scale-125, translate-x-16 etc
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#736CCE] via-[#736CCE] via-37% to-transparent" />

        <div className="relative z-10 p-6 md:p-10 max-w-md text-white flex flex-col justify-center h-full">
          <span className="text-3xl font-semibold">
            Fale com a equipa de Saúde e Bem-Estar
          </span>
          <p className="text-sm mt-2">
            Para receber aconselhamento profissional de forma rápida e breve
          </p>
          <a
            href="/"
            className="text-sm mt-4 underline underline-offset-4 text-white/80 hover:text-white transition"
          >
            Ir para o equipa de saúde
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <Card className="border rounded-2xl shadow-sm p-4">
          <CardHeader className=" items-center gap-2">
            <SupportSVG className="w-10 h-10 text-[#736CCE]" />
            <span className="text-[#736CCE] font-semibold text-base">
              Suporte técnico:
            </span>
          </CardHeader>

          <CardContent className="text-sm text-gray-700 mt-2 space-y-3">
            <p>
              Para questões relacionadas a problemas técnicos com o sistema,
              acesso ou funcionalidades da plataforma.
            </p>
            <a href="/" className="text-sm underline text-black">
              Ir para o suporte
            </a>
          </CardContent>
        </Card>

        <Card className="border rounded-2xl shadow-sm p-4">
          <CardHeader className=" items-center gap-2">
            <BancoSVG className="w-10 h-10 text-[#736CCE]" />
            <span className="text-[#736CCE] font-semibold text-base">
              Questões financeiras:
            </span>
          </CardHeader>

          <CardContent className="text-sm text-gray-700 mt-2 space-y-3">
            <p>
              Para questões relacionadas a problemas técnicos com o sistema,
              acesso ou funcionalidades da plataforma.
            </p>
            <a href="/" className="text-sm underline text-black">
              Ir para o financeiro
            </a>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default CollaboratorChatPage;
