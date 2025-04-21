import GoBackButton from "@/components/go-back-button";
import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";
import Link from "next/link";

function CollaboratorContentsVideoPost() {

	return (
		<main className="p-10 flex flex-col gap-4">
			<GoBackButton/>
			<div className="flex gap-2 font-semibold text-lg text-[#4f4f4f]">
				<Link href='/contents/video'>
					<span>
						Videos
					</span>
				</Link>
				/
				<span>
					O Que É Autoconhecimento e Por Que Ele Importa?
				</span>
			</div>
			<div className="relative w-full aspect-video">
				<iframe
					className="absolute top-0 left-0 w-full h-full rounded-lg"
					src="https://www.youtube.com/embed/xRcWlA1I9z0"
					title="YouTube Video Player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
			<div className="flex justify-between items-start gap-4 pb-4">
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
			</div>
		</main>
	);
}

export default CollaboratorContentsVideoPost;
