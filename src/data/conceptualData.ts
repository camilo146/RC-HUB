export interface ConceptualProduct {
  id: string;
  name: string;
  category: string;
  priceCOP: string;
  condition: string;
  city: string;
  scale: string;
  image: string;
  technicalHighlight: string;
}

export interface ConceptualGarageVehicle {
  id: string;
  name: string;
  scale: string;
  category: string;
  image: string;
  powertrain: string;
  batteryConfig: string;
  maintenanceNote: string;
}

export const CONCEPTUAL_PRODUCTS: ConceptualProduct[] = [
  {
    id: 'c-1',
    name: 'Traxxas Slash 4x4 VXL Brushless',
    category: 'Vehículo Completo',
    priceCOP: '$1.850.000 COP',
    condition: 'Usado · Buen estado',
    city: 'Bucaramanga',
    scale: '1/10 Short Course',
    image: '/images/slash-4x4.jpg',
    technicalHighlight: 'Chasis LCG con motor Velineon 3500kV y receptor TQi con TSM',
  },
  {
    id: 'c-2',
    name: 'Arrma Kraton 6S BLX Speed Monster',
    category: 'Vehículo Completo',
    priceCOP: '$2.100.000 COP',
    condition: 'Usado · Revisado',
    city: 'Medellín',
    scale: '1/8 Monster Truck',
    image: '/images/kraton-6s.jpg',
    technicalHighlight: 'Torres reforzadas EXB, chasis aluminio 3mm y tracción 4WD',
  },
  {
    id: 'c-3',
    name: 'Hobbywing EZRUN MAX10 G2 Combo',
    category: 'Electrónica & Motor',
    priceCOP: '$280.000 COP',
    condition: 'Nuevo en empaque',
    city: 'Bogotá',
    scale: '1/10 Universal',
    image: '/images/hobbywing-motor.jpg',
    technicalHighlight: 'ESC 80A waterproof con sensor térmico + Motor 3652SD 3300KV',
  },
  {
    id: 'c-4',
    name: 'Batería LiPo Gens Ace 3S 5000mAh 60C',
    category: 'Baterías & Energía',
    priceCOP: '$220.000 COP',
    condition: 'Nueva · Sellada',
    city: 'Cali',
    scale: 'Estándar Hardcase',
    image: '/images/lipo-battery.jpg',
    technicalHighlight: 'Descarga continua 60C, carcasa rígida y conector XT90',
  },
];

export const CONCEPTUAL_GARAGE_VEHICLES: ConceptualGarageVehicle[] = [
  {
    id: 'g-1',
    name: 'Traxxas Slash 4x4 VXL',
    scale: '1/10',
    category: 'Short Course Truck',
    image: '/images/slash-4x4.jpg',
    powertrain: 'Velineon 3500kV Brushless',
    batteryConfig: 'LiPo 3S 11.1V (5000mAh XT90)',
    maintenanceNote: 'Cambio de aceite diferencial delantero (50k cSt) hace 1 semana',
  },
  {
    id: 'g-2',
    name: 'Arrma Kraton 6S BLX',
    scale: '1/8',
    category: 'Speed Monster Truck',
    image: '/images/kraton-6s.jpg',
    powertrain: 'Spektrum Firma 2050kV + 150A ESC',
    batteryConfig: 'Dual LiPo 3S (6S 22.2V total)',
    maintenanceNote: 'Piñón de ataque 15T acero templado instalado para velocidad',
  },
];
