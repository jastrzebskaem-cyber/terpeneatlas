import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getTerpeneByShortName } from "../lib/terpenesData";

const COLORS = [
  "#10b981", "#eab308", "#f97316", "#14b8a6", "#22c55e",
  "#a855f7", "#d97706", "#84cc16", "#f472b6", "#f43f5e",
  "#06b6d4", "#a3e635", "#059669"
];

export default function TerpenePieChart({ terpenes }) {
  const data = Object.entries(terpenes)
    .filter(([, v]) => v > 0)
    .sort(([, a], [, b]) => b - a)
    .map(([name, value]) => {
      const t = getTerpeneByShortName(name);
      return { name: t ? t.shortName : name, value, emoji: t?.emoji || "" };
    });

  return (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={110}
          dataKey="value"
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            background: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "0.5rem",
            fontSize: "12px",
          }}
          formatter={(value, name) => [name]}
        />
        <Legend
          formatter={(value, entry) => (
            <span style={{ fontSize: 12, color: "hsl(var(--foreground))" }}>
              {entry.payload.emoji} {value}
            </span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}