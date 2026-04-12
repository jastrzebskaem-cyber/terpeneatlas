import { getTerpeneByShortName } from "../lib/terpenesData";

const TERPENE_COLORS = {
  mircen: "bg-emerald-500",
  limonen: "bg-yellow-500",
  kariofilen: "bg-orange-500",
  terpinolen: "bg-teal-500",
  pinen: "bg-green-500",
  linalol: "bg-purple-500",
  humulen: "bg-amber-600",
  ocymen: "bg-lime-500",
  bisabolol: "bg-pink-400",
  nerolidol: "bg-rose-500",
  guaiol: "bg-cyan-500",
  farnezen: "bg-lime-400",
  selinadien: "bg-emerald-600"
};

export default function TerpeneBar({ name, value, maxValue = 100 }) {
  const terpene = getTerpeneByShortName(name);
  const displayName = terpene ? terpene.shortName : name;
  const percentage = (value / maxValue) * 100;
  const colorClass = TERPENE_COLORS[name] || "bg-primary";

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground w-20 truncate">{displayName}</span>
      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${colorClass}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-xs font-medium text-foreground w-10 text-right">{Math.round(value)}%</span>
    </div>
  );
}