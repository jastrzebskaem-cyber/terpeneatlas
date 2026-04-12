import { X, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { TERPENES_LIST } from "../lib/strainsData";

export default function CompareTable({ strains, onRemove, onClose }) {
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
                  <td key={s.id} className="px-3 py-2 text-foreground">{s.cbd}%</td>
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
              {activeTerpenes.map((terpene) => {
                const values = strains.map((s) => s.terpenes[terpene] || 0);
                const maxVal = Math.max(...values);
                return (
                  <tr key={terpene} className="border-t border-border">
                    <td className="pr-4 py-2 text-xs text-muted-foreground font-medium capitalize">{terpene}</td>
                    {strains.map((s, i) => {
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