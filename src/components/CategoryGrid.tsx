import type { GameCategoryId, LanguageCode } from '../types/gaming';
import { GAME_CATEGORIES } from '../data/categories';
import { CategoryCard } from './CategoryCard';

interface CategoryGridProps {
  language: LanguageCode;
  onSelectCategory: (categoryId: GameCategoryId) => void;
}

export function CategoryGrid({ language, onSelectCategory }: CategoryGridProps) {
  return (
    <section
      aria-label="Game Categories"
      className="max-w-[784px] mx-auto px-3 sm:px-4 mt-7"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
        {GAME_CATEGORIES.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            language={language}
            onSelectCategory={onSelectCategory}
          />
        ))}
      </div>
    </section>
  );
}
