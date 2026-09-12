<template>
  <section
    id="ubicacion"
    class="py-16 md:py-24 bg-marfil border-t border-slate-200"
    aria-labelledby="ubicacion-titulo"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        <!-- Información de ubicación -->
        <div class="lg:col-span-6 space-y-6">
          <div class="inline-flex items-center gap-2 text-sangre font-bold text-xs uppercase tracking-wider">
            <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
            {{ data.seccion.badge }}
          </div>
          <h2 id="ubicacion-titulo" class="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
            {{ data.seccion.titulo }}
          </h2>
          <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
            {{ data.seccion.descripcion }}
          </p>

          <!-- Cards de acceso -->
          <div class="space-y-4">
            <div
              v-for="acceso in data.accesos"
              :key="acceso.id"
              class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm"
            >
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                :class="[acceso.colorFondo, acceso.colorIcono]"
              >
                <i :class="`fa-solid ${acceso.icono}`" aria-hidden="true"></i>
              </div>
              <div>
                <h4 class="text-sm font-bold text-azulNoche">{{ acceso.titulo }}</h4>
                <p class="text-xs text-slate-600 mt-0.5">{{ acceso.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mapa real Google Maps -->
        <div class="lg:col-span-6">
          <div class="rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200 relative aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps?q=-17.96812081072022,-67.11149667053745&hl=es&z=17&output=embed"
              class="w-full h-full"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              :title="`Mapa de ubicación: ${data.sede.nombre}`"
            ></iframe>

            <!-- Card flotante con info de la sede -->
            <div class="absolute bottom-4 left-4 right-4 z-10">
              <div class="bg-white/98 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-oro/40 text-slate-800">
                <span class="text-[10px] font-extrabold text-sangre uppercase block">
                  {{ data.mapa.badgeSede }}
                </span>
                <h4 class="text-sm font-bold text-azulNoche mt-0.5">{{ data.mapa.tituloPin }}</h4>
                <p class="text-[11px] text-slate-500 mt-1">{{ data.mapa.referenciaPin }}</p>
                <div class="mt-2.5 pt-2 border-t border-slate-200 flex justify-between items-center">
                  <div class="flex gap-2">
                    <span class="text-[10px] bg-slate-100 px-2 py-0.5 rounded font-semibold text-slate-700">
                      {{ data.mapa.fecha }}
                    </span>
                    <span class="text-[10px] bg-amber-50 px-2 py-0.5 rounded font-semibold text-amber-800">
                      {{ data.mapa.hora }}
                    </span>
                  </div>
                  <a
                    href="https://www.google.com/maps?q=-17.96812081072022,-67.11149667053745"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-[10px] font-bold text-sangre hover:text-sangreDark flex items-center gap-1 transition-colors"
                  >
                    <i class="fa-solid fa-diamond-turn-right" aria-hidden="true"></i>
                    Cómo llegar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    seccion: { badge: string; titulo: string; descripcion: string }
    sede: { nombre: string; ciudad: string }
    accesos: any[]
    mapa: { badgeSede: string; tituloPin: string; referenciaPin: string; fecha: string; hora: string }
  }
}>()
</script>
