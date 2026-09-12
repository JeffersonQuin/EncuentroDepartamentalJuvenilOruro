<template>
  <header
    class="sticky top-0 z-50 bg-marfil/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300 shadow-sm"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

      <!-- LOGOS INSTITUCIONALES -->
      <div class="flex items-center gap-3 sm:gap-4">
        <!-- Logo 1: Brigada Parlamentaria -->
        <div class="flex items-center gap-2.5 group">
          <div
            class="w-11 h-11 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform flex items-center justify-center"
            style="background: linear-gradient(135deg, #1A365D, #0f172a); border: 1px solid rgba(212,175,55,0.2);"
          >
            <img src="/Logo1.png" alt="Brigada Parlamentaria de Oruro" class="w-full h-full object-contain p-1" />
          </div>
          <div class="leading-tight hidden sm:block">
            <span class="block text-[11px] font-extrabold text-azulNoche tracking-wider uppercase font-heading">
              Brigada Parlamentaria
            </span>
            <span class="block text-[10px] text-sangre font-semibold">de Oruro</span>
          </div>
        </div>

        <div class="h-8 w-px bg-slate-300 hidden sm:block" aria-hidden="true"></div>

        <!-- Logo 2: Formación de Jóvenes Líderes -->
        <div class="flex items-center gap-2 group">
          <div
            class="w-10 h-10 rounded-xl overflow-hidden shadow-md border border-oro/30 group-hover:scale-105 transition-transform flex items-center justify-center bg-white"
          >
            <img src="/Logo2.png" alt="Jóvenes Líderes Daniel Alcalá" class="w-full h-full object-contain p-0.5" />
          </div>
          <div class="leading-tight hidden sm:block">
            <span class="block text-[10px] font-bold text-slate-700 uppercase">Jóvenes Líderes</span>
            <span class="block text-[11px] font-extrabold text-azulNoche">Daniel Alcalá</span>
          </div>
        </div>
      </div>

      <!-- MENÚ DESKTOP -->
      <nav class="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600" aria-label="Navegación principal">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link hover:text-sangre transition-colors py-1"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- CTA + HAMBURGUESA -->
      <div class="flex items-center gap-3">
        <a
          href="#inscribirme"
          class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-sangre to-sangreLight text-white text-sm font-bold shadow-md hover:shadow-glow-sangre transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <i class="fa-solid fa-pen-nib mr-2 text-xs" aria-hidden="true"></i>
          ¡Inscribirme!
        </a>

        <button
          aria-label="Abrir menú de navegación"
          :aria-expanded="isOpen"
          class="lg:hidden w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sangre"
          @click="toggleMenu"
        >
          <i :class="isOpen ? 'fa-xmark' : 'fa-bars'" class="fa-solid text-lg" aria-hidden="true"></i>
        </button>
      </div>
    </div>

    <!-- MENÚ MÓVIL -->
    <Transition name="fade-down">
      <div
        v-if="isOpen"
        class="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-1 shadow-lg"
        role="navigation"
        aria-label="Menú móvil"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="flex items-center gap-2 py-2.5 text-slate-700 font-semibold border-b border-slate-100 last:border-0 hover:text-sangre transition-colors"
          @click="closeMenu"
        >
          <i :class="`fa-solid ${link.icono}`" class="text-sangre w-4" aria-hidden="true"></i>
          {{ link.label }}
        </a>
        <a
          href="#inscribirme"
          class="w-full mt-2 py-3 rounded-xl bg-sangre text-white font-bold flex items-center justify-center shadow-md hover:bg-sangreDark transition-colors"
          @click="closeMenu"
        >
          <i class="fa-solid fa-id-card mr-2" aria-hidden="true"></i>
          ¡Inscribirme Ahora!
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  navLinks: Array<{ label: string; href: string; icono: string }>
}>()

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}
</script>

<style scoped>
.fade-down-enter-active,
.fade-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
