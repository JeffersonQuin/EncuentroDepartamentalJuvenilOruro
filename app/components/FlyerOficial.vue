<template>
  <section
    class="py-16 md:py-24 relative overflow-hidden"
    style="background: linear-gradient(180deg, #1A365D 0%, #0f172a 100%);"
    aria-labelledby="flyer-titulo"
  >
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

      <!-- Encabezado -->
      <div class="max-w-2xl mx-auto mb-10 space-y-3">
        <span class="px-3.5 py-1.5 rounded-full bg-oro/20 text-oro text-xs font-bold uppercase tracking-wider border border-oro/30">
          Material Informativo
        </span>
        <h2 id="flyer-titulo" class="text-3xl sm:text-4xl font-extrabold font-heading text-white">
          Afiche Oficial del Encuentro 2026
        </h2>
        <p class="text-slate-300 text-sm">
          Descarga o comparte la imagen oficial con tus compañeros de curso, universidad.
        </p>
      </div>

      <!-- Contenedor con borde dorado y sombra -->
      <div
        class="relative mx-auto max-w-xl rounded-3xl p-3 sm:p-4 bg-gradient-to-br from-oro/40 via-oro/20 to-oro/10 border-2 border-oro shadow-glow-oro"
      >
        <!-- Imagen oficial del evento -->
        <div class="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/ejemplo.jpg"
            alt="Afiche Oficial del Encuentro Departamental Juvenil 2026 - Oruro, Bolivia"
            class="w-full h-auto block"
            loading="lazy"
          />
        </div>

        <!-- Ornamento decorativo en esquinas -->
        <div class="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-oro rounded-tl-lg" aria-hidden="true"></div>
        <div class="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-oro rounded-tr-lg" aria-hidden="true"></div>
        <div class="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-oro rounded-bl-lg" aria-hidden="true"></div>
        <div class="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-oro rounded-br-lg" aria-hidden="true"></div>
      </div>

      <!-- Botón de descarga -->
      <div class="mt-8">
        <a
          href="/ejemplo.jpg"
          download="Afiche-Encuentro-Juvenil-2026.jpg"
          class="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white text-sm font-extrabold shadow-xl transition-all hover:scale-105 active:scale-95"
          style="background: linear-gradient(135deg, #800020, #5c0017); border: 1px solid rgba(212,175,55,0.5);"
        >
          <i class="fa-solid fa-download" style="color:#D4AF37;" aria-hidden="true"></i>
          Descargar Afiche Oficial
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold" style="background:rgba(212,175,55,0.25); color:#D4AF37;">JPG</span>
        </a>
      </div>

      <!-- Pill de datos debajo del flyer -->
      <div class="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
        <span class="px-4 py-2 rounded-full bg-sangre text-white border border-sangre/50 shadow">
          <i class="fa-solid fa-calendar-day mr-1.5" aria-hidden="true"></i>
          21 de Septiembre, 2026
        </span>
        <span class="px-4 py-2 rounded-full bg-white/10 text-white border border-white/20">
          <i class="fa-regular fa-clock mr-1.5 text-oro" aria-hidden="true"></i>
          14:00 PM
        </span>
        <span class="px-4 py-2 rounded-full bg-oro text-azulNoche font-bold shadow">
          <i class="fa-solid fa-location-dot mr-1.5" aria-hidden="true"></i>
          Ciudad de Oruro
        </span>
      </div>
    </div>
  </section>
</template>
