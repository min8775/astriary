
import React, { useRef } from 'react';
import {
  Moon, Star, Sparkles, Orbit, Sun, ShieldCheck, Fingerprint, UserX, Calendar, Map, BarChart3, RefreshCw, Info, Globe, FileText, Tag, Search, Sparkle, Lock, Compass, Layout, Stars, Check, Minus, Info as InfoIcon, Flag, Crown, Heart, Zap, MessageSquare, Palette
} from 'lucide-react';
import { REWARD_TIERS } from './constants';

const img1 = "https://lh3.googleusercontent.com/u/0/d/1LYTfA3NK0VksBPauxpisCL8Qs0TBa8oR=w1767-h910-iv1?auditContext=prefetch";
const img2 = "https://lh3.googleusercontent.com/u/0/d/1YV5ROV7PKSPozJ26cwzWyNGgtfQNlquZ=w648-h910-iv1?auditContext=forDisplay";
const img3 = "https://lh3.googleusercontent.com/u/0/d/1oxB0FhqPhSdGwFz1ekghcSKhTIzmdcBa=w648-h910-iv1?auditContext=forDisplay";
const img4 = "https://lh3.googleusercontent.com/u/0/d/12QkpspB9po60hPJQR9YzBf7lQH9Y6qHm=w1085-h910-iv1?auditContext=prefetch";
const img5 = "https://lh3.googleusercontent.com/u/0/d/1nmtmIA7XykyljnriklJpwV6abOfSbODr=w1085-h910-iv1?auditContext=prefetch";
const img6 = "https://lh3.googleusercontent.com/u/0/d/1WK9w9kFGD1i2Ob41m1dVoo2Huq3WXWaY=w1085-h910-iv1?auditContext=prefetch";
const img7 = "https://lh3.googleusercontent.com/u/0/d/1mlVJCI6o6HcYofGV5ouZGVLfo5gGjqGw=w1150-h910-iv1?auditContext=forDisplay";
const img8 = "https://lh3.googleusercontent.com/u/0/d/1mlVJCI6o6HcYofGV5ouZGVLfo5gGjqGw=w1150-h910-iv1?auditContext=forDisplay";
const img9 = "https://lh3.googleusercontent.com/u/0/d/10K2XUQOON37TzZ_BPYTvKTTxvCzO8B2T=w1085-h910-iv1?auditContext=prefetch";
const img10 = "https://lh3.googleusercontent.com/u/0/d/1E4W936t6d7BlwNFtL_Brl4wzvlxw-RL-=w1150-h910-iv1?auditContext=forDisplay";

// Shared Components
const handleJoinClick = () => {
  window.open('https://tally.so/r/aQ5a9v', '_blank');
};

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 z-[100] bg-astro-bg/90 backdrop-blur-xl border-b border-astro-main/10">
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-20 md:h-28 flex items-center justify-between">
      <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="w-10 h-10 md:w-12 md:h-12 bg-astro-dark rounded-full flex items-center justify-center shadow-lg shadow-astro-dark/20">
          <Moon className="w-5 h-5 md:w-7 md:h-7 text-astro-white fill-current" />
        </div>
        <span className="font-bold text-xl md:text-3xl tracking-[0.1em] text-astro-dark uppercase font-serif">Astriary</span>
      </div>
      <div className="hidden lg:flex items-center gap-12 text-astro-dark font-black text-[16px] uppercase tracking-[0.2em]">
        <a href="#solution" className="hover:text-astro-main transition-all">About Us</a>
        <a href="#pillars" className="hover:text-astro-main transition-all">Features</a>
        <a href="#pricing" className="hover:text-astro-main transition-all">Pricing</a>
      </div>
      <button
        onClick={handleJoinClick}
        className="px-5 py-2.5 md:px-12 md:py-5 bg-astro-dark text-astro-white rounded-full font-black text-[10px] md:text-sm tracking-widest uppercase transition-all hover:bg-astro-main hover:scale-105 active:scale-95 shadow-xl shadow-astro-dark/20"
      >
        Back the Project
      </button>
    </div>
  </nav>
);

