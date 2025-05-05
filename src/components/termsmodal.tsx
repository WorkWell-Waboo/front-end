'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog';
import { useEffect, useState } from 'react';

export default function TermsModal() {
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [marketingAccepted, setMarketingAccepted] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(true); // Controla a visibilidade do modal

  useEffect(() => {
    // Verifica se os termos já foram aceitos anteriormente
    const accepted = localStorage.getItem('termsAccepted');
    console.log('TermsModal - accepted:', accepted);
    if (accepted === 'true') {
      setModalVisible(true); // Se aceito, o modal não será exibido
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAccept = () => {
    if (termsAccepted) {
      localStorage.setItem('termsAccepted', 'true');
      setModalVisible(false);
    }
  };

  const handleReject = () => {
    setModalVisible(false);
  };

  const handleTermsChange = (checked: boolean) => {
    setTermsAccepted(checked);
  };

  const handleMarketingChange = (checked: boolean) => {
    setMarketingAccepted(checked);
  };

  return (
    <Dialog open={modalVisible} onOpenChange={setModalVisible}>
      <DialogContent className="rounded-3xl p-8 shadow-lg ">
        <DialogHeader className="font-semibold text-2xl">
          Termos de uso
        </DialogHeader>
        <div className="bg-white rounded-lg border border-gray-200 pb-2 shadow-none">
          <div className="space-y-4 text-gray-700 text-xs overflow-y-auto max-h-[50vh] pt-3.5 pl-4.5 pb-6 pr-6 scrollbar-custom">
            <h2 className="font-bold">Termos de uso</h2>
            <p>
              Termos de uso Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. ed ut perspiciatis unde omnis iste natus error sit
            </p>
            <p>
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-3 text-xs">
          <div className="flex items-start space-x-3 ">
            <Checkbox
              id="terms"
              checked={termsAccepted}
              onCheckedChange={handleTermsChange}
              className="mt-1 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
            />
            <label htmlFor="terms" className="text-gray-700">
              Li e concordo com os{' '}
              <span className="text-[#736CCE] font-bold">Termos de Uso</span> e
              com a{' '}
              <span className="text-[#736CCE] font-bold">
                Política de <br />
                Privacidade
              </span>
              , incluindo o tratamento de dados pessoais e <br />
              sensíveis.
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="marketing"
              checked={marketingAccepted}
              onCheckedChange={handleMarketingChange}
              className="mt-1 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
            />
            <label htmlFor="marketing" className="text-gray-700">
              Aceito receber comunicações por e-mail com dicas, novidades <br />
              e conteúdos da plataforma WoW.
            </label>
          </div>
        </div>

        <DialogFooter className="grid grid-cols-2">
          <Button
            onClick={handleReject}
            variant="outline"
            className="mr-2 border-[#691FB1] text-[#691FB1]"
          >
            Recusar
          </Button>
          <Button
            onClick={handleAccept}
            disabled={!termsAccepted}
            className="bg-[#691FB1] text-[#F2F2F2]"
          >
            Aceitar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
