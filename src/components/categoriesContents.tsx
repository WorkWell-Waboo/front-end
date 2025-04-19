'use client'
import { Group } from "@/assets/svgs/group";
import { Button } from "@/components/ui/button";
import { Apple, Brain, BriefcaseBusiness, Smile } from "lucide-react";
import { useState } from "react";

function CategoriesContents() {
	// objeto com categorias
	const menuOptions=[
		{	id:1, name:'Autoconhecimento', icon:Smile},
		{	id:2, name:'Carreira', icon:BriefcaseBusiness},
		{	id:3, name:'Nutrição', icon:Apple},
		{	id:4, name:'Familia e amigos', icon:Group},
		{	id:5, name:'Transtornos', icon:Brain},
	]
	// função click menu
	const [selectedId, setSelectedId] = useState<number | null>(null); 

	const handleSelect = (id: number) => {
		setSelectedId((prevId) => (prevId === id ? null : id));
	};
	
	return (
			<div className="flex flex-col gap-4">
				<h2  className="font-semibold text-lg text-[#4f4f4f]">
					Escolha a categoria de interesse:
				</h2>
				<div className="grid grid-cols-5 gap-2 h-[150px]">
					{menuOptions.map((menuOption)=>(
						<Button
								variant="secondary"
								key={menuOption.id}
								onClick={() => handleSelect(menuOption.id)} 
								className={`flex flex-col items-center justify-center rounded-lg h-full hover:bg-primary hover:text-white font-medium ${
									menuOption.id === selectedId ? "bg-primary text-white" : "bg-white text-[#4F4F4F]"  
								}`} 
							>
							<div className="flex items-center justify-center bg-white w-11 h-11 rounded-full">
								<menuOption.icon className="w-8! h-8! text-primary"/>
							</div>
							{menuOption.name}
						</Button>
					))}
				</div>
			</div>
	);
}

export default CategoriesContents;