const FeatureMarquee: React.FC = () => {
  const features = [
    { icon: <Lock size={18} />, label: 'Locked' },
    { icon: <UserX size={18} />, label: 'Private' },
    { icon: <ShieldCheck size={18} />, label: 'Encrypted' },
    { icon: <Fingerprint size={18} />, label: 'Secure' },
    { icon: <Heart size={18} />, label: 'Safe' },
    { icon: <Sparkles size={18} />, label: 'AI Insight' },
  ];

  const marqueeItems = [...features, ...features, ...features];

  return (
    <div className="w-full overflow-hidden py-8 relative group">
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-astro-bg to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-astro-bg to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-[marquee_30s_linear_infinite] gap-4 md:gap-8 whitespace-nowrap">
        {marqueeItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-6 py-3 bg-white/50 backdrop-blur-sm border border-astro-main/10 rounded-full editorial-shadow group-hover:bg-white transition-colors"
          >
            <span className="text-astro-main">{item.icon}</span>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-astro-dark">{item.label}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

const FundingTracker: React.FC = () => {
  const [percent, setPercent] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const targetPercent = 23;
  const targetAmount = 18400;
  const observerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            setPercent(easeProgress * targetPercent);
            setAmount(easeProgress * targetAmount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={observerRef} className="max-w-4xl mx-auto mb-20 bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] editorial-shadow border border-astro-main/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-5 text-astro-main pointer-events-none">
        <Stars size={120} />
      </div>
      <div className="flex justify-between items-end mb-6 relative z-10">
        <div>
          <p className="text-astro-main font-black uppercase tracking-[0.3em] text-[10px] md:text-sm mb-2">Current Funding</p>
          <p className="text-4xl md:text-6xl font-serif font-bold text-astro-dark tracking-tighter">${Math.floor(amount).toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className="text-astro-dark/30 font-black uppercase tracking-[0.2em] text-[10px] md:text-sm mb-2">Target Goal</p>
          <p className="text-xl md:text-3xl font-serif font-bold text-astro-dark/60">$80,000</p>
        </div>
      </div>

      <div className="relative w-full h-3 md:h-4 bg-astro-bg rounded-full overflow-hidden mb-4 shadow-inner">
        <div
          className="absolute top-0 left-0 h-full bg-astro-main transition-all duration-75 ease-out shadow-[0_0_15px_rgba(139,123,168,0.5)]"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="flex justify-between items-center text-[10px] md:text-sm font-black uppercase tracking-widest text-astro-main">
        <span className="flex items-center gap-2 font-black"><Sparkle size={14} className="animate-pulse" /> {Math.floor(percent)}% Funded</span>
        <span className="text-astro-dark/20 font-black">Progress to Launch</span>
      </div>
    </div>
  );
};

const NumberBadge: React.FC<{ num: string }> = ({ num }) => (
  <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-8">
    <div className="absolute inset-0 bg-astro-main/10 rounded-full scale-110"></div>
    <div className="relative w-full h-full rounded-full border-2 border-astro-main flex items-center justify-center text-astro-main font-serif font-bold text-3xl md:text-4xl italic">
      {num}
    </div>
  </div>
);

const CosmicBackground: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
    <div className="absolute top-[10%] left-[5%] animate-float opacity-30 text-astro-main"><Star size={48} /></div>
    <div className="absolute top-[40%] right-[10%] animate-drift opacity-20 text-astro-accent"><Orbit size={120} /></div>
    <div className="absolute bottom-[20%] left-[15%] animate-pulse-slow opacity-40 text-astro-dark"><Sparkles size={32} /></div>
    <div className="absolute top-[15%] right-[25%] animate-float opacity-20 text-astro-main"><Sun size={64} /></div>
    {[...Array(15)].map((_, i) => (
      <div key={i} className="absolute rounded-full bg-astro-main/20 animate-pulse-slow" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, width: `${Math.random() * 5 + 2}px`, height: `${Math.random() * 5 + 2}px`, animationDelay: `${Math.random() * 5}s` }} />
    ))}
  </div>
);

const DecorativeElements: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none opacity-10 select-none overflow-hidden">
    <Stars className="absolute top-[10%] right-[15%] text-astro-main" size={100} />
    <Sparkles className="absolute bottom-[20%] left-[10%] text-astro-accent" size={80} />
    <Orbit className="absolute top-[40%] left-[5%] text-astro-dark" size={150} />
  </div>
);

const SectionDivider: React.FC = () => (
  <div className="flex justify-center items-center gap-4 py-10 opacity-20">
    <div className="h-px w-20 bg-astro-main" />
    <Stars className="text-astro-main" size={20} />
    <div className="h-px w-20 bg-astro-main" />
  </div>
);

