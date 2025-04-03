import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { HeaderCogSVG } from '@/assets/svgs/header-cog';
import CardProfissional from '@/components/cardProfission';

function CollaboratorServicesPage() {
  return (
    <div className="flex flex-1 gap-2 p-10">
      <Card className="p-10">
        <CardContent className="flex items-center justify-center">
          <Avatar>
            <AvatarFallback>
              <HeaderCogSVG className="text-[#736CCE]" />
            </AvatarFallback>
          </Avatar>
        </CardContent>
        <CardFooter className="">
          <p>Psicologia</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CollaboratorServicesPage;
