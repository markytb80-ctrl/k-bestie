import { Heart, Mail, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white py-20 border-t border-peach/30">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <img 
              alt="내친구 케이 Logo" 
              className="h-12 w-auto mb-6" 
              src="https://i.ibb.co/KzVFzqKf/logo2.png" 
              referrerPolicy="no-referrer"
            />
            <p className="text-text-soft text-sm font-medium leading-relaxed">
              아이 마음을 더 잘 이해하도록 돕는<br />
              부모 맞춤형 양육 인사이트 서비스
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 col-span-1 md:col-span-2">
            <div className="flex flex-col gap-4">
              <span className="text-text-main font-black text-xs uppercase tracking-widest opacity-40">Service</span>
              <Link className="text-sm text-text-soft hover:text-coral transition-all" to="/about">서비스 소개</Link>
              <Link className="text-sm text-text-soft hover:text-coral transition-all" to="/report-detail">부모 리포트</Link>
              <Link className="text-sm text-text-soft hover:text-coral transition-all" to="/kid-experience">아이 사용 경험</Link>
              <Link className="text-sm text-text-soft hover:text-coral transition-all" to="/safety">안전과 신뢰</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-text-main font-black text-xs uppercase tracking-widest opacity-40">Support</span>
              <Link className="text-sm text-text-soft hover:text-coral transition-all" to="/pricing">요금제</Link>
              <Link className="text-sm text-text-soft hover:text-coral transition-all" to="/faq">FAQ</Link>
              <Link className="text-sm text-text-soft hover:text-coral transition-all" to="/contact">문의하기</Link>
              <Link className="text-sm text-text-soft hover:text-coral transition-all" to="/institutional">기관 도입 문의</Link>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-peach/20 flex items-center justify-center text-coral hover:bg-peach/40 cursor-pointer transition-all">
                <Heart className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-peach/20 flex items-center justify-center text-coral hover:bg-peach/40 cursor-pointer transition-all">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-peach/20 flex items-center justify-center text-coral hover:bg-peach/40 cursor-pointer transition-all">
                <Mail className="w-5 h-5" />
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-[11px] text-text-soft font-bold mb-1">© 2024 K-Bestie. All rights reserved.</p>
              <div className="flex gap-4 justify-start md:justify-end text-[10px] text-text-soft/60 font-bold">
                <a href="#" className="hover:underline">개인정보처리방침</a>
                <a href="#" className="hover:underline">이용약관</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-peach/10 text-[10px] text-text-soft/40 font-medium leading-loose">
          (주)내친구케이 | 대표: [대표자명] | 사업자등록번호: [000-00-00000] | 통신판매업신고: [제0000-서울00-0000호] | 주소: 서울시 강동구 상일로 55 | 고객센터: info@humease.com
        </div>
      </div>
    </footer>
  );
}
