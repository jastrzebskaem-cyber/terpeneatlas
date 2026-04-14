import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";

const sections = [
  {
    id: "wstep",
    title: "Dlaczego Terpeny Mają Znaczenie",
    content: [
      "Badania naukowe coraz wyraźniej pokazują, że terpeny nie tylko wpływają na aromat i smak, ale przede wszystkim modulują działanie kannabinoidów, wzmacniając ich efekty terapeutyczne i redukując potencjalne działania niepożądane.",
      "Wybór odmiany medycznej marihuany wyłącznie na podstawie zawartości THC i CBD to jak kupowanie perfum tylko po procentowej zawartości alkoholu – pomijasz najważniejsze składniki, które decydują o rzeczywistym działaniu produktu. Dwie odmiany o identycznej zawartości 20% THC mogą działać zupełnie inaczej w zależności od profilu terpenowego: jedna może być silnie relaksująca i nasenna, druga – pobudzająca i stymulująca kreatywność.",
    ],
    bullets: [],
    outro: "Wiedza o terpenach pozwoli Ci świadomie współpracować z lekarzem i optymalizować terapię kannabinoidową, osiągając lepsze efekty przy mniejszej liczbie działań niepożądanych.",
  },
  {
    id: "czym-sa-terpeny",
    title: "2. Czym Są Terpeny i Jak Działają",
    subsections: [
      {
        heading: "Podstawy Chemii Terpenów",
        paragraphs: [
          "Terpeny (lub terpenoidy, gdy zawierają dodatkowe grupy funkcyjne) to lotne związki produkowane przez wiele roślin, w tym konopie indyjskie. Konopie wytwarzają ponad 200 różnych terpenów, choć zazwyczaj tylko kilka z nich występuje w znaczących stężeniach.",
          "Terpeny są odpowiedzialne za charakterystyczne aromaty roślin – od cytrusowego zapachu limonenu (obecnego w skórkach pomarańczy i cytryn), przez ziemisty aromat mircenu (występujący w chmielu i mangostanie), po korzenny zapach kariofilenu (znany z czarnego pieprzu). W naturze terpeny pełnią funkcje ochronne – odstraszają szkodniki, przyciągają zapylacze i chronią rośliny przed stresem środowiskowym.",
        ],
      },
      {
        heading: "Mechanizmy Działania Terpenów",
        intro: "W organizmie człowieka terpeny działają poprzez kilka mechanizmów:",
        numbered: [
          {
            title: "Interakcja z receptorami kannabinoidowymi",
            text: "Niektóre terpeny, szczególnie beta-kariofilen, bezpośrednio aktywują receptory kannabinoidowe (głównie CB2), działając jako kannabimimetyki – substancje naśladujące działanie kannabinoidów. Inne terpeny modulują aktywność receptorów CB1 i CB2, wzmacniając lub modyfikując działanie THC i CBD.",
          },
          {
            title: "Modulacja innych receptorów i kanałów jonowych",
            text: "Terpeny oddziałują z wieloma innymi celami molekularnymi, w tym: receptorami TRPV1 (waniloidowymi) – zaangażowanymi w percepcję bólu i temperatury, receptorami serotoninowymi (5-HT) – wpływającymi na nastrój i lęk, receptorami GABA – głównym układem hamującym w mózgu, kanałami jonowymi – wpływającymi na pobudliwość neuronów.",
          },
          {
            title: "Działanie przeciwzapalne i antyoksydacyjne",
            text: "Wiele terpenów wykazuje silne właściwości przeciwzapalne poprzez hamowanie produkcji cytokin prozapalnych i modulację szlaków sygnałowych związanych z zapaleniem. Działanie antyoksydacyjne chroni komórki przed stresem oksydacyjnym.",
          },
          {
            title: "Wpływ na przepuszczalność bariery krew-mózg",
            text: "Niektóre terpeny mogą zwiększać przepuszczalność bariery krew-mózg, ułatwiając przenikanie kannabinoidów do ośrodkowego układu nerwowego i potencjalnie zwiększając ich skuteczność.",
          },
        ],
      },
      {
        heading: "Farmakokinetyka Terpenów",
        intro: "Terpeny są związkami wysoce lotnymi i lipofobowymi, co oznacza, że:",
        bullets: [
          "Szybko się ulatniają – dlatego świeżość produktu i odpowiednie przechowywanie są kluczowe",
          "Łatwo przenikają przez błony komórkowe – szybko wchłaniają się i docierają do tkanek docelowych",
          "Mają krótki okres półtrwania – ich działanie jest stosunkowo szybkie, ale też krótkotrwałe w porównaniu z kannabinoidami",
        ],
        outro: "Przy inhalacji (waporyzacji) terpeny wchłaniają się niemal natychmiast przez płuca i szybko docierają do mózgu. Przy podaniu doustnym część terpenów może ulec degradacji w przewodzie pokarmowym, choć niektóre zachowują aktywność.",
      },
      {
        heading: "Stężenia Terpenów w Medycznych Konopiach",
        paragraphs: [
          "W typowych odmianach medycznych konopi całkowite stężenie terpenów wynosi zazwyczaj 1-3% suchej masy, choć niektóre odmiany mogą zawierać nawet 5-7%. Dla porównania, THC występuje zazwyczaj w stężeniach 15-30%. Mimo znacznie niższych stężeń, terpeny wywierają istotny wpływ na działanie produktu poprzez mechanizmy synergiczne.",
        ],
        bullets: [
          "Mircen – często dominujący terpen w odmianach indica",
          "Limonen – powszechny w odmianach o cytrusowym aromacie",
          "Kariofilen – obecny w większości odmian, jedyny terpen aktywujący CB2",
          "Pinen – nadający sosnowy aromat",
          "Linalol – odpowiedzialny za kwiatowy, lawendowy zapach",
          "Terpinolen – charakterystyczny dla wielu odmian sativa",
        ],
        intro: "Najważniejsze terpeny w medycznych konopiach to:",
      },
    ],
  },
  {
    id: "efekt-anturazu",
    title: "3. Efekt Anturażu (Entourage Effect)",
    subsections: [
      {
        heading: "Czym Jest Efekt Anturażu?",
        paragraphs: [
          "Efekt anturażu (z francuskiego \"entourage\" – otoczenie, świta) to koncepcja, według której kannabinoidy, terpeny i inne fitochemikalia w konopiach działają synergicznie, wywołując efekt terapeutyczny większy niż suma działań poszczególnych składników.",
          "Innymi słowy: całość jest większa niż suma części. Izolowany THC lub CBD nie działa tak samo jak pełnospektrowy ekstrakt zawierający te same stężenia kannabinoidów wraz z terpenami i innymi składnikami roślinnymi.",
        ],
      },
      {
        heading: "Naukowe Podstawy Efektu Anturażu",
        intro: "Badania naukowe dostarczają coraz więcej dowodów na istnienie efektu anturażu:",
        numbered: [
          {
            title: "Terpeny jako kannabimimetyki",
            text: "Badania LaVigne i współpracowników (2021) wykazały, że niektóre terpeny kannabisowe bezpośrednio aktywują receptory kannabinoidowe CB1 in vitro, działając jako kannabimimetyki. Szczególnie alfa-humulen, geraniol i beta-farnesen wykazały aktywność wobec CB1, podczas gdy beta-kariofilen selektywnie aktywuje CB2.",
          },
          {
            title: "Synergiczne działanie terpenów i THC",
            text: "Badania Raz i współpracowników (2023) wykazały, że wybrane terpeny kannabisowe (alfa-humulen, geraniol, beta-kariofilen) synergicznie zwiększają aktywację receptora CB1 przez THC. Efekt ten był większy niż suma działań poszczególnych składników, co potwierdza koncepcję efektu anturażu.",
          },
          {
            title: "Modulacja farmakokinetyki kannabinoidów",
            text: "Niektóre terpeny, szczególnie mircen, mogą zwiększać przepuszczalność bariery krew-mózg, ułatwiając przenikanie kannabinoidów do ośrodkowego układu nerwowego i potencjalnie zwiększając ich skuteczność.",
          },
          {
            title: "Działanie na różne cele molekularne",
            text: "Podczas gdy kannabinoidy działają głównie poprzez receptory CB1 i CB2, terpeny oddziałują z wieloma innymi celami molekularnymi (TRPV1, receptory serotoninowe, GABA, kanały jonowe), co prowadzi do złożonych interakcji i modulacji efektów terapeutycznych.",
          },
          {
            title: "Redukcja działań niepożądanych",
            text: "Niektóre terpeny mogą redukować działania niepożądane THC. Na przykład, pinen może częściowo przeciwdziałać upośledzeniu pamięci krótkotrwałej wywołanemu przez THC, podczas gdy CBD i niektóre terpeny mogą łagodzić lęk i paranoidę indukowane przez wysokie dawki THC.",
          },
        ],
      },
      {
        heading: "Praktyczne Implikacje Efektu Anturażu",
        intro: "Dla pacjentów efekt anturażu oznacza, że:",
        numbered: [
          { title: "Profil terpenowy ma znaczenie", text: "Dwie odmiany o identycznej zawartości THC i CBD mogą działać zupełnie inaczej w zależności od profilu terpenowego. Wybór odmiany powinien uwzględniać nie tylko kannabinoidy, ale również terpeny." },
          { title: "Pełnospektrowe ekstrakty mogą być skuteczniejsze", text: "Pełnospektrowe ekstrakty zawierające wszystkie kannabinoidy i terpeny mogą być bardziej skuteczne terapeutycznie niż izolaty lub destylaty pozbawione terpenów." },
          { title: "Niższe dawki mogą być wystarczające", text: "Dzięki efektowi anturażu pacjenci mogą osiągać pożądane efekty terapeutyczne przy niższych dawkach kannabinoidów, co redukuje ryzyko działań niepożądanych i koszty terapii." },
          { title: "Indywidualizacja terapii jest kluczowa", text: "Każdy pacjent może reagować inaczej na różne profile terpenowe. Prowadzenie dziennika pacjenta i regularne konsultowanie efektów terapii z Lekarzem pozwala zmaksymalizować efekty terapii." },
        ],
      },
      {
        heading: "Ograniczenia i Kontrowersje",
        paragraphs: [
          "Warto zauważyć, że koncepcja efektu anturażu, choć poparta wieloma badaniami przedklinicznymi, wymaga jeszcze więcej badań klinicznych na ludziach. Niektóre badania wykazały sprzeczne wyniki, a mechanizmy molekularne nie są w pełni poznane. Niemniej jednak, rosnąca liczba dowodów naukowych i doświadczenia kliniczne pacjentów wspierają znaczenie profili terpenowych w terapii kannabinoidowej.",
        ],
      },
    ],
  },
  {
    id: "jak-czytac",
    title: "4. Jak Czytać Profil Terpenowy na Etykiecie",
    subsections: [
      {
        heading: "Podstawowe Informacje na Etykiecie",
        intro: "Etykiety medycznych konopi dostępnych w Polsce zazwyczaj zawierają następujące informacje:",
        numbered: [
          { title: "Nazwa odmiany i producent", text: "Np. \"COSMA Gorilla Girl\", \"Spectrum Therapeutics Red No. 2\"" },
          { title: "Typ odmiany", text: "Indica – zazwyczaj działanie relaksujące, sedatywne; Sativa – zazwyczaj działanie pobudzające, stymulujące; Hybryda – mieszanka cech indica i sativa." },
          { title: "Zawartość kannabinoidów", text: "THC (%) – procentowe stężenie tetrahydrokannabinolu; CBD (%) – procentowe stężenie kannabidiolu" },
          { title: "Profil terpenowy", text: "Lista głównych terpenów, zazwyczaj w kolejności od najwyższego do najniższego stężenia. Niektóre etykiety podają również procentową zawartość poszczególnych terpenów." },
          { title: "Aromat i smak", text: "Opis dominujących nut aromatycznych (cytrusowy, ziemisty, korzenny, kwiatowy, itp.)" },
        ],
      },
      {
        heading: "Jak Interpretować Profil Terpenowy",
        steps: [
          {
            step: "Krok 1: Zidentyfikuj dominujący terpen",
            text: "Pierwszy terpen na liście jest zazwyczaj dominującym składnikiem profilu terpenowego i ma największy wpływ na działanie odmiany.",
            examples: [
              "Cosma Mac Monkey: Limonen, Pinen, Kariofilen, Mircen, Linalol, Bisabolol, Terpinolen → Dominujący terpen: Limonen → działanie relaksujące, łagodzące ból",
              "Aurora Ghost Train Haze: Terpinolen, Mircen, Limonen, Pinen, Ocymen, Linalol → Dominujący terpen: Terpinolen → działanie uspokajające mimo charakteru sativa",
            ],
          },
          {
            step: "Krok 2: Oceń synergię terpenów",
            text: "Spójrz na całą listę terpenów i oceń, jak mogą działać synergicznie:",
            examples: [
              "Profil relaksujący/nasenny: Mircen + Linalol + Nerolidol = silne działanie sedatywne i nasenne.",
              "Profil przeciwzapalny/przeciwbólowy: Kariofilen + Humulen + Mircen = silne działanie przeciwzapalne i analgetyczne.",
              "Profil pobudzający/poprawiający nastrój: Limonen + Pinen + Terpinolen = działanie pobudzające, przeciwlękowe, poprawiające koncentrację.",
            ],
          },
          {
            step: "Krok 3: Uwzględnij stosunek THC do CBD",
            text: "Profil terpenowy działa w synergii z kannabinoidami:",
            examples: [
              "Wysoki THC (>20%) + terpeny sedatywne (mircen, linalol) = silne działanie relaksujące, nasenne, przeciwbólowe",
              "Wysoki THC + terpeny pobudzające (limonen, pinen) = działanie euforyzujące, kreatywne, energetyzujące",
              "Wysoki CBD, niski THC + terpeny przeciwzapalne (kariofilen, humulen) = działanie przeciwzapalne, przeciwlękowe bez efektów psychoaktywnych",
            ],
          },
          {
            step: "Krok 4: Zwróć uwagę na aromat",
            text: "Aromat jest dobrym wskaźnikiem profilu terpenowego:",
            examples: [
              "Cytrusowy → prawdopodobnie wysoka zawartość limonenu",
              "Ziemisty, piżmowy → prawdopodobnie wysoka zawartość mircenu",
              "Korzenny, pieprzny → prawdopodobnie wysoka zawartość kariofilenu",
              "Sosnowy → prawdopodobnie wysoka zawartość pinenu",
              "Kwiatowy, lawendowy → prawdopodobnie wysoka zawartość linalolu",
            ],
          },
        ],
      },
      {
        heading: "Przykład Praktyczny: Analiza Etykiety",
        example: {
          name: "Aurora Black Jelly",
          type: "Sativa",
          thc: "27%",
          cbd: "<1%",
          terpenes: "Limonen, Kariofilen, Mircen, Humulen, Pinen, Linalol",
          aroma: "Lukrecjowy, Owocowy, Słodki",
          interpretation: [
            "Dominujący terpen: Limonen → działanie pobudzające, przeciwlękowe, poprawiające nastrój",
            "Synergiczne terpeny: Kariofilen + Humulen → silne działanie przeciwzapalne",
            "Obecność mircenu: Mimo charakteru sativa, mircen może łagodzić nadmierne pobudzenie",
            "Wysoki THC (27%): Silne działanie psychoaktywne, odpowiednie dla doświadczonych pacjentów",
          ],
          conclusion: "Odmiana odpowiednia dla pacjentów z m.in. zaburzeniami depresyjnymi, lękowymi, dolegliwościami bólowymi.",
        },
      },
      {
        heading: "Częste Błędy w Interpretacji",
        mistakes: [
          { title: "Skupianie się tylko na typie odmiany (indica/sativa)", text: "Typ odmiany to uproszczenie. Profil terpenowy ma równie duże znaczenie dla działania jak i klasyfikacja botaniczna." },
          { title: "Ignorowanie terpenów poza pierwszym", text: "Wszystkie terpeny w profilu przyczyniają się do efektu anturażu. Nawet terpeny występujące w niższych stężeniach mogą znacząco modulować działanie." },
          { title: "Zakładanie, że wyższe THC = lepsze działanie", text: "Wyższe stężenie THC nie zawsze oznacza lepsze efekty terapeutyczne. Dzięki efektowi anturażu, odmiana z 18% THC i bogatym profilem terpenowym może być skuteczniejsza niż odmiana z 27% THC i ubogim profilem." },
          { title: "Nieuwzględnianie indywidualnej reakcji", text: "Każdy pacjent reaguje inaczej na różne profile terpenowe. To, co działa dla jednej osoby, może nie działać dla innej. Prowadzenie dziennika pacjenta jest tutaj kluczowe dla skutecznej terapii konopnej." },
        ],
      },
    ],
  },
  {
    id: "schorzenia",
    title: "5. Praktyczne Wskazówki Doboru Odmiany do Konkretnych Schorzeń",
    conditions: [
      {
        name: "Ból Przewlekły i Zapalny",
        mechanism: "Kannabinoidy i terpeny działają przeciwbólowo poprzez aktywację receptorów CB1 i CB2, modulację szlaków bólowych, redukcję zapalenia i wpływ na percepcję bólu.",
        terpenes: [
          "Mircen – silne działanie analgetyczne i przeciwzapalne",
          "Kariofilen – aktywacja CB2, silne działanie przeciwzapalne i przeciwbólowe",
          "Humulen – właściwości przeciwzapalne i analgetyczne",
          "Linalol – działanie przeciwbólowe i znieczulające",
        ],
      },
      {
        name: "Bezsenność i Zaburzenia Snu",
        mechanism: "Kannabinoidy i terpeny wpływają na sen poprzez modulację układu endokannabinoidowego, receptorów GABA, serotoniny i melatoniny.",
        terpenes: [
          "Mircen – silne działanie sedatywne i miorelaksacyjne",
          "Linalol – właściwości uspokajające i nasenne",
          "Nerolidol – działanie sedatywne",
          "Bisabolol – łagodne działanie uspokajające",
        ],
      },
      {
        name: "Lęk i Zaburzenia Lękowe",
        mechanism: "Kannabinoidy i terpeny działają przeciwlękowo poprzez modulację receptorów serotoninowych, GABA, układu endokannabinoidowego i osi HPA.",
        terpenes: [
          "Limonen – silne działanie anksjolityczne i antydepresyjne",
          "Linalol – właściwości uspokajające i przeciwlękowe",
          "Kariofilen – działanie przeciwlękowe poprzez receptory CB2",
          "Pinen – efekt przeciwlękowy bez sedacji",
          "Bisabolol – łagodne działanie uspokajające",
        ],
      },
      {
        name: "Depresja i Zaburzenia Nastroju",
        mechanism: "Kannabinoidy i terpeny wpływają na nastrój poprzez modulację układu serotoninergicznego, dopaminergicznego i endokannabinoidowego.",
        terpenes: [
          "Limonen – silne działanie antydepresyjne i euforyzujące",
          "Linalol – właściwości antydepresyjne",
          "Pinen – poprawia nastrój i koncentrację",
          "Kariofilen – działanie antydepresyjne poprzez CB2",
        ],
      },
      {
        name: "ADHD i Problemy z Koncentracją",
        mechanism: "Kannabinoidy mogą wpływać na ADHD poprzez modulację układu dopaminergicznego i endokannabinoidowego, poprawiając koncentrację i redukując impulsywność.",
        terpenes: [
          "Pinen – poprawia pamięć i koncentrację",
          "Limonen – poprawia funkcje poznawcze i nastrój",
          "Terpinolen – może redukować impulsywność",
          "Kariofilen – działanie przeciwzapalne (ADHD może mieć komponent zapalny)",
        ],
      },
      {
        name: "Migrena i Bóle Głowy",
        mechanism: "Kannabinoidy i terpeny mogą łagodzić migrenę poprzez modulację układu endokannabinoidowego, redukcję zapalenia neurogennego, działanie przeciwbólowe i przeciwwymiotne.",
        terpenes: [
          "Mircen – działanie przeciwbólowe i przeciwzapalne",
          "Kariofilen – silne działanie przeciwzapalne",
          "Linalol – właściwości przeciwbólowe i uspokajające",
          "Limonen – działanie przeciwwymiotne i przeciwzapalne",
        ],
      },
    ],
  },
];

