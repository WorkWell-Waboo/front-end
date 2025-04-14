import Call from "@/assets/imgs/call.png"
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Mic, Monitor, PhoneMissed, Video } from "lucide-react";
import Image from "next/image";

function CollaboratorSchedulesCall() {
  const videoControlButtons=[
    {
      color: '#6E767D',
      icon: <Mic/>
    },
    {
      color: '#6E767D',
      icon: <Video/>
    },
    {
      color: '#6E767D',
      icon: <Monitor/>
    },
    {
      color: '#6E767D',
      icon: <EllipsisVertical/>
    },
    {
      color: '#FF4667',
      icon: <PhoneMissed/>
    }

  ]

  return (
    <main className="p-10 flex items-center-center flex-col">   
     <span className="font-normal text-sm text-center text-[#909194]">Janeiro 16, 14:00</span>
     <span className="font-bold text-xl text-center text-[#333333] ">
        Primeira Sessão - Mariana Lemos
     </span>
     <Image src={Call} alt="" className="my-10 w-[100%]" />
      <div className="flex justify-center gap-2">
        {videoControlButtons.map((button,index)=>(
          <Button key={`custom-key-${index}-${Date.now()}`} className={`rounded-full bg-[${button.color}] hover:bg-[${button.color}]/70 w-[40px] h-[40px]`}>
            {button.icon}
          </Button>
        ))}
      </div>
    </main>
  );
}

export default CollaboratorSchedulesCall;