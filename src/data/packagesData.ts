import { SoundPackage } from '../types';

export const SOUND_PACKAGES: SoundPackage[] = [
  {
    id: 'pack-civico-academico',
    title: 'Paquete Cívico & Protocolar Institucional',
    targetAudience: 'Colegios, Municipalidades, Ceremonias de Graduación y Conferencias',
    capacity: 'Hasta 350 personas (espacios cerrados o patio central)',
    pricePerDay: 380,
    description: 'Solución balanceada y cristalina para discursos, entonación de himnos, actos protocolares y ambientación musical sin saturación ni acoples indeseados.',
    includedEquipment: [
      '2 Cajas Activas JBL EON715 (1300W pico c/u) con pedestales neumáticos',
      '1 Consola compacta con efectos y Bluetooth',
      '2 Micrófonos inalámbricos Shure UHF con pedestales de mesa y jirafa',
      '1 Micrófono de solapa para orador principal',
      'Cableado balanceado integral y estabilizador de voltaje'
    ],
    technicalStaff: '1 Técnico operador sonidista certificado durante toda la ceremonia (hasta 5 horas de servicio)',
    recommendedFor: ['Aniversarios institucionales', 'Conferencias magistrales', 'Graduaciones y colaciones', 'Desfiles escolares'],
    setupTime: '1 hora previa al inicio del evento'
  },
  {
    id: 'pack-folclore-patronal',
    title: 'Paquete Danzas & Festividad Patronal Puneña',
    targetAudience: 'Conjuntos folclóricos, morenadas, caporales, diabladas y alferados',
    capacity: 'Hasta 1,200 personas (plazas, explanadas, estadios comunales)',
    pricePerDay: 950,
    highlighted: true,
    description: 'Diseñado específicamente para la potencia y dinámica de bandas de músicos del altiplano puneño. Graves contundentes para bombos y claridad en trompetas y clarinetes con microfonía especializada.',
    includedEquipment: [
      'Sistema Line Array RCF HDL 20-A (4 módulos aéreos con bumper rígido)',
      '2 Subwoofers activos dobles RCF SUB 8006-AS (5000W c/u)',
      '1 Consola digital Behringer X32 con Stagebox digital S16',
      '4 Micrófonos inalámbricos Shure Beta 58A',
      '4 Micrófonos dinámicos e instrumentos para vientos y percusión',
      '2 Cajas de monitoreo de retorno en escenario'
    ],
    technicalStaff: '2 Técnicos sonidistas (FOH operador de sala + asistente de escenario) por jornada completa de hasta 8 horas',
    recommendedFor: ['Festividades patronales de Ácora y distritos vecinos', 'Pasacalles de Candelaria y carnavales', 'Concursos de danzas autóctonas', 'Matrimonios y recepciones campestres'],
    setupTime: '2 horas y media previas con calibración acústica'
  },
  {
    id: 'pack-concierto-escenario',
    title: 'Paquete Concierto & Festival Escenario Completo',
    targetAudience: 'Festivales musicales, aniversarios distritales y eventos masivos',
    capacity: 'Hasta 3,500 personas (espacios abiertos, estadios, explanadas)',
    pricePerDay: 1950,
    description: 'Infraestructura técnica completa de nivel profesional con sonido Line Array volado, estructura truss certificada, iluminación robótica DMX programada y consola 96kHz.',
    includedEquipment: [
      '8 Módulos Line Array RCF HDL 20-A en configuración estéreo',
      '4 Subwoofers RCF SUB 8006-AS dobles 18" (cardioide)',
      'Consola digital Allen & Heath SQ-6 de 48 canales a 96kHz + Dante',
      'Pórtico de aluminio Truss F34 (6m x 4m) con torres de elevación',
      '4 Cabezas móviles robóticas Beam 230 7R + 8 Tachos Par LED RGBW',
      'Consola de control de luces DMX programada en vivo',
      '4 Monitores de piso activos + 4 sistemas In-Ear Shure PSM300',
      'Generador diésel cabinado 12 kVA con respaldo ininterrumpido'
    ],
    technicalStaff: '3 Profesionales: 1 Ingeniero FOH, 1 Técnico de monitores y luces DMX, 1 Asistente de escenario y logística',
    recommendedFor: ['Serenatas de aniversario distrital', 'Festivales de rock, cumbia y música andina contemporánea', 'Ferias agropecuarias de Ácora e Ilave'],
    setupTime: '4 horas previas con prueba de sonido integral de bandas'
  },
  {
    id: 'pack-academico-audiovisual',
    title: 'Paquete Streaming & Congreso Tecnológico Híbrido',
    targetAudience: 'Universidades, institutos tecnológicos, foros empresariales y capacitaciones',
    capacity: 'Auditorio físico hasta 250 personas + transmisión virtual ilimitada',
    pricePerDay: 620,
    description: 'Integración perfecta de microfonía de conferencia, audio para transmisión online sin ecos (Mix-Minus) y ecualización de alta fidelidad para webinars y congresos de investigación.',
    includedEquipment: [
      '2 Cajas acústicas de tiro controlado para sala de conferencias',
      'Consola digital con interfaz USB multipista directa para PC/OBS',
      '2 Micrófonos de solapa inalámbricos Sennheiser EW 100 G4',
      '2 Micrófonos inalámbricos de mano para ronda de preguntas del público',
      'Sistema de grabación en alta definición de audio master',
      'Splitter de prensa balanceado para medios de comunicación'
    ],
    technicalStaff: '1 Técnico especialista en audio y conectividad streaming',
    recommendedFor: ['Congresos de educación tecnológica', 'Sustentaciones de tesis', 'Presentaciones de proyectos de investigación aplicada', 'Ruedas de prensa de autoridades'],
    setupTime: '1 hora y media de preparación previa'
  }
];
