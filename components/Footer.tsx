
import React, { useState, useEffect } from 'react';
import { Package, Facebook, Instagram, Linkedin, Mail, Phone, MapPin, AlertCircle, X, CheckCircle2, Car, Train, Users, ShieldAlert, LayoutDashboard, Trash2, Lock, KeyRound } from 'lucide-react';

const Footer: React.FC = () => {
  // 모달 타입 확장: 대시보드(dashboard) 추가
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'location' | 'careers' | 'email-refusal' | 'dashboard' | null>(null);
  const [inquiries, setInquiries] = useState<any[]>([]);
  
  // 비밀번호 관련 상태
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const ADMIN_PASSWORD = 'aa1309';

  useEffect(() => {
    if (activeModal === 'dashboard' && isAdminAuthenticated) {
      const data = JSON.parse(localStorage.getItem('sj_inquiries') || '[]');
      setInquiries(data);
    }
    
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // 모달 닫을 때 인증 상태 및 입력값 초기화 (보안 권장)
      if (!activeModal) {
        setIsAdminAuthenticated(false);
        setPasswordInput('');
        setPasswordError(false);
      }
    }
  }, [activeModal, isAdminAuthenticated]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAdminAuthenticated(true);
      setPasswordError(false);
      const data = JSON.parse(localStorage.getItem('sj_inquiries') || '[]');
      setInquiries(data);
    } else {
      setPasswordError(true);
      setPasswordInput('');
    }
  };

  const deleteInquiry = (id: number) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    const updated = inquiries.filter(item => item.id !== id);
    setInquiries(updated);
    localStorage.setItem('sj_inquiries', JSON.stringify(updated));
  };

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-black text-slate-400 pt-20 pb-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8 text-white">
              <Package className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold tracking-tight">성진물류</span>
            </div>
            <div className="space-y-4 text-xs leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-600 shrink-0" />
                <span>경기도 군포시 도마교동 25번길 44, 1층</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-600 shrink-0" />
                <span>031-391-7274 (24시간 배차 지원)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-600 shrink-0" />
                <span>help@sjlogis.co.kr</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6">성진물류 서비스</h4>
            <ul className="space-y-3 text-xs">
              <li><button onClick={() => scrollToId('services')} className="hover:text-white transition-colors text-left">차량 및 제원 안내</button></li>
              <li><button onClick={() => scrollToId('services')} className="hover:text-white transition-colors text-left">취급 화물 리스트</button></li>
              <li><button onClick={() => scrollToId('use-cases')} className="hover:text-white transition-colors text-left">배차 성공 사례</button></li>
              <li><button onClick={() => scrollToId('inquiry')} className="hover:text-white transition-colors text-left font-bold text-blue-400">실시간 견적 문의</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6">회사 안내</h4>
            <ul className="space-y-3 text-xs">
              <li><button onClick={() => scrollToId('company')} className="hover:text-white transition-colors text-left">운영 철학 및 비전</button></li>
              <li><button onClick={() => scrollToId('company')} className="hover:text-white transition-colors text-left">주요 파트너십</button></li>
              <li><button onClick={() => setActiveModal('location')} className="hover:text-white transition-colors text-left">오시는 길</button></li>
              <li><button onClick={() => setActiveModal('careers')} className="hover:text-white transition-colors text-left">인재 채용</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6">고객 지원</h4>
            <ul className="space-y-3 text-xs">
              <li><button onClick={() => setActiveModal('privacy')} className="text-white font-bold hover:text-blue-400 transition-colors text-left">개인정보처리방침</button></li>
              <li><button onClick={() => setActiveModal('terms')} className="hover:text-white transition-colors text-left">이용약관</button></li>
              <li><button onClick={() => setActiveModal('email-refusal')} className="hover:text-white transition-colors text-left">이메일무단수집거부</button></li>
              <li><button onClick={() => setActiveModal('location')} className="hover:text-white transition-colors text-left">상담 방문 안내</button></li>
            </ul>
          </div>
        </div>

        {/* 대시보드 접근 버튼 */}
        <div className="flex justify-center mb-12">
           <button 
             onClick={() => setActiveModal('dashboard')}
             className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600/20 transition-all text-sm font-bold"
           >
             <LayoutDashboard className="w-4 h-4" />
             관리자 대시보드 (배차 문의 확인)
           </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-12">
          <div className="text-[10px] text-slate-600">
            대표이사: 황동환 | 사업자등록번호: 123-45-67890 | 통신판매업신고: 2024-경기군포-0001<br />
            본사: 경기도 군포시 도마교동 25번길 44, 1층 | © 2026 Sungjin Logistics Co., Ltd.
          </div>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* 통합 모달 시스템 */}
      {activeModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className={`bg-white w-full ${activeModal === 'dashboard' ? 'max-w-5xl' : 'max-w-2xl'} max-h-[85vh] overflow-y-auto rounded-[2.5rem] shadow-2xl relative animate-in zoom-in-95 duration-300`}>
             <button 
               onClick={() => setActiveModal(null)}
               className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full transition-colors z-10"
             >
               <X className="w-5 h-5" />
             </button>
             
             <div className="p-8 md:p-12">
               {activeModal === 'dashboard' && !isAdminAuthenticated && (
                 <div className="py-12 flex flex-col items-center max-w-sm mx-auto text-center">
                    <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mb-6">
                       <Lock className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">관리자 인증</h3>
                    <p className="text-sm text-slate-500 mb-8">대시보드 접근을 위해 비밀번호를 입력해주세요.</p>
                    
                    <form onSubmit={handlePasswordSubmit} className="w-full space-y-4">
                       <div className="relative">
                          <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input 
                             autoFocus
                             type="password" 
                             value={passwordInput}
                             onChange={(e) => {
                               setPasswordInput(e.target.value);
                               setPasswordError(false);
                             }}
                             placeholder="비밀번호 입력"
                             className={`w-full bg-slate-50 border ${passwordError ? 'border-red-500 ring-4 ring-red-500/10' : 'border-slate-200'} rounded-2xl px-12 py-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all font-mono`}
                          />
                       </div>
                       {passwordError && (
                         <p className="text-xs text-red-500 font-bold flex items-center justify-center gap-1">
                           <AlertCircle className="w-3 h-3" /> 비밀번호가 일치하지 않습니다.
                         </p>
                       )}
                       <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-blue-600/20">
                          인증하기
                       </button>
                    </form>
                 </div>
               )}

               {activeModal === 'dashboard' && isAdminAuthenticated && (
                 <div className="space-y-8">
                   <div className="flex items-center justify-between border-b pb-6">
                      <div className="flex items-center gap-3">
                         <LayoutDashboard className="w-8 h-8 text-blue-600" />
                         <h3 className="text-3xl font-bold text-slate-900">배차 문의 대시보드</h3>
                      </div>
                      <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold">총 {inquiries.length}건</span>
                   </div>
                   
                   {inquiries.length === 0 ? (
                     <div className="py-20 text-center space-y-4">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-300">
                           <LayoutDashboard className="w-10 h-10" />
                        </div>
                        <p className="text-slate-400">아직 접수된 배차 문의가 없습니다.</p>
                     </div>
                   ) : (
                     <div className="grid gap-6">
                        {inquiries.map((item) => (
                          <div key={item.id} className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 hover:bg-white hover:shadow-xl transition-all group relative">
                            <button 
                              onClick={() => deleteInquiry(item.id)}
                              className="absolute top-6 right-6 p-2 text-slate-300 hover:text-red-500 transition-colors"
                              title="삭제"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                            
                            <div className="grid md:grid-cols-3 gap-8">
                               <div className="space-y-4">
                                  <div>
                                     <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">문의자 정보</div>
                                     <div className="font-bold text-slate-900">{item.name} <span className="text-slate-400 font-medium ml-2">{item.company}</span></div>
                                     <div className="text-sm text-blue-600 font-bold mt-1">{item.phone}</div>
                                  </div>
                                  <div>
                                     <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">접수 일시</div>
                                     <div className="text-xs text-slate-500">{item.timestamp}</div>
                                  </div>
                               </div>
                               
                               <div className="space-y-4">
                                  <div>
                                     <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">운송 구간</div>
                                     <div className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                        {item.from} <ArrowRight className="w-3 h-3 text-slate-300" /> {item.to}
                                     </div>
                                  </div>
                                  <div className="flex gap-4">
                                     <div>
                                        <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">희망차량</div>
                                        <div className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{item.vehicle}</div>
                                     </div>
                                     <div>
                                        <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">상차일</div>
                                        <div className="text-xs font-bold text-slate-700">{item.date}</div>
                                     </div>
                                  </div>
                               </div>

                               <div className="space-y-4">
                                  <div>
                                     <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">화물 내용</div>
                                     <div className="text-sm text-slate-700 font-medium">{item.cargo}</div>
                                  </div>
                                  <div>
                                     <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">요청 사항</div>
                                     <p className="text-xs text-slate-500 leading-relaxed italic">"{item.message || '없음'}"</p>
                                  </div>
                               </div>
                            </div>
                          </div>
                        ))}
                     </div>
                   )}
                 </div>
               )}

               {activeModal === 'privacy' && (
                 <div className="space-y-6">
                   <h3 className="text-2xl font-bold text-slate-900 border-b pb-4">개인정보처리방침</h3>
                   <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
                     <p>주식회사 성진물류(이하 '회사')는 고객님의 개인정보를 소중히 다룹니다.</p>
                     <section className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                       <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> 수집 목적</h4>
                       <p>배차 문의 상담, 견적 안내, 서비스 이용에 따른 본인 식별.</p>
                     </section>
                   </div>
                 </div>
               )}

               {activeModal === 'terms' && (
                 <div className="space-y-6">
                   <h3 className="text-2xl font-bold text-slate-900 border-b pb-4">이용약관</h3>
                   <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
                     <p>성진물류 웹사이트 서비스 이용과 관련하여 회사와 이용자 간의 권리, 의무를 규정합니다.</p>
                     <section>
                       <h4 className="font-bold text-slate-800 mb-2">책임 운송 서비스</h4>
                       <p>회사는 배차된 화물의 안전한 운송을 관리하며, 돌발 상황 발생 시 차주와 화주 사이의 원만한 조율과 책임 있는 대응을 약속합니다.</p>
                     </section>
                   </div>
                 </div>
               )}

               {activeModal === 'location' && (
                 <div className="space-y-6">
                   <h3 className="text-2xl font-bold text-slate-900 border-b pb-4">오시는 길</h3>
                   <div className="space-y-8">
                     <div className="bg-slate-100 rounded-3xl h-48 flex items-center justify-center border border-slate-200 overflow-hidden relative">
                        <div className="absolute inset-0 bg-blue-50/50 flex flex-col items-center justify-center text-center p-4">
                           <MapPin className="w-10 h-10 text-blue-600 mb-2" />
                           <p className="font-bold text-slate-800">경기도 군포시 도마교동 25번길 44, 1층</p>
                           <p className="text-xs text-slate-500 mt-1">(군포 송정지구 내 성진물류 본사)</p>
                        </div>
                     </div>
                   </div>
                 </div>
               )}

               {activeModal === 'careers' && (
                 <div className="space-y-6">
                   <h3 className="text-2xl font-bold text-slate-900 border-b pb-4">인재 채용</h3>
                   <div className="space-y-6">
                     <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-center gap-4">
                       <Users className="w-10 h-10 text-blue-600" />
                       <div>
                         <h4 className="font-bold text-blue-900">물류 전문가를 기다립니다</h4>
                         <p className="text-xs text-blue-700">배차 관리, 물류 영업, 화물 운송 파트너</p>
                       </div>
                     </div>
                   </div>
                 </div>
               )}

               {activeModal === 'email-refusal' && (
                 <div className="space-y-6">
                   <div className="flex items-center gap-3 text-slate-900 border-b pb-4">
                     <ShieldAlert className="w-6 h-6 text-red-500" />
                     <h3 className="text-2xl font-bold">이메일 무단 수집 거부</h3>
                   </div>
                   <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
                     <p className="font-bold">본 웹사이트에 게시된 이메일 주소가 기술적 장치를 이용하여 무단으로 수집되는 것을 거부합니다.</p>
                   </div>
                 </div>
               )}
             </div>
          </div>
        </div>
      )}
    </footer>
  );
};

// 헬퍼 컴포넌트: ArrowRight (Lucide-react와 별개로 간단히 정의)
const ArrowRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

export default Footer;
