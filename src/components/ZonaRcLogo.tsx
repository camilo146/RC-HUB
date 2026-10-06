import React from 'react';

interface ZonaRcLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSlogan?: boolean;
  showTricolor?: boolean;
  className?: string;
}

export const ZonaRcLogo: React.FC<ZonaRcLogoProps> = ({
  size = 'md',
  showSlogan = false,
  showTricolor = false,
  className = '',
}) => {
  // Height sizing for the logo image
  const heightClass = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-10 sm:h-12',
    xl: 'h-14 sm:h-16 lg:h-18',
  }[size];

  const sloganClass = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs sm:text-sm',
    xl: 'text-sm sm:text-base',
  }[size];

  // Size of the Colombian paint brush stroke
  const brushSize = {
    sm: 'h-4 w-7 -mt-0.5',
    md: 'h-5 w-9 -mt-1',
    lg: 'h-7 w-12 -mt-1.5',
    xl: 'h-9 w-16 -mt-2',
  }[size];

  return (
    <div className={`inline-flex flex-col ${className}`}>
      {/* Brand Line */}
      <div className="flex items-center gap-2 select-none">
        {/* Exact logo image from user reference */}
        <img
          src="/images/zona-rc-col-logo@2x.png"
          alt="ZONA RC COL"
          className={`${heightClass} w-auto object-contain drop-shadow-md`}
          loading="eager"
        />

        {/* Colombian Flag Paint Brush Stroke ('pincelazo de pintura') */}
        {showTricolor && (
          <img
            src="/images/colombia-brush-flag.png"
            alt="Bandera pincelazo Colombia"
            className={`${brushSize} object-contain shrink-0 filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] transform -rotate-3 hover:scale-105 transition-transform`}
            title="Colombia"
          />
        )}
      </div>

      {/* Slogan Line: 'RC es más que un hobby.' */}
      {showSlogan && (
        <div className={`tracking-wide italic select-none mt-1.5 ${sloganClass}`}>
          <span className="text-[#C65D2E] font-bold">RC</span>{' '}
          <span className="text-[#C8C4BC] font-medium">es más que un hobby.</span>
        </div>
      )}
    </div>
  );
};
