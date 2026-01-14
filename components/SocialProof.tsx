
import React from 'react';
import { ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';

const SocialProof: React.FC = () => {
  const partners = [
    { name: "Han Express", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "FastTrack", icon: <Zap className="w-5 h-5" /> },
    { name: "GlobalLink", icon: <Globe className="w-5 h-5" /> },
    { name: "TechLogis", icon: <Cpu className="w-5 h-5" /> },
    { name: "CubeLine", icon: <Zap className="w-5 h-5" /> },
  ];

  return (
    <section className="bg-white border-b border-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-10">
          신뢰할 수 있는 글로벌 200여 파트너사와 함께합니다
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((p, i) => (
            <div key={i} className="flex items-center gap-2 text-xl font-bold text-slate-900 group">
              <span className="text-blue-600 transition-transform group-hover:scale-110">{p.icon}</span>
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
