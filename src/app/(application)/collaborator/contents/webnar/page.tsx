'use client'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import CategoriesContents from "@/components/categoriesContents";
import GoBackButton from "@/components/go-back-button";
import WBox from "@/components/wbox";

import PhotoWebnar from "@/assets/imgs/webnar.png"

function CollaboratorContentsWebnar() {

	return (
		<main className="p-10 flex flex-col gap-4">
			<GoBackButton/>
			<CategoriesContents/>
			<div className="grid grid-cols-2 gap-4">
				<h2 className="font-semibold text-lg text-[#4f4f4f] col-span-2">Webnars</h2>
				{Array.from({ length: 6 }).map((_, index) => (	
					<WBox 
						key={`carousel-item-${Date.now()}-${index}`}
						variant="white"
						id={index}
						imageSrc={PhotoWebnar}
						imageAlt="foto post" 
						title={`Movimente-se: sessões de atividade física para seu bem-estar ${index}`}
						text="Descubra como entender melhor a si mesmo pode transformar sua vida em todos os aspectos!"
						link={`/contents/webnar/${index}`}
						time="5 min"				
						buttons={["heart"]}	
					/>
				))}
			</div>
			{/* PAGINATION */}
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#"/>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#" isActive={true}>1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">2</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">3</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</main>
	);
}

export default CollaboratorContentsWebnar;
