'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Psicologia', value: 28 },
  { name: 'Psiquiatria', value: 20 },
  { name: 'Nutrição', value: 18 },
  { name: 'Fisioterapia', value: 20 },
  { name: 'Health Coaching', value: 12 },
  { name: 'Sono', value: 2 },
];

const COLORS = [
  '#2864E8', // Psicologia
  '#A87AEA', // Psiquiatria
  '#372F4B', // Nutrição
  '#A6ACCC', // Fisioterapia
  '#2D3B88', // Health Coaching
  '#5C9DFF', // Sono
];

export function DonutChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Utilização por serviço</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row sm:items-start gap-6">
        <ResponsiveContainer width={220} height={200}>
          <PieChart margin={{ top: 0, left: 0, right: 0, bottom: 5 }}>
            <defs>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="3"
                  stdDeviation="4"
                  floodColor="#000"
                  floodOpacity="0.2"
                />
              </filter>
            </defs>

            <Pie
              data={data}
              innerRadius={40}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
              labelLine={false}
              label={({ cx, cy, midAngle, outerRadius, index }) => {
                const RADIAN = Math.PI / 180;
                const radius = outerRadius;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                const color = COLORS[index % COLORS.length];

                return (
                  <>
                    <circle
                      cx={x}
                      cy={y}
                      r={15}
                      fill="white"
                      filter="url(#shadow)" // sombra atrás da bolha
                    />
                    <text
                      x={x}
                      y={y}
                      fill={color}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={12}
                      fontWeight={600}
                    >
                      {`${Math.round(data[index].value)}%`}
                    </text>
                  </>
                );
              }}
            >
              {data.map((_, index) => (
                <Cell
                  key={index.toString()}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="grid gap-2 text-sm h-full py-3">
          {data.map((item, index) => (
            <div key={index.toString()} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              <span className="text-[#828282] text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
