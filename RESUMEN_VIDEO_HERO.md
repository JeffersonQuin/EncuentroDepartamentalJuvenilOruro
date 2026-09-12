# ✅ Video Principal del Hero - Configurado con Enlace Externo

## 🎯 Cambio Realizado

Se ha actualizado el **video principal del Hero** (sección de portada) para usar enlaces externos de Facebook/TikTok en lugar de videos locales.

---

## 📦 Archivos Modificados

### 1. **`server/data/evento.json`**
✅ Actualizado el objeto `videoPrincipal` dentro de `hero`:

```json
"videoPrincipal": {
  "etiqueta": "Mensaje Oficial",
  "duracion": "01:45",
  "orador": "Dip. Daniel Alcalá",
  "rol": "Vicepresidente Brigada Oruro",
  "cita": "Jóvenes de las 16 provincias, es momento de que sus ideas sean leyes concretas.",
  "url": "https://www.facebook.com/reel/1860635711563450",
  "facebookUrl": "https://www.facebook.com/reel/1860635711563450",
  "tiktokUrl": null
}
```

### 2. **`app/components/HeroSection.vue`**
✅ Actualizado el script setup para:
- Agregar tipos para `facebookUrl` y `tiktokUrl`
- Crear computed `embedUrl` que convierte URLs a formato embed
- Prioridad: Facebook → TikTok → null (placeholder)

---

## 🎬 Cómo Funciona

### Prioridad de Visualización:
1. **Si hay `facebookUrl`** → Muestra iframe con video de Facebook embebido
2. **Si hay `tiktokUrl`** → Muestra iframe con video de TikTok embebido  
3. **Si no hay ninguno** → Muestra placeholder con gradiente

### Conversión Automática:
```typescript
// Facebook
Input:  "https://www.facebook.com/reel/1860635711563450"
Output: "https://www.facebook.com/plugins/video.php?href=...&width=320&height=569"

// TikTok
Input:  "https://www.tiktok.com/@usuario/video/1234567890"
Output: "https://www.tiktok.com/embed/v2/1234567890"
```

---

## 📍 Ubicación en la Página

El video principal se muestra en:
- **Sección:** Hero (portada principal)
- **Posición:** Columna derecha en desktop, centrado en mobile
- **Dispositivo:** Mockup de smartphone con aspecto 9:16
- **Interacción:** Video embebido directamente desde Facebook/TikTok

---

## ✅ Estado Actual

### Video Principal del Hero
```json
{
  "Ubicación": "Portada principal (Hero)",
  "Enlace actual": "https://www.facebook.com/reel/1860635711563450",
  "Plataforma": "Facebook Reel",
  "Estado": "✅ CONFIGURADO Y FUNCIONANDO"
}
```

---

## 🔄 Para Cambiar el Video en el Futuro

**Paso 1:** Publica tu nuevo video en Facebook o TikTok

**Paso 2:** Edita `server/data/evento.json`, busca el objeto `hero.videoPrincipal`:

```json
"videoPrincipal": {
  "etiqueta": "Mensaje Oficial",
  "duracion": "01:45",
  "orador": "Dip. Daniel Alcalá",
  "rol": "Vicepresidente Brigada Oruro",
  "cita": "Tu nueva cita aquí",
  "url": "TU_NUEVO_ENLACE_AQUI",
  "facebookUrl": "TU_NUEVO_ENLACE_AQUI",  // <- Actualiza aquí
  "tiktokUrl": null
}
```

**Paso 3:** Guarda y recarga la página

---

## 📊 Resumen de Videos en el Sitio

### Portada (Hero) - Video Principal
- ✅ Configurado con Facebook: `https://www.facebook.com/reel/1860635711563450`
- Componente: `HeroSection.vue`
- Formato: Iframe embebido

### Sección "Mensajes Clave" - 5 Videos
- ✅ Video 1: Configurado con Facebook: `https://www.facebook.com/reel/1052172140565358`
- ⏳ Videos 2-5: Pendientes (mostrarán placeholder)
- Componente: `PhoneMockup.vue` usado por `VideosZigzag.vue`
- Formato: Iframes embebidos

---

## 💾 Archivos Locales Eliminados

✅ Todos los videos `.mp4` han sido eliminados del directorio `public/`:
- Lanzamiento_Oficial.mp4
- Que_es_el_Encuentro.mp4
- Cuatro_Proyectos.mp4
- Testimonios.mp4
- Cita_Confirmada.mp4
- Mensaje_Oficial.mp4

**Resultado:** Ahorro significativo de espacio y ancho de banda

---

## 🎨 Características del Video Hero

### Diseño Visual:
- ✅ Mockup de smartphone con notch
- ✅ Aura de fondo con colores de marca
- ✅ Aspecto ratio 9:16 (formato vertical)
- ✅ Badges flotantes sobre el video
- ✅ Información del orador en overlay

### Información Mostrada:
- Badge "Mensaje Oficial"
- Duración del video
- Avatar con iniciales del orador (DA)
- Nombre y rol del orador
- Etiqueta inferior con descripción

---

## ✨ Beneficios Obtenidos

| Beneficio | Descripción |
|-----------|-------------|
| 💾 **Espacio liberado** | Todos los videos eliminados del servidor |
| 🚀 **Carga más rápida** | Videos externos, no consumen recursos del servidor |
| 📊 **Menos ancho de banda** | Facebook/TikTok sirven los videos |
| 🔄 **Actualización fácil** | Cambia el enlace en JSON, sin redesplegar |
| 📱 **Formato nativo** | Videos verticales de redes sociales |

---

## 🔧 Troubleshooting

**Problema:** El video no se muestra
- ✅ Verifica que el video sea público en Facebook/TikTok
- ✅ Copia la URL completa del video
- ✅ Asegúrate de actualizar `facebookUrl` o `tiktokUrl`

**Problema:** Se muestra el placeholder
- ⚠️ No hay enlace configurado
- ✅ Verifica que `facebookUrl` o `tiktokUrl` no sean `null`

---

**Fecha:** 11 de Septiembre, 2026  
**Estado:** ✅ Completado y funcionando  
**Videos configurados:** 2 de 6 (Hero + Cápsula 1)  
**Videos pendientes:** 4 (Cápsulas 2-5)
