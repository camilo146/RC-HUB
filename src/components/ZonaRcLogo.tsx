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
  // Dimension tokens
  const sizeConfig = {
    sm: {
      zWidth: 18,
      zHeight: 20,
      textSize: 'text-base sm:text-lg',
      colSize: 'text-[9px] sm:text-[10px]',
      colOffset: 'mb-0.5',
      sloganSize: 'text-[9px]',
      gap: 'gap-1',
    },
    md: {
      zWidth: 24,
      zHeight: 27,
      textSize: 'text-xl sm:text-2xl',
      colSize: 'text-[11px] sm:text-xs',
      colOffset: 'mb-1',
      sloganSize: 'text-[11px]',
      gap: 'gap-1.5',
    },
    lg: {
      zWidth: 34,
      zHeight: 38,
      textSize: 'text-3xl sm:text-4xl',
      colSize: 'text-sm sm:text-base',
      colOffset: 'mb-1.5',
      sloganSize: 'text-xs sm:text-sm',
      gap: 'gap-2',
    },
    xl: {
      zWidth: 46,
      zHeight: 52,
      textSize: 'text-4xl sm:text-5xl lg:text-6xl',
      colSize: 'text-lg sm:text-xl',
      colOffset: 'mb-2',
      sloganSize: 'text-sm sm:text-base',
      gap: 'gap-2.5',
    },
  }[size];

  return (
    <div className={`inline-flex flex-col ${className}`}>
      {/* Brand Line */}
      <div className={`flex items-end ${sizeConfig.gap} select-none leading-none`}>
        {/* Stylized Motorsport 'Z' with aggressive orange diagonal bar */}
        <svg
          width={sizeConfig.zWidth}
          height={sizeConfig.zHeight}
          viewBox="0 0 38 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 drop-shadow-sm transform -skew-x-6"
          aria-hidden="true"
        >
          {/* Top Bar: Crisp White with Angled Cut */}
          <path
            d="M0 0 L36 0 L28 11 L0 11 Z"
            fill="#F4F2ED"
          />
          {/* Diagonal Slash: High-Impact Terracotta Racing Orange */}
          <path
            d="M33 7 L38 7 L7 37 L0 37 Z"
            fill="#C65D2E"
          />
          {/* Bottom Bar: Crisp White with Angled Cut */}
          <path
            d="M8 33 L38 33 L38 44 L2 44 Z"
            fill="#F4F2ED"
          />
        </svg>

        {/* 'ONA RC' Text — Bold, Italic Motorsport Typography */}
        <span
          className={`font-display font-black italic tracking-tighter uppercase text-[#F4F2ED] drop-shadow-sm ${sizeConfig.textSize}`}
          style={{ letterSpacing: '-0.04em' }}
        >
          ONA RC
        </span>

        {/* 'COL' Identifier — Compact, Italic Orange */}
        <span
          className={`font-tech font-black italic uppercase text-[#C65D2E] tracking-tight ${sizeConfig.colSize} ${sizeConfig.colOffset} -ml-0.5`}
        >
          COL
        </span>

        {/* Subtle Colombian Tricolor Accent */}
        {showTricolor && (
          <span
            className="inline-flex h-[3px] w-5 rounded-full overflow-hidden ml-1 mb-1.5 opacity-90 shadow-sm shrink-0"
            title="Colombia"
          >
            <span className="w-1/2 bg-[#FCD116]" />
            <span className="w-1/4 bg-[#003893]" />
            <span className="w-1/4 bg-[#CE1126]" />
          </span>
        )}
      </div>

      {/* Slogan Line: 'RC es más que un hobby.' matching user reference */}
      {showSlogan && (
        <div className={`tracking-wide italic select-none mt-1 ${sizeConfig.sloganSize}`}>
          <span className="text-[#C65D2E] font-bold">RC</span>{' '}
          <span className="text-[#C8C4BC] font-medium">es más que un hobby.</span>
        </div>
      )}
    </div>
  );
};
