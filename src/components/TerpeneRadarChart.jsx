import { useState, useMemo } from "react";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Legend, Tooltip
} from "recharts";
import { STRAINS, TERPENES_LIST } from "../lib/strainsData";
import { GitCompare, X } from "lucide-react";

const TERPENE_LABELS = {
  mircen: "Mircen",
  limonen: "Limonen",
  kariofilen: "Kariofilen",
  terpinolen: "Terpinolen",
  pinen: "Pinen",
  linalol: "Linalol",
  humulen: "Humulen",
  ocymen: "Ocymen",
  bisabolol: "Bisabolol",
  nerolidol: "Nerolidol",
  guaiol: "Guaiol",
  farnezen: "Farnezen",
  selinadien: "Selinadien",
};

export default function TerpeneRadarChart({ strain }) {
  const [compareId, setCompareId] = useState("");
  const compareStrain = STRAINS.find((s) => s.id === compareId) || null;

  // Only show terpenes that have a value in either strain
  const activeTerpenes = useMemo(() => {
    return TERPENES_LIST.filter(
      (t) => (strain.terpenes[t] || 0) > 0 || (compareStrain?.terpenes[t] || 0) > 0
    );
  }, [strain, compareStrain]);

  const data = activeTerpenes.map((t) => ({
    terpene: TERPENE_LABELS[t] || t,
    [strain.name]: strain.terpenes[t] || 0,
    ...(compareStrain ? { [compareStrain.name]: compareStrain.terpenes[t] || 0 } : {}),
  }));

  const otherStrains = STRAINS.filter((s) => s.id !== strain.id);

  return (
    <div>
      {/* Compare selector */}
      <div className="flex items-center gap-3 mb-6">
        <GitCompare className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        {compareStrain ? (
          <div className="flex items-center gap-2">
            <span className="text-sm text-foreground font-medium">
              Porównujesz z: <span className="text-primary">{compareStrain.name}</span>
            </span>
            <button
              onClick={() => setCompareId("")}
              className="p-1 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <select
            value={compareId}
            onChange={(e) => setCompareId(e.target.value)}
            className="text-sm px-3 py-1.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          >
            <option value="">Porównaj z inną odmianą...</option>
            {otherStrains.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.producer})
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={320}>
        <RadarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis
            dataKey="terpene"
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
          />
          <Tooltip
            contentStyle={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.5rem",
              fontSize: "12px",
            }}
            formatter={(value) => [`${value}%`]}
          />
          <Radar
            name={strain.name}
            dataKey={strain.name}
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.25}
            strokeWidth={2}
          />
          {compareStrain && (
            <Radar
              name={compareStrain.name}
              dataKey={compareStrain.name}
              stroke="hsl(var(--chart-4))"
              fill="hsl(var(--chart-4))"
              fillOpacity={0.2}
              strokeWidth={2}
            />
          )}
          {compareStrain && <Legend wrapperStyle={{ fontSize: "12px" }} />}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}