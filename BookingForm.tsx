
import React from 'react';
import { COLORS, PRACTICE_PHONE } from '../constants';

const BookingForm: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl border border-slate-100">
      <h2 className="text-2xl font-bold mb-6" style={{ color: COLORS.primary }}>Book an Appointment</h2>
      <div className="space-y-4">
        <p className="text-slate-600">Our online booking system is coming soon.</p>
        <p className="text-slate-600">Please call us directly to schedule your visit:</p>
        <div className="text-2xl font-extrabold text-[#2cb1bc] py-4 border-y border-slate-50 text-center">
          {PRACTICE_PHONE}
        </div>
        <button 
          className="w-full py-4 bg-[#2cb1bc] text-white font-bold rounded-lg uppercase tracking-widest hover:brightness-105 transition-all"
          onClick={() => window.location.href = `tel:${PRACTICE_PHONE.replace(/\s/g, '')}`}
        >
          Call Now
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
