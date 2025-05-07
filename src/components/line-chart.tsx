'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const chartData = [
  { month: 'Jan', value: 2 },
  { month: 'Feb', value: 3 },
  { month: 'Mar', value: 4 },
  { month: 'Abr', value: 3 },
  { month: 'May', value: 4 },
  { month: 'Jun', value: 3.2 },
];

// Calcular o valor total para determinar a porcentagem
const totalValue = chartData.reduce((acc, curr) => acc + curr.value, 0);

export function LineCharts() {
  return (
    <Card className="py-4">
      <CardHeader>
        <CardTitle>Nível de risco</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={chartData} margin={{ top: 40, left: 0, right: 0 }}>
            <defs>
              <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#736CCE" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#736CCE" stopOpacity={0} />
              </linearGradient>
            </defs>
            {/* Removendo a linha pontilhada do CartesianGrid */}
            <CartesianGrid vertical={false} strokeDasharray="" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              domain={[1, 4]}
              ticks={[1, 2, 3, 4]}
              tickFormatter={(value) => `Nv ${value}`}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const value = Number(payload[0].value);
                  const percentage = ((value / totalValue) * 100).toFixed(2);

                  return (
                    <div className="rounded bg-[#736CCE] text-white px-2 py-1 text-xs">
                      +${percentage} ({value}%)
                    </div>
                  );
                }
                return null;
              }}
              cursor={false}
            />
            <Area
              type="bump"
              dataKey="value"
              stroke="#736CCEBF"
              strokeWidth={3}
              fill="url(#colorRisk)"
            />
            <Scatter
              data={chartData}
              dataKey="value"
              shape="circle"
              fill="#736CCE"
              line={{ stroke: '#736CCE', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
