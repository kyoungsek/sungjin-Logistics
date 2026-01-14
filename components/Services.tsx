
import React from 'react';
import { Truck, Package, ClipboardCheck, ArrowRight, ShieldCheck, Zap, Repeat, Building2, UserCircle, AlertCircle, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const cargoTypes = [
    "일반 공산품", "파렛트 화물", "박스 화물", "원자재 및 부자재", 
    "기계 및 장비", "위험물", "신선제품", "기타 협의 화물"
  ];

  const vehicleTypes = [
    { ton: "1톤 / 1.4톤", type: "소형 화물" },
    { ton: "3.5톤 / 5톤", type: "중형 화물" },
    { ton: "8톤 / 11톤", type: "대형 화물" },
    { ton: "25톤", type: "특대형 화물" },
    { ton: "카고 / 윙바디", type: "표준 차량" },
    { ton: "위험물 / 냉동·냉장", type: "특수 차량" },
  ];

  const processSteps = [
    { title: "배차 문의 접수", desc: "전화 또는 온라인 신청" },
    { title: "화물 정보 확인", desc: "상세 일정 및 규격 파악" },
    { title: "차량 매칭 및 안내", desc: "최적 차량 배정 및 운임 고지" },
    { title: "배차 확정", desc: "기사 배정 및 정보 전송" },
    { title: "운송 진행", desc: "실시간 이동 및 현황 관리" },
    { title: "운송 완료 보고", desc: "하차 확인 및 증빙 전달" },
  ];

  const strengths = [
    "실시간 차량 네트워크 확보",
    "책임 배차 운영",
    "빠른 응답과 명확한 안내",
    "재위탁 없는 직접 관리",
    "문제 발생 시 즉각 대응"
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F9F8F6] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* 서비스 개요 */}
        <div className="max-w-3xl mb-20">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            전국 어디든 정확하게 연결하는<br />화물 배차 서비스.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            성진물류는 전국 어디든 화물 운송이 필요한 곳에 차량과 화물을 정확하게 연결합니다. 
            단순한 배차를 넘어 화주와 차주 모두가 만족하는 책임 운송을 실현합니다.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            {["전국 단·중·장거리", "당일 및 예약 배차", "정기 노선 운영", "기업 및 개인 가능"].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-700 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 화물 & 차량 안내 */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Package className="text-blue-600 w-7 h-7" /> 취급 화물
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {cargoTypes.map(cargo => (
                <div key={cargo} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-transparent hover:border-blue-200 hover:bg-blue-50 transition-all">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-bold text-slate-700">{cargo}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-400 font-medium">* 화물 특성에 따라 가장 적합한 차량을 맞춤 배정합니다.</p>
          </div>

          <div className="bg-slate-900 p-10 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[60px]"></div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
              <Truck className="text-blue-400 w-7 h-7" /> 차량 안내
            </h3>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {vehicleTypes.map((v, i) => (
                <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-blue-400 font-bold text-lg mb-1">{v.ton}</div>
                  <div className="text-xs text-slate-400">{v.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 프로세스 */}
        <div className="mb-24">
          <div className="text-center mb-16">
             <h3 className="text-3xl font-bold text-slate-900 mb-4">배차 진행 절차</h3>
             <p className="text-slate-500">복잡한 절차 없이 빠르고 명확하게 진행됩니다.</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center h-full hover:border-blue-400 transition-all">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <div className="font-bold text-slate-900 text-sm mb-2 break-keep">{step.title}</div>
                  <div className="text-[10px] text-slate-500 leading-relaxed">{step.desc}</div>
                </div>
                {idx < 5 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 z-10 text-slate-300">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 강점 */}
        <div className="bg-blue-600 rounded-[2.5rem] p-12 md:p-20 text-white overflow-hidden relative shadow-2xl shadow-blue-900/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-200 font-bold text-xs uppercase tracking-widest mb-4 block">Our Strengths</span>
              <h2 className="text-4xl font-bold mb-8 leading-tight text-white">
                "배차만 하고 끝내는<br />회사가 아닙니다."
              </h2>
              <p className="text-blue-100 mb-10 text-lg leading-relaxed">
                성진물류는 끝까지 관리하는 책임 배차를 제공합니다.<br />
                우리가 연결한 화물은 배송 완료까지 우리가 책임집니다.
              </p>
            </div>
            <div className="space-y-4">
              {strengths.map((s, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                   <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue-900" />
                   </div>
                   <span className="font-bold text-white tracking-tight">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
