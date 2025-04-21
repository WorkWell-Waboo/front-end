import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import GoBackButton from "@/components/go-back-button";
import { Button } from "@/components/ui/button";
import { Clock, Heart, MapPin, Share2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import PhotoWebnar from "@/assets/imgs/webnar.png"

function CollaboratorContentsWebnarPost() {

	return (
		<main className="p-10 flex flex-col gap-4">
			<GoBackButton/>
			<div className="flex gap-2 font-semibold text-lg text-[#4f4f4f]">
				<Link href='/contents/webnar'>
					<span>
						Webnars
					</span>
				</Link>
				/
				<span>
					O Que É Autoconhecimento e Por Que Ele Importa?
				</span>
			</div>
			<Image src={PhotoWebnar} alt="foto blog" quality={100} className="w-full h-70 object-cover rounded-lg mb-4"/>
			<div className="flex justify-between items-start gap-10 pb-4">
				<h1 className="font-semibold text-xl text-[#4f4f4f]">
					O Que É Autoconhecimento e Por Que Ele Importa?
				</h1>
				<div className="flex items-center">
					<span className="font-normal text-xs text-[#4f4f4f]">Compartilhar</span>
					<Button variant="ghost" className="hover:text-primary">
						<Share2/>
					</Button>
					<Button variant="ghost" className="hover:text-primary">
						<Heart/>
					</Button>
				</div>
			</div>
			<div className="w-full text-sm font-light text-black">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
				</p>
				<br />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				</p>
			</div>
			<Dialog>
				<DialogTrigger asChild>
					<Button>
						Inscrever-se
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[450px] p-5">
					<DialogClose asChild className="absolute top-0 right-0">
						<Button variant="ghost">
							<X/>
						</Button>
					</DialogClose>
					<DialogHeader className="flex flex-row gap-3 items-center pr-10">
						<Image src={PhotoWebnar} alt="" className="w-10 h-10 rounded-full object-cover"/>
						<DialogTitle className="text-md! text-[#333333]">
							Sessões de atividade 
							física 
						</DialogTitle>
					</DialogHeader>
					<div className="block">
						<p className="text-[#4f4f4f] text-sm leading-[1.0] font-normal pb-4">
							Confira os detalhes do nosso evento abaixo e inscreva-se
							para participar!
						</p>
						<ul className="space-y-1 mb-3">
							<li className="flex items-center gap-1">
								<MapPin className="text-primary h-3 w-3"/>
								<span className="text-[#4f4f4f] text-sm leading-[1.1] font-normal">Sala de Videoconferência no Microsoft Teams</span>
							</li>
							<li className="flex items-center gap-1">
								<Clock className="text-primary h-3 w-3"/>
								<span className="text-[#4f4f4f] text-sm leading-[1.1] font-normal">10 de Março às 09:00h</span>
							</li>
						</ul>
					</div>
					<DialogFooter className="flex gap-4">
						<DialogClose asChild>
							<Button variant="outline" className="flex-1 font-normal">
								Cancelar
							</Button>
						</DialogClose>
						<Dialog>
				<DialogTrigger asChild>
					<Button>
						Inscrever-se
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[450px] p-5">
					<DialogClose asChild className="absolute top-0 right-0">
						<Button variant="ghost">
							<X/>
						</Button>
					</DialogClose>
					<DialogHeader className="flex flex-row gap-3 items-center pr-10">
						<Image src={PhotoWebnar} alt="" className="w-10 h-10 rounded-full object-cover"/>
						<DialogTitle className="text-md! text-[#333333]">
							Sessões de atividade 
							física 
						</DialogTitle>
					</DialogHeader>
					<div className="block">
						<p className="text-[#4f4f4f] text-sm leading-[1.0] font-normal pb-4">
							Confira os detalhes do nosso evento abaixo e inscreva-se
							para participar!
						</p>
						<ul className="space-y-1 mb-3">
							<li className="flex items-center gap-1">
								<MapPin className="text-primary h-3 w-3"/>
								<span className="text-[#4f4f4f] text-sm leading-[1.1] font-normal">Sala de Videoconferência no Microsoft Teams</span>
							</li>
							<li className="flex items-center gap-1">
								<Clock className="text-primary h-3 w-3"/>
								<span className="text-[#4f4f4f] text-sm leading-[1.1] font-normal">10 de Março às 09:00h</span>
							</li>
						</ul>
					</div>
					<DialogFooter className="flex gap-4">
						<DialogClose asChild>
							<Button variant="outline" className="flex-1 font-normal">
								Cancelar
							</Button>
						</DialogClose>
						<Button  className="flex-1 font-normal">
							Inscreva-se						
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</main>
	);
}

export default CollaboratorContentsWebnarPost;
