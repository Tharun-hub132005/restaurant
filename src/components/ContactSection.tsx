import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, Navigation, IndianRupee, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const googleMapsDirectionsUrl = "https://www.google.com/maps/search/?api=1&query=Bangalore+Mandarin+Whitefield+Main+Road+Bengaluru+560066";

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#090606] border-b border-[#291414] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c0f0f] border border-[#d4af37]/40 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Visit Bangalore Mandarin</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#faf5ee]">
            Find Us in Whitefield
          </h2>
          <p className="text-sm text-[#aba094] leading-relaxed">
            Located conveniently on Whitefield Main Road at Labh Villa. We are delighted to assist with dining reservations, directions, and banquet inquiries.
          </p>
        </div>

        {/* 3 Contact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. Address & Directions */}
          <div className="p-7 bg-[#120a0a] border border-[#2d1616] hover:border-[#d4af37]/40 rounded-2xl space-y-5 flex flex-col justify-between shadow-xl transition-all">
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#211111] border border-[#4a1d1d] flex items-center justify-center text-[#d4af37] shadow-inner">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#faf5ee]">Restaurant Address</h3>
              <p className="text-xs sm:text-sm text-[#b8aca0] leading-relaxed">
                619, 2nd Floor, Labh Villa, Whitefield Main Road, Bengaluru, Karnataka 560066.
              </p>
            </div>

            <div className="pt-3 border-t border-[#211212]">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:text-[#e5c158] transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* 2. Direct Phone Lines */}
          <div className="p-7 bg-[#120a0a] border border-[#2d1616] hover:border-[#d4af37]/40 rounded-2xl space-y-5 flex flex-col justify-between shadow-xl transition-all">
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#211111] border border-[#4a1d1d] flex items-center justify-center text-[#d4af37] shadow-inner">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#faf5ee]">Telephone Booking</h3>
              <p className="text-xs text-[#a39487]">
                Tap below to speak with our front desk directly for table bookings and takeaway orders.
              </p>

              <div className="space-y-2.5 pt-1">
                <a
                  href="tel:+918040998477"
                  className="flex items-center justify-between p-3 bg-[#1a0e0e] hover:bg-[#251212] border border-[#3b1717] rounded-xl text-xs font-mono font-semibold text-[#faf5ee] transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>+91 80 4099 8477</span>
                  </span>
                  <span className="text-[10px] text-[#d4af37] uppercase font-sans font-bold group-hover:underline">Call</span>
                </a>

                <a
                  href="tel:+918040914803"
                  className="flex items-center justify-between p-3 bg-[#1a0e0e] hover:bg-[#251212] border border-[#3b1717] rounded-xl text-xs font-mono font-semibold text-[#faf5ee] transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>+91 80 4091 4803</span>
                  </span>
                  <span className="text-[10px] text-[#d4af37] uppercase font-sans font-bold group-hover:underline">Call</span>
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-[#211212]">
              <a
                href="https://wa.me/918040998477?text=Hi%20Bangalore%20Mandarin,%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#142618] hover:bg-[#1b3621] border border-[#24582f] text-[#86efac] rounded-xl text-xs font-semibold transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with us on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 3. Opening Hours & Cost */}
          <div className="p-7 bg-[#120a0a] border border-[#2d1616] hover:border-[#d4af37]/40 rounded-2xl space-y-5 flex flex-col justify-between shadow-xl transition-all">
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#211111] border border-[#4a1d1d] flex items-center justify-center text-[#d4af37] shadow-inner">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#faf5ee]">Operating Hours</h3>

              <div className="space-y-2.5 text-xs text-[#b8aca0]">
                <div className="flex justify-between py-1.5 border-b border-[#211212]">
                  <span>Lunch Service</span>
                  <span className="font-mono text-[#faf5ee] font-semibold">12:00 PM – 3:30 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#211212]">
                  <span>Dinner Service</span>
                  <span className="font-mono text-[#faf5ee] font-semibold">7:00 PM – 11:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#211212]">
                  <span>Operating Days</span>
                  <span className="text-[#faf5ee]">Open Daily (Mon–Sun)</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span>Approximate Cost</span>
                  <span className="font-mono text-[#d4af37] font-bold text-sm">₹1,300 for two</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#211212] text-[11px] text-[#8a7c6f]">
              Elevator access available to 2nd Floor at Labh Villa.
            </div>
          </div>
        </div>

        {/* Location Map Box */}
        <div className="rounded-3xl overflow-hidden border-2 border-[#331717] bg-[#120a0a] shadow-2xl">
          <div className="p-5 sm:p-6 bg-[#160d0d] border-b border-[#2a1414] flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <div className="flex items-center gap-2.5 text-xs text-[#faf5ee]">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span className="font-semibold text-sm">Labh Villa, Whitefield Main Road, Bengaluru 560066</span>
            </div>
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0c0a0a] gold-gradient-bg rounded-lg hover:brightness-110 transition-all self-start sm:self-auto font-bold"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          <div className="aspect-[21/9] sm:aspect-[24/9] w-full bg-[#1b1010] relative flex items-center justify-center p-6 text-center">
            {/* Embedded map iframe */}
            <iframe
              title="Bangalore Mandarin Location Map"
              width="100%"
              height="100%"
              className="absolute inset-0 border-0 opacity-80 contrast-125 grayscale-[35%]"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.7400%2C12.9600%2C77.7600%2C12.9800&amp;layer=mapnik&amp;marker=12.9700%2C77.7500"
            />
            
            {/* Floating Location Card Overlay */}
            <div className="relative z-10 max-w-sm p-5 bg-[#080505]/92 backdrop-blur-md border border-[#3d1919] rounded-2xl text-left space-y-1.5 shadow-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                <p className="text-xs font-serif font-bold text-[#faf5ee]">Bangalore Mandarin</p>
              </div>
              <p className="text-[11px] text-[#b8aca0]">
                619, 2nd Floor, Labh Villa, Whitefield Main Road, Bengaluru 560066
              </p>
              <div className="pt-2 flex items-center gap-3 text-[11px]">
                <a href="tel:+918040998477" className="text-[#d4af37] hover:underline font-mono font-semibold">
                  +91 80 4099 8477
                </a>
                <span className="text-[#4f3d32]">·</span>
                <span className="text-[#a89c8f]">Whitefield Corridor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
