export type CategoryId = 'all' | 'vehiculos' | 'repuestos' | 'electronica' | 'llantas' | 'accesorios';

export interface Product {
  id: string;
  name: string;
  priceCOP: number;
  condition: 'Nuevo' | 'Usado';
  city: 'Bucaramanga' | 'Bogotá' | 'Medellín' | 'Cali' | 'Barranquilla';
  brand: 'Traxxas' | 'Arrma' | 'Losi' | 'HPI' | 'Tamiya' | 'Hobbywing' | 'Gens Ace';
  category: CategoryId;
  scale?: string;
  drivetrain?: '4WD' | '2WD';
  powerType?: 'Brushless' | 'Brushed' | 'Nitro' | 'LiPo 3S' | 'LiPo 6S';
  image: string;
  description: string;
  seller: {
    name: string;
    verified: boolean;
    rating: number;
    salesCount: number;
    memberSince: string;
  };
  features: string[];
}

export interface GarageVehicle {
  id: string;
  name: string;
  brand: string;
  scale: string;
  type: string;
  image: string;
  status: 'Listo para pista' | 'En mantenimiento' | 'En mejoras';
  batteryType: string;
  motorEsc: string;
  transmission: string;
  installedUpgrades: string[];
  recommendedPartsCount: number;
  lastRun: string;
}

export interface CommunitySpot {
  id: string;
  type: 'track' | 'event' | 'club';
  title: string;
  subtitle: string;
  location: string;
  tag: string;
  dateOrHours?: string;
  membersCount?: number;
}
