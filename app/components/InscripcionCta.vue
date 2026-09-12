<template>
  <section
    id="inscribirme"
    class="py-16 md:py-20 bg-gradient-to-b from-white to-marfil relative border-t border-slate-200"
    aria-labelledby="inscripcion-titulo"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="p-8 sm:p-12 rounded-3xl bg-white border-2 border-sangre/30 shadow-2xl space-y-6 relative overflow-hidden">

        <!-- Detalle de esquina en oro -->
        <div
          class="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-oro/30 to-transparent pointer-events-none"
          aria-hidden="true"
        ></div>

        <!-- Badge -->
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sangre/10 text-sangre text-xs font-extrabold uppercase tracking-wider">
          <i class="fa-solid fa-ticket" aria-hidden="true"></i>
          {{ inscripcion.badgeTexto }}
        </span>

        <!-- Título -->
        <h2 id="inscripcion-titulo" class="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
          {{ inscripcion.titulo }}
        </h2>

        <!-- Subtítulo -->
        <p class="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {{ inscripcion.subtitulo }}
        </p>

        <!-- Botón CTA externo -->
        <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            :href="registroUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-sangre via-sangreDark to-sangre text-white text-lg font-extrabold shadow-xl hover:shadow-glow-sangre transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
          >
            <i class="fa-solid fa-arrow-up-right-from-square text-oro" aria-hidden="true"></i>
            <span>{{ inscripcion.ctaTexto }}</span>
          </a>
        </div>

        <!-- Garantías -->
        <div class="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-500">
          <span
            v-for="garantia in inscripcion.garantias"
            :key="garantia.texto"
            class="flex items-center gap-1"
          >
            <i :class="`fa-solid ${garantia.icono} ${garantia.color}`" aria-hidden="true"></i>
            {{ garantia.texto }}
          </span>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  registroUrl: string
  inscripcion: {
    titulo: string
    subtitulo: string
    badgeTexto: string
    ctaTexto: string
    garantias: Array<{ icono: string; texto: string; color: string }>
  }
}>()
</script>
