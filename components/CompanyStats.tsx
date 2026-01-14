
import React from 'react';
import { ShieldCheck, CheckCircle2, ClipboardList, UserCog, History, ShieldAlert, Award } from 'lucide-react';

const CompanyStats: React.FC = () => {
  const stats = [
    { value: "18+", label: "업력 (Years)" },
    { value: "50M+", label: "누적 물동량 (Parcels)" },
    { value: "200+", label: "B2B 파트너사" },
    { value: "24h", label: "실시간 대응 체계" },
  ];

  const philosophy = [
    "무리한 조건의 배차를 진행하지 않습니다.",
    "운임과 운송 조건을 사전에 명확히 안내합니다.",
    "배차 확정 후 책임 없이 넘기는 재위탁을 하지 않습니다.",
    "문제 발생 시 회피하지 않고 즉시 대응합니다.",
    "한 번의 배차보다, 오래 함께할 거래를 중요하게 생각합니다."
  ];

  const systems = [
    { icon: <UserCog className="w-5 h-5" />, title: "전담 배차 담당자 운영", desc: "고객별 전담 매니저가 배차 전 과정을 책임집니다." },
    { icon: <History className="w-5 h-5" />, title: "배차 이력 및 운송 내역 관리", desc: "모든 운송 데이터는 체계적으로 기록되어 관리됩니다." },
    { icon: <ClipboardList className="w-5 h-5" />, title: "운전자 검증 및 차량 정보 관리", desc: "검증된 차주 네트워크와 실시간 차량 정보를 매칭합니다." },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "긴급 상황 대응 체계 운영", desc: "돌발 상황 발생 시 즉각적인 대체 차량 및 대응팀을 가동합니다." },
  ];

  return (
    <section id="company" className="bg-slate-950 py-24 md:py-32 relative overflow-hidden scroll-mt-20">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Company Introduction</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              전국 화물 운송의<br />
              <span className="text-blue-400">책임 있는 연결.</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                주식회사 성진물류는 전국 화물 운송을 전문으로 하는 <span className="text-white font-medium">화물 배차 전문 기업</span>입니다.
                빠른 연결보다 정확한 배차, 저렴한 운임보다 책임 있는 운송을 우선으로 생각합니다.
              </p>
              <p>
                화주는 안심하고 맡길 수 있어야 하고, 운전자는 정당한 조건에서 운송할 수 있어야 합니다.
                성진물류는 그 균형을 지키는 배차를 운영합니다.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 pt-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-white mb-2 font-dm-sans">{s.value}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Philosophy */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
             <div className="h-px flex-grow bg-white/10"></div>
             <h3 className="text-2xl font-bold text-white px-6">운영 철학</h3>
             <div className="h-px flex-grow bg-white/10"></div>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {philosophy.map((p, i) => (
              <div key={i} className="bg-blue-600/5 border border-blue-500/20 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-blue-600/10 transition-all">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-slate-300 text-sm leading-snug break-keep">{p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Management System */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 rounded-[2.5rem] text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Award className="w-32 h-32" />
             </div>
             <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">관리 시스템</h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  개인이 아닌 <span className="font-bold text-white underline decoration-blue-300">회사 책임 하에 관리되는 배차</span>를 제공합니다.
                  성진물류만의 독자적인 관리 프로세스로 물류의 투명성을 높입니다.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 text-xs font-bold border border-white/10">
                   <ShieldAlert className="w-4 h-4 text-blue-300" />
                   24/7 전문 배차팀 상시 대기
                </div>
             </div>
          </div>

          <div className="grid gap-6">
            {systems.map((s, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{s.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
