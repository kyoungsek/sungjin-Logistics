
import React from 'react';
import { CheckCircle2, PackageCheck, MapPin, Building2, UserCircle, Zap, TrendingUp, Quote } from 'lucide-react';

const UseCases: React.FC = () => {
  const cases = [
    {
      id: "01",
      title: "긴급 기계 부품 배차",
      cargo: "기계 부품",
      route: "수도권 → 충청권",
      vehicle: "5톤 윙바디",
      desc: "당일 긴급 배차 요청 건으로, 인접 지역 실차 매칭을 통해 1시간 내 차량 배정 및 정해진 시간 내 안전하게 운송을 완료했습니다."
    },
    {
      id: "02",
      title: "정기 파렛트 물량 운영",
      cargo: "파렛트 공산품",
      route: "부산 → 수도권",
      vehicle: "11톤",
      desc: "부산항 수입 물량의 정기 노선 배차를 담당하며, 고정적인 물량 공급에 맞춰 안정적인 차량 수급과 배차 일정 최적화를 운영 중입니다."
    }
  ];

  const targetClients = [
    { icon: <Building2 />, title: "제조업체 납품 화물", desc: "생산 일정에 맞춘 정시 입고" },
    { icon: <TrendingUp />, title: "유통·물류센터 출고", desc: "전국 센터 간 대량 화물 이동" },
    { icon: <UserCircle />, title: "개인 사업자 운송", desc: "소량 및 일회성 운송도 친절하게" },
    { icon: <Zap />, title: "급한 당일 배차", desc: "긴급 상황 발생 시 빠른 대응" },
  ];

  return (
    <section id="use-cases" className="py-24 md:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">Case Studies</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">현장이 증명하는<br />성진물류의 실력.</h2>
        </div>

        {/* 배차 사례 */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {cases.map((c) => (
            <div key={c.id} className="group bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <PackageCheck className="w-24 h-24" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-lg uppercase">Case {c.id}</span>
                <span className="text-slate-400 text-xs font-bold">배차 사례</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{c.title}</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                 <div className="space-y-1">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">화물 정보</div>
                    <div className="text-sm font-bold text-slate-700">{c.cargo}</div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">운송 구간</div>
                    <div className="text-sm font-bold text-slate-700">{c.route}</div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">차량 정보</div>
                    <div className="text-sm font-bold text-blue-600">{c.vehicle}</div>
                 </div>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-200 pt-6">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 타겟 고객군 */}
        <div className="mb-32">
           <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-slate-900">이런 고객들이 이용하고 있습니다</h3>
           </div>
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetClients.map((client, i) => (
                <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {/* Fix: Cast the icon element to React.ReactElement<any> to allow the injection of 'className' props during cloning */}
                    {React.cloneElement(client.icon as React.ReactElement<any>, { className: "w-7 h-7" })}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{client.title}</h4>
                  <p className="text-xs text-slate-500">{client.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* 후기 */}
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2"></div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
            {[
              "응답이 빠르고 배차가 정확해서 안심하고 맡깁니다.",
              "급한 상황에서도 끝까지 책임지고 처리해줍니다."
            ].map((comment, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col items-center text-center">
                <Quote className="w-10 h-10 text-blue-100 mb-6" />
                <p className="text-lg font-bold text-slate-800 leading-relaxed break-keep">
                  "{comment}"
                </p>
                <div className="mt-8 flex items-center gap-2">
                   {[1,2,3,4,5].map(star => <span key={star} className="text-yellow-400 text-xs">★</span>)}
                   <span className="text-xs font-bold text-slate-400 ml-2">실제 고객 코멘트</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
