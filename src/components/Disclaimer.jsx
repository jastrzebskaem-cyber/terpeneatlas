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

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
            <p className="text-amber-900 font-medium mb-2">
              Podejrzewasz u siebie uzależnienie od marihuany?
            </p>
            <p className="text-amber-800">
              Jeśli podejrzewasz u siebie uzależnienie, zgłoś się do:
            </p>
            <ul className="mt-2 space-y-2 text-amber-800">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">•</span>
                <span>
                  <strong>Poradni Leczenia Uzależnień</strong> — skierowanie nie jest w Polsce potrzebne, terminy wizyt można sprawdzić na stronie:{" "}
                  <a
                    href="https://swiatprzychodni.pl/swiadczenia/leczenie-uzaleznien/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-medium inline-flex items-center gap-1 hover:text-amber-900 transition-colors"
                  >
                    swiatprzychodni.pl
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">•</span>
                <span>Swojego <strong>Lekarza Podstawowej Opieki Zdrowotnej</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">•</span>
                <span><strong>Izby Przyjęć</strong> najbliższego Szpitala Psychiatrycznego</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground text-center">
          <p>Dane o odmianach pochodzą z publicznie dostępnych źródeł. Strona nie jest powiązana z żadnym producentem ani dystrybutorem.</p>
          <p className="mt-1">TerpenMap © {new Date().getFullYear()} — Wyłącznie charakter informacyjny</p>
        </div>
      </div>
    </footer>
  );
}