const EditorialImage: React.FC<{ src: string; alt: string; wide?: boolean }> = ({ src, alt, wide }) => (
  <div className={`relative overflow-hidden rounded-[2rem] md:rounded-[3rem] editorial-shadow border-4 md:border-8 border-white w-full h-auto object-contain max-w-[860px]`}>
    <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-astro-bg text-astro-black">
      <Navbar />

      <main>
        {/* Section 1: Hero */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 md:pt-40 px-6 text-center bg-grain overflow-hidden">
          <CosmicBackground />
          <div className="max-w-[1400px] mx-auto relative z-10 w-full flex flex-col items-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-serif font-bold text-astro-dark leading-[1.1] md:leading-none mb-6 md:mb-10 tracking-tighter uppercase max-w-5xl">
              ASTRIARY:<br />
              <span className="text-astro-main italic lowercase font-normal">The Diary the Stars Read</span>
            </h1>
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              <p className="text-xl md:text-3xl font-serif text-astro-dark/80 italic">Your words. The stars' wisdom.</p>
              <p className="text-lg md:text-2xl font-serif text-astro-dark/60 italic max-w-2xl mx-auto leading-relaxed">
                Write your thoughts.<br />Discover what the cosmos reveals.
              </p>
            </div>

            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 md:px-16 md:py-6 bg-astro-dark text-astro-white rounded-full font-serif italic font-bold text-lg md:text-2xl shadow-3xl hover:bg-astro-main transition-all hover:scale-105 tracking-wide mb-12 md:mb-16"
            >
              Start Your Journey
            </button>

            <div className="w-full max-w-3xl mt-0">
              <FeatureMarquee />
            </div>
          </div>
        </section>

        {/* Section 2: Problem */}
        <section id="problem" className="relative py-24 md:py-40 px-6 bg-white overflow-hidden">
          <DecorativeElements />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-16 md:mb-24" style={{ display: 'flex', justifyContent: 'center' }}>
              <EditorialImage src={img1} alt="Mind under the stars" wide />
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-astro-dark mb-6 md:mb-8 leading-tight">
                Is Your Mind Racing<br />at 2 AM?
              </h2>
              <div className="space-y-2 md:space-y-4 text-xl md:text-2xl text-astro-dark/60 font-medium leading-tight">
                <p>You lie awake, thoughts spiraling.</p>
                <div className="grid gap-1 md:gap-2 text-astro-dark font-bold text-2xl md:text-4xl italic font-serif py-4 md:py-6 leading-tight">
                  <span>"Am I on the right path?"</span>
                  <span>"Why do I keep repeating<br />the same patterns?"</span>
                  <span>"What's the universe trying<br />to tell me?"</span>
                </div>
                <p className="max-w-xl mx-auto">
                  You've tried journaling — but the pages just echo your confusion.
                </p>
                <p className="max-w-xl mx-auto">
                  You've checked your horoscope — but it feels written for someone else.
                </p>
                <div className="pt-4 md:pt-6">
                  <p className="text-astro-dark font-bold text-2xl md:text-3xl leading-tight">
                    Nothing connects YOUR story<br />with the cosmos above.
                  </p>
                  <div className="mt-4 md:mt-8 inline-block">
                    <span className="text-astro-dark font-serif font-bold text-4xl md:text-6xl px-4 md:px-6 py-1 relative">
                      <span className="relative z-10 italic">Until now.</span>
                      <span className="absolute left-0 bottom-1 md:bottom-2 w-full h-[40%] bg-astro-accent -rotate-1 z-0 opacity-100"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Section 3: Meet ASTRIARY / About Us */}
        <section id="solution" className="py-24 md:py-40 px-6 bg-astro-bg scroll-mt-28">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6 text-astro-main opacity-50"><Stars size={48} /></div>
            <h2 className="text-4xl md:text-8xl font-serif font-bold text-astro-dark mb-8 md:mb-10 tracking-tight">Meet ASTRIARY</h2>
            <p className="text-2xl md:text-4xl font-bold text-astro-main mb-6 md:mb-8 leading-tight max-w-3xl mx-auto">
              The AI Diary That Turns Daily Chaos<br />into Celestial Clarity
            </p>
            <div className="space-y-4 md:space-y-6 mb-16 md:mb-20 text-xl md:text-2xl text-astro-dark/50 font-bold italic font-serif">
              <p>Ancient wisdom meets modern AI.</p>
              <p>A journaling experience written in the stars.</p>
            </div>
            <div className="mb-16 md:mb-20" style={{ display: 'flex', justifyContent: 'center' }}>
              <EditorialImage src={img2} alt="Celestial Insight" />
            </div>
            <div className="max-w-5xl mx-auto space-y-10 md:space-y-14">
              <p className="text-xl md:text-3xl font-bold text-astro-dark leading-relaxed">
                Every word you write is reflected through your birth chart,<br />
                aligned with real-time planetary data from NASA.
              </p>
              <p className="text-3xl md:text-5xl font-serif font-bold italic text-astro-main">
                You write. The cosmos responds.
              </p>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 py-10 md:py-16 border-t border-astro-main/20 mt-12 md:mt-16">
                <div className="text-center">
                  <Globe className="mx-auto mb-4 md:mb-6 text-astro-main" size={48} />
                  <p className="text-2xl md:text-3xl font-black">500+</p>
                  <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] opacity-40 mt-2">Beta Testers<br />(12 Countries)</p>
                </div>
                <div className="md:col-span-2 space-y-8 md:space-y-10 text-left">
                  <div className="pl-6 md:pl-8 border-l-4 border-astro-accent">
                    <p className="text-lg md:text-2xl italic font-serif text-astro-dark leading-relaxed">"Finally, a journal that actually gets me."</p>
                    <p className="text-[10px] md:text-xs font-black text-astro-dark/40 mt-3 md:mt-4 uppercase tracking-widest">— Beta Tester, Singapore</p>
                  </div>
                  <div className="pl-6 md:pl-8 border-l-4 border-astro-accent">
                    <p className="text-lg md:text-2xl italic font-serif text-astro-dark leading-relaxed">"The insights are eerily accurate."</p>
                    <p className="text-[10px] md:text-xs font-black text-astro-dark/40 mt-3 md:mt-4 uppercase tracking-widest">— Beta Tester, London</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: How It Works / Features */}
        <section id="pillars" className="relative py-24 md:py-40 px-6 bg-white scroll-mt-28 overflow-hidden">
          <DecorativeElements />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20 md:mb-32">
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-astro-dark mb-6 md:mb-8 tracking-tighter italic leading-tight">How ASTRIARY Works</h2>
              <p className="text-xl md:text-2xl font-bold text-astro-dark/40">Three pillars. One journey through the stars.</p>
            </div>
            {/* Pillar 1 */}
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center mb-32 md:mb-48">
              <div className="order-2 lg:order-1">
                <NumberBadge num="1" />
                <h3 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 font-serif">Cosmic Mirror — Know Yourself</h3>
                <p className="text-lg md:text-2xl font-medium text-astro-dark/60 mb-8 md:mb-10 leading-relaxed">Your birth chart is your cosmic fingerprint.<br />Every insight reflects who you truly are.</p>
                <ul className="space-y-6 md:space-y-8 text-lg md:text-2xl font-bold font-serif italic text-astro-dark">
                  <li className="flex gap-4 md:gap-5 items-center"><span className="w-2 h-2 rounded-full bg-astro-accent" /> Birth Chart — Your personal blueprint.</li>
                  <li className="flex gap-4 md:gap-5 items-center"><span className="w-2 h-2 rounded-full bg-astro-accent" /> NASA Data — Real-time planetary positions.</li>
                  <li className="flex gap-4 md:gap-5 items-center"><span className="w-2 h-2 rounded-full bg-astro-accent" /> Unique Readings — Insights as unique as you.</li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <EditorialImage src={img3} alt="Cosmic Mirror Visual" />
              </div>
            </div>
            {/* Pillar 2 */}
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center mb-32 md:mb-48">
              <div><EditorialImage src={img4} alt="Pattern Finder Visual" /></div>
              <div>
                <NumberBadge num="2" />
                <h3 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 font-serif">Pattern Finder — Know Your Rhythms</h3>
                <p className="text-lg md:text-2xl font-medium text-astro-dark/60 mb-8 md:mb-10 leading-relaxed">Your emotions leave traces.<br />We help you read them.</p>
                <ul className="space-y-6 md:space-y-8 text-lg md:text-2xl font-bold font-serif italic text-astro-dark">
                  <li className="flex gap-4 md:gap-5 items-center"><span className="w-2 h-2 rounded-full bg-astro-accent" /> Tracking — Emotions mapped over time.</li>
                  <li className="flex gap-4 md:gap-5 items-center"><span className="w-2 h-2 rounded-full bg-astro-accent" /> Patterns — Recurring themes detected.</li>
                  <li className="flex gap-4 md:gap-5 items-center"><span className="w-2 h-2 rounded-full bg-astro-accent" /> Cycles — Planetary correlations revealed.</li>
                </ul>
              </div>
            </div>
            {/* Pillar 3 */}
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="order-2 lg:order-1">
                <NumberBadge num="3" />
                <h3 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 font-serif">Mood Match — Meet You Where You Are</h3>
                <p className="text-lg md:text-2xl font-medium text-astro-dark/60 mb-8 md:mb-10 leading-relaxed">We respond the way you need.<br />Soft when you seek comfort. Direct when you want clarity.</p>
                <ul className="space-y-6 md:space-y-8 text-lg md:text-2xl font-bold font-serif italic text-astro-dark">
                  <li className="flex gap-4 md:gap-5 items-center"><span className="w-2 h-2 rounded-full bg-astro-accent" /> Voice & Text — Journal your way.</li>
                  <li className="flex gap-4 md:gap-5 items-center"><span className="w-2 h-2 rounded-full bg-astro-accent" /> Detection — AI reads your mood.</li>
                  <li className="flex gap-4 md:gap-5 items-center"><span className="w-2 h-2 rounded-full bg-astro-accent" /> Adaptive Tone — Responses that fit your mood.</li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <EditorialImage src={img5} alt="Mood Match Visual" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Your Daily Journey */}
        <section className="py-24 md:py-40 px-6 bg-astro-dark text-white rounded-[3rem] md:rounded-[5rem] mx-4 md:mx-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-2xl md:text-5xl font-serif font-bold mb-6 md:mb-8 leading-tight">Every entry becomes a moment of reflection — guided by the stars.</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="order-2 lg:order-1 space-y-6 md:space-y-10">
                <div className="p-6 md:p-10 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-md flex gap-6 md:gap-8 items-start hover:bg-white/10 transition-all">
                  <FileText className="text-astro-accent shrink-0 mt-1" size={32} />
                  <div><h4 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 font-serif">Auto-Title</h4><p className="text-base md:text-xl text-white/60">AI summarizes your entry into a meaningful headline.</p></div>
                </div>
                <div className="p-6 md:p-10 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-md flex gap-6 md:gap-8 items-start hover:bg-white/10 transition-all">
                  <Tag className="text-astro-accent shrink-0 mt-1" size={32} />
                  <div><h4 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 font-serif">Key Themes</h4><p className="text-base md:text-xl text-white/60">Emotions and patterns extracted instantly.</p></div>
                </div>
                <div className="p-6 md:p-10 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-md flex gap-6 md:gap-8 items-start hover:bg-white/10 transition-all">
                  <Sparkles className="text-astro-accent shrink-0 mt-1" size={32} />
                  <div><h4 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 font-serif">Star Message</h4><p className="text-base md:text-xl text-white/60">Personalized insight based on today's sky and your chart.</p></div>
                </div>
                <div className="p-6 md:p-10 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-md flex gap-6 md:gap-8 items-start hover:bg-white/10 transition-all">
                  <Search className="text-astro-accent shrink-0 mt-1" size={32} />
                  <div><h4 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 font-serif">Deeper Dive</h4><p className="text-base md:text-xl text-white/60">Ask follow-up questions. Explore further.</p></div>
                </div>
              </div>
              <div className="order-1 lg:order-2"><EditorialImage src={img6} alt="Daily Reflection" /></div>
            </div>
          </div>
        </section>

        {/* Section 6: Celestial Toolkit + Premium + Decor */}
        <section id="toolkit" className="py-24 md:py-40 px-6 bg-astro-bg">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 md:mb-32">
              <h2 className="text-4xl md:text-8xl font-serif font-bold text-astro-dark leading-tight">Your Celestial Toolkit</h2>
              <p className="text-xl md:text-2xl font-bold text-astro-dark/40 mt-6 md:mt-10 italic font-serif">Everything you need. All in one place.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center mb-32 md:mb-48">
              <div><EditorialImage src={img7} alt="Celestial Tools" /></div>
              <div>
                <h3 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 font-serif">Cosmic Calendar</h3>
                <div className="grid gap-6 md:gap-8">
                  {[{ icon: <Map size={32} />, label: '2026 Star Map', desc: 'Your year mapped, month by month.' },
                  { icon: <Sun size={32} />, label: 'Daily Guidance', desc: 'Wake up to fresh insights daily.' },
                  { icon: <BarChart3 size={32} />, label: 'Reports', desc: 'Weekly & monthly summaries delivered.' },
                  { icon: <Compass size={32} />, label: 'Transit Alerts', desc: 'Mercury retrograde incoming? You\'ll know.' },
                  { icon: <Orbit size={32} />, label: 'Moon Phases', desc: 'Align with lunar cycles.' }].map((item, i) => (
                    <div key={i} className="flex gap-6 md:gap-8 items-start p-6 md:p-8 bg-white rounded-[2rem] shadow-xl border border-astro-dark/5 hover:-translate-y-1 transition-all">
                      <span className="text-astro-main shrink-0 mt-1">{item.icon}</span>
                      <div><p className="text-lg md:text-2xl font-bold font-serif mb-1 md:mb-2">{item.label}</p><p className="text-base md:text-xl text-astro-dark/50 font-medium">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium Content Section */}
            <div className="mb-32 md:mb-48 relative">
              <div className="text-center mb-12 md:mb-20">
                <div className="inline-flex items-center gap-3 px-8 py-3 bg-astro-dark text-astro-accent rounded-full text-sm font-black uppercase tracking-[0.5em] mb-8 shadow-2xl border border-white/20">
                  <Crown size={18} className="animate-pulse" /> The Elite Sanctuary
                </div>
                <h3 className="text-5xl md:text-8xl font-bold font-serif text-astro-dark tracking-tighter italic">Premium Content</h3>
                <div className="mt-6 text-astro-main font-serif italic text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Elite Insights for the Discerning Soul
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                {[{ icon: <Sparkles size={44} />, label: 'Karmic Destiny', desc: 'Lunar nodes reveal your soul\'s path and past life connections through advanced planetary mapping.' },
                { icon: <Star size={44} />, label: 'Solar Return', desc: 'A bespoke, high-precision analysis of your upcoming personal solar cycle and spiritual opportunities.' },
                { icon: <FileText size={44} />, label: 'Year-End Reflection', desc: 'An exhaustive, visually stunning analytical report chronicling your celestial evolution over 365 days.' }].map((item, i) => (
                  <div key={i} className="group relative p-14 md:p-20 bg-gradient-to-b from-[#2D2438] to-[#1A1625] text-white rounded-[4rem] text-center border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-700 hover:-translate-y-6 hover:shadow-[0_60px_130px_-20px_rgba(139,123,168,0.3)] ring-1 ring-white/5">
                    <div className="absolute inset-0 bg-gradient-to-t from-astro-main/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute -top-10 -right-10 p-12 opacity-5 text-white pointer-events-none group-hover:scale-110 group-hover:opacity-10 transition-all duration-1000">
                      <Crown size={160} />
                    </div>
                    <span className="text-astro-accent block mb-10 flex justify-center scale-110 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{item.icon}</span>
                    <h5 className="text-3xl md:text-5xl font-bold mb-8 font-serif italic tracking-tight text-glow">{item.label}</h5>
                    <p className="text-xl md:text-2xl text-white/40 font-medium leading-relaxed group-hover:text-white/70 transition-colors duration-500">{item.desc}</p>
                    <div className="mt-12 h-1 w-0 bg-astro-accent mx-auto group-hover:w-24 transition-all duration-700 rounded-full shadow-[0_0_15px_rgba(255,194,175,0.5)]"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Diary Decor Section */}
            <div className="text-center mb-32">
              <h3 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 font-serif">Diary Decor</h3>
              <div className="mb-12 md:mb-16" style={{ display: 'flex', justifyContent: 'center' }}><EditorialImage src={img8} alt="Mystical Decor" wide /></div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {[{ icon: <Orbit size={40} />, label: 'Celestial Echoes', desc: 'Planet characters mirror your mood.' },
                { icon: <Heart size={40} />, label: 'Fluffy Squares', desc: 'Cute mood stickers for your heart.' },
                { icon: <Palette size={40} />, label: 'Seasonal Themes', desc: 'Limited edition collections.' },
                { icon: <Layout size={40} />, label: 'Premium Themes', desc: 'Design your own sanctuary.' }].map((item, i) => (
                  <div key={i} className="space-y-4 md:space-y-6">
                    <span className="text-astro-main block mb-2 md:mb-4 flex justify-center">{item.icon}</span>
                    <h5 className="text-lg md:text-2xl font-bold font-serif">{item.label}</h5>
                    <p className="text-sm md:text-lg text-astro-dark/40 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Your Private Sanctuary */}
        <section id="privacy" className="relative py-24 md:py-40 px-6 bg-white overflow-hidden">
          <DecorativeElements />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <div className="mb-16 md:mb-24" style={{ display: 'flex', justifyContent: 'center' }}><EditorialImage src={img9} alt="Private Sanctuary" wide /></div>
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-astro-dark text-astro-white rounded-full mb-8 shadow-xl"><Lock size={40} /></div>
              <h2 className="text-4xl md:text-[6.5rem] font-serif font-bold mb-10 text-astro-dark leading-tight">Your Private Sanctuary</h2>
              <p className="text-2xl md:text-3xl font-bold text-astro-dark/40 mb-16 italic font-serif">Your secrets stay yours. Always.</p>
              <div className="grid md:grid-cols-2 gap-8 md:gap-10 text-left mb-16">
                {[{ icon: <ShieldCheck size={40} />, label: 'Encrypted', desc: 'Your words protected. Enterprise-grade security.' },
                { icon: <Fingerprint size={40} />, label: 'Locked', desc: 'Face ID & Fingerprint. Only you can open it.' },
                { icon: <UserX size={40} />, label: 'Private', desc: 'Your data stays with you. Never shared.' },
                { icon: <Heart size={40} />, label: 'Safe', desc: 'No judgment. Just understanding.' }].map((item, i) => (
                  <div key={i} className="flex gap-6 md:gap-8 items-start p-8 md:p-10 bg-astro-bg rounded-[2.5rem] border border-astro-dark/5 hover:border-astro-main/30 transition-all shadow-sm">
                    <span className="text-astro-main shrink-0 mt-1">{item.icon}</span>
                    <div><h5 className="text-xl md:text-2xl font-bold font-serif mb-2">{item.label}</h5><p className="text-base md:text-lg text-astro-dark/50 font-medium leading-relaxed">{item.desc}</p></div>
                  </div>
                ))}
              </div>
              <p className="text-2xl md:text-5xl font-serif font-bold italic text-astro-main tracking-tight leading-tight mb-8">
                "The stars reply —<br />your words stay private."
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Section 8: Become a Founding Member / Pricing */}
        <section id="pricing" className="py-24 md:py-40 px-4 md:px-6 bg-astro-bg scroll-mt-28">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-8xl font-serif font-bold text-astro-dark tracking-tighter uppercase leading-tight md:leading-none">Become a Founding Member</h2>
              <p className="text-2xl md:text-4xl font-bold text-astro-dark/60 mt-4 italic font-serif leading-relaxed">Join as a Founding Member</p>
              <div className="mt-10 flex flex-col items-center">
                <p className="text-xl md:text-3xl font-black text-astro-dark uppercase tracking-[0.2em] bg-astro-accent/20 px-8 py-3 rounded-2xl shadow-sm">Funding Period</p>
                <p className="text-lg md:text-3xl font-black text-astro-black mt-4 tracking-tight font-serif drop-shadow-sm">2026-01-07 ~ 2026-02-03 (28 days)</p>
              </div>
            </div>

            <FundingTracker />

            {/* Comparison Table */}
            <div className="max-w-6xl mx-auto overflow-hidden bg-white editorial-shadow border border-astro-main/10">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[320px]">
                  <thead>
                    <tr className="bg-astro-dark text-white">
                      <th className="p-3 md:p-10 text-sm md:text-2xl font-serif border-r border-white/10 w-1/4">Features</th>
                      {REWARD_TIERS.map((tier: any) => (
                        <th key={tier.id} className={`h-[180px] p-2 md:p-10 text-center relative border-r last:border-r-0 border-white/10 ${tier.isPopular ? 'bg-astro-main/5' : ''}`}>
                          {tier.isPopular && (
                            <div className="absolute -top-0 left-0 w-full bg-astro-main py-1.5 text-[7px] md:text-[10px] uppercase font-black tracking-[0.1em] md:tracking-[0.3em] text-white shadow-lg z-20">
                              RECOMMENDED BEST VALUE ⭐
                            </div>
                          )}
                          <p className="text-[10px] md:text-2xl font-serif font-bold mb-1 md:mb-2 flex items-center justify-center gap-1">
                            {tier.name.split(' ').slice(3).join(' ') || tier.name} {tier.isPopular && <Star size={12} className="fill-current text-astro-accent md:w-5 md:h-5" />}
                          </p>
                          <div className="mt-2 md:mt-4 flex flex-col items-center">
                            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-3">
                              <span className="text-[18px] md:text-4xl line-through text-white/40 font-bold tracking-tight">${tier.originalPrice}</span>
                              <span className="text-xl md:text-6xl font-black font-serif text-astro-accent">${tier.price}</span>
                            </div>
                            <span className="text-[8px] md:text-sm font-black text-white bg-astro-main/20 px-2 py-0.5 md:px-3 md:py-1 rounded-full uppercase tracking-tight md:tracking-widest mt-1 md:mt-3 border border-white/10">{tier.discount}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-astro-dark/80">
                    <tr className="border-b border-astro-bg bg-astro-bg/10">
                      <td className="p-3 md:p-8 font-bold font-serif text-[10px] md:text-xl border-r border-astro-bg">Beta Priority</td>
                      {REWARD_TIERS.map((tier: any) => (
                        <td key={tier.id} className="p-3 md:p-8 text-center border-r last:border-r-0 border-astro-bg">
                          {tier.features.betaPriority ? <div className="flex justify-center text-astro-main"><Check size={20} className="md:w-8 md:h-8" /></div> : <div className="flex justify-center text-astro-dark/20"><Minus size={16} className="md:w-6 md:h-6" /></div>}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-astro-bg">
                      <td className="p-3 md:p-8 font-bold font-serif text-[10px] md:text-xl border-r border-astro-bg">Voice journaling</td>
                      {REWARD_TIERS.map((tier: any) => (
                        <td key={tier.id} className="p-3 md:p-8 text-center border-r last:border-r-0 border-astro-bg">
                          {tier.features.voiceJournaling ? <div className="flex justify-center text-astro-main"><Check size={20} className="md:w-8 md:h-8" /></div> : <div className="flex justify-center text-astro-dark/20"><Minus size={16} className="md:w-6 md:h-6" /></div>}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-astro-bg bg-astro-bg/10">
                      <td className="p-3 md:p-8 font-bold font-serif text-[10px] md:text-xl border-r border-astro-bg">Decorations</td>
                      {REWARD_TIERS.map((tier: any) => (
                        <td key={tier.id} className="p-3 md:p-8 text-center text-[10px] md:text-lg font-bold border-r last:border-r-0 border-astro-bg">{tier.features.decorations}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-astro-bg">
                      <td className="p-3 md:p-8 font-bold font-serif text-[10px] md:text-xl border-r border-astro-bg">Exclusive Themes</td>
                      {REWARD_TIERS.map((tier: any) => (
                        <td key={tier.id} className="p-3 md:p-8 text-center text-[10px] md:text-lg font-bold border-r last:border-r-0 border-astro-bg">{tier.features.exclusiveThemes}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-astro-bg bg-astro-bg/10">
                      <td className="p-3 md:p-8 font-bold font-serif text-[10px] md:text-xl border-r border-astro-bg">Deeper Dives</td>
                      {REWARD_TIERS.map((tier: any) => (
                        <td key={tier.id} className="p-3 md:p-8 text-center text-[10px] md:text-lg font-bold border-r last:border-r-0 border-astro-bg">{tier.features.deeperDives}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-astro-bg">
                      <td className="p-3 md:p-8 font-bold font-serif text-[10px] md:text-xl border-r border-astro-bg">Reports</td>
                      {REWARD_TIERS.map((tier: any) => (
                        <td key={tier.id} className="p-3 md:p-8 text-center text-[10px] md:text-lg font-bold border-r last:border-r-0 border-astro-bg">{tier.features.reports}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 md:p-10 border-r border-astro-bg"></td>
                      {REWARD_TIERS.map((tier: any) => (
                        <td key={tier.id} className="p-2 md:p-10 text-center border-r last:border-r-0 border-astro-bg">
                          <button
                            onClick={handleJoinClick}
                            className={`w-full py-5 md:py-10 rounded-2xl md:rounded-full font-black text-xs md:text-2xl tracking-tighter md:tracking-widest uppercase transition-all shadow-xl hover:-translate-y-1 ${tier.isPopular ? 'bg-astro-main text-white hover:bg-astro-dark' : 'bg-astro-dark text-white hover:bg-astro-main'}`}
                          >
                            Claim ${tier.price} Spot
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-20 px-6 md:px-10 text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-4 text-astro-dark/70 font-black uppercase tracking-[0.4em] text-xs md:text-sm mb-2">
                  <InfoIcon size={20} className="text-astro-main" /> Refund Policy
                </div>
                <p className="text-xs md:text-lg font-medium leading-relaxed max-w-2xl font-serif italic text-astro-dark/60">
                  If the funding goal is not met within the project period, a full refund (100%) will be issued within 7 days after the closing date via the original payment method.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="rewords" className="py-24 md:py-40 px-6 bg-astro-dark text-white scroll-mt-28">
          <div className="max-w-7xl mx-auto">
            <div className="text-center md:mb-0">
              <h2 className="text-4xl md:text-8xl font-serif font-bold mb-6 md:mb-8 leading-tight">✨ Your Cosmic Gift Awaits</h2>
              <p className="text-2xl md:text-4xl font-bold text-white/60 italic font-serif">Thank you for joining our cosmic journey.<br></br>You're the star that lights our way.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            </div>
            <div className="text-center mt-16 mb-16 md:mb-24">
              <h3 className="text-3xl md:text-5xl font-bold mb-6 font-serif leading-tight">Choose Your Blessing</h3>
              <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed mb-12">Exclusive wallpapers to attract positive energy.<br></br>Tap one below — it's yours.
</p>
              <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                <button
                  onClick={() => window.open('https://drive.google.com/drive/folders/1Atw1bnp0OivVQba40DzAXzpYhWGaNidI?usp=sharing', '_blank')}
                  className="group relative p-8 bg-gradient-to-b from-astro-main/20 to-astro-main/10 rounded-[2rem] text-center border border-astro-main/30 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-95"
                >
                  <div className="absolute inset-0 bg-astro-main/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Heart size={48} className="text-astro-accent mx-auto mb-4 relative z-10" />
                  <span className="text-xl md:text-3xl font-bold text-white relative z-10">Relationship</span>
                  <span className="block text-sm text-white/60 mt-2 relative z-10">Better Bonds</span>
                </button>
                <button
                  onClick={() => window.open('https://drive.google.com/drive/folders/1rFTGtBrBV7KUFfsDr2mqK5yMpnfGmxFa?usp=sharing', '_blank')}
                  className="group relative p-8 bg-gradient-to-b from-astro-main/20 to-astro-main/10 rounded-[2rem] text-center border border-astro-main/30 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-95"
                >
                  <div className="absolute inset-0 bg-astro-main/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Zap size={48} className="text-astro-accent mx-auto mb-4 relative z-10" />
                  <span className="text-xl md:text-3xl font-bold text-white relative z-10">Wealth</span>
                  <span className="block text-sm text-white/60 mt-2 relative z-10">Money Flows</span>
                </button>
                <button
                  onClick={() => window.open('https://drive.google.com/drive/folders/1-VqgldK7bBYtnYSjL7wwuKaCeDnA8bga?usp=sharing', '_blank')}
                  className="group relative p-8 bg-gradient-to-b from-astro-main/20 to-astro-main/10 rounded-[2rem] text-center border border-astro-main/30 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-95"
                >
                  <div className="absolute inset-0 bg-astro-main/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <ShieldCheck size={48} className="text-astro-accent mx-auto mb-4 relative z-10" />
                  <span className="text-xl md:text-3xl font-bold text-white relative z-10">Health</span>
                  <span className="block text-sm text-white/60 mt-2 relative z-10">Full Vitality</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Detailed Section */}
        <section id="roadmap" className="py-24 md:py-40 px-6 bg-white overflow-hidden scroll-mt-28">
          <DecorativeElements />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-astro-dark mb-4 tracking-tighter">Development Milestones (2026)</h2>
              <div className="w-32 h-2 bg-astro-dark mx-auto rounded-full"></div>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-astro-dark md:-translate-x-1/2 opacity-20"></div>
              <div className="space-y-4 md:space-y-6">
                {/* Feb-Mar */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-2 md:mb-0"><h4 className="text-xl md:text-2xl font-black font-serif text-astro-dark uppercase tracking-widest">February–March 2026</h4></div>
                  <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-astro-dark border-4 border-white md:-translate-x-1/2 z-10 shadow-lg"></div>
                  <div className="md:w-1/2 md:pl-12"><div className="p-6 md:p-8 bg-astro-bg text-astro-dark rounded-[2.5rem] border border-astro-main/10 shadow-sm transition-all hover:translate-x-2"><p className="text-lg md:text-xl font-bold font-serif leading-snug">Prototype Development (Core Features) and Internal Testing</p></div></div>
                </div>
                {/* Apr-May */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-2 md:mb-0 md:order-2"><h4 className="text-xl md:text-2xl font-black font-serif text-astro-dark uppercase tracking-widest">April–May 2026</h4></div>
                  <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-astro-dark border-4 border-white md:-translate-x-1/2 z-10 shadow-lg"></div>
                  <div className="md:w-1/2 md:pl-12 md:order-1 md:text-right"><div className="p-6 md:p-8 bg-astro-bg text-astro-dark rounded-[2.5rem] border border-astro-main/10 shadow-sm transition-all hover:-translate-x-2"><p className="text-lg md:text-xl font-bold font-serif mb-1 leading-snug">Beta Testing and Algorithm Optimization</p><p className="text-sm md:text-base text-astro-dark/50 italic">Service Enhancement and Development of Additional Features</p></div></div>
                </div>
                {/* June */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-2 md:mb-0"><h4 className="text-xl md:text-2xl font-black font-serif text-astro-dark uppercase tracking-widest">June 2026</h4></div>
                  <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-astro-dark border-4 border-white md:-translate-x-1/2 z-10 shadow-lg"></div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="p-6 md:p-8 bg-astro-bg text-astro-dark rounded-[2.5rem] border border-astro-main/10 shadow-sm transition-all hover:translate-x-2">
                      <p className="text-lg md:text-xl font-bold font-serif leading-snug">Final Testing and Quality Assurance</p>
                    </div>
                  </div>
                </div>
                {/* July */}
                <div className="relative flex flex-col md:flex-row items-center pt-8">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:order-2"><h4 className="text-xl md:text-3xl font-black font-serif text-astro-main uppercase tracking-widest">July 2026</h4></div>
                  <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-astro-accent border-4 border-white md:-translate-x-1/2 z-10 animate-pulse shadow-2xl"></div>
                  <div className="md:w-1/2 md:pl-12 md:order-1 md:text-right">
                    <div className="p-8 md:p-14 bg-astro-dark text-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(62,50,77,0.4)] ring-4 ring-astro-accent/40 scale-105 md:scale-110 origin-right">
                      <Flag className="mb-4 text-astro-accent inline-block" size={48} />
                      <p className="text-3xl md:text-5xl font-black font-serif italic tracking-tighter">Official Service Launch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Know This */}
        <section className="relative py-20 md:py-24 px-6 bg-white overflow-hidden">
          <DecorativeElements />
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-astro-dark mb-6 md:mb-8 inline-block bg-astro-accent/20 px-3 md:px-4">Know This</h2>
            <div className="grid gap-2 md:gap-3 mb-10 md:mb-12">
              {[
                { icon: <RefreshCw size={18} />, label: 'Evolving', desc: 'Features may improve based on your feedback.' },
                { icon: <Zap size={18} />, label: 'Refund', desc: 'Full refund within 7 days. No questions asked.' },
                { icon: <Info size={18} />, label: 'Beta', desc: 'Features, UI & content may change.' },
                { icon: <Calendar size={18} />, label: 'Timeline', desc: 'Dates may shift for the best experience.' },
                { icon: <Lock size={18} />, label: 'Price Lock', desc: 'Founding Member pricing locked.' },
                { icon: <ShieldCheck size={18} />, label: 'Privacy', desc: 'Your data is encrypted and never shared.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center py-2 md:py-3 border-b border-astro-bg hover:bg-astro-bg/5 px-3 md:px-4 transition-colors">
                  <span className="text-astro-main shrink-0">{item.icon}</span>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 w-full">
                    <h5 className="text-base md:text-lg font-bold font-serif whitespace-nowrap">{item.label}</h5>
                    <p className="text-[10px] md:text-sm text-astro-dark/50 font-medium leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* RESTORED: Building transparency text */}
            <div className="text-center p-8 md:p-10 bg-astro-bg rounded-[2rem] md:rounded-[3rem] shadow-inner mt-12">
              <p className="text-lg md:text-xl font-bold text-astro-dark mb-4 leading-relaxed font-serif">We're building ASTRIARY with transparency and your trust.</p>
              <p className="text-base md:text-lg font-bold text-astro-dark/40">Questions? → <a href="mailto:astriary12@protonmail.com" className="text-astro-main font-black underline hover:text-astro-dark transition-colors">astriary12@protonmail.com</a></p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-48 px-6 text-center bg-grain relative overflow-hidden border-t border-astro-main/10">
          <CosmicBackground />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="inline-flex items-center justify-center mb-8 md:mb-10 text-astro-accent"><Sparkle size={48} /></div>
            <h2 className="text-3xl md:text-6xl font-serif font-bold text-astro-dark mb-10 md:mb-16 tracking-tighter uppercase leading-tight italic">The Stars Are Waiting</h2>
            <div className="mb-16 md:mb-24" style={{ display: 'flex', justifyContent: 'center' }}><EditorialImage src={img10} alt="Starry Future" wide /></div>

            {/* RESTORED: Waiting and listening subtext */}
            <div className="space-y-6 md:space-y-10 mb-12 md:mb-20">
              <p className="text-2xl md:text-5xl font-serif text-astro-dark italic font-bold">Your journal is waiting.</p>
              <p className="text-2xl md:text-5xl font-serif text-astro-main italic font-bold">The cosmos is listening.</p>
            </div>

            <button
              onClick={handleJoinClick}
              className="px-12 py-6 md:px-24 md:py-10 bg-astro-dark text-astro-white rounded-full font-serif italic font-bold text-xl md:text-3xl shadow-3xl hover:bg-astro-main hover:scale-105 transition-all uppercase tracking-[0.1em]"
            >Claim My Founding Spot</button>
          </div>
        </section>
      </main>

      <footer className="py-16 md:py-32 px-6 md:px-10 bg-astro-dark text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16">
          <div className="flex items-center gap-3 md:gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg shadow-white/10"><Moon className="w-6 h-6 md:w-8 md:h-8 text-astro-dark fill-current" /></div>
            <span className="font-bold text-2xl md:text-4xl tracking-[0.1em] uppercase font-serif">Astriary</span>
          </div>
          <div className="text-center md:text-right"><p className="text-white/40 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Stay Connected</p><p className="text-xl md:text-2xl font-bold italic font-serif"><a href="https://www.instagram.com/astriary.official/" target="_blank" rel="noopener noreferrer">@astriary.official</a></p></div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-[10px] font-black uppercase tracking-[0.6em] text-white/20">© 2026 ASTRIARY COSMIC SYSTEMS | ALL SECRETS STAY PRIVATE</div>
      </footer>
    </div>
  );
}
