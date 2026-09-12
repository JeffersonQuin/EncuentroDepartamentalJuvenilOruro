<template>
  <section
    class="py-16 md:py-24 bg-marfil relative overflow-hidden"
    aria-labelledby="ejes-titulo"
  >
    <!-- Toque de color de fondo -->
    <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sangre via-oro to-azulNoche" aria-hidden="true"></div>
    <div class="absolute top-0 right-0 w-64 h-64 bg-oro/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-sangre/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Encabezado -->
      <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <span class="px-3.5 py-1.5 rounded-full bg-azulNoche/10 text-azulNoche text-xs font-bold uppercase tracking-wider border border-azulNoche/20">
          {{ data.seccion.badge }}
        </span>
        <h2 id="ejes-titulo" class="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
          {{ data.seccion.titulo }}
        </h2>
        <p class="text-slate-600 text-sm sm:text-base">{{ data.seccion.descripcion }}</p>
      </div>

      <!-- Grid ejes + certificado -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

        <!-- 4 ejes temáticos -->
        <article
          v-for="eje in data.ejes"
          :key="eje.id"
          class="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sangre/40 hover:-translate-y-1 transition-all shadow-card group"
        >
          <!-- Barra de color superior por eje -->
          <div
            class="h-1 w-full rounded-full mb-5"
            :class="eje.bgIcono"
            aria-hidden="true"
          ></div>
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center text-lg mb-4 transition-transform group-hover:scale-110"
            :class="[eje.bgIcono, eje.colorIcono]"
          >
            <i :class="`fa-solid ${eje.icono}`" aria-hidden="true"></i>
          </div>
          <h3 class="text-base font-bold text-azulNoche mb-2 font-heading">{{ eje.titulo }}</h3>
          <p class="text-xs text-slate-600 leading-relaxed">{{ eje.descripcion }}</p>
        </article>

        <!-- Tarjeta destacada: Certificado (ocupa 2 columnas en desktop) -->
        <article
          class="md:col-span-2 p-6 sm:p-8 rounded-2xl text-white flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden"
          style="background: linear-gradient(135deg, #1A365D 0%, #0f172a 55%, #1A365D 100%); border: 2px solid #D4AF37; box-shadow: 0 0 25px -5px rgba(212,175,55,0.4);"
        >
          <!-- Textura interior -->
          <div class="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" aria-hidden="true"></div>
          <div
            class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-oro/20 border-2 border-oro text-oro flex items-center justify-center text-4xl shrink-0 relative z-10"
          >
            <i :class="`fa-solid ${data.certificado.icono}`" aria-hidden="true"></i>
          </div>
          <div class="space-y-2 text-center sm:text-left relative z-10">
            <span class="inline-block px-2.5 py-0.5 rounded-full bg-oro text-azulNoche text-[10px] font-extrabold uppercase">
              {{ data.certificado.badge }}
            </span>
            <h3 class="text-xl sm:text-2xl font-extrabold font-heading text-white">
              {{ data.certificado.titulo }}
            </h3>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {{ data.certificado.descripcion }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    seccion: { badge: string; titulo: string; descripcion: string }
    ejes: any[]
    certificado: { badge: string; titulo: string; descripcion: string; icono: string }
  }
}>()
</script>
