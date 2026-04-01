import { CircleCheck, CircleMinus, CircleX, CircleOff } from "lucide-react";

const config = {
  Wysoka: {
    label: "Dostępna",
    icon: CircleCheck,
    className: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  Niska: {
    label: "Niska dostępność",
    icon: CircleMinus,
    className: "bg-amber-50 text-amber-700 border-amber-200"
  },
  Brak: {
    label: "Niedostępna",
    icon: CircleX,
    className: "bg-red-50 text-red-700 border-red-200"
  },
  Wycofana: {
    label: "Wycofana",
    icon: CircleOff,
    className: "bg-slate-50 text-slate-500 border-slate-200"
  }
};

export default function AvailabilityBadge({ availability }) {
  const c = config[availability] || config.Brak;
  const Icon = c.icon;

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium border ${c.className}`}>
      <Icon className="w-3 h-3" />
      {c.label}
    </span>
  );
}