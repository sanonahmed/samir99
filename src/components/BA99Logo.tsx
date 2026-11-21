interface BA99LogoProps {
  size?: 'header' | 'banner' | 'sm';
  className?: string;
}

export function BA99Logo({ size = 'header', className = '' }: BA99LogoProps) {
  const dimensions =
    size === 'header'
      ? 'h-[36px] sm:h-[42px] w-auto'
      : size === 'banner'
        ? 'h-[34px] sm:h-[46px] w-auto'
        : 'h-[28px] w-auto';

  return (
    <svg
      viewBox="0 0 246 56"
      className={`${dimensions} select-none ${className}`}
      role="img"
      aria-label="SAMIR99"
    >
      <defs>
        <linearGradient id="ba99GoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF699" />
          <stop offset="48%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#FF6B00" />
        </linearGradient>
        <linearGradient id="ba99CyanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B8FAFF" />
          <stop offset="48%" stopColor="#35C5FF" />
          <stop offset="100%" stopColor="#1676E8" />
        </linearGradient>
        <filter id="ba99DropShadow" x="-10%" y="-10%" width="125%" height="135%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="1.8" floodColor="#090C18" floodOpacity="0.85" />
        </filter>
      </defs>
      <g
        filter="url(#ba99DropShadow)"
        fontFamily="Outfit, 'Hind Siliguri', sans-serif"
        fontWeight="900"
        fontSize="45"
        letterSpacing="-1"
      >
        <text
          x="6"
          y="44"
          stroke="#0F1426"
          strokeWidth="5"
          paintOrder="stroke fill"
          strokeLinejoin="round"
        >
          <tspan fill="url(#ba99GoldGrad)">SAMIR</tspan>
          <tspan fill="url(#ba99CyanGrad)">99</tspan>
        </text>
      </g>
    </svg>
  );
}
