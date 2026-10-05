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
    name: 'Toyota Land Cruiser LC79 Scale Crawler 4x4',
    category: 'Crawler & Escala',
    priceCOP: '$1.450.000 COP',
    condition: 'Usado · Excelente',
    city: 'Bucaramanga',
    scale: '1/10 Scale Crawler',
    image: '/images/camilo-rc-car.png',
    technicalHighlight: 'Carrocería rígida detallada, snorkel, luces LED funcionales y ejes de alta articulación',
  },
  {
    id: 'c-2',
    name: 'Traxxas Slash 4x4 VXL Brushless',
    category: 'Short Course',
    priceCOP: '$1.850.000 COP',
    condition: 'Usado · Buen estado',
    city: 'Bogotá',
    scale: '1/10 Short Course',
    image: '/images/slash-4x4.jpg',
    technicalHighlight: 'Chasis LCG con motor Velineon 3500kV y receptor TQi con control TSM',
  },
  {
    id: 'c-3',
    name: 'TLR 8IGHT-X Elite 1/8 Buggy Pro',
    category: 'Competición Nitro/Eco',
    priceCOP: '$2.400.000 COP',
    condition: 'Semi-nuevo · Pista',
    city: 'Medellín',
    scale: '1/8 Buggy Competición',
    image: '/images/roadmap-stage-3.jpg',
    technicalHighlight: 'Torres amortiguador en fibra de carbono, chasis 7075 y geometría ajustable de suspensión',
  },
  {
    id: 'c-4',
    name: 'Hobbywing EZRUN MAX10 G2 Combo',
    category: 'Electrónica & Motor',
    priceCOP: '$280.000 COP',
    condition: 'Nuevo en empaque',
    city: 'Cali',
    scale: '1/10 Universal',
    image: '/images/hobbywing-motor.jpg',
    technicalHighlight: 'ESC 80A waterproof con sensor térmico + Motor brushless 3652SD 3300KV',
  },
  {
    id: 'c-5',
    name: 'Batería LiPo Gens Ace 3S 5000mAh 60C',
    category: 'Baterías & Energía',
    priceCOP: '$220.000 COP',
    condition: 'Nueva · Sellada',
    city: 'Barranquilla',
    scale: 'Estándar Hardcase',
    image: '/images/lipo-battery.jpg',
    technicalHighlight: 'Descarga continua 60C, carcasa rígida protectora y conector XT90',
  },
  {
    id: 'c-6',
    name: 'Arrma Kraton 6S BLX Speed Monster',
    category: 'Bashing / Monster',
    priceCOP: '$2.100.000 COP',
    condition: 'Usado · Revisado',
    city: 'Bucaramanga',
    scale: '1/8 Monster Truck',
    image: '/images/kraton-6s.jpg',
    technicalHighlight: 'Torres reforzadas EXB, chasis aluminio 3mm y tracción 4WD con diferencial central',
  },
];

export const CONCEPTUAL_GARAGE_VEHICLES: ConceptualGarageVehicle[] = [
  {
    id: 'g-1',
    name: 'Toyota Land Cruiser LC79 4x4',
    scale: '1/10',
    category: 'Crawler / Expedición Técnica',
    image: '/images/camilo-rc-car.png',
    powertrain: 'Hobbywing Fusion SE 1800kV 2-en-1',
    batteryConfig: 'LiPo 3S 11.1V (2200mAh XT60)',
    maintenanceNote: 'Ajuste de enlaces de dirección y engrase de diferenciales con grasa marina impermeable',
  },
  {
    id: 'g-2',
    name: 'Traxxas Slash 4x4 VXL',
    scale: '1/10',
    category: 'Short Course Truck',
    image: '/images/slash-4x4.jpg',
    powertrain: 'Velineon 3500kV Brushless',
    batteryConfig: 'LiPo 3S 11.1V (5000mAh XT90)',
    maintenanceNote: 'Cambio de aceite diferencial delantero (50k cSt) y revisión de embrague slipper',
  },
  {
    id: 'g-3',
    name: 'TLR 8IGHT-X Elite Buggy',
    scale: '1/8',
    category: 'Buggy de Competición Pista',
    image: '/images/roadmap-stage-3.jpg',
    powertrain: 'Combo 4S 1900kV Sensored ESC 160A',
    batteryConfig: 'LiPo 4S 14.8V (6000mAh 100C)',
    maintenanceNote: 'Reconstrucción de amortiguadores con aceite siliconado 45wt / 40wt',
  },
];
