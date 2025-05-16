'use client'
import Link from 'next/link';

import {} from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { Button } from '@/components/ui/button';

import {
} from '@/components/ui/dialog';

import {
} from '@/components/ui/select';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/libraries/utils';
import Image from 'next/image';

import Photo2 from '@/assets/imgs/avatar.png';
import Photo3 from '@/assets/imgs/avatar2.png';
import Photo4 from '@/assets/imgs/avatar3.png';
import Photo from '@/assets/imgs/cliente.png';
import { Clip } from '@/assets/svgs/clip';
import SearchBar from '@/components/searchbar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { CalendarIcon, ChevronDown } from 'lucide-react';
import React from 'react';

function SpecialistSchedulesPage() {
	const [date, setDate] = React.useState<Date>();

	 const nextSessions = [
    {
      id: 1,
      photo: Photo,
      name: 'Sandra Amaral',
      profession: 'Psicanalista',
      date: 'Sun 6, 2025',
      time: '14:00 - 15:00 PM',
      isActive: true,
    },
    {
      id: 2,
      photo: Photo2,
      name: 'Carlos Oliveira',
      profession: 'Coach de Vida',
      date: 'Fev 30, 2025',
      time: '10:00 - 11:00 AM',
      isActive: false,
    },
    {
      id: 3,
      photo: Photo4,
      name: 'Adriele Cunha',
      profession: 'Nutricionista',
      date: 'Jan 15, 2025',
      time: '10:00 - 11:00 AM',
      isActive: false,
    },
    {
      id: 4,
      photo: Photo3,
      name: 'Carla Diaz',
      profession: 'Psicologa',
      date: 'Jan 17, 2025',
      time: '10:00 - 11:00 AM',
      isActive: false,
    },
  ];

  const historics = [
    {
      id: 1,
      photo: Photo,
      name: 'Sandra Amaral',
      profession: 'Psicanalista',
      date: 'Sun 6, 2025',
      time: '14:00 - 15:00 PM',
    },
    {
      id: 2,
      photo: Photo2,
      name: 'Carlos Oliveira',
      profession: 'Coach de Vida',
      date: 'Fev 30, 2025',
      time: '10:00 - 11:00 AM',
    },
    {
      id: 3,
      photo: Photo4,
      name: 'Adriele Cunha',
      profession: 'Nutricionista',
      date: 'Jan 15, 2025',
      time: '10:00 - 11:00 AM',
    },
    {
      id: 4,
      photo: Photo3,
      name: 'Carla Diaz',
      profession: 'Psicologa',
      date: 'Jan 17, 2025',
      time: '10:00 - 11:00 AM',
    },
  ];

	return (
		 <main className="px-10 pb-10 flex flex-col gap-4">
			<SearchBar />
			<Tabs defaultValue="next-sessions">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-4 font-bold text-xl text-[#4f4f4f]">
						<TabsContent value="next-sessions">
							<h1 className="font-bold text-xl text-[#4f4f4f]">
								Próximas sessões
							</h1>
						</TabsContent>
						<TabsContent value="history">
							<h1 className="font-bold text-xl text-[#4f4f4f]">
								Histórico de sessões
							</h1>
						</TabsContent>
					</div>
					<div className="flex gap-5 items-center">
						{/* Period selector */}

							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant={'outline'}
										className={cn(
											'w-[240px] justify-between border-none bg-[#FFFFFF] text-left font-normal',
											!date && 'text-muted-foreground'
										)}
									>
										<div className="flex items-center gap-2">
											<CalendarIcon
												width={14}
												height={7}
												className="text-[#736CCE]"
											/>
											{date ? format(date, 'PPP') : <span>Selecione o periodo</span>}
										</div>
										<ChevronDown
											width={14}
											height={7}
											className="text-[#736CCE] w-3.5 h-2"
										/>
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										mode="single"
										selected={date}
										onSelect={setDate}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
					
						<TabsList className="flex gap-5">
							<TabsTrigger value="next-sessions">Próximas sessões</TabsTrigger>
							<TabsTrigger value="history">Histórico</TabsTrigger>
						</TabsList>
					</div>
				</div>
				<TabsContent value="next-sessions">
					<div className="flex flex-col gap-4 mb-4">
						{nextSessions.map((nextSession) => (
							<div className="flex flex-col gap-2" key={nextSession.id}>
								<div
									className={cn(
										'flex flex-row gap-4 font-normal text-sm text-[#4f4f4f]'
									)}
								>
									<span>{nextSession.date}</span>
									<span>{nextSession.time}</span>
								</div>
								<div
									className={cn(
										'px-8 py-4 rounded-lg flex items-center gap-5 border-b-2 h-full',
										nextSession.isActive
											? 'bg-primary border-b-white'
											: 'bg-white border-b-primary'
									)}
								>
									<Image
										src={nextSession.photo}
										alt={`Foto de ${nextSession.name}`}
										width={75}
										height={75}
										className="rounded-full w-[75] h-[75]"
									/>
									<div className="flex flex-col flex-1">
										<span
											className={cn(
												'font-bold text-lg',
												nextSession.isActive ? 'text-white' : 'text-primary'
											)}
										>
											{nextSession.name}
										</span>
										<span
											className={cn(
												'font-light text-sm',
												nextSession.isActive ? 'text-white' : 'text-[#4f4f4f]'
											)}
										>
											{nextSession.profession}
										</span>
									</div>
									<Button
										asChild
										className={cn(
											'mt-2 text-xs rounded-md w-fit',
											nextSession.isActive
												? 'bg-white hover:bg-white/75 text-black'
												: 'bg-primary text-white '
										)}
									>
										<Link href="/schedules/call">Ir para a sala </Link>
									</Button>
								</div>
							</div>
						))}
					</div>
					{/* PAGINATION */}
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious href="#" />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#" isActive={true}>
									1
								</PaginationLink>
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
				</TabsContent>
				<TabsContent value="history">
					<div className="flex flex-col gap-4 mb-4">
						{historics.map((historic) => (
							<div className="flex flex-col gap-2" key={historic.id}>
								<div
									className={cn(
										'flex flex-row gap-4 font-normal text-sm text-[#4f4f4f]'
									)}
								>
									<span>{historic.date}</span>
									<span>{historic.time}</span>
								</div>
								<div className="px-8 py-4 rounded-lg flex items-center gap-5 border-b-2 h-full bg-white border-b-primary">
									<Image
										src={historic.photo}
										alt={`Foto de ${historic.name}`}
										width={75}
										height={75}
										className="rounded-full w-[75] h-[75]"
									/>
									<div className="flex flex-col flex-1">
										<span className="font-bold text-lg text-primary">
											{historic.name}
										</span>
										<span className="font-light text-sm text-[#4f4f4f]">
											{historic.profession}
										</span>
									</div>
									<div className="flex gap-4">
										<Button variant="secondary" asChild>
											<Link href="/schedules/attachments">
												<Clip className="text-primary" /> Anexos
											</Link>
										</Button>
									</div>
								</div>
							</div>
						))}
					</div>
					{/* PAGINATION */}
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious href="#" />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#" isActive={true}>
									1
								</PaginationLink>
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
				</TabsContent>
			</Tabs>
		</main>
	);
}

export default SpecialistSchedulesPage;
