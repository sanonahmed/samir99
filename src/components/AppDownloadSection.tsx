import { useState } from 'react';
import { CheckCircle2, Smartphone } from 'lucide-react';
import type { TranslationDictionary } from '../data/translations';
import { ASSETS } from '../data/assets';

interface AppDownloadSectionProps {
  t: TranslationDictionary;
}

/**
 * Deterministic crisp vector QR code matrix with central BA99 emblem (matching Screenshot 2).
 */
function BrandedQrCode({ seed }: { seed: number }) {
  const size = 17;
  const cells: Array<{ x: number; y: number }> = [];

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const inTopLeft = x < 5 && y < 5;
      const inTopRight = x >= size - 5 && y < 5;
      const inBottomLeft = x < 5 && y >= size - 5;
      const inCenter = x >= 6 && x <= 10 && y >= 6 && y <= 10;

      if (inTopLeft || inTopRight || inBottomLeft || inCenter) {
        continue;
      }

      const hash = ((x + 3) * 31 + (y + 7) * 17 + seed * 13) % 7;
      if (hash === 0 || hash === 2 || hash === 4) {
        cells.push({ x, y });
      }
    }
  }

  return (
    <div className="bg-white rounded-xl p-2.5 shadow-md shadow-black/30 inline-block">
      <svg viewBox="0 0 170 170" className="w-[104px] h-[104px] sm:w-[112px] sm:h-[112px]" aria-hidden="true">
        <rect width="170" height="170" fill="#FFFFFF" />
        {/* 3 QR Finder Squares */}
        {[
          { x: 4, y: 4 },
          { x: 120, y: 4 },
          { x: 4, y: 120 },
        ].map((pos, idx) => (
          <g key={idx} transform={`translate(${pos.x}, ${pos.y})`}>
            <rect width="46" height="46" rx="4" fill="#111827" />
            <rect x="7" y="7" width="32" height="32" rx="2" fill="#FFFFFF" />
            <rect x="14" y="14" width="18" height="18" rx="1.5" fill="#111827" />
          </g>
        ))}

        {/* Deterministic Data Modules */}
        {cells.map((cell) => (
          <rect
            key={`${cell.x}-${cell.y}`}
            x={cell.x * 10}
            y={cell.y * 10}
            width="8.5"
            height="8.5"
            rx="1"
            fill="#111827"
          />
        ))}

        {/* Center SAMIR99 Badge */}
        <rect x="55" y="68" width="60" height="34" rx="6" fill="#222A42" />
        <text
          x="85"
          y="89"
          textAnchor="middle"
          fontFamily="Outfit, sans-serif"
          fontWeight="900"
          fontSize="11"
          fill="#FFD028"
        >
          SAMIR99
        </text>
      </svg>
    </div>
  );
}

export function AppDownloadSection({ t }: AppDownloadSectionProps) {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);

  const handleDownloadClick = (platform: string) => {
    setDownloadNotice(`${platform} — ${t.appDownloadBtn}`);
  };

  return (
    <section
      aria-labelledby="app-download-heading"
      className="max-w-[784px] mx-auto px-3 sm:px-4 mt-14 mb-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr] gap-8 items-center">
        {/* Left: Heading, Bengali Copy, Dual QR Codes & Red Download Pills */}
        <div>
          <h2
            id="app-download-heading"
            className="text-[30px] sm:text-[36px] font-bold text-white leading-tight"
          >
            {t.appHeading}
          </h2>
          <p className="mt-3 text-[13px] sm:text-[13.5px] text-[#C1C9DC] leading-[1.65]">
            {t.appDescription}
          </p>

          <div className="mt-6 flex flex-wrap items-start gap-6 sm:gap-8">
            {/* Android APP */}
            <div className="flex flex-col items-center">
              <BrandedQrCode seed={1} />
              <div className="mt-2.5 flex items-center gap-1.5 text-[12px] font-semibold text-[#E2E8F5]">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#A4C639]" fill="currentColor" aria-hidden="true">
                  <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.46 11.46 0 0 0-8.94 0L5.65 5.67c-.19-.29-.54-.38-.84-.22-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52ZM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
                </svg>
                <span>{t.androidApp}</span>
              </div>
              <button
                type="button"
                onClick={() => handleDownloadClick(t.androidApp)}
                className="mt-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF3035] to-[#FF4A3D] hover:from-[#E52227] hover:to-[#FF3035] text-white text-[12px] font-semibold shadow-md shadow-[#FF3035]/25 transition-all duration-150 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                {t.appDownloadBtn}
              </button>
            </div>

            {/* iOS LITE-APP */}
            <div className="flex flex-col items-center">
              <BrandedQrCode seed={2} />
              <div className="mt-2.5 flex items-center gap-1.5 text-[12px] font-semibold text-[#E2E8F5]">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#E2E8F5]" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83ZM15.97 6.33c.68-.82 1.14-1.97 1.01-3.11-.98.04-2.17.65-2.87 1.47-.63.72-1.18 1.89-1.03 3 1.09.08 2.21-.54 2.89-1.36Z" />
                </svg>
                <span>{t.iosLiteApp}</span>
              </div>
              <button
                type="button"
                onClick={() => handleDownloadClick(t.iosLiteApp)}
                className="mt-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF3035] to-[#FF4A3D] hover:from-[#E52227] hover:to-[#FF3035] text-white text-[12px] font-semibold shadow-md shadow-[#FF3035]/25 transition-all duration-150 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                {t.appDownloadBtn}
              </button>
            </div>
          </div>

          {downloadNotice && (
            <div
              role="status"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#222A42] border border-[#343D58] px-3 py-2 text-[12px] text-[#E2E8F5]"
            >
              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>{downloadNotice}</span>
            </div>
          )}
        </div>

        {/* Right: Dynamic Mobile App & Characters Showcase Artwork */}
        <div className="flex justify-center md:justify-end">
          {!imgError ? (
            <div className="relative w-full max-w-[330px] aspect-square rounded-2xl overflow-hidden">
              <img
                src={ASSETS.appShowcase}
                alt="SAMIR99 Mobile Gaming Application Preview"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="w-[260px] h-[260px] rounded-2xl bg-[#222A42] border border-[#343D58] flex flex-col items-center justify-center text-[#C1C9DC]">
              <Smartphone className="w-12 h-12 text-[#FF3035] mb-2" />
              <span className="font-bold text-white">SAMIR99 Mobile App</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
