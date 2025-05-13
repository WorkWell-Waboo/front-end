import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export type CalendarDay = {
  date: string
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
  return [
    {
      date: "01",
      isCurrentMonth: true,
      times: {
        "09:00": {
          name: "João Silva",
          location: "Sala de Videoconferência no Microsoft Teams",
        },
      },
    },
    {
      date: "02",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "03",
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
      date: "04",
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
      date: "05",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "06",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "07",
      isCurrentMonth: true,
      times: {
        "11:00": {
          name: "Ana Beatriz Souza",
          location: "Consultório 5",
        },
        "12:00": {
          name: "Lucas Almeida",
          location: "Sala de Videoconferência",
        },
      },
    },
    {
      date: "08",
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
      date: "09",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "10",
      isCurrentMonth: true,
      times: {
        "14:00": {
          name: "Matheus Carvalho",
          location: "Sala 105",
        },
      },
    },
    {
      date: "11",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "12",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "13",
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
      date: "14",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "15",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "16",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "17",
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
      date: "18",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "19",
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
      date: "20",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "21",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "22",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "23",
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
      date: "24",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "25",
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
      date: "26",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "27",
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
      date: "28",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "29",
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
      date: "30",
      isCurrentMonth: true,
      times: {},
    },
    {
      date: "31",
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
    {
      date: "01",
      isCurrentMonth: false,
      times: {},
    },
    {
      date: "02",
      isCurrentMonth: false,
      times: {},
    },
    {
      date: "03",
      isCurrentMonth: false,
      times: {},
    },
    {
      date: "04",
      isCurrentMonth: false,
      times: {},
    },
  ]
}
