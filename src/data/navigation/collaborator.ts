import type { NavigationProps } from '@/containers/layout/sidebar/navigation';

import { CalendarSVG } from '@/assets/svgs/calendar';
import { ChatSVG } from '@/assets/svgs/chat';
import { DashboardSVG } from '@/assets/svgs/dashboard';
import { FileSVG } from '@/assets/svgs/file';
import { HeaderCogSVG } from '@/assets/svgs/header-cog';
import { LayersSVG } from '@/assets/svgs/layers';

const navigationCollaborator: Omit<NavigationProps, 'active'>[] = [
	{
		label: 'Início',
		icon: DashboardSVG,
		href: '/dashboard',
	},
	{
		label: 'Serviços',
		icon: HeaderCogSVG,
		href: '/services',
	},
	{
		label: 'Meus agendamentos',
		icon: CalendarSVG,
		href: '/schedules',
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
		label: 'Chat',
		icon: ChatSVG,
		href: '/chat',
	},
];

export { navigationCollaborator };
