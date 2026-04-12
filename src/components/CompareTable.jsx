import { X, Leaf, BarChart2, Radar } from "lucide-react";
import { Link } from "react-router-dom";
import { getTerpeneByShortName } from "../lib/terpenesData";
import { useState } from "react";
import {
  RadarChart, Radar as ReRadar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Legend, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from "recharts";
import { getCbdDisplay, TERPENES_LIST } from "../lib/strainsData";

const CHART_COLORS = ["hsl(var(--primary))", "hsl(var(--chart-4))", "hsl(var(--chart-2))", "hsl(var(--chart-5))"];

export default function CompareTable({ strains, onRemove, onClose }) {
  const [chartType, setChartType] = useState("radar");
  if (strains.length === 0) return null;

  // All terpenes that appear in at least one selected strain
  const activeTerpenes = TERPENES_LIST.filter((t) =>
    strains.some((s) => s.terpenes[t] && s.terpenes[t] > 0)
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between py-3 border-b border-border">
          <span className="text-sm font-semibold text-foreground">
            Porównanie odmian ({strains.length}/4)
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chart */}
        <div className="py-4 border-b border-border">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-muted-foreground">Wizualizacja profilu terpenowego</span>
            <div className="flex gap-1">
              <button
                onClick={() => setChartType("radar")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                  chartType === "radar" ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <Radar className="w-3 h-3" /> Radar
              </button>
              <button
                onClick={() => setChartType("bar")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                  chartType === "bar" ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <BarChart2 className="w-3 h-3" /> Słupkowy
              </button>
            </div>
          </div>
          {(() => {
            const activeTerpenes = TERPENES_LIST.filter(t => strains.some(s => s.terpenes[t] > 0));
            const data = activeTerpenes.map(t => {
              const entry = { terpene: t.charAt(0).toUpperCase() + t.slice(1) };
              strains.forEach(s => { entry[s.name] = s.terpenes[t] || 0; });
              return entry;
            });
            if (chartType === "radar") return (
              <ResponsiveContainer width="100%" height={220}>
                <RadarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="terpene" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "0.5rem", fontSize: "12px" }} formatter={v => [`${v}%`]} />
                  {strains.map((s, i) => (
                    <ReRadar key={s.id} name={s.name} dataKey={s.name} stroke={CHART_COLORS[i]} fill={CHART_COLORS[i]} fillOpacity={0.2} strokeWidth={2} />
                  ))}
                  <Legend wrapperStyle={{ fontSize: "11px" }} />
                </RadarChart>
              </ResponsiveContainer>
            );
            return (
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={data} margin={{ top: 5, right: 10, bottom: 40, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="terpene" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} angle={-35} textAnchor="end" interval={0} />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} unit="%" />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "0.5rem", fontSize: "12px" }} formatter={v => [`${v}%`]} />
                  {strains.map((s, i) => (
                    <Bar key={s.id} name={s.name} dataKey={s.name} fill={CHART_COLORS[i]} radius={[3, 3, 0, 0]} />
                  ))}
                  <Legend wrapperStyle={{ fontSize: "11px" }} />
                </BarChart>
              </ResponsiveContainer>
            );
          })()}
        </div>

        {/* Table */}
        <div className="overflow-x-auto py-4">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <td className="pr-4 py-1 text-xs font-medium text-muted-foreground w-32 align-bottom pb-3">
                  Odmiana
                </td>
                {strains.map((s) => (
                  <td key={s.id} className="px-3 py-1 align-bottom pb-3 min-w-[140px]">
                    <div className="flex items-start justify-between gap-1">
                      <Link
                        to={`/odmiana/${s.id}`}
                        className="font-playfair font-semibold text-foreground hover:text-primary transition-colors text-sm leading-tight"
                      >
                        {s.name}
                      </Link>
                      <button
                        onClick={() => onRemove(s.id)}
                        className="text-muted-foreground hover:text-destructive flex-shrink-0 mt-0.5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-tight">{s.producer}</p>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* THC */}
              <tr className="border-t border-border">
                <td className="pr-4 py-2 text-xs text-muted-foreground font-medium">THC</td>
                {strains.map((s) => {
                  const maxThc = Math.max(...strains.map((x) => x.thc));
                  return (
                    <td key={s.id} className="px-3 py-2">
                      <span className={`font-semibold ${s.thc === maxThc ? "text-primary" : "text-foreground"}`}>
                        {s.thc}%
                      </span>
                    </td>
                  );
                })}
              </tr>
              {/* CBD */}
              <tr className="border-t border-border">
                <td className="pr-4 py-2 text-xs text-muted-foreground font-medium">CBD</td>
                {strains.map((s) => (
                  <td key={s.id} className="px-3 py-2 text-foreground">{getCbdDisplay(s)}</td>
                ))}
              </tr>
              {/* Genetics */}
              <tr className="border-t border-border">
                <td className="pr-4 py-2 text-xs text-muted-foreground font-medium">Genetyka</td>
                {strains.map((s) => (
                  <td key={s.id} className="px-3 py-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent text-xs font-medium text-accent-foreground">
                      <Leaf className="w-2.5 h-2.5" />
                      {s.genetics}
                    </span>
                  </td>
                ))}
              </tr>
              {/* Terpenes */}
              {TERPENES_LIST.filter(t => strains.some(s => (s.terpenes[t] || 0) > 0)).map((terpene) => {
                const terpeneData = getTerpeneByShortName(terpene);
                const values = strains.map((s) => s.terpenes[terpene] || 0);
                const maxVal = Math.max(...values);
                return (
                  <tr key={terpene} className="border-t border-border">
                    <td className="pr-4 py-2 text-xs font-medium">
                      {terpeneData ? (
                        <Link
                          to={`/terpeny/${terpeneData.id}`}
                          className="text-primary hover:underline capitalize"
                        >
                          {terpene}
                        </Link>
                      ) : (
                        <span className="text-muted-foreground capitalize">{terpene}</span>
                      )}
                    </td>
                    {strains.map((s) => {
                      const val = s.terpenes[terpene] || 0;
                      return (
                        <td key={s.id} className="px-3 py-2">
                          {val > 0 ? (
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden min-w-[60px]">
                                <div
                                  className="h-full bg-primary rounded-full"
                                  style={{ width: `${val}%`, opacity: val === maxVal ? 1 : 0.45 }}
                                />
                              </div>
                              <span className={`text-xs w-10 text-right ${val === maxVal && maxVal > 0 ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                                {Math.round(val)}%
                              </span>
                            </div>
                          ) : (
                            <span className="text-xs text-muted-foreground/40">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}