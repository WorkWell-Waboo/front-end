import type { NavigationProps } from '@/containers/layout/sidebar/navigation';

import { CalendarSVG } from '@/assets/svgs/calendar';
import { ChartSVG } from '@/assets/svgs/chart';
import { ChatSVG } from '@/assets/svgs/chat';
import { DashboardSVG } from '@/assets/svgs/dashboard';
import { HeaderCogSVG } from '@/assets/svgs/header-cog';
import { LayersSVG } from '@/assets/svgs/layers';
import { UsersSVG } from '@/assets/svgs/users';

const navigationSpecialist: Omit<NavigationProps, 'active'>[] = [
	{
		label: 'Início',
		icon: DashboardSVG,
		href: '/dashboard',
	},
	{
		label: 'Minha agenda',
		icon: HeaderCogSVG,
		href: '/calendar',
	},
	{
		label: 'Pacientes',
		icon: UsersSVG,
		href: '/pacients',
	},
	{
		label: 'Meus agendamentos',
		icon: CalendarSVG,
		href: '/schedules',
	},
	{
		label: 'Relatório financeiro',
		icon: ChartSVG,
		href: '/financial-report',
	},
	{
		label: 'Conteúdos',
		icon: LayersSVG,
		href: '/contents',
	},
	{
		label: 'Suporte',
		icon: ChatSVG,
		href: '/suport',
	},
];

export { navigationSpecialist };
