/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { MenuItem, ReservationRequest } from './types/restaurant';
import { INITIAL_BANGALORE_MANDARIN_MENU } from './data/menuData';

const RESERVATIONS_STORAGE_KEY = 'bangalore_mandarin_reservations_v2';

export default function App() {
  // Menu items initialized with verified indicative prices & dedicated high-res images
  const [menuItems] = useState<MenuItem[]>(INITIAL_BANGALORE_MANDARIN_MENU);

  // Reservation requests with localStorage hydration
  const [reservationRequests, setReservationRequests] = useState<ReservationRequest[]>(() => {
    try {
      const saved = localStorage.getItem(RESERVATIONS_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return [
      {
        id: 'sample-1',
        requestId: 'BM-2841',
        customerName: 'Ananya Deshmukh',
        customerPhone: '+91 98450 12345',
        guestsCount: 4,
        date: new Date().toISOString().split('T')[0],
        timeSlot: 'Dinner 8:00 PM',
        seatingPreference: 'family_round_table',
        specialRequests: 'Window side table if available',
        status: 'pending_review',
        createdAt: new Date().toISOString(),
      },
    ];
  });

  // Persist reservations
  useEffect(() => {
    try {
      localStorage.setItem(RESERVATIONS_STORAGE_KEY, JSON.stringify(reservationRequests));
    } catch {
      // ignore
    }
  }, [reservationRequests]);

  // Reservation request handler
  const handleAddReservationRequest = (req: ReservationRequest) => {
    setReservationRequests((prev) => [req, ...prev]);
  };

  const scrollToReservations = () => {
    const el = document.getElementById('reservations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070505] text-[#f5efe6] font-sans flex flex-col selection:bg-[#991b1b]/50 selection:text-[#fde047] pb-14 md:pb-0">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenReservation={scrollToReservations}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onReserveClick={scrollToReservations}
          onExploreMenuClick={scrollToMenu}
        />

        {/* 3. About & Ambience Section */}
        <AboutSection />

        {/* 4. Menu Section with Veg/Non-Veg Filters */}
        <MenuSection
          menuItems={menuItems}
          onReserveTableClick={scrollToReservations}
        />

        {/* 5. Food & Ambience Photo Gallery */}
        <GallerySection />

        {/* 6. Table Reservation Form & Lookup */}
        <ReservationSection
          onAddReservationRequest={handleAddReservationRequest}
          existingRequests={reservationRequests}
        />

        {/* 7. Contact, Location, Map & Timings */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar
        onReserveClick={scrollToReservations}
        onMenuClick={scrollToMenu}
      />
    </div>
  );
}
