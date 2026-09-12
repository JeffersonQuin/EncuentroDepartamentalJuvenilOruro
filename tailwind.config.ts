import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './server/**/*.{ts,json}',
  ],
  safelist: [
    // Fondos sólidos
    'bg-sangre', 'bg-sangreDark', 'bg-sangreLight', 'bg-marfil',
    'bg-azulNoche', 'bg-azulProfundo', 'bg-oro', 'bg-oroLight',
    // Texto
    'text-sangre', 'text-sangreDark', 'text-sangreLight',
    'text-azulNoche', 'text-azulProfundo', 'text-oro', 'text-oroLight', 'text-marfil',
    // Bordes
    'border-sangre', 'border-azulNoche', 'border-oro',
    // Gradientes from/via/to
    'from-sangre', 'from-sangreDark', 'from-azulNoche', 'from-azulProfundo', 'from-oro',
    'via-sangre', 'via-sangreDark', 'via-azulNoche', 'via-oro',
    'to-sangre', 'to-sangreDark', 'to-azulNoche', 'to-azulProfundo', 'to-oro',
    // Con opacidad
    'bg-sangre/10', 'bg-sangre/20', 'bg-sangre/30', 'bg-sangre/40', 'bg-sangre/50', 'bg-sangre/80',
    'bg-azulNoche/10', 'bg-azulNoche/20', 'bg-azulNoche/30', 'bg-azulNoche/50',
    'bg-oro/10', 'bg-oro/20', 'bg-oro/30',
    'border-sangre/10', 'border-sangre/20', 'border-sangre/30', 'border-sangre/40', 'border-sangre/50',
    'border-azulNoche/20', 'border-azulNoche/30', 'border-azulNoche/60',
    'border-oro/20', 'border-oro/30', 'border-oro/40', 'border-oro/50',
    'text-sangre/80', 'text-oro/60', 'text-oro/80',
    // Hover de grupo de tarjetas de proyectos
    'group-hover:bg-sangre', 'group-hover:text-white',
    'group-hover:bg-azulNoche',
    'group-hover:bg-oro', 'group-hover:text-slate-900',
    // Bg icon clases
    'bg-sangre/10', 'bg-azulNoche/10', 'bg-amber-500/10',
    'text-sangre', 'text-azulNoche', 'text-amber-600',
  ],
  theme: {
    extend: {
      colors: {
        sangre:       '#800020',
        sangreDark:   '#5c0017',
        sangreLight:  '#9b1b36',
        marfil:       '#F7FAFC',
        azulNoche:    '#1A365D',
        azulProfundo: '#0F2027',
        oro:          '#D4AF37',
        oroLight:     '#F3E5AB',
      },
      fontFamily: {
        sans:    ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        'phone':       '0 25px 50px -12px rgba(26,54,93,0.25), 0 0 0 1px rgba(128,0,32,0.1)',
        'card':        '0 10px 30px -5px rgba(0,0,0,0.05), 0 4px 12px -2px rgba(0,0,0,0.02)',
        'glow-sangre': '0 0 25px -5px rgba(128,0,32,0.5)',
        'glow-oro':    '0 0 25px -5px rgba(212,175,55,0.4)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config
