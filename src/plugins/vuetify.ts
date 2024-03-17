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
    secondary: '#ee5e1f',
    'secondary-darken': '#a5461a',
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
