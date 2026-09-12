<template>
  <aside
    aria-label="Aviso de fecha y lugar del evento"
    class="text-white text-xs py-2 px-4 text-center"
    style="background: linear-gradient(90deg, #1A365D 0%, #0f172a 50%, #1A365D 100%); border-bottom: 1px solid rgba(212,175,55,0.3);"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-center gap-2 font-medium flex-wrap">
      <span
        class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-oro text-azulNoche uppercase tracking-wider"
      >
        {{ topBar.badge }}
      </span>
      <span>{{ topBar.texto }}</span>
      <span class="hidden md:inline text-oro">• {{ topBar.extra }}</span>
    </div>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  topBar: {
    badge: string
    texto: string
    extra: string
  }
}>()
</script>
