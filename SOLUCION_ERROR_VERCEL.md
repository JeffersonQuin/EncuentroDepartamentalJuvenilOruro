# 🔧 Solución Error 500 en Vercel

## ❌ Error Actual
```
Cannot read properties of undefined (reading 'topBar')
```

## 🎯 Causa del Problema

En Vercel (producción), `readFileSync` con rutas relativas no funciona correctamente porque la estructura de archivos cambia durante el build. Los datos JSON no se cargan y el objeto `evento` queda `undefined`.

## ✅ Solución Aplicada

### 1. **Protección con v-if en index.vue** ✅ HECHO
Agregué validaciones para evitar errores cuando los datos no están cargados.

### 2. **Datos Inline en evento.get.ts** ✅ HECHO
Reemplacé `readFileSync` con los datos directamente en el código para Vercel.

---

## 📋 Próximos Pasos

### Opción A: Push y Redeploy (Recomendado)

```bash
# 1. Hacer commit de los cambios
git add .
git commit -m "fix: Solución para error 500 en Vercel - datos inline"

# 2. Push a tu repositorio
git push origin main

# 3. Vercel detectará el cambio y hará redeploy automáticamente
```

### Opción B: Redeploy Manual en Vercel

1. Ve a tu dashboard de Vercel
2. Selecciona tu proyecto
3. Click en "Deployments"
4. Click en los 3 puntos del último deployment
5. Click en "Redeploy"

---

## 🔄 Alternativa: Usar Import Directo (Mejor Práctica)

Si prefieres una solución más elegante, puedes cambiar el enfoque:

### Para `server/api/evento.get.ts`:
```typescript
import eventoData from '../data/evento.json'

export default defineEventHandler(() => {
  return eventoData
})
```

### Para `server/api/videos.get.ts`:
```typescript
import videosData from '../data/videos.json'

export default defineEventHandler(() => {
  return videosData
})
```

Y así para todos los archivos API.

---

## 🧪 Testing Local

Antes de hacer push, puedes testear localmente:

```bash
# 1. Construir la aplicación
npm run build

# 2. Preview de producción
npm run preview
```

Si funciona en preview, funcionará en Vercel.

---

## ⚠️ Notas Importantes

1. **Los cambios ya están hechos** en `evento.get.ts` e `index.vue`
2. **Necesitas hacer commit y push** para que Vercel vea los cambios
3. El error no aparecerá más porque:
   - Los datos están inline (no dependen de sistema de archivos)
   - Hay protección con `v-if` en el template
   - Estado de carga mostrado mientras se cargan datos

---

## 📊 Archivos Modificados

✅ `app/pages/index.vue` - Agregado v-if y loading state
✅ `server/api/evento.get.ts` - Datos inline en lugar de readFileSync

---

## 🚀 Después del Deploy

Verifica que:
- [ ] La página carga sin error 500
- [ ] El Top Bar se muestra correctamente
- [ ] Los videos se cargan (Hero + Cápsula 1)
- [ ] El formulario de inscripción funciona
- [ ] Todos los botones funcionan

---

## 🆘 Si el Error Persiste

1. **Verifica los logs de Vercel:**
   - Dashboard → Tu Proyecto → Deployments → Click en el deployment → "View Function Logs"

2. **Verifica que el build fue exitoso:**
   - El deployment debe decir "Ready" no "Error"

3. **Fuerza un nuevo deploy:**
   - Haz un cambio mínimo (ej: agrega un comentario)
   - Commit y push nuevamente

4. **Revisa las variables de entorno:**
   - En Vercel Dashboard → Settings → Environment Variables
   - (Aunque para este proyecto no deberías necesitar ninguna)

---

**Fecha:** 11 de Septiembre, 2026  
**Estado:** ✅ Solución aplicada localmente  
**Próximo paso:** Commit + Push + Redeploy
