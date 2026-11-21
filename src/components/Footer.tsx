import type { TranslationDictionary } from '../data/translations';

interface FooterProps {
  t: TranslationDictionary;
}

const PARTNER_MARKS = [
  { label: 'PG', color: '#38BDF8' },
  { label: 'CQ9', color: '#F59E0B' },
  { label: 'JDB', color: '#FBBF24' },
  { label: 'KA', color: '#EF4444' },
  { label: 'SA', color: '#D4AF37' },
  { label: 'Evolution', color: '#CBD5E1' },
  { label: 'VISA', color: '#3B82F6' },
  { label: 'Mastercard', color: '#FB923C' },
  { label: 'NETELLER', color: '#84CC16' },
  { label: 'Skrill', color: '#EC4899' },
];

export function Footer({ t }: FooterProps) {
  return (
    <footer className="max-w-[784px] mx-auto px-3 sm:px-4 pt-6 pb-20 md:pb-12">
      {/* Geometric Double-Peak Ornamental Divider matching Screenshot 2 */}
      <div className="flex items-center justify-center mb-8" aria-hidden="true">
        <svg viewBox="0 0 600 24" className="w-full max-w-[560px] h-5 text-[#4B5675]" fill="none">
          <line x1="0" y1="14" x2="262" y2="14" stroke="currentColor" strokeWidth="1" />
          <path d="M262 14L276 4L290 14" stroke="currentColor" strokeWidth="1.2" />
          <path d="M276 14L290 4L304 14" stroke="currentColor" strokeWidth="1.2" />
          <line x1="304" y1="14" x2="600" y2="14" stroke="currentColor" strokeWidth="1" />
          <line x1="40" y1="19" x2="560" y2="19" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.45" />
        </svg>
      </div>

      {/* Partner & Studio Marks Strip */}
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 mb-6">
        {PARTNER_MARKS.map((mark) => (
          <span
            key={mark.label}
            className="font-display font-extrabold tracking-tight text-[13px] sm:text-[14px] opacity-85 hover:opacity-100 transition-opacity select-none"
            style={{ color: mark.color }}
          >
            {mark.label}
          </span>
        ))}
      </div>

      {/* Responsible Gaming & 18+ Compliance Copy matching Screenshot 2 */}
      <div className="space-y-2.5 text-center text-[11px] sm:text-[11.5px] text-[#8993AC] leading-relaxed max-w-[680px] mx-auto">
        <p>{t.footerNotice1}</p>
        <p>{t.footerNotice2}</p>
      </div>

      {/* Regulatory Trust Marks */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-5 text-[11px] font-bold tracking-wider text-[#C1C9DC]/80 select-none">
        <span>MGA · GAMING AUTHORITY</span>
        <span aria-hidden="true">·</span>
        <span>eCOGRA</span>
        <span aria-hidden="true">·</span>
        <span>RESPONSIBLE PLAY 18+</span>
      </div>

      {/* Copyright */}
      <p className="mt-4 text-center text-[11px] text-[#7D87A1]">{t.copyright}</p>
    </footer>
  );
}
