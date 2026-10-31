import React, { useState } from 'react';
import { ReservationRequest } from '../types/restaurant';
import { Calendar, Clock, Users, Phone, User, CheckCircle2, Info, Sparkles, MessageSquare } from 'lucide-react';

interface ReservationSectionProps {
  onAddReservationRequest: (req: ReservationRequest) => void;
  existingRequests: ReservationRequest[];
}

const LUNCH_SLOTS = [
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
];

const DINNER_SLOTS = [
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
  '9:00 PM',
  '9:30 PM',
  '10:00 PM',
  '10:30 PM',
];

const SEATING_OPTIONS = [
  {
    id: 'main_hall',
    title: 'Main Dining Hall',
    desc: 'Surrounded by crimson silk lanterns and golden wood screens.',
  },
  {
    id: 'family_round_table',
    title: 'Royal Round Table',
    desc: 'Spacious banquet table fitted with rotating Lazy Susan for family dining.',
  },
  {
    id: 'quiet_booth',
    title: 'Velvet Alcove Booth',
    desc: 'Intimate deep crimson velvet booth tailored for private conversations.',
  },
  {
    id: 'window_view',
    title: 'Whitefield Window View',
    desc: 'Elevated second-floor view overlooking vibrant Whitefield Main Road.',
  },
];

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  onAddReservationRequest,
  existingRequests,
}) => {
  const [activeTab, setActiveTab] = useState<'request' | 'lookup'>('request');

  // Form State
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [guestsCount, setGuestsCount] = useState(2);
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [serviceType, setServiceType] = useState<'lunch' | 'dinner'>('dinner');
  const [timeSlot, setTimeSlot] = useState('8:00 PM');
  const [seatingPreference, setSeatingPreference] = useState<'main_hall' | 'family_round_table' | 'quiet_booth' | 'window_view'>('main_hall');
  const [specialRequests, setSpecialRequests] = useState('');

  // Status after submission
  const [submittedRequest, setSubmittedRequest] = useState<ReservationRequest | null>(null);

  // Lookup state
  const [lookupQuery, setLookupQuery] = useState('');
  const [lookupResult, setLookupResult] = useState<ReservationRequest | null | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newReq: ReservationRequest = {
      id: `req-${Date.now()}`,
      requestId: `BM-${randomSuffix}`,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerEmail: customerEmail.trim() || undefined,
      guestsCount,
      date: selectedDate,
      timeSlot: `${serviceType === 'lunch' ? 'Lunch' : 'Dinner'} ${timeSlot}`,
      seatingPreference,
      specialRequests: specialRequests.trim() || undefined,
      status: 'pending_review',
      createdAt: new Date().toISOString(),
    };

    onAddReservationRequest(newReq);
    setSubmittedRequest(newReq);
  };

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const query = lookupQuery.trim().toLowerCase();
    if (!query) return;

    const found = existingRequests.find(
      (r) =>
        r.requestId.toLowerCase() === query ||
        r.customerPhone.includes(query) ||
        r.customerName.toLowerCase().includes(query)
    );
    setLookupResult(found || null);
  };

  return (
    <section id="reservations" className="py-20 sm:py-28 bg-[#070505] border-b border-[#291414] relative bg-lattice">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a0f0f] border border-[#d4af37]/40 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Table Reservations · Concierge Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#faf5ee]">
            Reserve Your Experience
          </h2>
          <p className="text-sm text-[#aba094] leading-relaxed">
            Please submit your dining reservation request below. Our host team reviews table availability 
            and will contact you directly to confirm your booking.
          </p>

          {/* Mode Switch: Request Table vs Lookup Request */}
          <div className="inline-flex items-center p-1.5 bg-[#120a0a] border border-[#2b1616] rounded-xl mt-3">
            <button
              type="button"
              onClick={() => setActiveTab('request')}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'request'
                  ? 'gold-gradient-bg text-[#0c0a0a] shadow-md shadow-[#d4af37]/20 font-bold'
                  : 'text-[#9c8e81] hover:text-[#faf5ee]'
              }`}
            >
              Request a Table
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('lookup')}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'lookup'
                  ? 'gold-gradient-bg text-[#0c0a0a] shadow-md shadow-[#d4af37]/20 font-bold'
                  : 'text-[#9c8e81] hover:text-[#faf5ee]'
              }`}
            >
              Check Request Status
            </button>
          </div>
        </div>

        {/* Tab 1: Request a Table */}
        {activeTab === 'request' && (
          <div className="bg-[#100808] border-2 border-[#331717] rounded-3xl p-6 sm:p-12 shadow-2xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#991b1b]/10 rounded-full blur-3xl pointer-events-none" />

            {submittedRequest ? (
              <div className="space-y-6 text-center py-6">
                <div className="w-18 h-18 bg-[#1e1010] border-2 border-[#d4af37] text-[#d4af37] rounded-full flex items-center justify-center mx-auto shadow-xl shadow-[#d4af37]/20">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#d4af37] px-3 py-1 bg-[#1c0f0f] border border-[#3d1919] rounded-full">
                    Request ID: #{submittedRequest.requestId}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#faf5ee]">
                    Reservation Request Received
                  </h3>
                  
                  {/* CRITICAL NOTICE: Do not claim confirmed until restaurant confirms */}
                  <div className="max-w-lg mx-auto p-5 bg-[#1a0c0c] border border-[#4a1c1c] rounded-2xl text-left text-xs space-y-2.5 text-[#ebdcd0] shadow-inner">
                    <div className="flex items-center gap-2 text-[#d4af37] font-semibold text-sm">
                      <Info className="w-4 h-4 shrink-0 text-[#d4af37]" />
                      <span>Confirmation in Progress</span>
                    </div>
                    <p className="leading-relaxed">
                      This is a <strong>table reservation request</strong>. To ensure exact table availability, 
                      our host team at Bangalore Mandarin will review floor arrangements and 
                      <strong> call or WhatsApp you at {submittedRequest.customerPhone}</strong> to confirm your reservation.
                    </p>
                  </div>
                </div>

                {/* Summary Card */}
                <div className="max-w-md mx-auto p-5 bg-[#140c0c] border border-[#361919] rounded-2xl text-xs space-y-2.5 text-left">
                  <div className="flex justify-between py-1.5 border-b border-[#241212]">
                    <span className="text-[#a39487]">Guest Name</span>
                    <span className="font-semibold text-[#faf5ee]">{submittedRequest.customerName}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#241212]">
                    <span className="text-[#a39487]">Party Size</span>
                    <span className="font-semibold text-[#faf5ee]">{submittedRequest.guestsCount} Guests</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#241212]">
                    <span className="text-[#a39487]">Date &amp; Time</span>
                    <span className="font-semibold text-[#faf5ee]">{submittedRequest.date} ({submittedRequest.timeSlot})</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#241212]">
                    <span className="text-[#a39487]">Seating Choice</span>
                    <span className="font-semibold text-[#d4af37] capitalize">
                      {submittedRequest.seatingPreference.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#a39487]">Booking Status</span>
                    <span className="text-[#e5c158] font-bold uppercase tracking-wider text-[11px]">
                      Pending Staff Call
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-3 pt-3">
                  <a
                    href={`https://wa.me/918040998477?text=Hi%20Bangalore%20Mandarin,%20I%20have%20submitted%20reservation%20request%20%23${submittedRequest.requestId}%20under%20the%20name%20${encodeURIComponent(submittedRequest.customerName)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-xs font-semibold bg-[#1a0f0f] border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0c0a0a] rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Follow up on WhatsApp (+91 80 4099 8477)</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedRequest(null);
                      setCustomerName('');
                      setCustomerPhone('');
                    }}
                    className="px-6 py-3 text-xs text-[#a39487] hover:text-white"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Date, Service & Time Slot */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>1. Date &amp; Dining Period</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Date */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-[#d8cfc4]">
                        Dining Date *
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        required
                        className="w-full px-4 py-3 text-xs text-[#faf5ee] bg-[#160d0d] border border-[#3b1919] rounded-xl focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    {/* Lunch or Dinner */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-[#d8cfc4]">
                        Service Period *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setServiceType('lunch');
                            setTimeSlot('1:00 PM');
                          }}
                          className={`py-2.5 text-xs font-semibold rounded-xl border transition-all ${
                            serviceType === 'lunch'
                              ? 'bg-[#291515] border-[#d4af37] text-[#faf5ee] shadow-sm'
                              : 'bg-[#160d0d] border-[#381c1c] text-[#9c8e81]'
                          }`}
                        >
                          Lunch (12–3:30)
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setServiceType('dinner');
                            setTimeSlot('8:00 PM');
                          }}
                          className={`py-2.5 text-xs font-semibold rounded-xl border transition-all ${
                            serviceType === 'dinner'
                              ? 'bg-[#291515] border-[#d4af37] text-[#faf5ee] shadow-sm'
                              : 'bg-[#160d0d] border-[#381c1c] text-[#9c8e81]'
                          }`}
                        >
                          Dinner (7–11 PM)
                        </button>
                      </div>
                    </div>

                    {/* Time Slot */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-[#d8cfc4]">
                        Preferred Time *
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full px-4 py-3 text-xs text-[#faf5ee] bg-[#160d0d] border border-[#3b1919] rounded-xl focus:outline-none focus:border-[#d4af37]"
                      >
                        {(serviceType === 'lunch' ? LUNCH_SLOTS : DINNER_SLOTS).map((slot) => (
                          <option key={slot} value={slot} className="bg-[#120a0a]">
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* 2. Number of Guests & Seating Zone Cards */}
                <div className="space-y-4 pt-4 border-t border-[#261313]">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>2. Guests &amp; Seating Preference</span>
                  </h3>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[#d8cfc4]">
                      Number of Guests (Table Size) *
                    </label>
                    <div className="flex flex-wrap items-center gap-2">
                      {[1, 2, 4, 6, 8, 10, 12, 16].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setGuestsCount(num)}
                          className={`w-12 h-11 text-xs font-bold rounded-xl border transition-all flex items-center justify-center ${
                            guestsCount === num
                              ? 'gold-gradient-bg text-[#0c0a0a] border-[#d4af37] shadow-md shadow-[#d4af37]/20 scale-105'
                              : 'bg-[#160d0d] border-[#381c1c] text-[#9c8e81] hover:text-[#faf5ee]'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Seating Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {SEATING_OPTIONS.map((opt) => {
                      const isSelected = seatingPreference === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setSeatingPreference(opt.id as typeof seatingPreference)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-[#211111] border-[#d4af37] shadow-md shadow-[#d4af37]/10'
                              : 'bg-[#140c0c] border-[#2b1717] hover:border-[#3d1919]'
                          }`}
                        >
                          <div className="flex items-center justify-between pb-1">
                            <h4 className="font-serif font-bold text-sm text-[#faf5ee]">
                              {opt.title}
                            </h4>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-[#d4af37] bg-[#d4af37]' : 'border-[#554439]'
                            }`}>
                              {isSelected && <span className="w-2 h-2 rounded-full bg-[#0c0a0a]" />}
                            </div>
                          </div>
                          <p className="text-xs text-[#a39487] leading-relaxed">
                            {opt.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Contact Details */}
                <div className="space-y-4 pt-4 border-t border-[#261313]">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>3. Contact &amp; Special Requests</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-[#d8cfc4]">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-4 py-3 text-xs text-[#faf5ee] placeholder-[#6e6357] bg-[#160d0d] border border-[#3b1919] rounded-xl focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-[#d8cfc4]">
                        Phone Number * (for WhatsApp/call)
                      </label>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 text-xs text-[#faf5ee] placeholder-[#6e6357] bg-[#160d0d] border border-[#3b1919] rounded-xl focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-[#d8cfc4]">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 text-xs text-[#faf5ee] placeholder-[#6e6357] bg-[#160d0d] border border-[#3b1919] rounded-xl focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[#d8cfc4]">
                      Special Requests / Occasion (Optional)
                    </label>
                    <input
                      type="text"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Anniversary dinner, pure Jain dietary request, baby chair required..."
                      className="w-full px-4 py-3 text-xs text-[#faf5ee] placeholder-[#6e6357] bg-[#160d0d] border border-[#3b1919] rounded-xl focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                {/* Explicit Disclaimer Notice before submit */}
                <div className="p-4 bg-[#190e0e] border border-[#3b1717] rounded-xl text-xs text-[#cfc1b3] flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-[#faf5ee]">Notice:</strong> Submitting this form sends an advance request to Bangalore Mandarin.
                    A table is <strong>not confirmed</strong> until verified by our host team via telephone call or WhatsApp message.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-[#0c0a0a] gold-gradient-bg hover:brightness-110 active:brightness-95 rounded-xl transition-all shadow-xl shadow-[#d4af37]/20 flex items-center justify-center gap-2 font-bold"
                >
                  <Calendar className="w-4 h-4 text-[#0c0a0a]" />
                  <span>Submit Table Reservation Request</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* Tab 2: Lookup Existing Request */}
        {activeTab === 'lookup' && (
          <div className="bg-[#100808] border border-[#2e1919] rounded-3xl p-6 sm:p-10 space-y-6">
            <div className="space-y-2 text-center max-w-md mx-auto">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#faf5ee]">
                Check Your Reservation Request
              </h3>
              <p className="text-xs text-[#a39487]">
                Enter your Request ID (e.g. BM-2841) or phone number to see if your table has been reviewed by our host.
              </p>
            </div>

            <form onSubmit={handleLookup} className="flex gap-2 max-w-md mx-auto">
              <input
                type="text"
                value={lookupQuery}
                onChange={(e) => setLookupQuery(e.target.value)}
                placeholder="Request ID or Phone Number..."
                className="flex-1 px-4 py-3 text-xs text-[#faf5ee] bg-[#160d0d] border border-[#381c1c] rounded-xl focus:outline-none focus:border-[#d4af37]"
              />
              <button
                type="submit"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#d4af37] text-[#0c0a0a] rounded-xl font-bold"
              >
                Search
              </button>
            </form>

            {lookupResult !== undefined && (
              <div className="max-w-md mx-auto pt-4">
                {lookupResult === null ? (
                  <div className="p-4 bg-[#1e1010] border border-[#3b1717] rounded-xl text-xs text-[#cfc1b3] text-center">
                    No reservation request found for "{lookupQuery}". Please check the ID or contact us directly.
                  </div>
                ) : (
                  <div className="p-5 bg-[#160d0d] border border-[#3d1a1a] rounded-2xl text-xs space-y-3 shadow-xl">
                    <div className="flex justify-between items-center pb-2.5 border-b border-[#291515]">
                      <span className="font-mono text-[#d4af37] font-semibold text-sm">#{lookupResult.requestId}</span>
                      <span className={`px-2.5 py-1 rounded text-[10px] font-semibold uppercase ${
                        lookupResult.status === 'confirmed_by_staff'
                          ? 'bg-[#153218] text-[#86efac] border border-[#22c55e]'
                          : lookupResult.status === 'pending_review'
                          ? 'bg-[#2b1e10] text-[#fcd34d] border border-[#d97706]'
                          : 'bg-[#291414] text-[#fca5a5]'
                      }`}>
                        {lookupResult.status.replace(/_/g, ' ')}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-[#b5a79a]">
                      <p>Guest: <strong className="text-[#faf5ee]">{lookupResult.customerName}</strong> ({lookupResult.guestsCount} Guests)</p>
                      <p>Date: <strong className="text-[#faf5ee]">{lookupResult.date}</strong> at {lookupResult.timeSlot}</p>
                      <p>Phone: {lookupResult.customerPhone}</p>
                    </div>

                    <p className="text-[11px] text-[#e0d3c5] pt-2 border-t border-[#291515]">
                      {lookupResult.status === 'confirmed_by_staff'
                        ? '✓ Confirmed by Bangalore Mandarin host. We look forward to serving you!'
                        : 'Our front desk is reviewing table availability. For immediate confirmation, call +91 80 4099 8477.'}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
