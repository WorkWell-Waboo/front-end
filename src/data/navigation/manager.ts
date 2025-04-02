import type { NavigationProps } from '@/containers/layout/sidebar/navigation';

import { DashboardSVG } from '@/assets/svgs/dashboard';
import { LayersSVG } from '@/assets/svgs/layers';
import { ReportSVG } from '@/assets/svgs/report';
import { UsersSVG } from '@/assets/svgs/users';

const navigationManager: Omit<NavigationProps, 'active'>[] = [
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
		label: 'Colaboradores',
		icon: UsersSVG,
		href: '/collaborators',
	},
	{
		label: 'Conteúdos',
		icon: LayersSVG,
		href: '/contents',
	},
];

export { navigationManager };
