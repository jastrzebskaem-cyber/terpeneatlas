import { useSEO } from "../hooks/useSEO";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";

const sections = [
  {
    title: "1. Informacje ogólne",
    content: [
      "Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: www.terpeneatlas.com",
      "Operatorem serwisu oraz Administratorem danych osobowych jest: Indywidualna Praktyka Lekarska Ewa Jastrzębska, Szczęsna 26, 02-454 Warszawa, NIP: 5252843611",
      "Adres kontaktowy poczty elektronicznej operatora: lek.ewa.jastrzebska@gmail.com",
      "Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.",
      "Serwis wykorzystuje dane osobowe w następujących celach: Prezentacja oferty lub informacji.",
      "Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób: Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora. Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. ciasteczka).",
    ],
  },
  {
    title: "2. Wybrane metody ochrony danych stosowane przez Operatora",
    content: [
      "Operator okresowo zmienia swoje hasła administracyjne.",
      "W celu minimalizacji ryzyka nieuprawnionego dostępu od danych, Operator stosuje hasła złożone, zawierające małe i wielkie litery, cyfry oraz znaki specjalne, nie krótsze niż 8 znaków.",
      "W serwisie jest stosowana autentykacja dwuskładnikowa, co stanowi dodatkową formę ochrony logowania do Serwisu.",
      "Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje komponentów programistycznych.",
    ],
  },
  {
    title: "3. Hosting",
    content: [
      "Serwis jest hostowany (technicznie utrzymywany) na serwerze operatora: Base 44.",
      "Firma hostingowa w celu zapewnienia niezawodności technicznej prowadzi logi na poziomie serwera. Zapisowi mogą podlegać: zasoby określone identyfikatorem URL (adresy żądanych zasobów - stron, plików), czas nadejścia zapytania, czas wysłania odpowiedzi, nazwę stacji klienta - identyfikacja realizowana przez protokół HTTP, informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP, adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) - w przypadku gdy przejście do Serwisu nastąpiło przez odnośnik, informacje o przeglądarce użytkownika, informacje o adresie IP, informacje diagnostyczne związane z procesem samodzielnego zamawiania usług poprzez rejestratory na stronie, informacje związane z obsługą poczty elektronicznej kierowanej do Operatora oraz wysyłanej przez Operatora.",
    ],
  },
  {
    title: "4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych",
    content: [
      "W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców: upoważnieni pracownicy i współpracownicy, którzy korzystają z danych w celu realizacji celu działania strony; firmy, świadczące usługi marketingu na rzecz Administratora.",
      "Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.",
      "Przysługuje Ci prawo żądania od Administratora: dostępu do danych osobowych Ciebie dotyczących, ich sprostowania, usunięcia, ograniczenia przetwarzania, oraz przenoszenia danych.",
      "Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.",
      "Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.",
      "Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.",
      "W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.",
      "Dane osobowe są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że przesyłamy je poza teren Unii Europejskiej.",
    ],
  },
  {
    title: "5. Informacje w formularzach",
    content: [
      "Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.",
      "Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).",
      "Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.",
      "Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.",
    ],
  },
  {
    title: "6. Logi Administratora",
    content: [
      "Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.",
    ],
  },
  {
    title: "7. Istotne techniki marketingowe",
    content: [
      "Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/",
      "Operator stosuje rozwiązanie automatyzujące działanie Serwisu w odniesieniu do użytkowników, np. mogące przesłać maila do użytkownika po odwiedzeniu konkretnej podstrony, o ile wyraził on zgodę na otrzymywanie korespondencji handlowej od Operatora.",
    ],
  },
  {
    title: "8. Informacja o plikach cookies",
    content: [
      "Serwis korzysta z plików cookies.",
      "Pliki cookies (tzw. ciasteczka) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.",
      "Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.",
      "Pliki cookies wykorzystywane są w następujących celach: utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła; realizacji celów określonych powyżej w części Istotne techniki marketingowe.",
      "W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: sesyjne (session cookies) oraz stałe (persistent cookies). Cookies sesyjne są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). Stałe pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.",
      "Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies. Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.",
      "Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.",
      "Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).",
    ],
  },
  {
    title: "9. Zarządzanie plikami cookies - jak w praktyce wyrażać i cofać zgodę?",
    content: [
      "Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www.",
      "W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i postępuj zgodnie z instrukcjami: Edge, Internet Explorer, Chrome, Safari, Firefox, Opera. Urządzenia mobilne: Android, Safari (iOS), Windows Phone.",
    ],
  },
];

export default function PrivacyPolicy() {
  useSEO({
    title: "Polityka Prywatności",
    description: "Polityka prywatności serwisu TerpeneAtlas – bazy wiedzy o terpenach i odmianach medycznej marihuany.",
    canonical: "https://www.terpeneatlas.org/polityka-prywatnosci"
  });
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
        <div className="flex items-center gap-4 mb-10">
          <Shield className="w-8 h-8 text-muted-foreground flex-shrink-0" />
          <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground">
            Polityka prywatności
          </h1>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="border-t border-border pt-8">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.content.map((paragraph, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}