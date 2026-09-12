<template>
  <div class="relative w-full" :class="maxWidth">
    <!-- Aura de fondo -->
    <div
      class="absolute -inset-1 bg-gradient-to-r from-sangre via-oro to-azulNoche rounded-[44px] blur-lg opacity-30 pointer-events-none"
      aria-hidden="true"
    ></div>

    <!-- Cuerpo del smartphone -->
    <div class="relative rounded-[40px] bg-slate-900 p-3 shadow-phone border-4 border-slate-800">
      <!-- Notch superior -->
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-slate-800 rounded-b-xl z-30 flex items-center justify-center"
        aria-hidden="true"
      >
        <div class="w-10 h-1 bg-slate-700 rounded-full"></div>
        <div class="w-2 h-2 bg-slate-700 rounded-full ml-2"></div>
      </div>

      <!-- Pantalla 9:16 -->
      <div class="relative w-full aspect-[9/16] rounded-[30px] overflow-hidden">

        <!-- VIDEO EXTERNO (Facebook/TikTok): se muestra si hay facebookUrl o tiktokUrl -->
        <iframe
          v-if="facebookUrl || tiktokUrl"
          :src="embedUrl"
          class="absolute inset-0 w-full h-full"
          style="border: none; overflow: hidden;"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          :aria-label="`Video: ${title}`"
        ></iframe>

        <!-- VIDEO LOCAL: se muestra si hay videoLocal y NO hay enlaces externos -->
        <video
          v-else-if="videoLocal"
          class="absolute inset-0 w-full h-full object-cover"
          :src="videoLocal"
          controls
          playsinline
          preload="none"
          :aria-label="`Video: ${title}`"
        ></video>

        <!-- PLACEHOLDER: se muestra si no hay ningún video -->
        <div
          v-else
          :class="gradientClass"
          class="absolute inset-0 w-full h-full bg-gradient-to-b flex flex-col justify-between p-5 text-white"
        >
          <!-- Textura de puntos -->
          <div
            class="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
            aria-hidden="true"
          ></div>
          <!-- Overlay degradado inferior -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent pointer-events-none"
            aria-hidden="true"
          ></div>

          <!-- Top: badge de cápsula -->
          <div class="relative z-10 flex items-center justify-between pt-2">
            <span
              class="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-oro/40 text-[9px] font-bold text-oro uppercase tracking-wider flex items-center gap-1.5"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-oro" aria-hidden="true"></span>
              {{ capsuleLabel }}
            </span>
            <i v-if="icon" :class="`fa-solid ${icon}`" class="text-xs text-white/80" aria-hidden="true"></i>
          </div>

          <!-- Centro: botón play -->
          <div class="relative z-10 text-center my-auto">
            <button
              type="button"
              class="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-white/10 backdrop-blur-md border-2 border-oro text-white flex items-center justify-center shadow-lg opacity-60"
              disabled
            >
              <i class="fa-solid fa-play text-2xl sm:text-3xl ml-1" aria-hidden="true"></i>
            </button>
            <p class="text-xs font-semibold text-slate-200 mt-3 tracking-wide">{{ buttonLabel }}</p>
          </div>

          <!-- Bottom: info del video -->
          <div class="relative z-10 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
            <p class="text-[10px] font-bold text-oro mb-1">{{ title }}</p>
            <p class="text-[10px] text-slate-300 leading-snug line-clamp-2">{{ description }}</p>
            <div class="mt-2 flex items-center gap-1.5">
              <i class="fa-solid fa-clock text-slate-500 text-[9px]" aria-hidden="true"></i>
              <span class="text-[9px] text-slate-500 font-medium">Próximamente disponible</span>
            </div>
          </div>
        </div>

        <!-- Badge flotante superior SIEMPRE visible sobre el video -->
        <div
          v-if="videoLocal || facebookUrl || tiktokUrl"
          class="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none"
        >
          <span
            class="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-oro/40 text-[9px] font-bold text-oro uppercase tracking-wider flex items-center gap-1.5 shadow-lg"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-oro" aria-hidden="true"></span>
            {{ capsuleLabel }}
          </span>
          <i v-if="icon" :class="`fa-solid ${icon}`" class="text-xs text-white drop-shadow-lg" aria-hidden="true"></i>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  capsuleLabel: string
  gradientClass: string
  icon?: string
  title: string
  description: string
  buttonLabel: string
  videoLocal?: string | null
  videoUrl?: string | null
  facebookUrl?: string | null
  tiktokUrl?: string | null
  maxWidth?: string
}>(), {
  icon: '',
  videoLocal: null,
  videoUrl: null,
  facebookUrl: null,
  tiktokUrl: null,
  maxWidth: 'max-w-[280px]',
})

// Computed para generar la URL de embed según la plataforma
const embedUrl = computed(() => {
  if (props.facebookUrl) {
    // Convertir URL de Facebook a embed
    // Ejemplo: https://www.facebook.com/reel/1052172140565358
    // a: https://www.facebook.com/plugins/video.php?href=URL&show_text=false&width=734&height=411
    const encodedUrl = encodeURIComponent(props.facebookUrl)
    return `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&width=280&height=497&appId`
  }
  
  if (props.tiktokUrl) {
    // Convertir URL de TikTok a embed
    // Ejemplo: https://www.tiktok.com/@user/video/123456789
    // a: https://www.tiktok.com/embed/v2/123456789
    const videoId = props.tiktokUrl.split('/video/')[1]?.split('?')[0]
    if (videoId) {
      return `https://www.tiktok.com/embed/v2/${videoId}`
    }
  }
  
  return props.videoUrl || ''
})
</script>
