import { CBCIndicator } from '../types';

export const MINEDU_CBC_MATRIX: CBCIndicator[] = [
  {
    code: 'CBC-I',
    title: 'Condición I: Gestión Institucional y Planificación Estratégica',
    description: 'Demuestra una organización coherente con sus fines, instrumentos de gestión actualizados (PEI, PAT, RI, Manual de Operaciones) y gobernanza transparente para la toma de decisiones.',
    status: 'Cumplido',
    complianceRate: 98,
    institutionalAction: 'Resolución Directoral N° 048-2024-IESTP-ACORA que aprueba el Reglamento de Organización y Funciones del Centro de Producción de Bienes y Servicios (CEPROBYS), integrando la Unidad de Alquiler de Equipos de Sonido e Iluminación en el Plan Estratégico Institucional 2024-2029.',
    evidenceDocs: [
      { name: 'Proyecto Educativo Institucional (PEI 2024-2029)', type: 'PDF Institucional', date: 'Enero 2024' },
      { name: 'Plan Anual de Trabajo (PAT 2025-2026)', type: 'Documento Técnico', date: 'Marzo 2025' },
      { name: 'Reglamento de Unidades Productivas R.D. N° 048-2024', type: 'Resolución Oficial', date: 'Mayo 2024' }
    ],
    mineduReference: 'Art. 24 de la Ley N° 30512 y Matriz de Verificación MINEDU CBC-I.'
  },
  {
    code: 'CBC-II',
    title: 'Condición II: Gestión Académica y Programas de Estudio Pertinentes',
    description: 'Programas de estudio basados en el Catálogo Nacional de la Oferta Formativa (CNOF) con módulos formativos articulados a los sectores productivos de la región.',
    status: 'Alineado 2027',
    complianceRate: 94,
    institutionalAction: 'Articulación curricular directa de los programas de estudio con la Unidad Productiva de Sonido, permitiendo que estudiantes realicen Experiencias Formativas en Situaciones Reales de Trabajo (EFSRT) en operación de consolas digitales, acústica y montaje de eventos en Puno.',
    evidenceDocs: [
      { name: 'Planes de Estudio Modulares bajo Enfoque por Competencias', type: 'Currículo Técnico', date: 'Junio 2024' },
      { name: 'Convenios de Prácticas Pre-Profesionales en la Unidad de Sonido', type: 'Actas de Prácticas', date: 'Agosto 2024' },
      { name: 'Registro de Horas EFSRT en Producción Audiovisual', type: 'Bitácoras Académicas', date: 'Octubre 2024' }
    ],
    mineduReference: 'Criterio de Evaluación 2.3: Vinculación con Unidades Productivas Institucionales.'
  },
  {
    code: 'CBC-III',
    title: 'Condición III: Infraestructura, Equipamiento y Recursos para el Aprendizaje',
    description: 'Disponibilidad de ambientes pedagógicos, laboratorios equipados con tecnología vigente, almacenes seguros y licencias de software para el aprendizaje práctico.',
    status: 'Cumplido',
    complianceRate: 100,
    institutionalAction: 'Taller de Electroacústica y Sonorización Profesional debidamente implementado en el campus de Ácora. Equipamiento con certificación acústica, cajas RCF activas, consolas Allen & Heath y Behringer, y protocolos de seguridad eléctrica avalados por defensa civil (ITSE).',
    evidenceDocs: [
      { name: 'Inventario Patrimonial de Equipos de Sonido e Iluminación', type: 'Acta Notarial', date: 'Febrero 2025' },
      { name: 'Certificado de Inspección Técnica de Seguridad en Edificaciones (ITSE)', type: 'Certificado INDECI', date: 'Diciembre 2024' },
      { name: 'Plan de Mantenimiento Preventivo y Calibración de Equipos', type: 'Guía Técnica', date: 'Enero 2025' }
    ],
    mineduReference: 'Criterio 3.1: Equipamiento e infraestructura tecnológica moderna y segura.'
  },
  {
    code: 'CBC-IV',
    title: 'Condición IV: Personal Docente Calificado y Directivos con Perfil Idóneo',
    description: 'Cuerpo docente con título profesional afín, actualización continua en el sector productivo y directivos seleccionados por concurso de méritos.',
    status: 'Cumplido',
    complianceRate: 96,
    institutionalAction: 'Docentes especialistas en ingeniería electrónica, acústica y producción audiovisual con certificación internacional (Dante Certified, Pro Tools, RCF Audio Academy) a cargo de la formación y supervisión de las operaciones técnicas de la unidad de sonido.',
    evidenceDocs: [
      { name: 'Cuadro de Asignación de Personal (CAP) y Legajos Docentes', type: 'Registro DREP', date: 'Enero 2025' },
      { name: 'Certificaciones de Especialización en Sonido en Vivo de Docentes', type: 'Diplomas Oficiales', date: 'Julio 2024' },
      { name: 'Plan de Capacitación y Actualización Tecnológica 2025-2027', type: 'Plan Anual', date: 'Febrero 2025' }
    ],
    mineduReference: 'Criterio 4.2: Docentes con experiencia demostrada en el sector productivo.'
  },
  {
    code: 'CBC-V',
    title: 'Condición V: Previsión Económica y Financiera (Sostenibilidad & RDR)',
    description: 'Capacidad presupuestaria y financiera para garantizar la continuidad del servicio educativo y reinversión a través de Recursos Directamente Recaudados (RDR).',
    status: 'Cumplido',
    complianceRate: 97,
    institutionalAction: 'La Unidad de Alquiler de Equipos de Sonido constituye uno de los pilares de generación de Recursos Directamente Recaudados (RDR) del IESTP Ácora, destinando el 40% a reinversión tecnológica, 30% a fondos de becas y pasantías para estudiantes y 30% a mantenimiento preventivo.',
    evidenceDocs: [
      { name: 'Presupuesto Institucional de Apertura (PIA) y Proyección 2025-2027', type: 'Informe Financiero', date: 'Diciembre 2024' },
      { name: 'Tarifario Institucional Oficial aprobado por Resolución Directoral', type: 'Resolución Directoral', date: 'Enero 2025' },
      { name: 'Estados Financieros Auditados y Flujo de Caja de Unidades de Producción', type: 'Auditoría Externa', date: 'Enero 2025' }
    ],
    mineduReference: 'Criterio 5.1: Sostenibilidad financiera y captación de recursos propios (RDR).'
  },
  {
    code: 'CBC-VI',
    title: 'Condición VI: Servicios Complementarios y Seguimiento al Egresado',
    description: 'Mecanismos de inserción laboral, bienestar estudiantil, bolsa de trabajo activa y convenios interinstitucionales con entidades de la región.',
    status: 'Cumplido',
    complianceRate: 95,
    institutionalAction: 'Bolsa de trabajo activa con empresas de producción de espectáculos y eventos de Puno, Ilave y Juli. Los egresados capacitados en la unidad de sonido cuentan con un índice de empleabilidad inmediata del 88% en empresas de sonido e industrias creativas.',
    evidenceDocs: [
      { name: 'Plataforma Virtual de Bolsa de Trabajo y Convenios Laborales', type: 'Portal Institucional', date: 'Marzo 2025' },
      { name: 'Estudio de Seguimiento a Egresados y Empleabilidad 2023-2024', type: 'Informe Estadístico', date: 'Noviembre 2024' },
      { name: 'Reglamento de Bienestar Estudiantil y Servicio Psicopedagógico', type: 'Reglamento Interno', date: 'Abril 2024' }
    ],
    mineduReference: 'Criterio 6.3: Inserción laboral e intermediación de empleo para egresados.'
  }
];

export const LICENSED_INSTITUTES_PUNO = [
  {
    name: 'IESTP Yunguyo',
    location: 'Yunguyo, Puno',
    url: 'https://iestpyunguyo.edu.pe/portal/',
    resolution: 'R.M. N° 482-2020-MINEDU',
    tag: 'Instituto Licenciado'
  },
  {
    name: 'IES Juli',
    location: 'Juli, Chucuito, Puno',
    url: 'https://iesjuli.edu.pe/portal/',
    resolution: 'R.M. N° 512-2020-MINEDU',
    tag: 'Instituto Licenciado'
  },
  {
    name: 'IESTP Ilave',
    location: 'Ilave, El Collao, Puno',
    url: 'https://www.tecnoilave.edu.pe/',
    resolution: 'R.M. N° 234-2021-MINEDU',
    tag: 'Instituto Licenciado'
  },
  {
    name: 'IESTP Azángaro',
    location: 'Azángaro, Puno',
    url: 'https://iestpazangaro.edu.pe/',
    resolution: 'R.M. N° 379-2021-MINEDU',
    tag: 'Instituto Licenciado'
  }
];
