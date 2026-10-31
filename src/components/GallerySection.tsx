import React, { useState } from 'react';
import { X, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { IMAGE_ASSETS, handleImageError } from '../utils/imageRegistry';

interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'ambience' | 'dimsum' | 'seafood';
  categoryLabel: string;
  image: string;
  fallbackUrl: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Mandarin Imperial Banquet',
    category: 'food',
    categoryLabel: 'Culinary Spread',
    image: IMAGE_ASSETS.heroFeast.localPath,
    fallbackUrl: IMAGE_ASSETS.heroFeast.fallbackUrl,
    description: 'A lavish feast featuring steaming dim sum, sizzling claypots, Peking specialties, and oriental soups.',
  },
  {
    id: 'gal-2',
    title: 'Wok Hei Mastery & Soaring Flames',
    category: 'food',
    categoryLabel: 'Kitchen Fire Craft',
    image: IMAGE_ASSETS.wokHeiAction.localPath,
    fallbackUrl: IMAGE_ASSETS.wokHeiAction.fallbackUrl,
    description: 'High-heat wok tossing at 800°F creating authentic smoky fragrance for noodles and coastal tiger prawns.',
  },
  {
    id: 'gal-3',
    title: 'Main Dining Hall & Lantern Glow',
    category: 'ambience',
    categoryLabel: 'Restaurant Ambience',
    image: IMAGE_ASSETS.diningAmbience.localPath,
    fallbackUrl: IMAGE_ASSETS.diningAmbience.fallbackUrl,
    description: 'Intimate evening dining hall with traditional crimson lanterns, dark rosewood tables, and golden lattice work in Whitefield.',
  },
  {
    id: 'gal-4',
    title: 'Handcrafted Dim Sum in Bamboo Steamers',
    category: 'dimsum',
    categoryLabel: 'Dim Sum & Bao',
    image: IMAGE_ASSETS.dimSumSteamer.localPath,
    fallbackUrl: IMAGE_ASSETS.dimSumSteamer.fallbackUrl,
    description: 'Delicate Har Gow crystal prawn dumplings and vegetarian truffled mushroom dumplings served steaming hot.',
  },
  {
    id: 'gal-5',
    title: 'Sizzling Wok-Tossed Tiger Prawns',
    category: 'seafood',
    categoryLabel: 'Seafood Specialties',
    image: IMAGE_ASSETS.tigerPrawns.localPath,
    fallbackUrl: IMAGE_ASSETS.tigerPrawns.fallbackUrl,
    description: 'Jumbo coastal tiger prawns tossed over intense wok heat with golden garlic butter, cracked pepper, and scallions.',
  },
  {
    id: 'gal-6',
    title: 'Cantonese Hakka Noodles with Bok Choy',
    category: 'food',
    categoryLabel: 'Culinary Spread',
    image: IMAGE_ASSETS.hakkaNoodles.localPath,
    fallbackUrl: IMAGE_ASSETS.hakkaNoodles.fallbackUrl,
    description: 'Tossed with crunchy fresh garden vegetables, shiitake caps, and toasted sesame on high wok flames.',
  },
];

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'food' | 'ambience' | 'dimsum' | 'seafood'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#090606] border-b border-[#291414] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#261414]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              <Eye className="w-4 h-4 text-[#d4af37]" />
              <span>Visual Showcase · Whitefield, Bengaluru</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#faf5ee] tracking-tight">
              Culinary Art &amp; Ambience
            </h2>
            <p className="text-sm text-[#aba094] max-w-xl leading-relaxed">
              Step inside Bangalore Mandarin — where high-heat wok craft meets the timeless elegance of Chinese dining at Labh Villa.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'food', label: 'Culinary Dishes' },
              { id: 'dimsum', label: 'Dim Sum' },
              { id: 'seafood', label: 'Seafood' },
              { id: 'ambience', label: 'Ambience & Dining' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all shrink-0 ${
                  activeFilter === tab.id
                    ? 'gold-gradient-bg text-[#0c0a0a] shadow-md shadow-[#d4af37]/20 font-bold'
                    : 'bg-[#140c0c] text-[#b3a495] hover:text-[#faf5ee] border border-[#2b1616]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden border border-[#2e1717] bg-[#120a0a] aspect-[4/3] cursor-pointer shadow-xl hover:border-[#d4af37]/60 transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, item.fallbackUrl)}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070505] via-[#070505]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 p-2.5 bg-[#0a0606]/85 rounded-full text-[#d4af37] border border-[#d4af37]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">
                  {item.categoryLabel}
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#faf5ee] leading-snug group-hover:text-[#d4af37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#b8aca0] line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={lightboxItem.title}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#120a0a] border border-[#3d1a1a] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                aria-label="Close photo view"
                className="absolute top-4 right-4 z-10 p-2.5 bg-[#070505]/85 hover:bg-[#201010] border border-[#3d1a1a] rounded-full text-[#cfc5b8] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-[#070505] overflow-hidden">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageError(e, lightboxItem.fallbackUrl)}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-2 bg-[#120a0a] border-t border-[#2d1616]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                  <span>{lightboxItem.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>Bangalore Mandarin, Whitefield</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#faf5ee]">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#b8aca0] leading-relaxed">
                  {lightboxItem.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
