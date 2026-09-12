# Instrucciones para Usar Videos Externos

## 🎥 Cambios Realizados

Se ha actualizado el componente `PhoneMockup.vue` para soportar **ÚNICAMENTE videos externos** mediante enlaces de Facebook y TikTok. Los videos locales han sido eliminados del proyecto para reducir el consumo de ancho de banda.

## 📝 Cómo Funciona

### Prioridad de Visualización:
1. **Video Externo (Facebook/TikTok)**: Si existe `facebookUrl` o `tiktokUrl`, se muestra el video embebido
2. **Placeholder**: Si no hay enlaces de video, se muestra el diseño de placeholder con gradiente

⚠️ **IMPORTANTE**: Ya NO se soportan videos locales. Todos los archivos `.mp4` han sido eliminados del directorio `public/`.

## 🔗 Cómo Agregar Enlaces de Videos

### Para Facebook:

Edita el archivo `server/data/videos.json` y actualiza el campo correspondiente:

```json
{
  "id": 1,
  "videoLocal": null,
  "facebookUrl": "https://www.facebook.com/reel/1052172140565358",
  "tiktokUrl": null
}
```

**Formatos soportados de Facebook:**
- Reels: `https://www.facebook.com/reel/[ID]`
- Videos: `https://www.facebook.com/[usuario]/videos/[ID]`
- Watch: `https://www.facebook.com/watch/?v=[ID]`

### Para TikTok:

```json
{
  "id": 2,
  "videoLocal": null,
  "facebookUrl": null,
  "tiktokUrl": "https://www.tiktok.com/@usuario/video/1234567890"
}
```

**Formato de TikTok:**
- `https://www.tiktok.com/@[usuario]/video/[ID]`

## 📋 Ejemplo Completo

Aquí hay un ejemplo del primer video ya configurado con el enlace de Facebook de prueba:

```json
{
  "id": 1,
  "posicionCelular": "izquierda",
  "capsula": "Cápsula 1",
  "etiqueta": "Lanzamiento Oficial",
  "descripcionVideo": "Presentación desde el hemiciclo de la Brigada de Oruro.",
  "videoLocal": null,
  "facebookUrl": "https://www.facebook.com/reel/1052172140565358",
  "tiktokUrl": null
}
```

## ✅ Pasos para Actualizar Todos los Videos

1. Sube tus videos a Facebook o TikTok
2. Copia el enlace del video publicado
3. Abre `server/data/videos.json`
4. Para cada bloque (id: 1-5), actualiza:
   - `"videoLocal": null` (eliminar referencia a archivo local)
   - `"facebookUrl": "TU_ENLACE_AQUI"` o `"tiktokUrl": "TU_ENLACE_AQUI"`
5. Guarda el archivo

## 🗑️ Videos Locales Eliminados

✅ **Todos los videos han sido eliminados del proyecto:**

- ✅ `/Lanzamiento_Oficial.mp4` - ELIMINADO
- ✅ `/Que_es_el_Encuentro.mp4` - ELIMINADO
- ✅ `/Cuatro_Proyectos.mp4` - ELIMINADO
- ✅ `/Testimonios.mp4` - ELIMINADO
- ✅ `/Cita_Confirmada.mp4` - ELIMINADO
- ✅ `/Mensaje_Oficial.mp4` - ELIMINADO

**Resultado:** Se ha liberado espacio significativo en el servidor y se reducirá el consumo de ancho de banda.

## 🎨 Diseño Responsive

Los videos embebidos se adaptan automáticamente al diseño de smartphone (formato 9:16) y mantienen:
- Badge flotante con el nombre de la cápsula
- Iconos identificativos
- Controles nativos de la plataforma (Facebook/TikTok)

## 🔧 Solución de Problemas

**El video no se muestra:**
- Verifica que el enlace sea público (no privado)
- Asegúrate de usar la URL completa y correcta
- Revisa que el formato del enlace coincida con los ejemplos

**Video se muestra pero no carga:**
- Puede ser una restricción de la plataforma (Facebook/TikTok)
- Verifica la configuración de privacidad del video original
- Prueba con otro video público

## 📱 Recomendaciones

1. **Usar videos verticales** (9:16) para mejor visualización en el mockup de celular
2. **Videos cortos** (30-60 segundos) para mejor engagement
3. **Publicar primero en la plataforma** antes de agregar el enlace
4. **Verificar visibilidad pública** del video antes de usar el enlace
