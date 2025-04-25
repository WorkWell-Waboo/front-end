'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const chartData = [
  { month: 'Jan', value: 2 },
  { month: 'Feb', value: 2.2 },
  { month: 'Mar', value: 3.5 },
  { month: 'Apr', value: 2.8 },
  { month: 'May', value: 3.2 },
  { month: 'Jun', value: 3.3 },
];

export function LineCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nível de risco</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={chartData} margin={{ top: 20, left: 12, right: 12 }}>
            <defs>
              <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#736CCE" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#736CCE" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
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
                  return (
                    <div className="rounded bg-[#736CCE] text-white px-2 py-1 text-xs">
                      +$40 (4%)
                    </div>
                  );
                }
                return null;
              }}
              cursor={false}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#736CCEBF"
              strokeWidth={3}
              fill="url(#colorRisk)"
              dot={{
                fill: '#736CCE',
                stroke: 'white',
                strokeWidth: 2,
                r: 4,
              }}
              activeDot={{
                r: 6,
                stroke: '#736CCE',
                strokeWidth: 2,
                fill: 'white',
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
