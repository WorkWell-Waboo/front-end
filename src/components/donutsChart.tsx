'use client';

import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Psicologia', value: 12, color: '#4F7BFF' },
  { name: 'Psiquiatria', value: 20, color: '#B28CFF' },
  { name: 'Nutrição', value: 18, color: '#292D80' },
  { name: 'Fisioterapia', value: 20, color: '#B1B6DE' },
  { name: 'Health Coaching', value: 28, color: '#133AB9' },
  { name: 'Sono', value: 2, color: '#6A93F8' },
];

interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  index: number;
  value: number;
}

const renderLabelBubble = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  index,
  value,
}: CustomLabelProps): JSX.Element => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius * 0.9;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g key={index}>
      <circle
        cx={x}
        cy={y}
        r={16}
        fill="#fff"
        stroke="#E0E0E0"
        strokeWidth={1}
        filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.1))"
      />
      <text
        x={x}
        y={y}
        fill="#5D5D5D"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {value}%
      </text>
    </g>
  );
};

export default function DonutChart() {
  return (
    <div className="rounded-xl  max-w-xl w-full">
      <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={45}
              outerRadius={90}
              startAngle={90}
              endAngle={450}
              isAnimationActive={true}
              paddingAngle={0}
              cornerRadius={0}
              label={(props: any) => renderLabelBubble(props)}
            >
              {data.map((entry, index) => (
                <Cell key={index.toString()} fill={entry.color} stroke="none" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="flex flex-col gap-2">
          {data.map((item, i) => (
            <div key={i.toString()} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-gray-600 text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