const bibliography = [
  "[1] Mnekin, A., et al. (2021). Topical Use of Cannabis sativa L. Biochemicals. Cosmetics, 8(3), 85.",
  "[2] André, C. M., et al. (2024). The Entourage Effect in Cannabis Medicinal Products: A Comprehensive Review. Pharmaceuticals, 17(11), 1543.",
  "[3] Al-Khazaleh, A. K., et al. (2024). The Neurotherapeutic Arsenal in Cannabis sativa. Molecules, 29(2), 410.",
  "[4] Popescu-Spineni, D., et al. (2021). Cannabis Terpenes in Relation to Human Health. Revista de Chimie, 66(7).",
  "[6] Liktor-Busa, E., et al. (2021). Analgesic Potential of Terpenes Derived from Cannabis sativa. Pharmacological Reviews, 73(4), 1269-1297.",
  "[7] Wagner, E. M., et al. (2024). Sex Differences in the Anxiolytic Properties of Common Cannabis Terpenes. NeuroSci, 5(4), 45.",
  "[8] Weston-Green, K., et al. (2021). A Review of the Potential Use of Pinene and Linalool. Frontiers in Psychiatry, 12, 583211.",
  "[9] LaVigne, J. E., et al. (2021). Cannabis sativa terpenes are cannabimimetic. Scientific Reports, 11, 8232.",
  "[11] El-Hammadi, M., et al. (2025). Effects of combined CBGA and cannabis-derived terpene nanoformulations on TRPV1 activation. International Journal of Pharmaceutics, 125766.",
  "[12] Baron, E. P. (2018). Medicinal properties of cannabinoids, terpenes, and flavonoids in cannabis. Headache, 58(7), 1139-1186.",
  "[13] Russo, E. B. (2017). Cannabis Pharmacology: The Usual Suspects. Advances in Pharmacology, 80, 67-134.",
  "[18] Raz, N., et al. (2023). Selected cannabis terpenes synergize with THC to produce increased CB1 receptor activation. Biochemical Pharmacology, 212, 115548.",
  "[19] McDougall, J. J., et al. (2022). Anti-Inflammatory and Analgesic Properties of the Cannabis Terpene Myrcene. International Journal of Molecular Sciences, 23(14), 7891.",
  "[21] Kumar, A., et al. (2025). The Individual and Interactive Effects of Alpha-Pinene and Delta-9-Tetrahydrocannabinol in Healthy Adults. Medical Cannabis and Cannabinoids.",
];

