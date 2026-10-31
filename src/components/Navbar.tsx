import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080505]/95 backdrop-blur-md border-b border-[#3d1919] shadow-xl shadow-black/60'
          : 'bg-[#0a0707]/85 backdrop-blur-sm border-b border-[#241212]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Identity Lockup */}
        <a
          href="#home"
          className="group flex items-center gap-3 whitespace-nowrap shrink-0"
        >
          {/* Traditional Chinese Red Lacquer Seal Stamp */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#991b1b] to-[#590f0f] border border-[#d4af37]/60 flex flex-col items-center justify-center text-white shadow-md shadow-[#991b1b]/30 group-hover:scale-105 transition-transform duration-300">
            <span className="text-[14px] font-serif leading-none tracking-tight font-bold text-[#f7ecd0]">曼</span>
            <span className="text-[7px] tracking-widest text-[#d4af37] font-mono uppercase">EST.</span>
          </div>

          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-display font-bold tracking-wider text-[#faf5ee] group-hover:text-[#d4af37] transition-colors leading-tight">
              BANGALORE MANDARIN
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#b39e82] uppercase font-medium">
              Whitefield · Bengaluru
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-semibold text-[#c7b9a8]">
          <a
            href="#home"
            className="hover:text-[#faf5ee] hover:border-b-2 hover:border-[#d4af37] pb-1 transition-all whitespace-nowrap shrink-0"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-[#faf5ee] hover:border-b-2 hover:border-[#d4af37] pb-1 transition-all whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="#menu"
            className="hover:text-[#faf5ee] hover:border-b-2 hover:border-[#d4af37] pb-1 transition-all whitespace-nowrap shrink-0"
          >
            Menu
          </a>
          <a
            href="#gallery"
            className="hover:text-[#faf5ee] hover:border-b-2 hover:border-[#d4af37] pb-1 transition-all whitespace-nowrap shrink-0"
          >
            Gallery
          </a>
          <a
            href="#reservations"
            className="hover:text-[#faf5ee] hover:border-b-2 hover:border-[#d4af37] pb-1 transition-all whitespace-nowrap shrink-0"
          >
            Reservations
          </a>
          <a
            href="#contact"
            className="hover:text-[#faf5ee] hover:border-b-2 hover:border-[#d4af37] pb-1 transition-all whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Direct Actions (Call, Reserve) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick Call */}
          <a
            href="tel:+918040998477"
            title="Call Bangalore Mandarin: +91 80 4099 8477"
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#d4af37] bg-[#1a0f0f] border border-[#3d1919] hover:border-[#d4af37]/60 rounded-lg transition-all hover:bg-[#251212]"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="font-mono tabular-nums text-[11px]">+91 80 4099 8477</span>
          </a>

          {/* Reserve Table Primary Action */}
          <button
            type="button"
            onClick={onOpenReservation}
            className="btn btn-primary text-xs !py-2.5 !px-5 whitespace-nowrap shrink-0 shadow-md shadow-[#d4af37]/20"
          >
            <span>Reserve a Table</span>
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2.5 text-[#cfc5b8] hover:text-[#faf5ee] bg-[#160d0d] rounded-lg border border-[#381a1a]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0707] border-b border-[#3b1919] px-5 pt-4 pb-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[#d8cfc4]">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#menu', label: 'Menu' },
              { href: '#gallery', label: 'Gallery' },
              { href: '#reservations', label: 'Reservations' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-lg hover:bg-[#1f1010] hover:text-[#d4af37] transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#6e5849]" />
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#291414] space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="tel:+918040998477"
                className="py-2.5 px-2 text-center bg-[#1c1010] border border-[#3b1717] text-[#d4af37] rounded-lg font-mono font-medium flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 80 4099 8477</span>
              </a>
              <a
                href="tel:+918040914803"
                className="py-2.5 px-2 text-center bg-[#1c1010] border border-[#3b1717] text-[#d4af37] rounded-lg font-mono font-medium flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 80 4091 4803</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-[#0c0a0a] gold-gradient-bg rounded-lg shadow-md shadow-[#d4af37]/20"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
