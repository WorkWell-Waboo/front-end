'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// Dados
const data = [
  { topic: 'Depressão', mentions: 18 },
  { topic: 'Burnout', mentions: 22 },
  { topic: 'Ansiedade', mentions: 33 },
  { topic: 'Saúde\nEmocional', mentions: 22 },
  { topic: 'Síndrome\nde pânico', mentions: 15 },
];

// Componente customizado para estilizar os labels do eixo X
type CustomTickProps = {
  x: number;
  y: number;
  payload: { value: string };
};

function CustomTick({ x, y, payload }: CustomTickProps) {
  const lines = payload.value.split('\n');
  return (
    <g transform={`translate(${x},${y})`}>
      {lines.map((line, index) => (
        <text
          key={index.toString()}
          x={0}
          y={index * 14}
          textAnchor="middle"
          fontSize={12}
          fontWeight="600"
          fill="#736CCE"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

export function HotTopicsChart() {
  const maxMentions = Math.max(...data.map((item) => item.mentions));
  const ticks = [0, 10, 20, 30]; // NÃO inclui o máximo (30 ou 33)

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Hot topics</CardTitle>
        <div className="bg-[#504DA61A] rounded-md px-3 py-1 text-sm flex items-center gap-2 cursor-pointer">
          Especialidade
          <ChevronDown className="text-[#736CCE]" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} margin={{ top: -0.4, left: 22, right: 0 }}>
            <CartesianGrid
              vertical={false} // remove linhas verticais
              stroke="#E5E7EB" // cor cinza sólida (gray-200)
              strokeDasharray="" // linha sólida
            />
            <XAxis
              dataKey="topic"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={0}
              tick={(props) => <CustomTick {...props} />} // <- corrige aqui!
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              ticks={ticks}
              domain={[0, maxMentions]}
              tickFormatter={(value) => `${value}\u00A0Menções`}
              style={{ fontSize: 12 }}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded bg-[#736CCE] text-white px-2 py-1 text-xs block">
                      {payload[0].value} Menções
                    </div>
                  );
                }
                return null;
              }}
              cursor={{ fill: 'transparent' }}
            />
            <Bar
              dataKey="mentions"
              fill="#736CCE"
              radius={[20, 20, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
