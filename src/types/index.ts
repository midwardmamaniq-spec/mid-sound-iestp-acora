export type EquipmentCategory = 
  | 'todos'
  | 'line-array'
  | 'consolas-digitales'
  | 'microfonia'
  | 'iluminacion'
  | 'energia-accesorios';

export interface Equipment {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: EquipmentCategory;
  categoryLabel: string;
  dailyRate: number; // in PEN (S/.)
  stockAvailable: number;
  image: string;
  description: string;
  highlights: string[];
  specs: {
    potenciaRMS?: string;
    splMax?: string;
    canales?: string;
    cobertura?: string;
    frecuencia?: string;
    consumoElectrico?: string;
    peso?: string;
    dimensiones?: string;
    conectividad?: string;
  };
  includes: string[];
  idealFor: string;
}

export interface SoundPackage {
  id: string;
  title: string;
  targetAudience: string;
  capacity: string;
  pricePerDay: number;
  highlighted?: boolean;
  description: string;
  includedEquipment: string[];
  technicalStaff: string;
  recommendedFor: string[];
  setupTime: string;
}

export interface CartItem {
  equipment: Equipment;
  quantity: number;
  days: number;
}

export interface PackageCartItem {
  packageData: SoundPackage;
  quantity: number;
  days: number;
}

export interface QuoteDetails {
  customerName: string;
  organization: string;
  documentType: 'DNI' | 'RUC';
  documentNumber: string;
  email: string;
  phone: string;
  eventDate: string;
  eventDurationDays: number;
  eventLocation: string; // District in Puno
  eventType: 'Cívico/Institucional' | 'Folclórico/Patronal' | 'Concierto/Festival' | 'Académico/Graduación' | 'Corporativo/Privado';
  includeTechnician: boolean;
  includeTransportation: boolean;
  notes: string;
}

export interface CBCIndicator {
  code: string;
  title: string;
  description: string;
  status: 'Cumplido' | 'En Proceso' | 'Alineado 2027';
  complianceRate: number; // 0 to 100%
  institutionalAction: string;
  evidenceDocs: { name: string; type: string; date: string }[];
  mineduReference: string;
}
