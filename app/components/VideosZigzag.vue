<template>
  <section
    id="videos"
    class="py-16 md:py-24 bg-white border-y border-slate-200/80 relative"
    aria-labelledby="videos-titulo"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Encabezado -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span class="px-3.5 py-1.5 rounded-full bg-sangre/10 text-sangre text-xs font-bold uppercase tracking-wider">
          {{ data.seccion.badge }}
        </span>
        <h2 id="videos-titulo" class="text-2xl sm:text-4xl font-extrabold font-heading text-azulNoche">
          {{ data.seccion.titulo }}
        </h2>
        <p class="text-slate-600 text-sm sm:text-base">{{ data.seccion.descripcion }}</p>
      </div>

      <!-- Bloques zigzag -->
      <div class="space-y-20 md:space-y-28">
        <div
          v-for="bloque in data.bloques"
          :key="bloque.id"
          class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          <!-- Celular izquierda (bloques impares) -->
          <div
            v-if="bloque.posicionCelular === 'izquierda'"
            class="lg:col-span-5 flex justify-center order-2 lg:order-1"
          >
            <PhoneMockup
              :capsule-label="bloque.capsula"
              :gradient-class="`bg-gradient-to-b ${bloque.gradiente}`"
              :icon="bloque.icono"
              :title="bloque.etiqueta"
              :description="bloque.descripcionVideo"
              :button-label="bloque.botonLabel"
              :video-local="bloque.videoLocal"
              :video-url="bloque.videoUrl"
              :facebook-url="bloque.facebookUrl"
              :tiktok-url="bloque.tiktokUrl"
            />
          </div>

          <!-- Texto -->
          <div
            :class="[
              'lg:col-span-7 space-y-4 text-center lg:text-left',
              bloque.posicionCelular === 'izquierda' ? 'order-1 lg:order-2' : ''
            ]"
          >
            <!-- Número y categoría -->
            <div
              class="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider"
              :class="bloque.texto.colorCategoria"
            >
              <span class="w-2 h-2 rounded-full" :class="bloque.texto.colorCategoria.replace('text-', 'bg-')" aria-hidden="true"></span>
              {{ bloque.texto.numero }} • {{ bloque.texto.categoria }}
            </div>

            <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              {{ bloque.texto.titulo }}
            </h3>

            <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
              {{ bloque.texto.parrafo }}
            </p>

            <!-- Puntos (bloque 1) -->
            <ul v-if="bloque.texto.puntos" class="space-y-2.5 text-sm text-slate-700 pt-2 text-left max-w-md mx-auto lg:mx-0">
              <li v-for="(punto, i) in bloque.texto.puntos" :key="i" class="flex items-center gap-2.5">
                <i class="fa-solid fa-check-circle text-sangre shrink-0" aria-hidden="true"></i>
                <span>{{ punto }}</span>
              </li>
            </ul>

            <!-- Mini cards (bloque 2) -->
            <div v-if="bloque.texto.cards" class="grid grid-cols-2 gap-3 pt-2 text-left">
              <div
                v-for="card in bloque.texto.cards"
                :key="card.titulo"
                class="bg-marfil p-3 rounded-xl border border-slate-200"
              >
                <i :class="`fa-solid ${card.icono} ${card.colorIcono} text-base mb-1`" aria-hidden="true"></i>
                <h4 class="text-xs font-bold text-azulNoche">{{ card.titulo }}</h4>
                <p class="text-[11px] text-slate-500">{{ card.descripcion }}</p>
              </div>
            </div>

            <!-- Nota destacada (bloque 3) -->
            <div
              v-if="bloque.texto.nota"
              class="p-4 rounded-2xl bg-amber-50/70 border border-oro/30 text-left"
            >
              <span class="text-xs font-bold text-azulNoche block mb-1">
                <i :class="`fa-solid ${bloque.texto.nota.icono} text-oro mr-1`" aria-hidden="true"></i>
                {{ bloque.texto.nota.titulo }}
              </span>
              <p class="text-xs text-slate-600">{{ bloque.texto.nota.texto }}</p>
            </div>

            <!-- Cita (bloque 4) -->
            <blockquote
              v-if="bloque.texto.cita"
              class="border-l-4 border-sangre pl-4 italic text-slate-700 text-sm"
            >
              "{{ bloque.texto.cita.texto }}"
              <footer class="text-xs font-bold text-azulNoche not-italic mt-1">
                — {{ bloque.texto.cita.autor }}
              </footer>
            </blockquote>

            <!-- Badges de info (bloque 5) -->
            <div v-if="bloque.texto.badges" class="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start text-xs font-semibold">
              <span
                v-for="badge in bloque.texto.badges"
                :key="badge.texto"
                class="px-3 py-1.5 rounded-xl border"
                :class="badge.estilo"
              >
                <i :class="`fa-solid ${badge.icono} mr-1`" aria-hidden="true"></i>
                {{ badge.texto }}
              </span>
            </div>
          </div>

          <!-- Celular derecha (bloques pares) -->
          <div
            v-if="bloque.posicionCelular === 'derecha'"
            class="lg:col-span-5 flex justify-center"
          >
            <PhoneMockup
              :capsule-label="bloque.capsula"
              :gradient-class="`bg-gradient-to-b ${bloque.gradiente}`"
              :icon="bloque.icono"
              :title="bloque.etiqueta"
              :description="bloque.descripcionVideo"
              :button-label="bloque.botonLabel"
              :video-local="bloque.videoLocal"
              :video-url="bloque.videoUrl"
              :facebook-url="bloque.facebookUrl"
              :tiktok-url="bloque.tiktokUrl"
            />
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
    bloques: any[]
  }
}>()
</script>
