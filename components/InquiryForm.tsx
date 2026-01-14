
import React, { useState } from 'react';
import { Send, Truck, MapPin, Package, Phone, Clock, CheckCircle2 } from 'lucide-react';

const InquiryForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    company: '',
    from: '',
    to: '',
    cargo: '',
    vehicle: '1톤 / 1.4톤',
    date: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // 데모용: 로컬 스토리지에 데이터 저장
    const newInquiry = {
      ...formState,
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
      status: '접수완료'
    };

    const existingInquiries = JSON.parse(localStorage.getItem('sj_inquiries') || '[]');
    localStorage.setItem('sj_inquiries', JSON.stringify([newInquiry, ...existingInquiries]));

    setTimeout(() => {
      alert("배차 문의가 정상적으로 접수되었습니다. 하단 '관리자 대시보드'에서 확인하실 수 있습니다.");
      setSubmitting(false);
      setFormState({ name: '', phone: '', company: '', from: '', to: '', cargo: '', vehicle: '1톤 / 1.4톤', date: '', message: '' });
    }, 1000);
  };

  return (
    <section id="inquiry" className="py-24 md:py-32 bg-[#F9F8F6] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side: Information */}
          <div className="lg:w-2/5 bg-slate-900 p-10 md:p-16 text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10">
              <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4 block">Inquiry Guide</span>
              <h2 className="text-3xl font-bold mb-6">배차 문의 안내</h2>
              <p className="text-slate-400 leading-relaxed mb-12 break-keep">
                화물 배차가 필요하신가요?<br />
                작은 화물부터 긴급 배차까지 부담 없이 문의하세요. 
                성진물류가 가장 적합한 차량을 직접 연결해드립니다.
              </p>

              <div className="space-y-10">
                <div>
                  <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" /> 문의 후 진행 안내
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
                      <p className="text-sm text-slate-300">문의 접수 후 담당자가 직접 연락드립니다.</p>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
                      <p className="text-sm text-slate-300">배차 가능 여부 및 운임을 안내해드립니다.</p>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</span>
                      <p className="text-sm text-slate-300">확정 시 즉시 차량 배정 후 운송이 진행됩니다.</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-400" /> 긴급 배차 안내
                  </h3>
                  <p className="text-sm text-slate-400 mb-6 break-keep">
                    급한 배차의 경우 전화 문의를 통해 더 빠른 대응이 가능합니다.
                  </p>
                  <div className="space-y-3">
                    <a href="tel:031-391-7274" className="text-3xl font-bold text-blue-400 block hover:underline tracking-tight">
                      031-391-7274
                    </a>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
                       <Clock className="w-4 h-4" /> 운영시간: 24시간 연중무휴
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-3/5 p-10 md:p-16">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">상세 배차 문의</h2>
              <p className="text-slate-500 text-sm">정확한 배차를 위해 아래 정보를 입력해 주세요.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">담당자 성함</label>
                  <input required type="text" value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all" placeholder="성함 입력" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">연락처</label>
                  <input required type="tel" value={formState.phone} onChange={(e) => setFormState({...formState, phone: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all" placeholder="010-0000-0000" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> 상차지 (출발)
                  </label>
                  <input required type="text" value={formState.from} onChange={(e) => setFormState({...formState, from: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all" placeholder="시/군/구 동까지 입력" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> 하차지 (도착)
                  </label>
                  <input required type="text" value={formState.to} onChange={(e) => setFormState({...formState, to: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all" placeholder="시/군/구 동까지 입력" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Package className="w-3 h-3" /> 화물 내용 및 무게
                  </label>
                  <input required type="text" value={formState.cargo} onChange={(e) => setFormState({...formState, cargo: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all" placeholder="예: 파렛트 3개, 1톤 기계" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Truck className="w-3 h-3" /> 희망 차량
                  </label>
                  <select value={formState.vehicle} onChange={(e) => setFormState({...formState, vehicle: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none cursor-pointer focus:ring-2 focus:ring-blue-600/20 transition-all">
                      <option>1톤</option>
                      <option>1.4톤</option>
                      <option>3.5톤</option>
                      <option>5톤</option>
                      <option>8톤</option>
                      <option>11톤</option>
                      <option>25톤</option>
                      <option>카고</option>
                      <option>윙바디</option>
                      <option>냉동 / 냉장</option>
                      <option>기타 협의</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">상차 예정일</label>
                <input required type="date" value={formState.date} onChange={(e) => setFormState({...formState, date: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none transition-all focus:ring-2 focus:ring-blue-600/20" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">기타 요청사항</label>
                <textarea rows={3} value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-600/20 outline-none resize-none transition-all" placeholder="추가 문의사항이나 긴급 요청 내용을 입력해 주세요."></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" required className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-600 mt-0.5" id="privacy-agreement" />
                <label htmlFor="privacy-agreement" className="text-xs text-slate-500 leading-tight">
                  개인정보 수집 및 이용에 동의합니다. 입력하신 정보는 배차 견적 및 상담 목적 외에 사용되지 않습니다.
                </label>
              </div>

              <button type="submit" disabled={submitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-600/20 disabled:opacity-50">
                {submitting ? "전송 중..." : "배차 문의하기"}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
