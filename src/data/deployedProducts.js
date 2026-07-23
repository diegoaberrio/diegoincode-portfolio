/**
 * Productos desplegados — fuente de datos para la sección "Productos desplegados".
 *
 * Cada entrada representa una aplicación real, construida y publicada, que puede
 * explorarse en vivo. La descripción se basa únicamente en información pública
 * verificable (metadatos de cada sitio) o, cuando no hay suficiente información,
 * en un texto neutral. No se atribuyen funcionalidades, métricas ni usuarios que
 * no puedan verificarse.
 *
 * Campos:
 * - slug: identificador único
 * - name: nombre del producto
 * - url: demo pública (no modificar)
 * - description: texto corto y verificable
 * - category: etiqueta breve de dominio
 * - icon: nombre de icono de lucide-react
 * - featured: si ocupa una tarjeta destacada en el bento grid
 */

export const deployedProducts = [
  {
    slug: "oralela",
    name: "OralELA",
    url: "https://oralela.diegoincode.com/login",
    description:
      "Registro y seguimiento de salud oral en pacientes con ELA, desarrollado en colaboración con CEADELA.",
    category: "Salud digital",
    icon: "HeartPulse",
    featured: true,
  },
  {
    slug: "turnoos",
    name: "TurnoOS",
    url: "https://turnoos.diegoincode.com/",
    description:
      "Demo premium para digitalizar el cambio de turno en centros de distribución logística: incidencias, tareas, KPIs y traspaso claro entre equipos.",
    category: "Logística",
    icon: "CalendarClock",
    featured: true,
  },
  {
    slug: "signalos",
    name: "SignalOS",
    url: "https://signalos.diegoincode.com/",
    description:
      "Plataforma B2B de inteligencia comercial territorial para captar señales, clasificar oportunidades y priorizar la acción comercial.",
    category: "Inteligencia comercial",
    icon: "Radar",
    featured: false,
  },
  {
    slug: "replyos",
    name: "ReplyOS",
    url: "https://replyos.diegoincode.com/",
    description:
      "Agente conversacional con IA que responde consultas, capta leads y apoya la conversión desde el chat.",
    category: "IA conversacional",
    icon: "MessageSquare",
    featured: false,
  },
  {
    slug: "stockos",
    name: "StockOS",
    url: "https://stockos.diegoincode.com/",
    description:
      "Demo premium para explorar, configurar y evaluar estrategias de inversión con una interfaz dark-glass.",
    category: "Fintech",
    icon: "BarChart3",
    featured: false,
  },
  {
    slug: "wealthos",
    name: "WealthOS",
    url: "https://wealthos.diegoincode.com/",
    description:
      "Demo de portfolio orientada a IA para explorar análisis financiero y apoyo a la toma de decisiones de inversión.",
    category: "Fintech · IA",
    icon: "LineChart",
    featured: false,
  },
  {
    slug: "fleetos",
    name: "FleetOS",
    url: "https://fleetos.diegoincode.com/",
    description:
      "Aplicación de operaciones de flota, desplegada y disponible para explorar.",
    category: "Operaciones",
    icon: "Truck",
    featured: false,
  },
  {
    slug: "payflowos",
    name: "PayFlowOS",
    url: "https://payflowos.diegoincode.com/login",
    description: "Aplicación web desplegada y disponible para explorar.",
    category: "Producto digital",
    icon: "Wallet",
    featured: false,
  },
  {
    slug: "bohemia",
    name: "Bohemia",
    url: "https://bohemia-cb.com/",
    description:
      "Tienda online de regalos personalizados (mugs, termos, camisetas y packs) con estética cálida y pedidos gestionados por WhatsApp.",
    category: "E-commerce",
    icon: "Gift",
    featured: false,
  },
];
