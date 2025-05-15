import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export type CalendarDay = {
  date: Date
  isCurrentMonth: boolean
  times: {
    [key: string]: {
      name: string
      isbloquead?: boolean
      location?: string
    }
  }
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateCalendarDays(): CalendarDay[] {
  const year = 2025
  const month = 4 // Maio (0-based index, 0=Janeiro, 4=Maio)

  return [
    {
      date: new Date(year, month, 1),
      isCurrentMonth: true,
      times: {
        "09:00": {
          name: "João Silva",
          location: "Sala de Videoconferência no Microsoft Teams",
        },
      },
    },
    {
      date: new Date(year, month, 2),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 3),
      isCurrentMonth: true,
      times: {
        "10:00": {
          name: "Mariana Fernandes",
          location: "Consultório 3",
        },
        "11:00": {
          name: "Pedro Santos",
          location: "Sala 101",
        },
      },
    },
    {
      date: new Date(year, month, 4),
      isCurrentMonth: true,
      times: {
        "10:00": {
          name: "Horário bloqueado",
          isbloquead: true,
          location: "Consultório 2",
        },
        "11:00": {
          name: "Pedro Santos",
          location: "Sala 101",
        },
      },
    },
    {
      date: new Date(year, month, 5),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 6),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 7),
      isCurrentMonth: true,
      times: {
        "11:00": {
          name: "Ana Beatriz Souza",
          location: "Sala de Videoconferência no Microsoft Teams",
        },
        "12:00": {
          name: "Lucas Almeida",
          location: "Sala de Videoconferência no Microsoft Teams",
        },
      },
    },
    {
      date: new Date(year, month, 8),
      isCurrentMonth: true,
      times: {
        "10:00": {
          name: "João Silva",
          location: "Consultório 1",
        },
        "11:00": {
          name: "Pedro Silva",
          location: "Sala 202",
        },
        "12:00": {
          name: "Lucas Almeida",
          location: "Consultório 4",
        },
      },
    },
    {
      date: new Date(year, month, 9),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 10),
      isCurrentMonth: true,
      times: {
        "14:00": {
          name: "Matheus Carvalho",
          location: "Sala 105",
        },
      },
    },
    {
      date: new Date(year, month, 11),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 12),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 13),
      isCurrentMonth: true,
      times: {
        "11:00": {
          name: "João Silva",
          location: "Sala de Videoconferência no Microsoft Teams",
        },
        "12:00": {
          name: "Mariana Fernandes",
          location: "Consultório 3",
        },
        "14:00": {
          name: "Ana Beatriz Souza",
          location: "Consultório 5",
        },
      },
    },
    {
      date: new Date(year, month, 14),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 15),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 16),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 17),
      isCurrentMonth: true,
      times: {
        "09:00": {
          name: "Thiago Pereira",
          location: "Sala 105",
        },
        "10:00": {
          name: "Vinícius Barbosa",
          location: "Consultório 1",
        },
        "11:00": {
          name: "Juliana Lima",
          location: "Sala 202",
        },
      },
    },
    {
      date: new Date(year, month, 18),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 19),
      isCurrentMonth: true,
      times: {
        "12:00": {
          name: "Lucas Almeida",
          location: "Consultório 4",
        },
        "14:00": {
          name: "Mariana Fernandes",
          location: "Sala de Videoconferência",
        },
      },
    },
    {
      date: new Date(year, month, 20),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 21),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 22),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 23),
      isCurrentMonth: true,
      times: {
        "14:00": {
          name: "Pedro Silva",
          location: "Consultório 1",
        },
        "15:00": {
          name: "Matheus Carvalho",
          location: "Sala 202",
        },
      },
    },
    {
      date: new Date(year, month, 24),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 25),
      isCurrentMonth: true,
      times: {
        "14:00": {
          name: "Mariana Fernandes",
          location: "Consultório 4",
        },
        "15:00": {
          name: "Thiago Pereira",
          location: "Sala 105",
        },
        "16:00": {
          name: "Leandro Gomes",
          location: "Sala de Videoconferência",
        },
      },
    },
    {
      date: new Date(year, month, 26),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 27),
      isCurrentMonth: true,
      times: {
        "13:00": {
          name: "João Silva",
          location: "Sala de Videoconferência no Microsoft Teams",
        },
        "14:00": {
          name: "Lucas Almeida",
          location: "Consultório 5",
        },
      },
    },
    {
      date: new Date(year, month, 28),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 29),
      isCurrentMonth: true,
      times: {
        "09:00": {
          name: "João Silva",
          location: "Sala de Videoconferência no Microsoft Teams",
        },
        "10:00": {
          name: "Pedro Santos",
          location: "Sala 101",
        },
      },
    },
    {
      date: new Date(year, month, 30),
      isCurrentMonth: true,
      times: {},
    },
    {
      date: new Date(year, month, 31),
      isCurrentMonth: true,
      times: {
        "10:00": {
          name: "Lucas Almeida",
          location: "Consultório 5",
        },
        "11:00": {
          name: "Matheus Carvalho",
          location: "Sala 202",
        },
        "12:00": {
          name: "Pedro Silva",
          location: "Consultório 1",
        },
      },
    },
    // Próximo mês (Junho)
    {
      date: new Date(year, month + 1, 1),
      isCurrentMonth: false,
      times: {},
    },
    {
      date: new Date(year, month + 1, 2),
      isCurrentMonth: false,
      times: {},
    },
    {
      date: new Date(year, month + 1, 3),
      isCurrentMonth: false,
      times: {},
    },
    {
      date: new Date(year, month + 1, 4),
      isCurrentMonth: false,
      times: {},
    },
  ]
}
