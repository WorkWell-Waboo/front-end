import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export type CalendarDay = {
	date: string
	isCurrentMonth: boolean
	appointments: {
	  time: string
	  name: string
	  color: "blue" | "green" | "pink" | "red"
	  status?: string
	}[]
  }
function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export function generateCalendarDays(): CalendarDay[] {
	return [
		{
			date: "01",
			isCurrentMonth: true,
			appointments: [{ time: "09:00", name: "João Silva", color: "blue" }],
		  },
		  {
			date: "02",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "03",
			isCurrentMonth: true,
			appointments: [
			  { time: "10:00", name: "Mariana Fernandes", color: "green" },
			  { time: "11:00", name: "Pedro Santos", color: "green" },
			],
		  },
		  {
			date: "04",
			isCurrentMonth: true,
			appointments: [
			  { time: "10:00", name: "Horário bloqueado", color: "red" },
			  { time: "11:00", name: "Pedro Santos", color: "green" },
			],
		  },
		  {
			date: "05",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "06",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "07",
			isCurrentMonth: true,
			appointments: [
			  { time: "11:00", name: "Ana Beatriz Souza", color: "blue" },
			  { time: "12:00", name: "Lucas Almeida", color: "green" },
			],
		  },
		  {
			date: "08",
			isCurrentMonth: true,
			appointments: [
			  { time: "10:00", name: "João Silva", color: "blue" },
			  { time: "11:00", name: "Pedro Silva", color: "green" },
			  { time: "12:00", name: "Lucas Almeida", color: "pink" },
			  { time: "12:00", name: "Lucas Almeida", color: "pink" }
			],
		  },
		  {
			date: "09",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "10",
			isCurrentMonth: true,
			appointments: [{ time: "14:00", name: "Matheus Carvalho", color: "blue" }],
		  },
		  {
			date: "11",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "12",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "13",
			isCurrentMonth: true,
			appointments: [
			  { time: "11:00", name: "João Silva", color: "blue" },
			  { time: "12:00", name: "Mariana Fernandes", color: "green" },
			  { time: "14:00", name: "Ana Beatriz Souza", color: "pink" },
			],
		  },
		  {
			date: "14",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "15",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "16",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "17",
			isCurrentMonth: true,
			appointments: [
			  { time: "09:00", name: "Thiago Pereira", color: "blue" },
			  { time: "10:00", name: "Vinícius Barbosa", color: "green" },
			  { time: "11:00", name: "Juliana Lima", color: "pink" },
			],
		  },
		  {
			date: "18",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "19",
			isCurrentMonth: true,
			appointments: [
			  { time: "12:00", name: "Lucas Almeida", color: "blue" },
			  { time: "14:00", name: "Mariana Fernandes", color: "green" },
			],
		  },
		  {
			date: "20",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "21",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "22",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "23",
			isCurrentMonth: true,
			appointments: [
			  { time: "14:00", name: "Pedro Silva", color: "blue" },
			  { time: "15:00", name: "Matheus Carvalho", color: "green" },
			],
		  },
		  {
			date: "24",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "25",
			isCurrentMonth: true,
			appointments: [
			  { time: "14:00", name: "Mariana Fernandes", color: "blue" },
			  { time: "15:00", name: "Thiago Pereira", color: "green" },
			  { time: "16:00", name: "Leandro Gomes", color: "pink" },
			],
		  },
		  {
			date: "26",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "27",
			isCurrentMonth: true,
			appointments: [
			  { time: "13:00", name: "João Silva", color: "blue" },
			  { time: "14:00", name: "Lucas Almeida", color: "green" },
			],
		  },
		  {
			date: "28",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "29",
			isCurrentMonth: true,
			appointments: [
			  { time: "09:00", name: "João Silva", color: "blue" },
			  { time: "10:00", name: "Pedro Santos", color: "green" },
			],
		  },
		  {
			date: "30",
			isCurrentMonth: true,
			appointments: [],
		  },
		  {
			date: "31",
			isCurrentMonth: true,
			appointments: [
			  { time: "10:00", name: "Lucas Almeida", color: "blue" },
			  { time: "11:00", name: "Matheus Carvalho", color: "green" },
			  { time: "12:00", name: "Pedro Silva", color: "pink" },
			],
		  },
		  {
			date: "01",
			isCurrentMonth: false,
			appointments: [],
		  },
		  {
			date: "02",
			isCurrentMonth: false,
			appointments: [],
		  },
		  {
			date: "03",
			isCurrentMonth: false,
			appointments: [],
		  },
		  {
			date: "04",
			isCurrentMonth: false,
			appointments: [],
		  },
		]
	  // ... resto dos dias ..
  }
export { cn };
