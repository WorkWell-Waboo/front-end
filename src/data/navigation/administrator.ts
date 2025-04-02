import type { NavigationProps } from '@/containers/layout/sidebar/navigation';

import { BusinessSVG } from '@/assets/svgs/business';
import { ChatSVG } from '@/assets/svgs/chat';
import { DashboardSVG } from '@/assets/svgs/dashboard';
import { FileSVG } from '@/assets/svgs/file';
import { LayersSVG } from '@/assets/svgs/layers';
import { ReportSVG } from '@/assets/svgs/report';
import { TeamsSVG } from '@/assets/svgs/teams';

const navigationAdministrator: Omit<NavigationProps, 'active'>[] = [
	{
		label: 'Início',
		icon: DashboardSVG,
		href: '/dashboard',
	},
	{
		label: 'Relatórios',
		icon: ReportSVG,
		href: '/reports',
	},
	{
		label: 'Empresas',
		icon: BusinessSVG,
		href: '/business',
	},
	{
		label: 'Colaboradores',
		icon: TeamsSVG,
		href: '/collaborators',
	},
	{
		label: 'Planos',
		icon: FileSVG,
		href: '/plans',
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

export { navigationAdministrator };
