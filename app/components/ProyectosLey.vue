<template>
  <section
    id="propuestas"
    class="py-16 md:py-24 relative overflow-hidden"
    style="background: linear-gradient(135deg, #1A365D 0%, #0F2027 55%, #1A365D 100%);"
    aria-labelledby="propuestas-titulo"
  >
    <!-- Textura de puntos dorados -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="background-image: radial-gradient(#D4AF37 1px, transparent 1px); background-size: 20px 20px; opacity: 0.05;"
      aria-hidden="true"
    ></div>
    <!-- Esfera roja -->
    <div
      class="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, rgba(128,0,32,0.2) 0%, transparent 70%);"
      aria-hidden="true"
    ></div>
    <!-- Esfera dorada -->
    <div
      class="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%);"
      aria-hidden="true"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Encabezado -->
      <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <span
          class="px-3.5 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider"
          style="background: rgba(128,0,32,0.4); border: 1px solid rgba(128,0,32,0.6);"
        >
          {{ data.seccion.badge }}
        </span>
        <h2 id="propuestas-titulo" class="text-3xl sm:text-4xl font-extrabold font-heading text-white">
          {{ data.seccion.titulo }}
        </h2>
        <p class="text-sm sm:text-base" style="color:rgba(255,255,255,0.65);">{{ data.seccion.descripcion }}</p>
      </div>

      <!-- Grid 4 tarjetas -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="proyecto in data.proyectos"
          :key="proyecto.id"
          class="rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-all flex flex-col justify-between group cursor-default"
          style="background: rgba(255,255,255,0.06); border-top: 4px solid #800020; border-left: 1px solid rgba(255,255,255,0.1); border-right: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(4px);"
        >
          <div class="space-y-4">
            <!-- Ícono con colores inline según proyecto -->
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all group-hover:scale-110"
              :style="iconStyle(proyecto.id)"
            >
              <i :class="`fa-solid ${proyecto.icono}`" aria-hidden="true"></i>
            </div>

            <!-- Número y categoría -->
            <span class="text-[11px] font-bold uppercase tracking-wider block" style="color:#D4AF37;">
              {{ proyecto.numero }} • {{ proyecto.categoria }}
            </span>

            <!-- Título -->
            <h3 class="text-base font-bold text-white leading-snug font-heading">
              {{ proyecto.titulo }}
            </h3>

            <!-- Descripción -->
            <p class="text-xs leading-relaxed" style="color:rgba(255,255,255,0.6);">
              {{ proyecto.descripcion }}
            </p>
          </div>

          <!-- Footer -->
          <div class="pt-5 mt-4 flex items-center justify-between text-xs" style="border-top: 1px solid rgba(255,255,255,0.1);">
            <span style="color:rgba(255,255,255,0.45);">{{ proyecto.ambito }}</span>
            <span class="font-bold" style="color:#D4AF37;">
              <i class="fa-solid fa-check mr-1" aria-hidden="true"></i>{{ proyecto.estado }}
            </span>
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
    proyectos: any[]
  }
}>()

// Colores de íconos por proyecto usando hex directo
function iconStyle(id: number) {
  const map: Record<number, string> = {
    1: 'background: rgba(128,0,32,0.25); color: #ff6b8a;',
    2: 'background: rgba(26,54,93,0.5); color: #93c5fd;',
    3: 'background: rgba(212,175,55,0.2); color: #D4AF37;',
    4: 'background: rgba(128,0,32,0.25); color: #ff6b8a;',
  }
  return map[id] ?? 'background: rgba(255,255,255,0.1); color: #fff;'
}
</script>
