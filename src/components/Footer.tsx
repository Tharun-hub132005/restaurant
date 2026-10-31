import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, MessageSquare, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050303] border-t border-[#210f0f] text-[#b3a495]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Overview */}
          <div className="space-y-4 md:col-span-1">
            <a
              href="#home"
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#991b1b] to-[#590f0f] border border-[#d4af37]/60 flex items-center justify-center text-white shadow-md">
                <span className="text-xs font-serif font-bold text-[#f7ecd0]">曼</span>
              </div>
              <span className="text-lg font-display font-bold text-[#faf5ee] tracking-wider">
                BANGALORE MANDARIN
              </span>
            </a>
            <p className="text-xs text-[#9a8c7e] leading-relaxed">
              Authentic Chinese, Pan-Asian, and Coastal Seafood dining on Whitefield Main Road, Bengaluru. 
              Traditional high-heat wok craft, handmade dim sum, and warm oriental hospitality.
            </p>
            <div className="text-xs font-mono text-[#d4af37] font-semibold">
              Approx. ₹1,300 for two
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3.5">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#faf5ee]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#d4af37] transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">
                  About &amp; Ambience
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#d4af37] transition-colors">
                  Live Menu &amp; Ordering
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors">
                  Culinary Photo Gallery
                </a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-[#d4af37] transition-colors">
                  Table Reservations
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d4af37] transition-colors">
                  Location &amp; Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Direct Call */}
          <div className="space-y-3.5">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#faf5ee]">
              Contact Details
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>619, 2nd Floor, Labh Villa, Whitefield Main Road, Bengaluru 560066</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href="tel:+918040998477" className="font-mono hover:text-[#d4af37]">
                  +91 80 4099 8477
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href="tel:+918040914803" className="font-mono hover:text-[#d4af37]">
                  +91 80 4091 4803
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#22c55e] shrink-0" />
                <a
                  href="https://wa.me/918040998477?text=Hi%20Bangalore%20Mandarin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#86efac] hover:underline"
                >
                  WhatsApp: +91 80 4099 8477
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="space-y-3.5">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#faf5ee]">
              Dining Hours
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#faf5ee] font-semibold">Lunch Service</p>
                  <p className="font-mono">12:00 PM – 3:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#faf5ee] font-semibold">Dinner Service</p>
                  <p className="font-mono">7:00 PM – 11:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[10px] text-[#8a7c6f] uppercase tracking-widest mb-2 font-semibold">
                Social Presence
              </p>
              <div className="flex items-center gap-2.5 text-xs">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#140c0c] border border-[#2b1616] rounded-lg hover:border-[#d4af37] hover:text-[#d4af37] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#140c0c] border border-[#2b1616] rounded-lg hover:border-[#d4af37] hover:text-[#d4af37] transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://tripadvisor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#140c0c] border border-[#2b1616] rounded-lg hover:border-[#d4af37] hover:text-[#d4af37] transition-colors"
                >
                  Tripadvisor
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1a0c0c] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7d6f62]">
          <p>© {new Date().getFullYear()} Bangalore Mandarin. All rights reserved. 619, 2nd Floor, Labh Villa, Whitefield, Bengaluru.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#faf5ee] transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
