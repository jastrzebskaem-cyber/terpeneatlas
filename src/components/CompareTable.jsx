import { X, Leaf, BarChart2, Radar, Zap, Wind, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import { getTerpeneByShortName } from "../lib/terpenesData";
import { useState } from "react";
import {
  RadarChart, Radar as ReRadar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Legend, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from "recharts";
import { getCbdDisplay, TERPENES_LIST } from "../lib/strainsData";

const CHART_COLORS = ["hsl(var(--primary))", "hsl(var(--chart-4))", "hsl(var(--chart-2))", "hsl(var(--chart-5))"];
const COLOR_HEX = ["#2d6a4f", "#e9c46a", "#2a9d8f", "#e76f51"];

const EFFECT_LABELS = {
  "Relaksujące": { label: "Relaksujące", color: "bg-blue-100 text-blue-700" },
  "Pobudzające": { label: "Pobudzające", color: "bg-amber-100 text-amber-700" },
  "Zrównoważone": { label: "Zrównoważone", color: "bg-green-100 text-green-700" },
};

const TABS = ["Kannabinoidy", "Terpeny", "Efekty & Aromaty"];

export default function CompareTable({ strains, onRemove, onClose }) {
  const [chartType, setChartType] = useState("radar");
  const [tab, setTab] = useState("Kannabinoidy");
  if (strains.length === 0) return null;

  const maxThc = Math.max(...strains.map(s => s.thc));

  const terpeneData = (() => {
    const active = TERPENES_LIST.filter(t => strains.some(s => s.terpenes[t] > 0));
    return active.map(t => {
      const entry = { terpene: t.charAt(0).toUpperCase() + t.slice(1) };
      strains.forEach(s => { entry[s.name] = s.terpenes[t] || 0; });
      return entry;
    });
  })();

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-card w-full sm:max-w-5xl sm:rounded-2xl border border-border shadow-2xl max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border flex-shrink-0">
          <span className="text-sm font-semibold text-foreground">
            Porównanie odmian ({strains.length}/4)
          </span>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Strain headers */}
        <div className="px-4 sm:px-6 py-3 border-b border-border flex-shrink-0 overflow-x-auto">
          <div className="flex gap-3 min-w-max">
            <div className="w-28 flex-shrink-0" />
            {strains.map((s, i) => (
              <div key={s.id} className="min-w-[160px] flex items-start justify-between gap-1">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: COLOR_HEX[i] }} />
                    <Link to={`/odmiana/${s.id}`} className="font-playfair font-semibold text-sm text-foreground hover:text-primary transition-colors leading-tight">
                      {s.name}
                    </Link>
                  </div>
                  <p className="text-xs text-muted-foreground pl-4">{s.producer}</p>
                </div>
                <button onClick={() => onRemove(s.id)} className="text-muted-foreground hover:text-destructive flex-shrink-0 mt-0.5 p-0.5">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 px-4 sm:px-6 pt-3 flex-shrink-0">
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                tab === t ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-4 sm:px-6 py-4">

          {/* TAB: Kannabinoidy */}
          {tab === "Kannabinoidy" && (
            <div className="space-y-6">
              {/* THC visual bars */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">THC (%)</p>
                <div className="space-y-3">
                  {strains.map((s, i) => (
                    <div key={s.id} className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground w-28 truncate flex-shrink-0">{s.name}</span>
                      <div className="flex-1 bg-muted rounded-full h-5 overflow-hidden">
                        <div
                          className="h-full rounded-full flex items-center justify-end pr-2 transition-all"
                          style={{ width: `${(s.thc / 35) * 100}%`, background: COLOR_HEX[i] }}
                        >
                          <span className="text-[10px] font-bold text-white">{s.thc}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CBD */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">CBD</p>
                <div className="flex flex-wrap gap-3">
                  {strains.map((s, i) => (
                    <div key={s.id} className="flex items-center gap-2 bg-accent/50 rounded-xl px-3 py-2">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: COLOR_HEX[i] }} />
                      <span className="text-xs text-muted-foreground truncate max-w-[100px]">{s.name}</span>
                      <span className="text-sm font-semibold text-foreground">{getCbdDisplay(s)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* THC vs CBD ratio table */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Stosunek THC:CBD</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left text-xs text-muted-foreground font-medium pb-2 pr-4 w-28">Odmiana</th>
                        <th className="text-left text-xs text-muted-foreground font-medium pb-2 px-3">THC</th>
                        <th className="text-left text-xs text-muted-foreground font-medium pb-2 px-3">CBD</th>
                        <th className="text-left text-xs text-muted-foreground font-medium pb-2 px-3">Profil</th>
                      </tr>
                    </thead>
                    <tbody>
                      {strains.map((s, i) => {
                        const profile = s.thc >= 20 ? "Wysokie THC" : s.thc >= 15 ? "Średnie THC" : "Niskie THC";
                        const profileColor = s.thc >= 20 ? "bg-red-50 text-red-700" : s.thc >= 15 ? "bg-amber-50 text-amber-700" : "bg-green-50 text-green-700";
                        return (
                          <tr key={s.id} className="border-t border-border">
                            <td className="pr-4 py-2">
                              <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: COLOR_HEX[i] }} />
                                <span className="text-xs text-foreground truncate max-w-[90px]">{s.name}</span>
                              </div>
                            </td>
                            <td className="px-3 py-2">
                              <span className={`font-semibold text-sm ${s.thc === maxThc ? "text-primary" : "text-foreground"}`}>{s.thc}%</span>
                            </td>
                            <td className="px-3 py-2 text-sm text-foreground">{getCbdDisplay(s)}</td>
                            <td className="px-3 py-2">
                              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${profileColor}`}>{profile}</span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB: Terpeny */}
          {tab === "Terpeny" && (
            <div>
              {/* Chart type toggle */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Wizualizacja</p>
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

              {/* Chart */}
              {chartType === "radar" ? (
                <ResponsiveContainer width="100%" height={240}>
                  <RadarChart data={terpeneData} margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="terpene" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                    <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "0.5rem", fontSize: "12px" }} formatter={v => [`${v}%`]} />
                    {strains.map((s, i) => (
                      <ReRadar key={s.id} name={s.name} dataKey={s.name} stroke={CHART_COLORS[i]} fill={CHART_COLORS[i]} fillOpacity={0.2} strokeWidth={2} />
                    ))}
                    <Legend wrapperStyle={{ fontSize: "11px" }} />
                  </RadarChart>
                </ResponsiveContainer>
              ) : (
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={terpeneData} margin={{ top: 5, right: 10, bottom: 45, left: 0 }}>
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
              )}

              {/* Terpene table */}
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left text-xs text-muted-foreground font-medium pb-2 pr-4 w-28">Terpen</th>
                      {strains.map((s, i) => (
                        <th key={s.id} className="text-left text-xs font-medium pb-2 px-3 min-w-[130px]">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full" style={{ background: COLOR_HEX[i] }} />
                            <span className="truncate max-w-[100px] text-foreground">{s.name}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TERPENES_LIST.filter(t => strains.some(s => (s.terpenes[t] || 0) > 0)).map((terpene) => {
                      const tData = getTerpeneByShortName(terpene);
                      const values = strains.map(s => s.terpenes[terpene] || 0);
                      const maxVal = Math.max(...values);
                      return (
                        <tr key={terpene} className="border-t border-border">
                          <td className="pr-4 py-2 text-xs font-medium">
                            {tData ? (
                              <Link to={`/terpeny/${tData.id}`} className="text-primary hover:underline capitalize flex items-center gap-1">
                                <span>{tData.emoji}</span> {terpene}
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
                                    <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden min-w-[50px]">
                                      <div className="h-full bg-primary rounded-full" style={{ width: `${val}%`, opacity: val === maxVal ? 1 : 0.4 }} />
                                    </div>
                                    <span className={`text-xs w-9 text-right ${val === maxVal && maxVal > 0 ? "text-primary font-semibold" : "text-muted-foreground"}`}>
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
          )}

          {/* TAB: Efekty & Aromaty */}
          {tab === "Efekty & Aromaty" && (
            <div className="space-y-6">
              {/* Efekt działania */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Efekt działania
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr>
                        <td className="pr-4 py-2 text-xs text-muted-foreground font-medium w-28">Efekt</td>
                        {strains.map((s) => {
                          const cfg = EFFECT_LABELS[s.effect] || { label: s.effect, color: "bg-accent text-accent-foreground" };
                          return (
                            <td key={s.id} className="px-3 py-2 min-w-[140px]">
                              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${cfg.color}`}>{cfg.label}</span>
                            </td>
                          );
                        })}
                      </tr>
                      <tr className="border-t border-border">
                        <td className="pr-4 py-2 text-xs text-muted-foreground font-medium">Genetyka</td>
                        {strains.map((s) => (
                          <td key={s.id} className="px-3 py-2">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent text-xs font-medium text-accent-foreground">
                              <Leaf className="w-2.5 h-2.5" /> {s.genetics}
                            </span>
                          </td>
                        ))}
                      </tr>
                      <tr className="border-t border-border">
                        <td className="pr-4 py-2 text-xs text-muted-foreground font-medium align-top pt-3">Dominujący terpen</td>
                        {strains.map((s) => {
                          const tData = getTerpeneByShortName(s.dominantTerpene);
                          return (
                            <td key={s.id} className="px-3 py-2 align-top pt-3">
                              {tData ? (
                                <Link to={`/terpeny/${tData.id}`} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground text-accent-foreground text-xs font-medium transition-all">
                                  <span>{tData.emoji}</span> {tData.shortName}
                                </Link>
                              ) : (
                                <span className="text-xs text-muted-foreground">{s.dominantTerpene || "—"}</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Aromaty */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5" /> Aromaty
                </p>
                <div className="overflow-x-auto">
                  <div className="flex gap-4 min-w-max">
                    {strains.map((s, i) => (
                      <div key={s.id} className="min-w-[160px]">
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: COLOR_HEX[i] }} />
                          <span className="text-xs font-medium text-foreground truncate max-w-[130px]">{s.name}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {s.aromas.map(a => (
                            <span key={a} className="px-2 py-0.5 rounded-full bg-accent text-[10px] font-medium text-accent-foreground">{a}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Opis */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <FlaskConical className="w-3.5 h-3.5" /> Charakterystyka
                </p>
                <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${strains.length}, minmax(160px, 1fr))` }}>
                  {strains.map((s, i) => (
                    <div key={s.id} className="bg-accent/40 rounded-xl p-3">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: COLOR_HEX[i] }} />
                        <span className="text-xs font-semibold text-foreground truncate">{s.name}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}