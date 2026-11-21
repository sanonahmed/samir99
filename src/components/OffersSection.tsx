import { Info, ArrowRight } from 'lucide-react';
import type { GameCategoryId, LanguageCode } from '../types/gaming';
import type { TranslationDictionary } from '../data/translations';
import { PLATFORM_OFFERS } from '../data/offers';
import { SectionHeading } from './SectionHeading';

interface OffersSectionProps {
  language: LanguageCode;
  t: TranslationDictionary;
  onExploreCategory: (category: GameCategoryId) => void;
}

export function OffersSection({
  language,
  t,
  onExploreCategory,
}: OffersSectionProps) {
  return (
    <section
      aria-labelledby="offers-heading"
      className="max-w-[784px] mx-auto px-3 sm:px-4 pb-10"
    >
      <SectionHeading title={t.offersHeading} id="offers-heading" />
      <p className="text-center text-[13.5px] text-[#C1C9DC] mb-6">
        {t.offersSubtitle}
      </p>

      <div className="mb-6 rounded-xl bg-[#222A42] border border-[#343D58] px-4 py-3 flex items-start gap-2.5 text-[12.5px] text-[#C1C9DC]">
        <Info className="w-4 h-4 text-[#FFD028] shrink-0 mt-0.5" />
        <p>{t.offersDemoNote}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {PLATFORM_OFFERS.map((offer) => {
          const title =
            language === 'bn'
              ? offer.titleBn
              : language === 'hi'
                ? offer.titleHi
                : offer.titleEn;
          const summary =
            language === 'bn'
              ? offer.summaryBn
              : language === 'hi'
                ? offer.summaryHi
                : offer.summaryEn;

          return (
            <article
              key={offer.id}
              className="rounded-xl overflow-hidden bg-[#252D46] border border-[#343D58] flex flex-col shadow-md shadow-black/25 hover:border-[#FF3035]/70 transition-colors"
            >
              <div className="relative h-[130px] overflow-hidden bg-[#171B2B]">
                <img
                  src={offer.image}
                  alt={title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252D46] via-transparent to-black/20" />
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <span className="text-[11px] font-bold tracking-wider text-[#FFD028]">
                  {offer.highlight}
                </span>
                <h3 className="text-[15px] font-bold text-white mt-1 leading-snug">
                  {title}
                </h3>
                <p className="text-[12.5px] text-[#C1C9DC] mt-2 leading-relaxed flex-1">
                  {summary}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    onExploreCategory(
                      offer.category === 'all' ? 'slots' : offer.category
                    )
                  }
                  className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-full bg-[#FF3035] hover:bg-[#E52227] text-white text-[12.5px] font-semibold transition-colors cursor-pointer"
                >
                  <span>
                    {offer.category === 'all'
                      ? t.nav.slots
                      : t.nav[offer.category]}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
