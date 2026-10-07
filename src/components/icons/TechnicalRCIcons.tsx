import React from 'react';

interface IconProps {
  className?: string;
}

// 01. CRAWLER: 4x4 Axle Lock & Rock Articulation
export const IconCrawler: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Rock slope */}
    <path d="M2 20L8 16L15 19L22 13" strokeOpacity="0.35" strokeDasharray="2 2" />
    {/* High clearance chassis beam */}
    <path d="M6 14L10 11L14 11L18 9" />
    {/* Articulated wheels */}
    <circle cx="6" cy="14" r="3" />
    <circle cx="18" cy="9" r="3" />
    <circle cx="6" cy="14" r="1" fill="currentColor" />
    <circle cx="18" cy="9" r="1" fill="currentColor" />
    {/* Suspension link */}
    <path d="M10 11L6 14" />
    <path d="M14 11L18 9" />
  </svg>
);

// 02. BUGGY: Competition Wing & Low-slung Cockpit
export const IconBuggy: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* High Downforce Rear Wing */}
    <path d="M3 8H7L6 11" />
    <path d="M4 8V12" />
    {/* Aerodynamic cab */}
    <path d="M6 12L10 9L15 9L18 13L21 14" />
    {/* Chassis base */}
    <path d="M7 16H16" />
    {/* Front & Rear Wheels */}
    <circle cx="6" cy="16" r="3" />
    <circle cx="18" cy="16" r="2.5" />
    <circle cx="6" cy="16" r="1" fill="currentColor" />
    <circle cx="18" cy="16" r="1" fill="currentColor" />
  </svg>
);

// 03. DRIFT: Countersteering & Apex Skid Curves
export const IconDrift: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Drift skid curves */}
    <path d="M3 19C7 19 10 16 13 11C15 8 18 6 22 6" strokeOpacity="0.4" strokeDasharray="2 2" />
    <path d="M5 21C9 21 12 18 15 13C17 10 20 8 23 8" strokeOpacity="0.2" />
    {/* Drift car angled silhouette */}
    <path d="M8 14L11 9L16 9L19 12L21 13" />
    <path d="M7 14H19" />
    <circle cx="9" cy="15" r="2.5" />
    <circle cx="18" cy="14" r="2.5" />
    {/* Direction indicator angle */}
    <path d="M3 6L6 9L3 12" />
  </svg>
);

// 04. TOURING: Low-Profile GT Aero & Splitter
export const IconTouring: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* GT Rear wing */}
    <path d="M2 10H5V13" />
    {/* Sleek roofline */}
    <path d="M5 13L8 9L15 9L19 12L22 13V15H21" />
    <path d="M8 15H15" />
    {/* Front splitter */}
    <path d="M22 15H23" strokeWidth="2.5" />
    {/* GT Wheels */}
    <circle cx="6.5" cy="15" r="2.5" />
    <circle cx="17.5" cy="15" r="2.5" />
    <circle cx="6.5" cy="15" r="1" fill="currentColor" />
    <circle cx="17.5" cy="15" r="1" fill="currentColor" />
  </svg>
);

// 05. SHORT COURSE: Enclosed Trophy Truck Fenders & Roll Cage
export const IconShortCourse: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Boxy off-road cab */}
    <path d="M3 13V11L7 11L10 8H15L18 11H21V14" />
    {/* Protected fender wells */}
    <path d="M3 14C3 12.5 5 12.5 6.5 12.5C8 12.5 9 14 9 15" />
    <path d="M15 15C15 13 16.5 12.5 18 12.5C19.5 12.5 21 13 21 14" />
    <path d="M9 15H15" />
    {/* High clearance tires */}
    <circle cx="6" cy="16" r="2.5" />
    <circle cx="18" cy="16" r="2.5" />
    {/* Roll cage cross */}
    <path d="M10 8L15 11" strokeOpacity="0.4" />
  </svg>
);

// 06. MONSTER TRUCK: Massive Chevron Wheels & Tower Shocks
export const IconMonster: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* High-perched body */}
    <path d="M5 8L8 6H14L17 8H19V10H4V8H5Z" />
    {/* Heavy shock reservoirs */}
    <path d="M6 10L5 13" />
    <path d="M16 10L17 13" />
    {/* Giant Chevron Wheels */}
    <circle cx="5" cy="16" r="4" />
    <circle cx="17" cy="16" r="4" />
    {/* Tread marks */}
    <path d="M5 14V18" />
    <path d="M3 16H7" />
    <path d="M17 14V18" />
    <path d="M15 16H19" />
  </svg>
);

// 07. CAMIONES: Heavy Machinery Cab & Dual Axles
export const IconTrucks: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Cab-over front */}
    <path d="M15 6H21V16H15" />
    <path d="M18 9H21" />
    {/* Heavy chassis frame */}
    <path d="M3 13H15V16H3V13Z" />
    {/* Exhaust stack */}
    <path d="M14 4V13" strokeWidth="2" />
    {/* Triple Wheels */}
    <circle cx="6" cy="17" r="2" />
    <circle cx="11" cy="17" r="2" />
    <circle cx="18" cy="17" r="2" />
  </svg>
);

// 08. AVIONES: Fixed Wing & Swept Aerodynamics
export const IconAviation: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Fuselage */}
    <path d="M12 2L13.5 10L21 13V15L13.5 13L13 19L16 21V22L12 21L8 22V21L11 19L10.5 13L3 15V13L10.5 10L12 2Z" />
  </svg>
);

// 09. BARCOS: High-Speed Deep-V Hull & Hydroplane Wake
export const IconMarine: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Deep-V Hull profile */}
    <path d="M3 12L7 9H17L22 13L16 16H6L3 12Z" />
    {/* Cockpit canopy */}
    <path d="M9 9L12 6H15L16 9" />
    {/* Water surface / spray */}
    <path d="M2 18C5 17 8 19 11 18C14 17 17 19 20 18L22 19" strokeOpacity="0.5" />
    <path d="M5 21C8 20 11 22 14 21C17 20 20 22 22 21" strokeOpacity="0.25" strokeDasharray="2 2" />
  </svg>
);

// 10. DRONES: Symmetrical FPV Quadcopter X-Frame
export const IconDrones: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Center pod with camera angle */}
    <rect x="9.5" y="9.5" width="5" height="5" rx="1.5" />
    <path d="M12 8V7" />
    {/* X-arms */}
    <path d="M9.5 9.5L5.5 5.5" />
    <path d="M14.5 9.5L18.5 5.5" />
    <path d="M9.5 14.5L5.5 18.5" />
    <path d="M14.5 14.5L18.5 18.5" />
    {/* 4 Propeller rotors */}
    <circle cx="5" cy="5" r="3" strokeDasharray="2 2" />
    <circle cx="19" cy="5" r="3" strokeDasharray="2 2" />
    <circle cx="5" cy="19" r="3" strokeDasharray="2 2" />
    <circle cx="19" cy="19" r="3" strokeDasharray="2 2" />
    <circle cx="5" cy="5" r="1" fill="currentColor" />
    <circle cx="19" cy="5" r="1" fill="currentColor" />
    <circle cx="5" cy="19" r="1" fill="currentColor" />
    <circle cx="19" cy="19" r="1" fill="currentColor" />
  </svg>
);
