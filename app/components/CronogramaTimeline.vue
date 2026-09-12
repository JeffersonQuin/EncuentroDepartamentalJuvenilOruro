<template>
  <section
    id="cronograma"
    class="py-16 md:py-24 relative overflow-hidden"
    style="background: linear-gradient(180deg, #1A365D 0%, #0f172a 100%);"
    aria-labelledby="cronograma-titulo"
  >
    <!-- Textura de puntos -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="background-image: radial-gradient(#D4AF37 1px, transparent 1px); background-size: 22px 22px; opacity: 0.04;"
      aria-hidden="true"
    ></div>
    <!-- Esfera roja decorativa -->
    <div
      class="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, rgba(128,0,32,0.15) 0%, transparent 70%);"
      aria-hidden="true"
    ></div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Encabezado -->
      <div class="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <span
          class="px-3.5 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider"
          style="background: rgba(128,0,32,0.4); border: 1px solid rgba(128,0,32,0.55);"
        >
          {{ data.seccion.badge }}
        </span>
        <h2 id="cronograma-titulo" class="text-3xl sm:text-4xl font-extrabold font-heading text-white">
          {{ data.seccion.titulo }}
        </h2>
        <p class="text-sm" style="color:rgba(255,255,255,0.5);">{{ data.seccion.descripcion }}</p>
      </div>

      <!-- Timeline -->
      <ol class="relative ml-4 sm:ml-8 space-y-6" style="border-left: 2px solid rgba(212,175,55,0.3);">
        <li
          v-for="actividad in data.actividades"
          :key="actividad.id"
          class="relative pl-6 sm:pl-8 group"
        >
          <!-- Punto de la línea -->
          <div
            class="absolute -left-[9px] top-1 w-4 h-4 rounded-full shadow-sm transition-transform group-hover:scale-125"
            :style="puntoStyle(actividad)"
            aria-hidden="true"
          ></div>

          <!-- Tarjeta -->
          <div
            class="p-4 sm:p-5 rounded-2xl transition-all"
            :style="actividad.destacada
              ? 'background: rgba(212,175,55,0.1); border: 2px solid #D4AF37;'
              : 'background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);'"
          >
            <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
              <time
                class="text-xs font-extrabold font-mono"
                :style="actividad.destacada ? 'color:#D4AF37;' : horaColor(actividad.colorHora)"
                :datetime="`2026-09-21T${actividad.horaInicio}`"
              >
                <i class="fa-regular fa-clock mr-1" aria-hidden="true"></i>
                {{ actividad.horaDisplay }}
              </time>
              <span
                class="px-2 py-0.5 rounded-md text-[10px] font-bold"
                :style="actividad.destacada
                  ? 'background:#D4AF37; color:#1A365D;'
                  : 'background:rgba(255,255,255,0.1); color:rgba(255,255,255,0.7);'"
              >
                {{ actividad.etiquetaExtra
                  ? `${actividad.numero} • ${actividad.etiquetaExtra}`
                  : actividad.numero }}
              </span>
            </div>

            <h3
              class="text-base font-bold font-heading mb-1"
              :style="actividad.destacada ? 'color:#D4AF37;' : 'color:#fff;'"
            >
              {{ actividad.titulo }}
            </h3>
            <p class="text-xs leading-relaxed" style="color:rgba(255,255,255,0.55);">
              {{ actividad.descripcion }}
            </p>

            <!-- Badge participante -->
            <div v-if="actividad.participante" class="mt-3 flex items-center gap-2">
              <div
                class="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                style="background:rgba(128,0,32,0.8);"
              >
                <i class="fa-solid fa-user text-[8px] text-white" aria-hidden="true"></i>
              </div>
              <div class="text-[10px] leading-tight">
                <span class="font-bold" style="color:#D4AF37;">{{ actividad.participante }}</span>
                <span v-if="actividad.rolParticipante" style="color:rgba(255,255,255,0.45);"> — {{ actividad.rolParticipante }}</span>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    seccion: { badge: string; titulo: string; descripcion: string }
    actividades: any[]
  }
}>()

function puntoStyle(actividad: any) {
  const base = 'border: 4px solid #0f172a;'
  if (actividad.destacada) return `${base} background: #D4AF37;`
  if (actividad.colorPunto === 'bg-sangre') return `${base} background: #800020;`
  if (actividad.colorPunto === 'bg-azulNoche') return `${base} background: #3b82f6;`
  if (actividad.colorPunto === 'bg-oro') return `${base} background: #D4AF37;`
  return `${base} background: #800020;`
}

function horaColor(colorHora: string) {
  if (colorHora === 'text-sangre') return 'color:#f87171;'
  if (colorHora === 'text-azulNoche') return 'color:#93c5fd;'
  if (colorHora === 'text-amber-700') return 'color:#D4AF37;'
  return 'color:#D4AF37;'
}
</script>
