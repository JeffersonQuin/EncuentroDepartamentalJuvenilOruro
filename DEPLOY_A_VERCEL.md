# 🚀 Deploy a Vercel - Pasos Rápidos

## ✅ Cambios Listos para Deploy

Los siguientes cambios ya están aplicados y listos para subir a Vercel:

1. ✅ **Fix del error 500** - Datos inline en `evento.get.ts`
2. ✅ **Protección en index.vue** - v-if para evitar undefined
3. ✅ **Loading state** - Pantalla de carga mientras cargan datos
4. ✅ **Videos externos** - Sistema de Facebook/TikTok
5. ✅ **Formulario embebido** - Google Forms integrado

---

## 🔥 OPCIÓN RÁPIDA - Copiar y Pegar

### Windows (CMD o PowerShell):
```bash
cd "D:\Marketing Evento\encuentro-juvenil-oruro"
git add .
git commit -m "fix: Error 500 en Vercel + videos externos + formulario embebido"
git push origin main
```

### Si git no está configurado:
```bash
git config user.name "Tu Nombre"
git config user.email "tu@email.com"
git add .
git commit -m "fix: Error 500 en Vercel + videos externos + formulario embebido"
git push origin main
```

---

## 📋 Pasos Detallados

### 1️⃣ Abre la Terminal
- En VS Code: `Terminal` → `New Terminal` (o `Ctrl + ñ`)
- O usa CMD/PowerShell de Windows

### 2️⃣ Navega al Proyecto
```bash
cd "D:\Marketing Evento\encuentro-juvenil-oruro"
```

### 3️⃣ Verifica Estado de Git
```bash
git status
```

Deberías ver archivos modificados en rojo.

### 4️⃣ Agrega Todos los Cambios
```bash
git add .
```

### 5️⃣ Haz Commit
```bash
git commit -m "fix: Error 500 en Vercel + videos externos + formulario embebido"
```

### 6️⃣ Push a GitHub
```bash
git push origin main
```

O si tu rama principal es `master`:
```bash
git push origin master
```

---

## ⏱️ Tiempo Estimado de Deploy

- **Push a GitHub:** ~10-30 segundos
- **Vercel detecta cambios:** ~5-10 segundos  
- **Build completo:** ~1-3 minutos
- **Deploy en vivo:** ~10-20 segundos

**Total:** ~2-4 minutos aproximadamente

---

## 🔍 Monitorear el Deploy en Vercel

1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click en tu proyecto
3. Verás "Building" aparecer automáticamente
4. Espera a que cambie a "Ready"
5. Click en "Visit" para ver tu sitio actualizado

---

## ✅ Verificación Post-Deploy

Una vez que el deploy esté listo, verifica:

### Página Principal:
- [ ] No hay error 500
- [ ] Top Bar se muestra correctamente
- [ ] Hero con video de Facebook funciona
- [ ] Countdown funciona
- [ ] Navegación funciona

### Sección Videos:
- [ ] Video Cápsula 1 (Facebook) carga
- [ ] Cápsulas 2-5 muestran placeholders
- [ ] Diseño se ve bien

### Formulario:
- [ ] Formulario de Google Forms carga
- [ ] Se puede completar y enviar
- [ ] Botón flotante funciona

### Mobile:
- [ ] Todo se ve bien en móvil
- [ ] Formulario es responsive
- [ ] Videos se adaptan

---

## 🆘 Si Algo Sale Mal

### Error: "failed to push some refs"
```bash
# Primero haz pull para traer cambios remotos
git pull origin main
# Luego intenta push nuevamente
git push origin main
```

### Error: "Permission denied"
```bash
# Necesitas configurar tus credenciales de Git
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### Vercel sigue mostrando error 500
1. Ve a Vercel Dashboard → Tu Proyecto → Deployments
2. Click en el último deployment
3. Click en "..." (tres puntos)
4. Click en "Redeploy"
5. Marca "Use existing Build Cache" como NO
6. Click en "Redeploy"

---

## 📊 Resumen de lo que Estás Subiendo

### Archivos Modificados:
- `app/pages/index.vue` - Fix error + loading state
- `app/components/InscripcionCta.vue` - Formulario embebido
- `app/components/PhoneMockup.vue` - Videos externos
- `app/components/HeroSection.vue` - Video externo Hero
- `app/components/VideosZigzag.vue` - Props actualizados
- `app/components/TheFooter.vue` - Botón actualizado
- `server/api/evento.get.ts` - Datos inline para Vercel
- `server/data/evento.json` - Video Hero actualizado
- `server/data/videos.json` - Videos externos configurados
- `.gitignore` - Reglas para videos

### Archivos Nuevos:
- `INSTRUCCIONES_VIDEOS.md`
- `RESUMEN_CAMBIOS_VIDEOS.md`
- `RESUMEN_VIDEO_HERO.md`
- `RESUMEN_FORMULARIO_INSCRIPCION.md`
- `RESUMEN_FINAL_CAMBIOS.md`
- `SOLUCION_ERROR_VERCEL.md`
- `DEPLOY_A_VERCEL.md` (este archivo)

### Archivos Eliminados:
- 6 archivos `.mp4` de la carpeta `public/`

---

## 🎉 Después del Deploy Exitoso

Tu sitio web estará:
- ✅ Funcionando sin errores
- ✅ Con videos de Facebook/TikTok
- ✅ Con formulario de inscripción embebido
- ✅ Optimizado y rápido
- ✅ Responsive en todos los dispositivos

---

## 📞 Soporte Adicional

Si necesitas ayuda:
1. Revisa los logs en Vercel Dashboard
2. Verifica que todos los archivos se hayan subido a GitHub
3. Asegúrate de que el build terminó sin errores

---

**Comando Rápido (Copiar y Pegar):**
```bash
cd "D:\Marketing Evento\encuentro-juvenil-oruro" && git add . && git commit -m "fix: Error 500 + videos externos + formulario" && git push origin main
```

**¡Suerte con el deploy!** 🚀
