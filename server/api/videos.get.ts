export default defineEventHandler(() => {
  // Datos inline para compatibilidad con Vercel
  const data = {
    "seccion": {
      "badge": "Contenido Exclusivo en Video",
      "titulo": "Conoce cada detalle del Encuentro en formato dinámico",
      "descripcion": "Videos explicativos diseñados para tu celular, explicando cada fase, ley y oportunidad de este evento histórico."
    },
    "bloques": [
      {
        "id": 1,
        "posicionCelular": "izquierda",
        "capsula": "Cápsula 1",
        "gradiente": "from-sangre to-azulNoche",
        "icono": "fa-bullhorn",
        "botonLabel": "Reproduciendo",
        "etiqueta": "Lanzamiento Oficial",
        "descripcionVideo": "Presentación desde el hemiciclo de la Brigada de Oruro.",
        "videoLocal": null,
        "facebookUrl": null,
        "tiktokUrl": "https://www.tiktok.com/@diputado.daniel.alcala/video/7686220570236701973?_r=1&_t=ZS-99n15NeRY8K",
        "texto": {
          "numero": "Bloque 01",
          "categoria": "Anuncio",
          "colorCategoria": "text-sangre",
          "titulo": "Lanzamiento Oficial: Oruro abre sus puertas a la juventud",
          "parrafo": "La Brigada Parlamentaria de Oruro presenta formalmente la convocatoria dirigida a colegiales de secundaria, estudiantes universitarios de la UTO, institutos técnicos y colectivos juveniles de todo el departamento.",
          "puntos": [
            "Convocatoria abierta para todos lo jovenes de Oruro.",
            "Espacio libre, plural e inclusivo sin distinción política."
          ]
        }
      },
      {
        "id": 2,
        "posicionCelular": "derecha",
        "capsula": "Cápsula 2",
        "gradiente": "from-azulNoche via-slate-900 to-sangre",
        "icono": "fa-lightbulb",
        "botonLabel": "Reproduciendo",
        "etiqueta": "¿Qué es el Encuentro?",
        "descripcionVideo": "Descubre en qué consiste este encuentro y por qué importa tu participación.",
        "videoLocal": null,
        "facebookUrl": null,
        "tiktokUrl": "https://www.tiktok.com/@diputado.daniel.alcala/video/7686901152159501588?_r=1&_t=ZS-99q7ZJ1ff7M",
        "texto": {
          "numero": "Bloque 02",
          "categoria": "Propósito Central",
          "colorCategoria": "text-azulNoche",
          "titulo": "¿Qué es el Encuentro Departamental Juvenil?",
          "parrafo": "Una plataforma abierta donde la experiencia y el entusiasmo de la juventud se unen para construir el presente. Participa en un espacio dinámico para reflexionar sobre nuestras prioridades, conectar con otros talentos locales y plasmar tus ideas en soluciones reales para el departamento.",
          "cards": [
            {
              "icono": "fa-comments",
              "colorIcono": "text-sangre",
              "titulo": "Participación",
              "descripcion": "Haz escuchar tu voz en las temáticas centrales."
            },
           {
              "icono": "fa-lightbulb",
              "colorIcono": "text-oro",
              "titulo": "Oportunidad",
              "descripcion": "Sé parte de iniciativas que transforman nuestro Departamento."
           }
          ]
        }
      },
      {
        "id": 3,
        "posicionCelular": "izquierda",
        "capsula": "Cápsula 3",
        "gradiente": "from-slate-900 via-sangreDark to-slate-950",
        "icono": "fa-gavel",
        "botonLabel": "Reproduciendo",
        "etiqueta": "Proyectos de Ley",
        "descripcionVideo": "El Dip. Daniel Alcalá explica los 4 proyectos normativos para los jóvenes de Oruro.",
        "videoLocal": null,
        "facebookUrl": "https://www.facebook.com/reel/2625366114551623",
        "tiktokUrl": null,
        "texto": {
          "numero": "Bloque 03",
          "categoria": "Agenda Normativa",
          "colorCategoria": "text-sangre",
          "titulo": "Cuatro Proyectos de Ley explicados",
          "parrafo": "Conoce las temáticas clave diseñadas para potenciar el liderazgo de los estudiantes, el impulso de los emprendedores y la dedicación de nuestros medallistas. Un recorrido por las oportunidades que buscan fortalecer el rol activo de los jóvenes en el desarrollo económico, social y cultural de Oruro.",
          "nota": {
            "icono": "fa-sparkles",
            "titulo": "Aporta tu perspectiva:",
            "texto": "Tus observaciones e ideas ayudarán a definir las siguientes acciones del encuentro."
          }
        }
      },
      {
        "id": 4,
        "posicionCelular": "derecha",
        "capsula": "Cápsula 4",
        "gradiente": "from-azulNoche via-slate-900 to-azulProfundo",
        "icono": "fa-users",
        "botonLabel": "Reproduciendo",
        "etiqueta": "Motivación",
        "descripcionVideo": "Descubre el propósito que impulsa a la juventud a sumarse a este gran encuentro.",
        "videoLocal": null,
        "facebookUrl": null,
        "tiktokUrl": "https://www.tiktok.com/@momentoinformativo.or/video/7685858851798797575?_r=1&_t=ZS-99p46UBHyTs",
        "texto": {
          "numero": "Bloque 04",
          "categoria": "Voces de Oruro",
          "colorCategoria": "text-azulNoche",
          "titulo": "Liderazgo en acción",
          "parrafo": "Este encuentro representa una oportunidad clave para reafirmar el compromiso real de las nuevas generaciones con el desarrollo, la innovación y el progreso de Oruro. Un espacio pensado para integrar visiones, fomentar el trabajo colectivo y convertir el entusiasmo juvenil en iniciativas duraderas que beneficien a toda nuestra comunidad.",
          "cita": {
            "texto": "Más que ser el futuro, los jóvenes tenemos la oportunidad de actuar y transformar nuestro presente.",
            "autor": "Mensaje del Encuentro"
          }
        }
      },
      {
        "id": 5,
        "posicionCelular": "izquierda",
        "capsula": "Cápsula 5",
        "gradiente": "from-sangre via-slate-900 to-azulNoche",
        "icono": "fa-map-pin",
        "botonLabel": "Reproduciendo",
        "etiqueta": "¿Cuándo y dónde?",
        "descripcionVideo": "Horarios, ubicación exacta y detalles para asistir al Encuentro Departamental Juvenil de Oruro.",
        "videoLocal": null,
        "facebookUrl": null,
        "tiktokUrl": "https://www.tiktok.com/@sdds.y.sa/video/7686251086067354901?_r=1&_t=ZS-99p4QaVgHLQ",
        "texto": {
          "numero": "Bloque 05",
          "categoria": "Información del Evento",
          "colorCategoria": "text-sangre",
          "titulo": "¿Cuándo y dónde? Todo lo que necesitas saber",
          "parrafo": "El Encuentro Departamental Juvenil se llevará a cabo el lunes 21 de septiembre de 2026, celebrando el Día de la Juventud y la Primavera. La cita es en el Auditorio Principal de la Facultad de Arquitectura y Urbanismo de la U.T.O., ubicado en la esquina de las calles 6 de Octubre y Ayacucho.",
          "badges": [
            { "icono": "fa-clock", "texto": "14:00 Puntual", "estilo": "bg-slate-100 text-slate-800 border-slate-200" },
            { "icono": "fa-building-columns", "texto": "Auditorio Fac. Arquitectura UTO", "estilo": "bg-slate-100 text-slate-800 border-slate-200" },
            { "icono": "fa-map-location-dot", "texto": "6 de Octubre esq. Ayacucho", "estilo": "bg-amber-50 text-amber-900 border-oro/40" }
          ]
        }
      }
    ]
  }
  
  return data
})
