
import React, { useState } from 'react';
import { Search, Package, ShieldCheck, Zap, PhoneCall } from 'lucide-react';

const Hero: React.FC = () => {
  const handleQuickCall = () => {
    window.location.href = "tel:031-391-7274";
  };

  // 부드러운 스크롤 핸들러 (네비바와 동일한 로직 적용)
  const scrollToInquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('inquiry');
    
    if (element) {
      const offset = 80; // 헤더 높이만큼 오프셋
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // URL 해시 업데이트
      window.history.pushState(null, '', '#inquiry');
    }
  };

  return (
    <section id="hero" className="bg-black pt-32 pb-24 md:pt-48 md:pb-40 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            전국 화물 배차 전문 기업
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            신뢰와 책임을 잇는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
              성진물류의 배차.
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 max-w-lg">
            정확한 배차와 실시간 대응으로 화주와 운전자의 신뢰를 지킵니다. 
            무리한 배차 없는 정직한 물류를 약속합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
            <button 
              onClick={scrollToInquiry}
              className="flex-1 bg-white hover:bg-slate-100 text-black font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              배차 문의하기
              <Zap className="w-5 h-5" />
            </button>
            <button 
              onClick={handleQuickCall}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/30"
            >
              긴급 상담 031-391-7274
              <PhoneCall className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              실차 기반 배차
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              배차 후 책임 관리
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative perspective-1000">
          <div className="w-full h-[520px] bg-slate-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-1000">
             <div className="h-full flex flex-col justify-between">
                <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                        <span className="text-white font-bold">실시간 배차 현황</span>
                        <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-[10px] font-bold">LIVE</span>
                    </div>
                    {[
                        { from: "수도권", to: "충청권", vehicle: "5톤 윙바디", status: "배차 완료" },
                        { from: "부산권", to: "경기권", vehicle: "11톤", status: "매칭 중" },
                        { from: "호남권", to: "강원권", vehicle: "1톤 카고", status: "배차 완료" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="text-xs">
                                    <div className="text-slate-500 mb-1">구간</div>
                                    <div className="text-white font-medium">{item.from} → {item.to}</div>
                                </div>
                                <div className="text-xs">
                                    <div className="text-slate-500 mb-1">차량</div>
                                    <div className="text-white font-medium">{item.vehicle}</div>
                                </div>
                            </div>
                            <div className={`text-[10px] font-bold px-2 py-1 rounded ${item.status === '배차 완료' ? 'bg-blue-500/20 text-blue-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                {item.status}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-blue-600/20 p-4 rounded-2xl border border-blue-500/30">
                    <div className="text-xs text-blue-400 mb-2 font-bold">운송 최적화 엔진 가동 중</div>
                    <div className="flex gap-1">
                        {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                            <div key={i} className="flex-grow h-6 bg-blue-500/20 rounded-sm relative overflow-hidden">
                                <div className="absolute bottom-0 left-0 w-full bg-blue-500" style={{height: `${Math.random() * 80 + 20}%`}}></div>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
