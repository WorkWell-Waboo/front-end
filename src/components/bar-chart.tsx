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

const data = [
  { topic: 'Depressão', mentions: 18 },
  { topic: 'Burnout', mentions: 22 },
  { topic: 'Ansiedade', mentions: 33 },
  { topic: 'Saúde\nEmocional', mentions: 22 },
  { topic: 'Síndrome\nde pânico', mentions: 15 },
];

export function HotTopicsChart() {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Hot topics</CardTitle>
        {/* Aqui você pode colocar o Select de Especialidade se quiser */}
        <div className="bg-muted rounded-md px-3 py-1 text-sm flex items-center gap-2 cursor-pointer">
          Especialidade
          <ChevronDown />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} margin={{ top: 20, left: 12, right: 12 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="topic"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={0}
              tickFormatter={(value) => value}
              style={{ fontSize: 12, fill: '#736CCE' }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              ticks={[0, 10, 20, 30]}
              domain={[0, 30]}
              tickFormatter={(value) => `${value} Menções`}
              style={{ fontSize: 12 }}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded bg-[#736CCE] text-white px-2 py-1 text-xs">
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
              radius={[10, 10, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
