<template>
  <section
    id="inicio"
    class="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden"
    style="background: linear-gradient(135deg, #1A365D 0%, #0F2027 50%, #5c0017 100%);"
    aria-label="Portada del evento"
  >
    <!-- Textura de puntos dorados -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="background-image: radial-gradient(#D4AF37 1px, transparent 1px); background-size: 24px 24px; opacity: 0.07;"
      aria-hidden="true"
    ></div>
    <!-- Esfera roja arriba derecha -->
    <div
      class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, rgba(128,0,32,0.35) 0%, transparent 70%);"
      aria-hidden="true"
    ></div>
    <!-- Esfera dorada abajo izquierda -->
    <div
      class="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%);"
      aria-hidden="true"
    ></div>
    <!-- Marca de agua Oruro -->
    <div
      class="absolute right-4 top-24 pointer-events-none text-[260px] hidden lg:block"
      style="opacity: 0.04; color: #D4AF37;"
      aria-hidden="true"
    >
      <i class="fa-solid fa-mountain-sun"></i>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

        <!-- COLUMNA IZQUIERDA -->
        <div class="lg:col-span-7 text-center lg:text-left space-y-6">

          <!-- Badge dorado animado -->
          <div
            class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-bold text-xs sm:text-sm shadow-sm"
            style="background: rgba(212,175,55,0.15); border: 1px solid rgba(212,175,55,0.5); color: #D4AF37;"
          >
            <span class="w-2 h-2 rounded-full animate-ping" style="background:#D4AF37;" aria-hidden="true"></span>
            <i class="fa-solid fa-award" style="color:#D4AF37;" aria-hidden="true"></i>
            <span>{{ hero.badge }}</span>
          </div>

          <!-- Título H1 -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-heading tracking-tight leading-[1.15]" style="color:#fff;">
            {{ hero.titulo }}
            <span style="background: linear-gradient(90deg, #D4AF37, #F3E5AB, #D4AF37); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
              {{ hero.tituloDestacado }}
            </span>
          </h1>

          <!-- Subtítulo -->
          <p
            class="text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            style="color: rgba(255,255,255,0.75);"
            v-html="subtituloHtml"
          ></p>

          <!-- Badge certificado -->
          <div
            class="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-sm"
            style="background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.4); color: #fff; backdrop-filter: blur(8px);"
          >
            <div
              class="w-7 h-7 rounded-lg flex items-center justify-center"
              style="background: rgba(212,175,55,0.25); color: #D4AF37;"
            >
              <i class="fa-solid fa-graduation-cap text-sm" aria-hidden="true"></i>
            </div>
            <span>🎓 Incluye <strong style="color:#D4AF37;">Certificado Oficial de Participación</strong> </span>
          </div>

          <!-- CTAs -->
          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#inscribirme"
              class="cta-pulse w-full sm:w-auto px-8 py-4 rounded-2xl text-white text-base sm:text-lg font-extrabold shadow-xl transition-all flex items-center justify-center gap-3 group"
              style="background: linear-gradient(135deg, #800020, #5c0017, #800020); border: 1px solid rgba(128,0,32,0.5);"
            >
              <span>{{ hero.ctaPrimario }}</span>
              <i class="fa-solid fa-arrow-right-long group-hover:translate-x-1.5 transition-transform" style="color:#D4AF37;" aria-hidden="true"></i>
            </a>
            <a
              href="#propuestas"
              class="w-full sm:w-auto px-6 py-4 rounded-2xl text-white text-sm sm:text-base font-bold shadow-sm transition-all flex items-center justify-center gap-2"
              style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(8px);"
            >
              <i class="fa-solid fa-book-open" style="color:#D4AF37;" aria-hidden="true"></i>
              {{ hero.ctaSecundario }}
            </a>
          </div>

          <!-- COUNTDOWN -->
          <div class="pt-6" style="border-top: 1px solid rgba(255,255,255,0.1);">
            <div class="flex items-center justify-center lg:justify-start gap-2 mb-3 text-xs font-bold uppercase tracking-wider" style="color:#D4AF37;">
              <i class="fa-regular fa-clock" aria-hidden="true"></i>
              <span>{{ hero.countdownLabel }}</span>
            </div>
            <div class="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0" aria-live="polite" aria-label="Cuenta regresiva">
              <!-- Días -->
              <div class="rounded-2xl p-2.5 sm:p-3 text-center shadow-sm" style="background:rgba(128,0,32,0.35); border:1px solid rgba(128,0,32,0.5);">
                <span class="block text-xl sm:text-3xl font-extrabold font-heading" style="color:#fff;">{{ countdown.days }}</span>
                <span class="text-[10px] sm:text-xs font-semibold uppercase" style="color:rgba(255,255,255,0.5);">Días</span>
              </div>
              <!-- Horas -->
              <div class="rounded-2xl p-2.5 sm:p-3 text-center shadow-sm" style="background:rgba(26,54,93,0.6); border:1px solid rgba(26,54,93,0.8);">
                <span class="block text-xl sm:text-3xl font-extrabold font-heading" style="color:#fff;">{{ countdown.hours }}</span>
                <span class="text-[10px] sm:text-xs font-semibold uppercase" style="color:rgba(255,255,255,0.5);">Horas</span>
              </div>
              <!-- Minutos -->
              <div class="rounded-2xl p-2.5 sm:p-3 text-center shadow-sm" style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15);">
                <span class="block text-xl sm:text-3xl font-extrabold font-heading" style="color:#fff;">{{ countdown.minutes }}</span>
                <span class="text-[10px] sm:text-xs font-semibold uppercase" style="color:rgba(255,255,255,0.5);">Min</span>
              </div>
              <!-- Segundos -->
              <div class="rounded-2xl p-2.5 sm:p-3 text-center shadow-sm" style="background:rgba(212,175,55,0.2); border:1px solid rgba(212,175,55,0.4);">
                <span class="block text-xl sm:text-3xl font-extrabold font-heading" style="color:#D4AF37;">{{ countdown.seconds }}</span>
                <span class="text-[10px] sm:text-xs font-semibold uppercase" style="color:rgba(255,255,255,0.5);">Seg</span>
              </div>
            </div>
            <p class="text-xs mt-2 text-center lg:text-left" style="color:rgba(255,255,255,0.45);">
              <i class="fa-solid fa-calendar-day mr-1" style="color:rgba(212,175,55,0.6);" aria-hidden="true"></i>
              Lunes 21 de Septiembre, 14:00 PM • Oruro
            </p>
          </div>
        </div>

        <!-- COLUMNA DERECHA: MOCKUP CELULAR HERO -->
        <div class="lg:col-span-5 flex justify-center">
          <div class="w-full max-w-[290px] sm:max-w-[320px] relative">
            <!-- Aura de fondo -->
            <div
              class="absolute -inset-2 rounded-[44px] blur-xl pointer-events-none"
              style="background: linear-gradient(135deg, #800020, #D4AF37, #1A365D); opacity: 0.4;"
              aria-hidden="true"
            ></div>

            <div class="relative rounded-[40px] p-3 shadow-phone" style="background:#0f172a; border: 4px solid #1e293b;">
              <!-- Notch -->
              <div class="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 rounded-b-xl z-30 flex items-center justify-center" style="background:#1e293b;" aria-hidden="true">
                <div class="w-10 h-1 rounded-full" style="background:#334155;"></div>
                <div class="w-2 h-2 rounded-full ml-2" style="background:#334155;"></div>
              </div>

              <!-- Pantalla 9:16 -->
              <div class="relative w-full aspect-[9/16] rounded-[30px] overflow-hidden">

                <!-- VIDEO EXTERNO (Facebook/TikTok): se muestra si hay facebookUrl o tiktokUrl -->
                <iframe
                  v-if="embedUrl"
                  :src="embedUrl"
                  class="absolute inset-0 w-full h-full"
                  style="border: none; overflow: hidden;"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  :aria-label="`Mensaje Oficial: ${hero.videoPrincipal.orador}`"
                ></iframe>

                <!-- PLACEHOLDER si no hay video -->
                <div
                  v-else
                  class="absolute inset-0 flex flex-col justify-between p-5 text-white"
                  style="background: linear-gradient(180deg, #1A365D 0%, #0f172a 60%, #020617 100%);"
                >
                  <!-- Textura puntos -->
                  <div class="absolute inset-0 pointer-events-none" style="background-image:radial-gradient(#D4AF37 1px,transparent 1px); background-size:16px 16px; opacity:0.08;" aria-hidden="true"></div>
                  <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, #020617 0%, rgba(15,23,42,0.6) 50%, transparent 100%);" aria-hidden="true"></div>

                  <!-- Top badge -->
                  <div class="relative z-10 flex items-center justify-between pt-2">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5" style="background:rgba(128,0,32,0.8); border:1px solid rgba(212,175,55,0.4);">
                      <span class="w-1.5 h-1.5 rounded-full" style="background:#D4AF37;" aria-hidden="true"></span>
                      Mensaje Oficial
                    </span>
                  </div>

                  <!-- Botón play desactivado -->
                  <div class="relative z-10 text-center my-auto">
                    <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full flex items-center justify-center shadow-lg" style="background:rgba(255,255,255,0.1); border:2px solid #D4AF37;">
                      <i class="fa-solid fa-play text-xl sm:text-2xl ml-1" style="color:#D4AF37;" aria-hidden="true"></i>
                    </div>
                    <p class="text-xs font-semibold mt-3 tracking-wide" style="color:#94a3b8;">Video Vertical 9:16</p>
                  </div>

                  <!-- Info orador -->
                  <div class="relative z-10 p-3.5 rounded-2xl" style="background:rgba(15,23,42,0.9); border:1px solid rgba(255,255,255,0.1);">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-xs shrink-0" style="background:#800020; border:2px solid #D4AF37;">DA</div>
                      <div>
                        <h4 class="text-xs font-bold text-white">{{ hero.videoPrincipal.orador }}</h4>
                        <p class="text-[10px]" style="color:#D4AF37;">{{ hero.videoPrincipal.rol }}</p>
                      </div>
                    </div>
                    <p class="mt-2.5 text-[11px] leading-snug line-clamp-2" style="color:#94a3b8;">"{{ hero.videoPrincipal.cita }}"</p>
                  </div>
                </div>

                <!-- Badge y orador flotante SOBRE el video cuando hay video -->
                <template v-if="hero.videoPrincipal.url">
                  <div class="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5 shadow-lg" style="background:rgba(128,0,32,0.85); border:1px solid rgba(212,175,55,0.5); backdrop-filter:blur(4px);">
                      <span class="w-1.5 h-1.5 rounded-full" style="background:#D4AF37;" aria-hidden="true"></span>
                      Mensaje Oficial
                    </span>
                    <span class="text-xs font-mono px-2 py-0.5 rounded" style="background:rgba(0,0,0,0.6); color:#94a3b8;">{{ hero.videoPrincipal.duracion }}</span>
                  </div>
                  <div class="absolute bottom-3 left-3 right-3 z-20 pointer-events-none">
                    <div class="p-3 rounded-2xl" style="background:rgba(15,23,42,0.92); border:1px solid rgba(255,255,255,0.1); backdrop-filter:blur(8px);">
                      <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-[10px] shrink-0" style="background:#800020; border:2px solid #D4AF37;">DA</div>
                        <div>
                          <h4 class="text-[11px] font-bold text-white">{{ hero.videoPrincipal.orador }}</h4>
                          <p class="text-[9px]" style="color:#D4AF37;">{{ hero.videoPrincipal.rol }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>

              </div>
            </div>

            <!-- Etiqueta flotante inferior -->
            <div class="text-center mt-3">
              <span
                class="text-xs font-bold text-white px-3 py-1.5 rounded-full shadow"
                style="background:#800020; border:1px solid rgba(212,175,55,0.4);"
              >
                <i class="fa-solid fa-mobile-screen-button mr-1" style="color:#D4AF37;" aria-hidden="true"></i>
                Mensaje del {{ hero.videoPrincipal.orador }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  hero: {
    badge: string
    titulo: string
    tituloDestacado: string
    subtitulo: string
    ctaPrimario: string
    ctaSecundario: string
    countdownLabel: string
    countdownTarget: string
    videoPrincipal: {
      etiqueta: string
      duracion: string
      orador: string
      rol: string
      cita: string
      url: string | null
      facebookUrl?: string | null
      tiktokUrl?: string | null
    }
  }
}>()

// Computed para generar la URL de embed según la plataforma
const embedUrl = computed(() => {
  const video = props.hero.videoPrincipal
  
  if (video.facebookUrl) {
    // Convertir URL de Facebook a embed
    const encodedUrl = encodeURIComponent(video.facebookUrl)
    return `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&width=320&height=569&appId`
  }
  
  if (video.tiktokUrl) {
    // Convertir URL de TikTok a embed
    const videoId = video.tiktokUrl.split('/video/')[1]?.split('?')[0]
    if (videoId) {
      return `https://www.tiktok.com/embed/v2/${videoId}`
    }
  }
  
  return null
})

const subtituloHtml = computed(() =>
  props.hero.subtitulo
    .replace(
      'Vicepresidencia de la Brigada Parlamentaria de Oruro',
      '<strong style="color:#fff; font-weight:600;">Vicepresidencia de la Brigada Parlamentaria de Oruro</strong>'
    )
    .replace(
      'Dip. Daniel Alcalá',
      '<strong style="color:#D4AF37; font-weight:600;">Dip. Daniel Alcalá</strong>'
    )
)

const countdown = reactive({ days: '00', hours: '00', minutes: '00', seconds: '00' })

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function updateCountdown() {
  const target = new Date(props.hero.countdownTarget).getTime()
  const now = Date.now()
  const diff = target - now
  if (diff <= 0) {
    countdown.days = '00'; countdown.hours = '00'; countdown.minutes = '00'; countdown.seconds = '00'
    return
  }
  countdown.days    = pad(Math.floor(diff / 86_400_000))
  countdown.hours   = pad(Math.floor((diff % 86_400_000) / 3_600_000))
  countdown.minutes = pad(Math.floor((diff % 3_600_000) / 60_000))
  countdown.seconds = pad(Math.floor((diff % 60_000) / 1_000))
}

let timer: ReturnType<typeof setInterval>
onMounted(() => { updateCountdown(); timer = setInterval(updateCountdown, 1000) })
onUnmounted(() => clearInterval(timer))
</script>
