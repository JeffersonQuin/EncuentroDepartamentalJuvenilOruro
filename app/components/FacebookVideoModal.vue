<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        @click.self="closeModal"
        role="dialog"
        aria-modal="true"
        :aria-label="`Video de Facebook: ${title}`"
      >
        <!-- Contenedor del video -->
        <div class="relative w-full max-w-md bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-oro/30">
          <!-- Header del modal -->
          <div class="flex items-center justify-between p-4 bg-slate-800/80 backdrop-blur-md border-b border-slate-700">
            <div class="flex items-center gap-2">
              <i class="fa-brands fa-facebook text-[#1877F2] text-lg" aria-hidden="true"></i>
              <span class="text-sm font-bold text-white">{{ title }}</span>
            </div>
            <button
              type="button"
              @click="closeModal"
              class="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-oro"
              aria-label="Cerrar video"
            >
              <i class="fa-solid fa-xmark text-sm" aria-hidden="true"></i>
            </button>
          </div>

          <!-- Video iframe de Facebook (9:16) -->
          <div class="relative w-full bg-black" style="aspect-ratio: 9/16;">
            <iframe
              v-if="facebookUrl"
              :src="facebookUrl"
              class="absolute inset-0 w-full h-full"
              style="border:none;overflow:hidden;"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              :title="`Video de Facebook: ${title}`"
            ></iframe>
          </div>

          <!-- Footer con descripción -->
          <div class="p-4 bg-slate-800/80 backdrop-blur-md border-t border-slate-700">
            <p class="text-xs text-slate-300 leading-relaxed">{{ description }}</p>
            <a
              v-if="facebookUrl"
              :href="facebookUrl.replace('/plugins/video.php?', '/').split('&')[0]"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#1877F2] hover:text-[#1565C0] transition-colors"
            >
              <i class="fa-brands fa-facebook" aria-hidden="true"></i>
              Abrir en Facebook
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
  facebookUrl: string | null
  title: string
  description: string
}>()

const emit = defineEmits<{
  close: []
}>()

function closeModal() {
  emit('close')
}

// Cerrar con tecla Escape
function handleEscape(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.isOpen) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})

// Prevenir scroll del body cuando el modal está abierto
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>
