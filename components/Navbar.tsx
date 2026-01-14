
import React, { useState, useEffect } from 'react';
import { Package, Menu, X, Phone, ChevronRight } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 메뉴 열릴 때 본문 스크롤 방지
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "회사 소개", href: "#company", desc: "성진물류의 철학과 원칙" },
    { name: "배차 서비스", href: "#services", desc: "차량 및 취급 화물 안내" },
    { name: "배차 사례", href: "#use-cases", desc: "실제 현장 운송 케이스" },
    { name: "배차 문의", href: "#inquiry", desc: "상담 및 견적 신청" },
  ];

  // 부드러운 스크롤 핸들러
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
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
      
      // URL 해시 업데이트 (선택 사항, 히스토리 유지용)
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 z-[60] w-full transition-all duration-300 border-b ${
        scrolled || mobileMenuOpen
          ? 'bg-black/95 backdrop-blur-md border-white/10 py-3' 
          : 'bg-black border-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-2 group z-[70]"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-600 text-white group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
              <Package className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight font-dm-sans">성진물류</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 items-center z-[70]">
            <a href="tel:031-391-7274" className="hidden lg:flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-bold mr-4">
               <Phone className="w-4 h-4 text-blue-500" />
               031-391-7274
            </a>
            <a 
              href="#inquiry" 
              onClick={(e) => scrollToSection(e, '#inquiry')}
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-xs font-bold text-white px-5 py-2.5 rounded-lg shadow-lg shadow-blue-600/30"
            >
              상담 신청
            </a>
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[50] bg-black transition-transform duration-500 ease-in-out md:hidden ${
        mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="h-full flex flex-col pt-32 px-8 pb-12 overflow-y-auto">
          <div className="space-y-8 flex-grow">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="group block"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-white block mb-1 group-active:text-blue-400">{link.name}</span>
                    <span className="text-sm text-slate-500">{link.desc}</span>
                  </div>
                  <ChevronRight className="text-slate-700 group-active:text-blue-500" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="mb-6">
              <p className="text-xs text-slate-500 mb-2 font-bold uppercase tracking-widest">긴급 배차 상담</p>
              <a href="tel:031-391-7274" className="text-3xl font-bold text-blue-400 flex items-center gap-3">
                <Phone className="w-6 h-6" />
                031-391-7274
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