export default function PatientGuide() {
  return (
    <div className="min-h-screen bg-background">
      {/* Back button */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót do strony głównej
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="flex items-center gap-4 mb-4">
          <BookOpen className="w-8 h-8 text-muted-foreground flex-shrink-0" />
          <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground">
            Poradnik Pacjenta
          </h1>
        </div>
        <p className="text-muted-foreground text-sm mb-10 ml-12">
          Terpeny, aromat, efekt anturażu — wszystko, co powinieneś wiedzieć o składzie medycznej marihuany zanim wybierzesz odmianę
        </p>

        <div className="space-y-12">
          {/* Section 1 */}
          <div className="border-t border-border pt-8">
            <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">{sections[0].title}</h2>
            <div className="space-y-3">
              {sections[0].content.map((p, i) => (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed">{p}</p>
              ))}
              <ul className="space-y-1.5 pl-4">
                {sections[0].bullets.map((b, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>{b}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed">{sections[0].outro}</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="border-t border-border pt-8">
            <h2 className="font-playfair text-xl font-semibold text-foreground mb-6">{sections[1].title}</h2>
            <div className="space-y-8">
              {sections[1].subsections.map((sub, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-foreground mb-3 text-base">{sub.heading}</h3>
                  {sub.paragraphs && sub.paragraphs.map((p, j) => (
                    <p key={j} className="text-sm text-muted-foreground leading-relaxed mb-2">{p}</p>
                  ))}
                  {sub.intro && <p className="text-sm text-muted-foreground leading-relaxed mb-2">{sub.intro}</p>}
                  {sub.numbered && (
                    <ol className="space-y-3 pl-4">
                      {sub.numbered.map((item, j) => (
                        <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                          <span className="font-semibold text-foreground">{j + 1}. {item.title}:</span> {item.text}
                        </li>
                      ))}
                    </ol>
                  )}
                  {sub.bullets && (
                    <ul className="space-y-1.5 pl-4">
                      {sub.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                          <span className="text-primary font-semibold flex-shrink-0">•</span>{b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {sub.outro && <p className="text-sm text-muted-foreground leading-relaxed mt-2">{sub.outro}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="border-t border-border pt-8">
            <h2 className="font-playfair text-xl font-semibold text-foreground mb-6">{sections[2].title}</h2>
            <div className="space-y-8">
              {sections[2].subsections.map((sub, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-foreground mb-3 text-base">{sub.heading}</h3>
                  {sub.paragraphs && sub.paragraphs.map((p, j) => (
                    <p key={j} className="text-sm text-muted-foreground leading-relaxed mb-2">{p}</p>
                  ))}
                  {sub.intro && <p className="text-sm text-muted-foreground leading-relaxed mb-2">{sub.intro}</p>}
                  {sub.numbered && (
                    <ol className="space-y-3 pl-4">
                      {sub.numbered.map((item, j) => (
                        <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                          <span className="font-semibold text-foreground">{j + 1}. {item.title}:</span> {item.text}
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 */}
          <div className="border-t border-border pt-8">
            <h2 className="font-playfair text-xl font-semibold text-foreground mb-6">{sections[3].title}</h2>
            <div className="space-y-8">
              {sections[3].subsections.map((sub, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-foreground mb-3 text-base">{sub.heading}</h3>
                  {sub.intro && <p className="text-sm text-muted-foreground leading-relaxed mb-2">{sub.intro}</p>}
                  {sub.numbered && (
                    <ol className="space-y-3 pl-4 mb-2">
                      {sub.numbered.map((item, j) => (
                        <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                          <span className="font-semibold text-foreground">{j + 1}. {item.title}:</span> {item.text}
                        </li>
                      ))}
                    </ol>
                  )}
                  {sub.steps && (
                    <div className="space-y-5">
                      {sub.steps.map((step, j) => (
                        <div key={j} className="bg-accent/40 rounded-xl p-4">
                          <p className="font-semibold text-foreground text-sm mb-1">{step.step}</p>
                          <p className="text-sm text-muted-foreground mb-2">{step.text}</p>
                          <ul className="space-y-1 pl-3">
                            {step.examples.map((ex, k) => (
                              <li key={k} className="text-xs text-muted-foreground flex gap-2">
                                <span className="text-primary flex-shrink-0">→</span>{ex}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                  {sub.example && (
                    <div className="bg-accent/40 rounded-xl p-5 space-y-3">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                        <div><span className="text-muted-foreground text-xs">Odmiana:</span><p className="font-semibold text-foreground">{sub.example.name}</p></div>
                        <div><span className="text-muted-foreground text-xs">Typ:</span><p className="font-semibold text-foreground">{sub.example.type}</p></div>
                        <div><span className="text-muted-foreground text-xs">THC:</span><p className="font-semibold text-foreground">{sub.example.thc}</p></div>
                        <div><span className="text-muted-foreground text-xs">CBD:</span><p className="font-semibold text-foreground">{sub.example.cbd}</p></div>
                        <div className="col-span-2"><span className="text-muted-foreground text-xs">Profil terpenowy:</span><p className="font-medium text-foreground text-xs">{sub.example.terpenes}</p></div>
                        <div className="col-span-2 sm:col-span-1"><span className="text-muted-foreground text-xs">Aromat:</span><p className="font-medium text-foreground text-xs">{sub.example.aroma}</p></div>
                      </div>
                      <div className="border-t border-border pt-3">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Interpretacja:</p>
                        <ul className="space-y-1">
                          {sub.example.interpretation.map((line, k) => (
                            <li key={k} className="text-xs text-muted-foreground flex gap-2">
                              <span className="text-primary flex-shrink-0">•</span>{line}
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-foreground mt-3 font-medium leading-relaxed">{sub.example.conclusion}</p>
                      </div>
                    </div>
                  )}
                  {sub.mistakes && (
                    <div className="space-y-3">
                      {sub.mistakes.map((m, j) => (
                        <div key={j} className="border-l-2 border-destructive/40 pl-4">
                          <p className="text-sm font-semibold text-foreground mb-0.5">Błąd {j + 1}: {m.title}</p>
                          <p className="text-sm text-muted-foreground">{m.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Conditions */}
          <div className="border-t border-border pt-8">
            <h2 className="font-playfair text-xl font-semibold text-foreground mb-6">{sections[4].title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {sections[4].conditions.map((cond, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-5">
                  <h3 className="font-playfair font-semibold text-foreground mb-2">{cond.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{cond.mechanism}</p>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Kluczowe terpeny:</p>
                  <ul className="space-y-1">
                    {cond.terpenes.map((t, j) => (
                      <li key={j} className="text-xs text-muted-foreground flex gap-2">
                        <span className="text-primary flex-shrink-0">•</span>{t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bibliography */}
          <div className="border-t border-border pt-8">
            <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">Bibliografia</h2>
            <div className="space-y-2">
              {bibliography.map((ref, i) => (
                <p key={i} className="text-xs text-muted-foreground leading-relaxed">{ref}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}