import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { LanguageCode, NavSectionId } from '../types/gaming';
import { HERO_BANNERS } from '../data/banners';
import { getWrappedSlideIndex } from '../utils/catalogLogic';
import { BA99Logo } from './BA99Logo';

interface HeroSliderProps {
  language: LanguageCode;
  onNavigateSection: (section: NavSectionId) => void;
}

export function HeroSlider({ language, onNavigateSection }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => getWrappedSlideIndex(prev, 1, HERO_BANNERS.length));
    }, 5500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const currentSlide = HERO_BANNERS[activeIndex];

  const eyebrow =
    language === 'bn'
      ? currentSlide.eyebrowBn
      : language === 'hi'
        ? currentSlide.eyebrowHi
        : currentSlide.eyebrowEn;

  const headline =
    language === 'bn'
      ? currentSlide.headlineBn
      : language === 'hi'
        ? currentSlide.headlineHi
        : currentSlide.headlineEn;

  const subline =
    language === 'bn'
      ? currentSlide.sublineBn
      : language === 'hi'
        ? currentSlide.sublineHi
        : currentSlide.sublineEn;

  return (
    <section
      aria-label="Promotional Banner Slider"
      className="relative w-full pt-2.5 px-2 sm:px-3 lg:px-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative w-full h-[200px] sm:h-[280px] lg:h-[348px] overflow-hidden rounded-xl lg:rounded-none lg:rounded-b-md bg-[#121628] group shadow-lg shadow-black/30">
        {/* Slides */}
        {HERO_BANNERS.map((slide, index) => {
          const isCurrent = index === activeIndex;
          return (
            <div
              key={slide.id}
              aria-hidden={!isCurrent}
              className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={language === 'bn' ? slide.headlineBn : slide.headlineEn}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-left sm:object-center"
              />
              {/* Subtle right-side readability scrim over dark nebula zone */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-[#10162E]/40 to-[#0B1024]/85" />
            </div>
          );
        })}

        {/* Top-left BA99 Watermark Badge matching Screenshot 5 */}
        <div className="absolute top-2.5 left-3 sm:top-3.5 sm:left-4 z-20 pointer-events-none">
          <BA99Logo size="banner" />
        </div>

        {/* Right-side Promotional Typography Overlay */}
        <button
          type="button"
          onClick={() => onNavigateSection(currentSlide.ctaSection)}
          aria-label={headline}
          className="absolute inset-0 z-20 flex items-center justify-end px-5 sm:px-10 lg:px-14 text-right cursor-pointer focus-visible:outline-none"
        >
          <div className="max-w-[66%] sm:max-w-[54%] lg:max-w-[48%] space-y-1.5 sm:space-y-2.5 drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)]">
            <div className="flex flex-wrap items-baseline justify-end gap-x-2 sm:gap-x-3">
              <span className="text-white text-[18px] sm:text-[30px] lg:text-[38px] font-extrabold leading-tight tracking-tight">
                {eyebrow}
              </span>
              <span className="inline-block py-1 px-0.5 bg-gradient-to-b from-[#FFF394] via-[#FFD028] to-[#FF8A00] bg-clip-text text-transparent text-[26px] sm:text-[42px] lg:text-[52px] font-black leading-[1.28] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                {currentSlide.highlightNumber}
              </span>
            </div>

            <h1 className="text-white text-[16px] sm:text-[26px] lg:text-[34px] font-extrabold leading-[1.2] text-balance">
              {headline}
            </h1>

            <p className="text-[#E3E9F8] text-[11.5px] sm:text-[15px] lg:text-[18px] font-semibold leading-snug">
              {subline}
            </p>
          </div>
        </button>

        {/* Manual Prev / Next Arrows */}
        <button
          type="button"
          onClick={() =>
            setActiveIndex((prev) => getWrappedSlideIndex(prev, -1, HERO_BANNERS.length))
          }
          aria-label="Previous banner slide"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/45 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={() =>
            setActiveIndex((prev) => getWrappedSlideIndex(prev, 1, HERO_BANNERS.length))
          }
          aria-label="Next banner slide"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/45 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom-center Carousel Pagination Dots */}
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2"
          role="tablist"
          aria-label="Banner slides"
        >
          {HERO_BANNERS.map((slide, idx) => {
            const active = idx === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-[8px] rounded-full transition-all duration-200 cursor-pointer ${
                  active
                    ? 'w-[18px] bg-[#FF3035] shadow-sm shadow-[#FF3035]/70'
                    : 'w-[8px] bg-white/50 hover:bg-white/80'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
