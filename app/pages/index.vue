<template>
  <div class="font-sans antialiased text-slate-800 bg-marfil">

    <!-- Top Bar informativa -->
    <TheTopBar :top-bar="evento.topBar" />

    <!-- Header / Navegación flotante -->
    <TheHeader :nav-links="evento.navLinks" />

    <!-- Hero Section con countdown y mockup celular -->
    <HeroSection :hero="evento.hero" />

    <!-- Secciones zigzag de videos verticales -->
    <VideosZigzag :data="videos" />

    <!-- 4 Proyectos de Ley -->
    <ProyectosLey :data="proyectosLey" />

    <!-- Ejes temáticos y certificado -->
    <EjesTematicos :data="ejesTematicos" />

    <!-- Cronograma interactivo -->
    <CronogramaTimeline :data="cronograma" />

    <!-- Flyer oficial del evento -->
    <FlyerOficial />

    <!-- Ubicación y mapa -->
    <UbicacionMapa :data="ubicacion" />

    <!-- Sección CTA de inscripción -->
    <InscripcionCta
      :registro-url="evento.registroUrl"
      :inscripcion="evento.inscripcion"
    />

    <!-- Footer institucional + botón flotante -->
    <TheFooter
      :footer="evento.footer"
      :nav-links="evento.navLinks"
      :registro-url="evento.registroUrl"
    />

  </div>
</template>

<script setup lang="ts">
// Carga paralela de todos los datos desde las API routes de Nitro
const [
  { data: evento },
  { data: videos },
  { data: proyectosLey },
  { data: ejesTematicos },
  { data: cronograma },
  { data: ubicacion },
] = await Promise.all([
  useAsyncData('evento',          () => $fetch('/api/evento')),
  useAsyncData('videos',          () => $fetch('/api/videos')),
  useAsyncData('proyectos-ley',   () => $fetch('/api/proyectos-ley')),
  useAsyncData('ejes-tematicos',  () => $fetch('/api/ejes-tematicos')),
  useAsyncData('cronograma',      () => $fetch('/api/cronograma')),
  useAsyncData('ubicacion',       () => $fetch('/api/ubicacion')),
])

// SEO dinámico desde los datos del evento
useSeoMeta({
  title:           () => `${evento.value?.nombre} | Oruro, Bolivia`,
  description:     () => evento.value?.descripcion,
  ogTitle:         () => evento.value?.nombre,
  ogDescription:   () => evento.value?.descripcion,
  twitterCard:     'summary_large_image',
  twitterTitle:    () => evento.value?.nombre,
  twitterDescription: () => evento.value?.descripcion,
})
</script>
