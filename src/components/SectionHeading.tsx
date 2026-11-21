interface SectionHeadingProps {
  title: string;
  id?: string;
}

function DiamondOrnament({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 68 16"
      className={`w-12 sm:w-[66px] h-4 text-[#8993AC] shrink-0 ${flip ? 'scale-x-[-1]' : ''}`}
      fill="none"
      aria-hidden="true"
    >
      <line x1="0" y1="8" x2="34" y2="8" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.85" />
      <path d="M35 8L43 3.5L51 8L43 12.5L35 8Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M47 8L55 3.5L63 8L55 12.5L47 8Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M51 8L55 5.6L59 8L55 10.4L51 8Z" fill="currentColor" fillOpacity="0.45" />
    </svg>
  );
}

export function SectionHeading({ title, id }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5">
      <DiamondOrnament />
      <h2
        id={id}
        className="text-[22px] sm:text-[25px] font-bold text-white tracking-wide whitespace-nowrap"
      >
        {title}
      </h2>
      <DiamondOrnament flip />
    </div>
  );
}
