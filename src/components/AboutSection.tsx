import React from 'react';
import { Flame, Clock, MapPin, Sparkles, ChefHat, CheckCircle2 } from 'lucide-react';
import { IMAGE_ASSETS, handleImageError } from '../utils/imageRegistry';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#090606] border-b border-[#291414] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Intro Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                <ChefHat className="w-4 h-4 text-[#d4af37]" />
                <span>Our Heritage &amp; Kitchen Craft</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#faf5ee] tracking-tight leading-[1.18] text-balance">
                The Art of Chinese &amp; Pan-Asian Gastronomy in Whitefield
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#b8aca0] leading-relaxed">
              Located on the second floor of Labh Villa on Whitefield Main Road, 
              <strong className="text-[#faf5ee] font-semibold"> Bangalore Mandarin</strong> brings the rich culinary 
              tapestry of authentic Chinese, Pan-Asian, and fresh coastal seafood specialties to Bengaluru's premier tech and residential corridor.
            </p>

            <p className="text-sm sm:text-base text-[#b8aca0] leading-relaxed">
              Our kitchen philosophy honors centuries of Chinese culinary tradition: 
              the breathless intensity of <em className="text-[#d4af37] not-italic font-medium">wok hei</em> (the breath of the wok), 
              the delicate artistry of translucent hand-pleated dim sum, and the harmonious balance of sweet, sour, 
              salty, and umami flavors crafted from daily farm produce and premium coastal seafood.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#140c0c] border border-[#2e1616] rounded-xl space-y-1.5 hover:border-[#d4af37]/40 transition-colors">
                <div className="flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-wider">
                  <Flame className="w-4 h-4 text-[#991b1b]" />
                  <span>The Wok Line</span>
                </div>
                <p className="text-xs text-[#a19385]">High-temperature cast iron woks ensuring crisp textures and smoky aroma.</p>
              </div>

              <div className="p-4 bg-[#140c0c] border border-[#2e1616] rounded-xl space-y-1.5 hover:border-[#d4af37]/40 transition-colors">
                <div className="flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <span>Dim Sum &amp; Bao</span>
                </div>
                <p className="text-xs text-[#a19385]">Rolled and filled by hand every morning for our lunch and dinner services.</p>
              </div>

              <div className="p-4 bg-[#140c0c] border border-[#2e1616] rounded-xl space-y-1.5 hover:border-[#d4af37]/40 transition-colors">
                <div className="flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Coastal Seafood</span>
                </div>
                <p className="text-xs text-[#a19385]">Whole pomfret, jumbo tiger prawns, and calamari prepared to order.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Culinary Details Card */}
          <div className="lg:col-span-5 relative">
            <div className="p-7 bg-[#140c0c] border border-[#3b1919] rounded-2xl space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#991b1b]/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-[#2d1616] pb-4">
                <h3 className="text-xl font-display font-bold text-[#faf5ee]">
                  Dining Overview
                </h3>
                <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-[#241212] border border-[#3d1919]">
                  Whitefield Main Road
                </span>
              </div>

              <div className="space-y-4 text-xs text-[#b8aca0]">
                <div className="flex justify-between items-start pb-3 border-b border-[#241212]">
                  <span className="text-[#eee5da] font-medium">Cuisine Styles</span>
                  <span className="text-right text-[#d4af37] font-semibold">Chinese, Asian, Seafood &amp; Desserts</span>
                </div>

                <div className="flex justify-between items-start pb-3 border-b border-[#241212]">
                  <span className="text-[#eee5da] font-medium">Dietary Options</span>
                  <span className="text-right">Extensive Pure Vegetarian &amp; Non-Vegetarian</span>
                </div>

                <div className="flex justify-between items-start pb-3 border-b border-[#241212]">
                  <span className="text-[#eee5da] font-medium">Approximate Cost</span>
                  <span className="text-right font-mono text-sm text-[#faf5ee] font-bold">₹1,300 for two</span>
                </div>

                <div className="flex justify-between items-start pb-3 border-b border-[#241212]">
                  <span className="text-[#eee5da] font-medium">Lunch Service</span>
                  <span className="text-right font-mono text-[#faf5ee]">12:00 PM – 3:30 PM</span>
                </div>

                <div className="flex justify-between items-start pb-3 border-b border-[#241212]">
                  <span className="text-[#eee5da] font-medium">Dinner Service</span>
                  <span className="text-right font-mono text-[#faf5ee]">7:00 PM – 11:00 PM</span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-[#eee5da] font-medium">Seating Types</span>
                  <span className="text-right">Banquet Tables, Family Rounds &amp; Cozy Booths</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 1. Full-Width Dramatic Culinary Action Photograph: "The Sacred Craft of Wok Hei" */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-[#3d1a1a] shadow-2xl bg-[#0c0808] aspect-[16/9] sm:aspect-[21/9] group">
          <img
            src={IMAGE_ASSETS.wokHeiAction.localPath}
            alt={IMAGE_ASSETS.wokHeiAction.description}
            referrerPolicy="no-referrer"
            onError={(e) => handleImageError(e, IMAGE_ASSETS.wokHeiAction.fallbackUrl)}
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070505] via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070505]/70 via-transparent to-transparent hidden sm:block" />

          {/* Cinematic Overlay Text */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 max-w-xl space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1a0f0f]/90 border border-[#d4af37]/40 text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">
              <Flame className="w-3 h-3 text-[#ef4444]" />
              <span>High-Temperature Culinary Artistry</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-[#faf5ee] leading-tight">
              The Sacred Craft of Wok Hei — 800°F Fire &amp; Precision
            </h3>
            <p className="text-xs sm:text-sm text-[#d4c8bb] leading-relaxed hidden sm:block">
              Every stir-fry, tossed noodle, and garlic prawn is ignited on custom high-pressure burners, sealing in crisp garden nutrients and unlocking the unmistakable smoky fragrance of authentic Chinese gastronomy.
            </p>
          </div>
        </div>

        {/* 2. Restaurant Ambience Section */}
        <div className="pt-10 border-t border-[#241313] space-y-8">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              The Dining Atmosphere
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#faf5ee]">
              Warm Silk Lanterns &amp; Oriental Elegance
            </h3>
            <p className="text-sm text-[#b5a99c] leading-relaxed">
              Step away from the fast pace of Whitefield into an inviting dining sanctuary. 
              Subtle amber lantern light, rich crimson velvet seating, and handcrafted golden lattice screens 
              create an ambience designed for lingering family dinners, business lunches, and joyful celebrations.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[#3b1919] shadow-2xl bg-[#140e0e] aspect-[16/9] sm:aspect-[21/9] group">
            <img
              src={IMAGE_ASSETS.diningAmbience.localPath}
              alt={IMAGE_ASSETS.diningAmbience.description}
              referrerPolicy="no-referrer"
              onError={(e) => handleImageError(e, IMAGE_ASSETS.diningAmbience.fallbackUrl)}
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070505]/95 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#eee5da]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span className="font-medium">619, 2nd Floor, Labh Villa, Whitefield Main Road, Bengaluru</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[#d4af37]">
                <Clock className="w-3.5 h-3.5" />
                <span>Open Daily: Lunch (12–3:30 PM) · Dinner (7–11 PM)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
