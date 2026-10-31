import React from 'react';
import { Clock, MapPin, IndianRupee } from 'lucide-react';
import { IMAGE_ASSETS, handleImageError } from '../utils/imageRegistry';

interface HeroProps {
  onReserveClick: () => void;
  onExploreMenuClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReserveClick, onExploreMenuClick }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#070505] border-b border-[#291414] bg-lattice">
      {/* Subtle gold and crimson ambient glows */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 -translate-x-1/2 w-[800px] h-[550px] bg-[#991b1b]/15 blur-[160px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#d4af37]/12 blur-[150px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Variation 4 Typography & Pill Buttons */}
          <div className="lg:col-span-6 space-y-6 text-left lg:pl-2">
            <div>
              {/* Variation 4 Two-Line Massive Title */}
              <h1
                style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', lineHeight: 0.95 }}
                className="font-display font-extrabold tracking-tight text-[#faf5ee] mb-5"
              >
                BANGALORE<br />
                <span className="accent-text">MANDARIN</span>
              </h1>

              {/* Variation 4 Italic Tagline */}
              <p
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl sm:text-2xl text-[#d4af37] italic font-medium mb-6"
              >
                Experience Authentic Asian Flavours
              </p>

              {/* Variation 4 Description */}
              <p className="max-w-[500px] text-sm sm:text-base text-[#bfb2a4] leading-[1.8] opacity-90 mb-8 font-light">
                Experience authentic Chinese, Asian, seafood and desserts at Bangalore Mandarin, Labh Villa, Whitefield Main Road, Bengaluru. Join us for lunch or dinner.
              </p>
            </div>

            {/* Variation 4 Pill Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                type="button"
                onClick={onReserveClick}
                className="btn btn-primary text-xs"
              >
                Reserve a Table
              </button>

              <button
                type="button"
                onClick={onExploreMenuClick}
                className="btn btn-secondary text-xs"
              >
                Explore Menu
              </button>
            </div>

            {/* Verified Business Details Strip */}
            <div className="pt-6 border-t border-[#261313] grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs text-[#a39485]">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#140c0c]/80 border border-[#2b1717]">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#eee6da]">Dining Hours</p>
                  <p className="font-mono text-[11px] text-[#bfb2a4]">Lunch: 12 PM – 3:30 PM</p>
                  <p className="font-mono text-[11px] text-[#bfb2a4]">Dinner: 7 PM – 11 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#140c0c]/80 border border-[#2b1717]">
                <IndianRupee className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#eee6da]">Average Cost</p>
                  <p className="font-mono text-sm text-[#d4af37] font-bold">₹1,300</p>
                  <p className="text-[10px] text-[#877a6d]">For two (approximate)</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#140c0c]/80 border border-[#2b1717]">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#eee6da]">Location</p>
                  <p className="text-[11px] text-[#bfb2a4]">619, 2nd Floor, Labh Villa</p>
                  <p className="text-[10px] text-[#877a6d]">Whitefield Main Road</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Variation 4 Tall Rounded Frame (80vh / 2rem radius) */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            {/* Subtle Gold Lighting Glow Effect */}
            <div
              className="pointer-events-none absolute -inset-3 bg-gradient-to-tr from-[#991b1b]/20 via-[#d4af37]/15 to-transparent rounded-[2.5rem] blur-2xl"
              aria-hidden="true"
            />

            <div className="relative h-[50vh] sm:h-[60vh] lg:h-[72vh] rounded-[2rem] overflow-hidden border border-[rgba(212,175,55,0.3)] shadow-2xl bg-[#0e0808] group">
              <img
                src={IMAGE_ASSETS.heroMandarin.localPath}
                alt={IMAGE_ASSETS.heroMandarin.description}
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, IMAGE_ASSETS.heroMandarin.fallbackUrl)}
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
              />

              {/* Gradient Blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070505] via-transparent to-transparent opacity-60" />

              {/* Floating Highlight Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-xs text-[#faf5ee] bg-[#0c0707]/90 backdrop-blur-md px-4 py-3 rounded-xl border border-[#4a1f1f] shadow-2xl">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] shadow-sm shadow-[#d4af37] shrink-0" />
                  <span className="font-serif font-medium truncate">
                    Dim Sum, Roast Duck, Coastal Seafood &amp; Noodles
                  </span>
                </div>
                <span className="text-[#d4af37] font-mono text-[11px] uppercase tracking-wider font-bold shrink-0 ml-2">
                  Whitefield
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
