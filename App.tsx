
import React, { useState } from 'react';
import { COLORS, PRACTICE_NAME, PRACTICE_PHONE } from './constants';
import Logo from './components/Logo';
import BookingForm from './components/BookingForm';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [showCopyFeedback, setShowCopyFeedback] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: PRACTICE_NAME,
      text: `Check out ${PRACTICE_NAME} for professional dental care.`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShowCopyFeedback(true);
        setTimeout(() => setShowCopyFeedback(false), 3000);
      } catch (err) {
        console.error("Error copying to clipboard:", err);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Logo />
          
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">Emergency Call</span>
              <span className="text-lg font-extrabold text-[#0b2c5d] leading-none">{PRACTICE_PHONE}</span>
            </div>

            <div className="relative">
              <button 
                onClick={handleShare}
                className="p-3 text-slate-400 hover:text-[#2cb1bc] hover:bg-slate-50 rounded-full transition-all border border-transparent hover:border-slate-100"
                aria-label="Share practice link"
                title="Share this practice"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              {showCopyFeedback && (
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#0b2c5d] text-white text-[10px] px-3 py-1.5 rounded shadow-lg whitespace-nowrap animate-in fade-in zoom-in duration-200">
                  Link copied to clipboard!
                </div>
              )}
            </div>

            <button 
              style={{ backgroundColor: COLORS.accent }}
              className="px-6 sm:px-8 py-3.5 text-white text-[11px] font-extrabold uppercase tracking-widest rounded-sm shadow-xl hover:brightness-105 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Online
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-slate-50 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-[#2cb1bc] uppercase tracking-[0.2em] shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-[#2cb1bc] animate-pulse"></span>
                  Member of the GDC
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1]" style={{ color: COLORS.primary }}>
                  Excellent Dental Care <br/>
                  <span style={{ color: COLORS.accent }}>For All The Family.</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-lg font-medium leading-relaxed">
                  Welcome to Your Dental Practice. We provide modern, high-quality dentistry in a comfortable environment. Our team is committed to providing a relaxed experience for all our patients.
                </p>
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-3 text-sm font-bold text-[#0b2c5d]">
                    <div className="w-8 h-8 rounded-full bg-[#2cb1bc]/10 flex items-center justify-center text-[#2cb1bc]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    New Patients Welcome
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold text-[#0b2c5d]">
                    <div className="w-8 h-8 rounded-full bg-[#2cb1bc]/10 flex items-center justify-center text-[#2cb1bc]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    0% Finance Available
                  </div>
                </div>
              </div>

              <div className="animate-in fade-in slide-in-from-right-8 duration-700">
                <BookingForm />
              </div>

            </div>
          </div>
        </section>

        {/* Info Grid */}
        <section className="py-24 bg-white border-y border-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold mb-4" style={{ color: COLORS.primary }}>Why Choose Our Practice?</h2>
              <div className="w-24 h-1 bg-[#2cb1bc] mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: 'Gentle Dentistry', desc: 'Our team is dedicated to providing a relaxed experience, especially for nervous patients.', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { title: 'Modern Facilities', desc: 'We invest in the latest technology to ensure your treatments are precise, efficient, and comfortable.', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { title: 'Same-Day Emergencies', desc: 'We reserve emergency slots every day to ensure patients in pain are seen as quickly as possible.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
              ].map((feat, idx) => (
                <div key={idx} className="group text-center p-10 border border-slate-50 hover:border-slate-100 hover:shadow-2xl transition-all rounded-xl">
                  <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 text-[#2cb1bc] group-hover:bg-[#2cb1bc] group-hover:text-white transition-all">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feat.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.primary }}>{feat.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0b2c5d] text-slate-300 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#2cb1bc]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">YOUR DENTAL PRACTICE</span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Providing professional, gentle dentistry with a personal touch. Member of the GDC and CQC registered surgery.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em]">Our Treatments</h4>
            <ul className="text-sm space-y-4 font-medium">
              <li className="hover:text-[#2cb1bc] cursor-pointer transition-colors">General Dentistry</li>
              <li className="hover:text-[#2cb1bc] cursor-pointer transition-colors">Dental Implants</li>
              <li className="hover:text-[#2cb1bc] cursor-pointer transition-colors">Teeth Whitening</li>
              <li className="hover:text-[#2cb1bc] cursor-pointer transition-colors">Invisalign® Smile Design</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em]">Contact Information</h4>
            <ul className="text-sm space-y-4 font-medium">
              <li>123 Surgery Lane, London</li>
              <li className="text-white font-bold text-base">{PRACTICE_PHONE}</li>
              <li className="opacity-80">hello@yourdentalpractice.co.uk</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em]">Patient Newsletter</h4>
            <p className="text-xs mb-6 opacity-80">Join our mailing list for oral health tips and offers.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 px-4 py-3 text-sm w-full rounded-sm focus:ring-1 focus:ring-[#2cb1bc] outline-none text-white" />
              <button className="bg-[#2cb1bc] text-white px-5 py-3 rounded-sm text-sm font-bold hover:brightness-110 transition-all uppercase tracking-widest">Sign</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-white/5 text-[9px] text-center uppercase tracking-[0.3em] text-white/30">
          &copy; {new Date().getFullYear()} {PRACTICE_NAME}. GDC Registered. CQC Inspected. Site by Alison AI.
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;
