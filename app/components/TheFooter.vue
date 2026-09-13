<template>
  <footer class="bg-azulNoche text-white pt-16 pb-24 lg:pb-16 border-t-4 border-sangre relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">

        <!-- Columna 1: Logos e institución -->
        <div class="lg:col-span-5 space-y-4 text-center md:text-left">
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-4">

            <!-- Logo Brigada -->
            <div class="flex items-center gap-2.5">
              <div class="w-10 h-10 rounded-xl overflow-hidden border border-oro/30 flex items-center justify-center bg-white/10">
                <img src="/Logo1.png" alt="Brigada Parlamentaria de Oruro" class="w-full h-full object-contain p-1" />
              </div>
              <div class="leading-tight text-left">
                <span class="block text-xs font-bold text-white uppercase tracking-wider">Brigada Parlamentaria</span>
                <span class="block text-[10px] text-oro">de Oruro</span>
              </div>
            </div>

            <div class="h-6 w-px bg-white/20 hidden sm:block" aria-hidden="true"></div>

            <!-- Logo Jóvenes Líderes -->
            <div class="flex items-center gap-2">
              <div class="w-9 h-9 rounded-xl overflow-hidden border border-oro/30 flex items-center justify-center bg-white">
                <img src="/Logo2.png" alt="Jóvenes Líderes Daniel Alcalá" class="w-full h-full object-contain p-0.5" />
              </div>
              <div class="leading-tight text-left">
                <span class="block text-[10px] font-bold text-slate-300 uppercase">Jóvenes Líderes</span>
                <span class="block text-xs font-bold text-white">Daniel Alcalá</span>
              </div>
            </div>
          </div>

          <p class="text-xs text-slate-300 max-w-sm leading-relaxed mx-auto md:mx-0">
            {{ footer.descripcion }}
          </p>

          <div class="text-xs text-oro/90 font-medium">
            <i class="fa-solid fa-location-dot mr-1 text-sangre" aria-hidden="true"></i>
            {{ footer.ciudad }}
          </div>
        </div>

        <!-- Columna 2: Navegación rápida -->
        <nav class="lg:col-span-3 space-y-3 text-center md:text-left" aria-label="Navegación de pie de página">
          <h4 class="text-xs font-extrabold text-oro uppercase tracking-wider">Navegación Rápida</h4>
          <ul class="space-y-2 text-xs text-slate-300">
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href" class="hover:text-white transition-colors">{{ link.label }}</a>
            </li>
          </ul>
        </nav>

        <!-- Columna 3: Información -->
        <div class="lg:col-span-4 space-y-3 text-center md:text-left">
          <h4 class="text-xs font-extrabold text-oro uppercase tracking-wider">Espacio Informativo</h4>
          <p class="text-xs text-slate-300 leading-relaxed">{{ footer.aviso }}</p>
          <div class="pt-2">
            <span class="inline-block px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300">
              <i class="fa-regular fa-calendar-check text-oro mr-1.5" aria-hidden="true"></i>
              Cita: 21 de Septiembre, 14:00 PM
            </span>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
        <div>{{ footer.copyright }}</div>
        <div class="text-[11px] text-slate-400">
          Diseñado por:
          <span class="text-oro">Jovenes Lideres</span> 
        </div>
      </div>
    </div>

    <!-- Botón flotante permanente -->
    <div class="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <a
        href="#inscribirme"
        class="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-sangre text-white text-xs sm:text-sm font-extrabold shadow-2xl border-2 border-oro hover:scale-105 transition-all hover:bg-sangreDark"
        aria-label="Ir al formulario de inscripción"
      >
        <i class="fa-solid fa-pen-to-square text-oro text-sm" aria-hidden="true"></i>
        <span>Inscribirme Ahora</span>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  footer: {
    descripcion: string
    ciudad: string
    aviso: string
    copyright: string
    credits: string
  }
  navLinks: Array<{ label: string; href: string }>
}>()
</script>
