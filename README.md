# Strona Poznańskiej Koooperatywy Spożywczej

[![Deploy to GitHub Pages](https://github.com/poznan-food-coop/website/actions/workflows/build.yml/badge.svg)](https://github.com/poznan-food-coop/website/actions/workflows/build.yml)

## O projekcie

Strona została stworzona z wykorzystaniem frameworków [Vue.js](https://vuejs.org/) oraz [Vuetify](https://vuetifyjs.com/).
Gotową stronę można zobaczyć [tutaj](https://poznan-food-coop.github.io/website/).
W projekcie znajdują się dwie główne gałęzie: `master` oraz `develop`. W gałęzi `master` znajduje się wersja produkcyjna strony, po każdej aktualizacji w gałęzi `master` strona jest automatycznie budowana i publikowana na serwerze [GitHub Pages](https://pages.github.com/).

## Rozwój projektu

### Instalacja w środowisku deweloperskim

1. Sklonuj repozytorium na swój komputer

    ``` bash
    git clone git@github.com:poznan-food-coop/website.git
    ```

2. Przejdź do katalogu z projektem

    ``` bash
    cd website
    ```

3. Zainstaluj zależności

    ``` bash
    npm install
    ```

4. Uruchom serwer deweloperski

    ``` bash
    npm run dev
    ```

### Budowanie projektu

Projekt jest automatycznie budowany i publikowany na serwerze [GitHub Pages](https://pages.github.com/) po każdej aktualizacji w gałęzi `master`.

### Współpraca

Projekt jest otwarty na pull requesty, więc jeśli chcesz pomóc w rozwoju strony, skorzystaj z gałęzi `develop` i zgłoś swoje propozycje zmian.
Zachęcam również do zgłaszania problemów oraz propozycji zmian, najlepiej w formie [issue](https://github.com/poznan-food-coop/website/issues) lub kontaktując się z nami mailowo pod adresem [spaceshaman@tuta.io](mailto:spaceshaman@tuta.io).

### Paleta kolorów

Dla zachowania spójności wizualnej strony używamy jednej palety kolorów która jest zdefiniowana w pliku `src/plugins/vuetify.js`. Wszystkie kolory używane w projekcie powinny być zdefiniowane w tej palecie. Zmieniając kolory w palecie, zmieniamy je w całym projekcie.

```javascript
// src/plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

const LightTheme = {
dark: false,
colors: {
    background: '#FFFFFF',
    'background-darken': '#F5F5F5',
    primary: '#4CAF50',
    'primary-darken': '#2E7D32',
},
}

export default createVuetify({
theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
    myCustomLightTheme: LightTheme,
    },
},
})
```

## Licencja

Projekt jest dostępny na licencji [MIT](LICENSE). Czuj się swobodnie korzystając z kodu źródłowego ;)
