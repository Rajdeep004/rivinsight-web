/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'text': {
          50: '#f7eeee',
          100: '#efdcdc',
          200: '#dfb9b9',
          300: '#cf9696',
          400: '#bf7373',
          500: '#af5050',
          600: '#8c4040',
          700: '#693030',
          800: '#462020',
          900: '#231010',
          950: '#110808',
        },
        'background': {
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
        'primary': {
          50: '#e6f4fe',
          100: '#cdeafe',
          200: '#9bd4fd',
          300: '#69bffc',
          400: '#37a9fb',
          500: '#0594fa',
          600: '#0476c8',
          700: '#035996',
          800: '#023b64',
          900: '#011e32',
          950: '#010f19',
        },
        'secondary': {
          50: '#f3f3f2',
          100: '#e6e6e5',
          200: '#cdcdcb',
          300: '#b4b4b1',
          400: '#9b9b97',
          500: '#82827d',
          600: '#686864',
          700: '#4e4e4b',
          800: '#343432',
          900: '#1a1a19',
          950: '#0d0d0c',
        },
        'accent': {
          50: '#eceafa',
          100: '#d9d6f5',
          200: '#b3acec',
          300: '#8d83e2',
          400: '#665ad8',
          500: '#4030cf',
          600: '#3327a5',
          700: '#271d7c',
          800: '#1a1353',
          900: '#0d0a29',
          950: '#060515',
        },
       },
       daisyui: {
        themes: [
          {
            myTheme: {
              "primary": "#023b64",
              "secondary": "#e6e6e5",
              "accent": "#2e2395",
              "neutral": "#262626",
              "base-100": "#fafafa",
            },
          },
        ],
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}

