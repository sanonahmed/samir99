import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import type { CategoryItem, GameCategoryId, LanguageCode } from '../types/gaming';

interface CategoryCardProps {
  category: CategoryItem;
  language: LanguageCode;
  onSelectCategory: (categoryId: GameCategoryId) => void;
}

export function CategoryCard({
  category,
  language,
  onSelectCategory,
}: CategoryCardProps) {
  const [imgError, setImgError] = useState(false);

  const label =
    language === 'bn'
      ? category.labelBn
      : language === 'hi'
        ? category.labelHi
        : category.labelEn;

  return (
    <button
      type="button"
      onClick={() => onSelectCategory(category.id)}
      data-testid={`category-card-${category.id}`}
      className={`group relative w-full aspect-[120/195] rounded-[12px] overflow-hidden bg-gradient-to-b ${category.accentGradient} border border-[#2F3957]/60 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF3035]/75 hover:shadow-xl hover:shadow-black/50 cursor-pointer focus-visible:outline-none`}
    >
      {!imgError ? (
        <img
          src={category.image}
          alt={label}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-white/60" />
        </div>
      )}

      {/* Dark Bottom Gradient Overlay matching Screenshot 4 */}
      <div className="absolute inset-x-0 bottom-0 h-[44%] bg-gradient-to-t from-[#0D101E] via-[#0D101E]/70 to-transparent pointer-events-none" />

      {/* Bold Red Bengali Category Name */}
      <span className="absolute inset-x-1 bottom-2.5 text-center text-[16px] sm:text-[17px] font-extrabold text-[#FF3035] tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] group-hover:text-[#FF4D52] transition-colors">
        {label}
      </span>
    </button>
  );
}
