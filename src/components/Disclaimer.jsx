import { AlertTriangle, ExternalLink } from "lucide-react";

export default function Disclaimer() {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex items-start gap-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <h3 className="font-playfair font-semibold text-lg text-foreground">
            Ważne informacje prawne i medyczne
          </h3>
        </div>

        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Niniejsza strona ma wyłącznie charakter informacyjny</strong> i nie ma na celu propagowania jakiejkolwiek formy farmakoterapii.
          </p>

          <p>
            Każdorazowa decyzja o włączeniu terapii fragmentami roślin <em>Cannabis sativa</em> L., tzw. medyczną marihuaną, powinna być podjęta przez <strong className="text-foreground">Lekarza posiadającego wiedzę i doświadczenie w tym zakresie</strong> i powinna być poprzedzona konsultacją medyczną, zapoznaniem się z historią choroby, przeprowadzeniem badania przed- i podmiotowego Pacjenta oraz określeniem ryzyka uzależnienia i wykluczeniem ewentualnych przeciwwskazań do takiej formy terapii.
          </p>

          <p>
            <strong className="text-foreground">Marihuana, niezależnie czy pochodzenia czarnorynkowego czy taka zakupiona w aptece, jest narkotykiem i ma potencjał uzależniający</strong>, a jej używanie wiąże się z ryzykiem pojawienia się skutków ubocznych.
          </p>

        </div>

        <div className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground text-center">
          <p>Dane o odmianach pochodzą z publicznie dostępnych źródeł. Strona nie jest powiązana z żadnym producentem ani dystrybutorem. Autorką i właścicielką strony jest Indywidualna Praktyka Lekarska Ewa Jastrzębska</p>
          <p className="mt-1">Strona TerpenMap © {new Date().getFullYear()} ma wyłącznie charakter informacyjny.</p>
        </div>
      </div>
    </footer>
  );
}