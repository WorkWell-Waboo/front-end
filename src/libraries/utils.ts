import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export type CalendarDay = {
	date: string
	isCurrentMonth: boolean
	times: {
		[key: string]: {
			name: string
			isbloquead?: boolean
		}
	}
}
function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export function generateCalendarDays(): CalendarDay[] {
	return (		[
		{
		  "date": "01",
		  "isCurrentMonth": true,
		  "times": {
			"09:00": {
			  "name": "João Silva"
			}
		  }
		},
		{
		  "date": "02",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "03",
		  "isCurrentMonth": true,
		  "times": {
			"10:00": {
			  "name": "Mariana Fernandes"
			},
			"11:00": {
			  "name": "Pedro Santos"
			}
		  }
		},
		{
		  "date": "04",
		  "isCurrentMonth": true,
		  "times": {
			"10:00": {
			  "name": "Horário bloqueado",
			  "isbloquead": true
			},
			"11:00": {
			  "name": "Pedro Santos"
			}
		  }
		},
		{
		  "date": "05",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "06",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "07",
		  "isCurrentMonth": true,
		  "times": {
			"11:00": {
			  "name": "Ana Beatriz Souza"
			},
			"12:00": {
			  "name": "Lucas Almeida"
			}
		  }
		},
		{
		  "date": "08",
		  "isCurrentMonth": true,
		  "times": {
			"10:00": {
			  "name": "João Silva"
			},
			"11:00": {
			  "name": "Pedro Silva"
			},
			"12:00": {
			  "name": "Lucas Almeida"
			}
		  }
		},
		{
		  "date": "09",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "10",
		  "isCurrentMonth": true,
		  "times": {
			"14:00": {
			  "name": "Matheus Carvalho"
			}
		  }
		},
		{
		  "date": "11",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "12",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "13",
		  "isCurrentMonth": true,
		  "times": {
			"11:00": {
			  "name": "João Silva"
			},
			"12:00": {
			  "name": "Mariana Fernandes"
			},
			"14:00": {
			  "name": "Ana Beatriz Souza"
			}
		  }
		},
		{
		  "date": "14",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "15",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "16",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "17",
		  "isCurrentMonth": true,
		  "times": {
			"09:00": {
			  "name": "Thiago Pereira"
			},
			"10:00": {
			  "name": "Vinícius Barbosa"
			},
			"11:00": {
			  "name": "Juliana Lima"
			}
		  }
		},
		{
		  "date": "18",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "19",
		  "isCurrentMonth": true,
		  "times": {
			"12:00": {
			  "name": "Lucas Almeida"
			},
			"14:00": {
			  "name": "Mariana Fernandes"
			}
		  }
		},
		{
		  "date": "20",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "21",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "22",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "23",
		  "isCurrentMonth": true,
		  "times": {
			"14:00": {
			  "name": "Pedro Silva"
			},
			"15:00": {
			  "name": "Matheus Carvalho"
			}
		  }
		},
		{
		  "date": "24",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "25",
		  "isCurrentMonth": true,
		  "times": {
			"14:00": {
			  "name": "Mariana Fernandes"
			},
			"15:00": {
			  "name": "Thiago Pereira"
			},
			"16:00": {
			  "name": "Leandro Gomes"
			}
		  }
		},
		{
		  "date": "26",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "27",
		  "isCurrentMonth": true,
		  "times": {
			"13:00": {
			  "name": "João Silva"
			},
			"14:00": {
			  "name": "Lucas Almeida"
			}
		  }
		},
		{
		  "date": "28",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "29",
		  "isCurrentMonth": true,
		  "times": {
			"09:00": {
			  "name": "João Silva"
			},
			"10:00": {
			  "name": "Pedro Santos"
			}
		  }
		},
		{
		  "date": "30",
		  "isCurrentMonth": true,
		  "times": {}
		},
		{
		  "date": "31",
		  "isCurrentMonth": true,
		  "times": {
			"10:00": {
			  "name": "Lucas Almeida"
			},
			"11:00": {
			  "name": "Matheus Carvalho"
			},
			"12:00": {
			  "name": "Pedro Silva"
			}
		  }
		},
		{
		  "date": "01",
		  "isCurrentMonth": false,
		  "times": {}
		},
		{
		  "date": "02",
		  "isCurrentMonth": false,
		  "times": {}
		},
		{
		  "date": "03",
		  "isCurrentMonth": false,
		  "times": {}
		},
		{
		  "date": "04",
		  "isCurrentMonth": false,
		  "times": {}
		}
	  ])

				// ... resto dos dias ..
  }
export { cn };
