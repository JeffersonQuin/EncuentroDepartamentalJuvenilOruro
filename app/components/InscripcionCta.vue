<template>
  <section
    id="inscribirme"
    class="py-16 md:py-20 bg-gradient-to-b from-white to-marfil relative border-t border-slate-200"
    aria-labelledby="inscripcion-titulo"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl bg-white border-2 border-sangre/30 shadow-2xl overflow-hidden">

        <!-- ENCABEZADO -->
        <div class="p-8 sm:p-12 text-center space-y-6 relative bg-gradient-to-b from-white to-marfil/30">
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

          <!-- Garantías -->
          <div class="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-600">
            <span
              v-for="garantia in inscripcion.garantias"
              :key="garantia.texto"
              class="flex items-center gap-1.5 font-semibold"
            >
              <i :class="`fa-solid ${garantia.icono} ${garantia.color}`" aria-hidden="true"></i>
              {{ garantia.texto }}
            </span>
          </div>
        </div>

        <!-- FORMULARIO EMBEBIDO -->
        <div class="relative bg-white">
          <!-- Línea decorativa superior -->
          <div class="h-1 bg-gradient-to-r from-transparent via-sangre to-transparent"></div>
          
          <!-- Contenedor del iframe -->
          <div class="p-4 sm:p-6 flex justify-center">
            <div class="w-full max-w-2xl rounded-xl overflow-hidden shadow-inner border border-slate-200">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScy4Ldz13As8uNCx6QU2rT2I1thRxpDpcWKAHyPpIsxGtnR5w/viewform?embedded=true"
                width="100%"
                height="901"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                class="w-full"
                title="Formulario de Inscripción al Encuentro Departamental Juvenil"
              >
                Cargando formulario...
              </iframe>
            </div>
          </div>

          <!-- Mensaje adicional debajo del formulario -->
          <div class="px-6 pb-4 text-center">
            <p class="text-xs text-slate-500 flex items-center justify-center gap-2">
              <i class="fa-solid fa-shield-halved text-sangre" aria-hidden="true"></i>
              <span>Tus datos están seguros y solo se usan para coordinar tu participación en el evento</span>
            </p>
          </div>

          <!-- WHATSAPP CTA -->
          <div class="px-6 pb-8">
            <div
              class="rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4"
              style="background: linear-gradient(135deg, #e7faf0, #d1f5e0); border: 1px solid rgba(37,211,102,0.45);"
            >
              <!-- Icono -->
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style="background: rgba(37,211,102,0.2); color: #128C7E;"
              >
                <i class="fa-brands fa-whatsapp text-3xl" aria-hidden="true"></i>
              </div>

              <!-- Texto -->
              <div class="flex-1 text-center sm:text-left">
                <p class="text-sm font-extrabold text-slate-800 leading-snug">
                  Regístrate y únete al grupo de WhatsApp
                </p>
                <p class="text-xs mt-0.5 text-slate-600 leading-snug">
                  Recibe tu <strong class="text-slate-800">certificado de participación</strong> y mantente informado de todo lo que ocurre en el evento
                </p>
              </div>

              <!-- Botón -->
              <a
                href="https://chat.whatsapp.com/K6iQd9cQDPIA5QoYnDVhEP?s=sh&p=a&mlu=4&ilr=4"
                target="_blank"
                rel="noopener noreferrer"
                class="shrink-0 w-full sm:w-auto px-5 py-3 rounded-xl text-white text-sm font-extrabold shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
                style="background: linear-gradient(135deg, #25D366, #128C7E);"
                aria-label="Unirse al grupo de WhatsApp del Encuentro Juvenil 2026"
              >
                <i class="fa-brands fa-whatsapp text-lg" aria-hidden="true"></i>
                Unirse al grupo
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  inscripcion: {
    titulo: string
    subtitulo: string
    badgeTexto: string
    ctaTexto: string
    garantias: Array<{ icono: string; texto: string; color: string }>
  }
}>()
</script>
