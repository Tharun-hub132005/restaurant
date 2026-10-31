import React from 'react';
import { Phone, MessageSquare, UtensilsCrossed, Calendar } from 'lucide-react';

interface MobileQuickBarProps {
  onReserveClick: () => void;
  onMenuClick: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onReserveClick,
  onMenuClick,
}) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0a0606]/96 backdrop-blur-md border-t border-[#3b1919] px-3 py-2 flex items-center justify-around gap-2 shadow-2xl"
    >
      <a
        href="tel:+918040998477"
        className="flex-1 flex flex-col items-center justify-center py-1 text-[#d4af37] active:scale-95 transition-transform"
        aria-label="Call Bangalore Mandarin"
      >
        <Phone className="w-4 h-4 mb-0.5" />
        <span className="text-[10px] font-semibold uppercase tracking-wider">Call</span>
      </a>

      <a
        href="https://wa.me/918040998477?text=Hi%20Bangalore%20Mandarin"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1 text-[#86efac] active:scale-95 transition-transform"
        aria-label="WhatsApp Bangalore Mandarin"
      >
        <MessageSquare className="w-4 h-4 mb-0.5" />
        <span className="text-[10px] font-semibold uppercase tracking-wider">WhatsApp</span>
      </a>

      <button
        type="button"
        onClick={onMenuClick}
        className="flex-1 flex flex-col items-center justify-center py-1 text-[#f5ebd7] active:scale-95 transition-transform"
      >
        <UtensilsCrossed className="w-4 h-4 mb-0.5 text-[#d4af37]" />
        <span className="text-[10px] font-semibold uppercase tracking-wider">Menu</span>
      </button>

      <button
        type="button"
        onClick={onReserveClick}
        className="flex-[1.4] py-2 px-3 text-[11px] font-bold uppercase tracking-wider text-[#0c0a0a] gold-gradient-bg rounded-full shadow-md shadow-[#d4af37]/20 flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
      >
        <Calendar className="w-3.5 h-3.5 text-[#0c0a0a]" />
        <span>Reserve</span>
      </button>
    </aside>
  );
};
