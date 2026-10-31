import React, { useState, useMemo } from 'react';
import { MenuItem, MenuCourse, FoodType } from '../types/restaurant';
import { Search, Sparkles, Flame, AlertCircle } from 'lucide-react';
import { IMAGE_ASSETS, handleImageError } from '../utils/imageRegistry';

interface MenuSectionProps {
  menuItems: MenuItem[];
  onReserveTableClick: () => void;
}

const COURSES: { id: MenuCourse; label: string }[] = [
  { id: 'all', label: 'All Offerings' },
  { id: 'dimsum', label: 'Dim Sum & Bao' },
  { id: 'starters', label: 'Starters' },
  { id: 'soups', label: 'Soups' },
  { id: 'seafood', label: 'Seafood Specialties' },
  { id: 'noodles', label: 'Noodles' },
  { id: 'rice', label: 'Rice & Claypots' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'beverages', label: 'Teas & Coolers' },
];

export const MenuSection: React.FC<MenuSectionProps> = ({
  menuItems,
  onReserveTableClick,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<MenuCourse>('all');
  const [foodTypeFilter, setFoodTypeFilter] = useState<'all' | FoodType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      if (selectedCourse !== 'all' && item.course !== selectedCourse) {
        return false;
      }
      if (foodTypeFilter !== 'all' && item.foodType !== foodTypeFilter) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesIngr = item.ingredients.some((ing) => ing.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesIngr) {
          return false;
        }
      }
      return true;
    });
  }, [menuItems, selectedCourse, foodTypeFilter, searchQuery]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#070505] border-b border-[#291414] relative bg-lattice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#261414]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Authentic Recipes · Wok Prepared Daily</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#faf5ee] tracking-tight">
              The Mandarin Menu
            </h2>
            <p className="text-sm text-[#aba094] max-w-xl leading-relaxed">
              From comforting claypot broths to fiery wok-tossed seafood and delicate bamboo dim sum baskets.
              Approximate meal cost: <span className="text-[#faf5ee] font-semibold font-mono">₹1,300 for two</span>.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-[#8a7c6f] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dim sum, prawns, noodles..."
              className="w-full pl-9 pr-3.5 py-2.5 text-xs text-[#faf5ee] placeholder-[#7d7165] bg-[#140c0c] border border-[#3b1919] rounded-xl focus:outline-none focus:border-[#d4af37] transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8a7c6f] hover:text-[#faf5ee]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-5">
          {/* Dietary Badges (Veg vs Non-Veg) */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-[#9a8c7e] font-semibold uppercase tracking-wider">Dietary Filter:</span>
            
            <button
              type="button"
              onClick={() => setFoodTypeFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all border ${
                foodTypeFilter === 'all'
                  ? 'bg-[#291515] text-[#faf5ee] border-[#d4af37] shadow-sm'
                  : 'bg-[#120a0a] text-[#a39587] border-[#2b1616] hover:text-[#faf5ee]'
              }`}
            >
              All Offerings
            </button>

            {/* Pure Veg */}
            <button
              type="button"
              onClick={() => setFoodTypeFilter('veg')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all border ${
                foodTypeFilter === 'veg'
                  ? 'bg-[#132415] text-[#86efac] border-[#22c55e] shadow-sm shadow-[#22c55e]/20'
                  : 'bg-[#120a0a] text-[#a39587] border-[#2b1616] hover:text-[#86efac]'
              }`}
            >
              <span className="w-3.5 h-3.5 border border-[#22c55e] flex items-center justify-center p-0.5 rounded-[2px] bg-[#0c180e]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
              </span>
              <span>Pure Vegetarian</span>
            </button>

            {/* Non Veg */}
            <button
              type="button"
              onClick={() => setFoodTypeFilter('non-veg')}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all border ${
                foodTypeFilter === 'non-veg'
                  ? 'bg-[#261010] text-[#fca5a5] border-[#ef4444] shadow-sm shadow-[#ef4444]/20'
                  : 'bg-[#120a0a] text-[#a39587] border-[#2b1616] hover:text-[#fca5a5]'
              }`}
            >
              <span className="w-3.5 h-3.5 border border-[#ef4444] flex items-center justify-center p-0.5 rounded-[2px] bg-[#1a0c0c]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
              </span>
              <span>Non-Vegetarian</span>
            </button>

            <span className="text-xs text-[#8c7e70] ml-auto">
              Showing {filteredItems.length} dishes
            </span>
          </div>

          {/* Course Tabs (Horizontal scroll bar) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {COURSES.map((course) => (
              <button
                key={course.id}
                type="button"
                onClick={() => setSelectedCourse(course.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl whitespace-nowrap transition-all shrink-0 ${
                  selectedCourse === course.id
                    ? 'gold-gradient-bg text-[#0c0a0a] shadow-md shadow-[#d4af37]/20 scale-102 font-bold'
                    : 'bg-[#140c0c] text-[#b3a495] hover:text-[#faf5ee] hover:bg-[#1f1212] border border-[#2b1616]'
                }`}
              >
                {course.label}
              </button>
            ))}
          </div>
        </div>

        {/* Elegant Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center border border-[#261515] rounded-2xl bg-[#120a0a] p-8 space-y-4">
            <AlertCircle className="w-9 h-9 text-[#991b1b] mx-auto" />
            <p className="text-lg font-serif text-[#faf5ee]">No dishes match your selection</p>
            <p className="text-xs text-[#a39487]">Please try clearing your search query or dietary filters.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCourse('all');
                setFoodTypeFilter('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0c0a0a] gold-gradient-bg rounded-lg"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredItems.map((item) => {
              const isVeg = item.foodType === 'veg';

              return (
                <article
                  key={item.id}
                  className="flex flex-col bg-[#120a0a] border border-[#2d1616] hover:border-[#d4af37]/50 rounded-2xl overflow-hidden transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-black/70 hover:-translate-y-1"
                >
                  {/* Dish Image Frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#180e0e]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const fallbackMap: Record<string, string> = {
                          dimsum: IMAGE_ASSETS.dimSumSteamer.fallbackUrl,
                          soups: IMAGE_ASSETS.chineseSoup.fallbackUrl,
                          noodles: IMAGE_ASSETS.hakkaNoodles.fallbackUrl,
                          seafood: IMAGE_ASSETS.tigerPrawns.fallbackUrl,
                          desserts: IMAGE_ASSETS.chineseDessert.fallbackUrl,
                          rice: IMAGE_ASSETS.heroFeast.fallbackUrl,
                          starters: IMAGE_ASSETS.tigerPrawns.fallbackUrl,
                        };
                        const fallback = fallbackMap[item.course] || IMAGE_ASSETS.heroMandarin.fallbackUrl;
                        handleImageError(e, fallback);
                      }}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120a0a] via-transparent to-transparent opacity-95" />

                    {/* Veg / Non-Veg Standard Indicator Badge (Top Left) */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <div
                        className={`w-5 h-5 bg-[#0a0606]/95 backdrop-blur-md rounded-[4px] border flex items-center justify-center p-0.5 shadow-md ${
                          isVeg ? 'border-[#22c55e]' : 'border-[#ef4444]'
                        }`}
                        title={isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isVeg ? 'bg-[#22c55e]' : 'bg-[#ef4444]'
                          }`}
                        />
                      </div>

                      {item.isChefSpecial && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#140c0c]/95 text-[#d4af37] backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#d4af37]/50 flex items-center gap-1 shadow-md">
                          <Sparkles className="w-2.5 h-2.5 text-[#d4af37]" />
                          Chef's Special
                        </span>
                      )}
                    </div>

                    {/* Portion Size Tag (Top Right) */}
                    {item.portionSize && (
                      <span className="absolute top-3.5 right-3.5 text-[10px] font-medium text-[#d4c8bb] bg-[#0c0707]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#331717]">
                        {item.portionSize}
                      </span>
                    )}

                    {/* Clearly Displayed Menu Price (Bottom Right) */}
                    <div className="absolute bottom-3.5 right-3.5 flex items-center text-sm font-bold text-[#faf5ee] bg-[#0c0707]/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#d4af37]/50 tabular-nums shadow-lg">
                      <span className="text-xs text-[#d4af37] mr-0.5">₹</span>
                      <span className="text-base font-mono">{item.price}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-[#9a8c7e]">
                        <span className="uppercase tracking-widest text-[10px] font-semibold text-[#d4af37]">
                          {item.course.replace(/_/g, ' ')}
                        </span>
                        {item.spicyLevel !== undefined && item.spicyLevel > 0 && (
                          <span className="flex items-center gap-0.5 text-[#ef4444] text-[11px]" title={`Spice Level: ${item.spicyLevel}/3`}>
                            {Array.from({ length: item.spicyLevel }).map((_, i) => (
                              <Flame key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-serif font-bold text-[#faf5ee] group-hover:text-[#d4af37] transition-colors leading-snug">
                        {item.name}
                      </h3>

                      <p className="text-xs text-[#aba094] leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Ingredients summary */}
                    <div className="text-[11px] text-[#85776a] pt-3 border-t border-[#211212] truncate">
                      <span>Ingredients: {item.ingredients.join(', ')}</span>
                    </div>

                    {/* Card Action Row */}
                    <div className="pt-2 flex items-center justify-between gap-3">
                      <span className="text-xs text-[#a39487] font-medium">
                        {isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
                      </span>

                      <button
                        type="button"
                        onClick={onReserveTableClick}
                        className="text-xs text-[#d4af37] hover:text-[#e5c158] font-semibold uppercase tracking-wider transition-colors hover:underline"
                      >
                        Reserve Table
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Note on Taxes & Average Cost */}
        <div className="p-5 bg-[#120a0a] border border-[#2b1616] rounded-2xl text-xs text-[#a39487] flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p>
            * Indicative menu &amp; prices. Government taxes (5% GST) and applicable charges extra. Final bill subject to seasonal menu revisions by Bangalore Mandarin management.
          </p>
          <div className="font-mono text-[#d4af37] font-semibold text-xs px-3 py-1.5 bg-[#1a0e0e] rounded-lg border border-[#3b1919]">
            Approx. ₹1,300 for two
          </div>
        </div>
      </div>
    </section>
  );
};
