export default defineEventHandler(() => {
  // En Vercel, los archivos de data están en el output
  const data = {
    "nombre": "Encuentro Departamental Juvenil 2026",
    "subtitulo": "Liderazgo que transforma, juventud que construye",
    "descripcion": "Convocado por la Brigada Parlamentaria de Oruro, liderado por el Dip. Daniel Alcalá. El mayor espacio de concertación y propuestas para las juventudes orureñas.",
    "fecha": {
      "display": "Lunes 21 de Septiembre, 2026",
      "iso": "2026-09-21T14:00:00",
      "hora": "14:00 PM",
      "diaSemana": "Lunes"
    },
    "ciudad": "Oruro, Bolivia",
    "convocante": {
      "cargo": "La Brigada Parlamentaria de Oruro",
      "nombre": "Dip. Daniel Alcalá",
      "iniciales": "DA",
      "rol": "Vicepresidente Brigada de Oruro",
      "cita": "Jóvenes es momento de que sus ideas sean leyes concretas."
    },
    "certificado": {
      "incluye": true,
      "descripcion": "Certificado Oficial de Participación",
      "detalle": "Todos los asistentes registrados que completen la jornada presencial recibirán su certificado físico."
    },
    "registroUrl": "https://forms.gle/",
    "ingreso": "Libre y gratuito, previa inscripción",
    "cupos": "Limitados",
    "topBar": {
      "badge": "Presencial",
      "texto": "21 de Septiembre, 14:00 PM • Ciudad de Oruro, Bolivia",
      "extra": "Cupos Limitados con Certificación"
    },
    "logos": {
      "brigada": {
        "nombre": "Brigada Parlamentaria",
        "subtitulo": "de Oruro ",
        "icono": "fa-landmark"
      },
      "jovenes": {
        "nombre": "Jóvenes Líderes",
        "subtitulo": "Daniel Alcalá",
        "icono": "fa-seedling"
      }
    },
    "navLinks": [
      { "label": "Inicio", "href": "#inicio", "icono": "fa-house" },
      { "label": "Mensajes Clave", "href": "#videos", "icono": "fa-film" },
      { "label": "4 Proyectos de Ley", "href": "#propuestas", "icono": "fa-scale-balanced" },
      { "label": "Cronograma", "href": "#cronograma", "icono": "fa-calendar-check" },
      { "label": "Ubicación", "href": "#ubicacion", "icono": "fa-location-dot" }
    ],
    "hero": {
      "badge": "Encuentro Departamental Juvenil 2026",
      "titulo": "Liderazgo que transforma,",
      "tituloDestacado": "juventud que construye",
      "subtitulo": "Convocado por la Brigada Parlamentaria de Oruro, liderado por el Dip. Daniel Alcalá. El mayor espacio de concertación y propuestas para las juventudes orureñas.",
      "ctaPrimario": "Registrarme al Evento",
      "ctaSecundario": "Ver 4 Proyectos de Ley",
      "countdownLabel": "Cuenta Regresiva para la Cita Presencial",
      "countdownTarget": "2026-09-21T14:00:00",
      "videoPrincipal": {
        "etiqueta": "Mensaje",
        "duracion": "01:00",
        "orador": "Dip. Daniel Alcalá",
        "rol": "Vicepresidente Brigada Oruro",
        "cita": "Jóvenes es momento de que sus ideas sean leyes concretas.",
        "url": "https://www.facebook.com/reel/1860635711563450",
        "facebookUrl": "https://www.facebook.com/reel/1860635711563450",
        "tiktokUrl": null
      }
    },
    "inscripcion": {
      "titulo": "¡Únete al Encuentro Juvenil 2026!",
      "subtitulo": "El ingreso es totalmente libre y gratuito. Confirma tu participación.",
      "badgeTexto": "Asegura tu Asistencia Gratuita",
      "ctaTexto": "¡Inscribirme Aquí!",
      "garantias": [
        { "icono": "fa-shield-halved", "texto": "Participación Gratuita", "color": "text-sangre" },
        { "icono": "fa-certificate", "texto": "Certificado", "color": "text-oro" },
        { "icono": "fa-users", "texto": "Cupos Limitados", "color": "text-azulNoche" }
      ]
    },
    "footer": {
      "descripcion": "Iniciativa ciudadana convocada por la Brigada Parlamentaria de Oruro para promover el protagonismo de las nuevas generaciones.",
      "ciudad": "Oruro, Estado Plurinacional de Bolivia",
      "aviso": "Página 100% informativa. Las inscripciones presenciales se gestionan a través del formulario de inscripcion.",
      "copyright": "© 2026 Encuentro Departamental Juvenil de Oruro.",
      "credits": "Jovenes Lideres"
    }
  }
  
  return data
})
