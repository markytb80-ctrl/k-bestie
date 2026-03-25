import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 w-[95%] max-w-screen-xl z-50 bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl px-6 py-3 shadow-lg flex justify-between items-center"
    >
      <Link to="/" className="flex items-center gap-1 shrink-0">
        <img 
          alt="내친구 케이 Logo" 
          className="h-10 w-auto" 
          src="https://i.ibb.co/KzVFzqKf/logo2.png" 
          referrerPolicy="no-referrer"
        />
      </Link>
      <div className="hidden lg:flex gap-6 text-[13px] font-bold text-text-main">
        <Link className="hover:text-coral transition-all" to="/about">서비스 소개</Link>
        <Link className="hover:text-coral transition-all" to="/report-detail">부모 리포트</Link>
        <Link className="hover:text-coral transition-all" to="/kid-experience">아이 사용 경험</Link>
        <Link className="hover:text-coral transition-all" to="/safety">안전과 신뢰</Link>
        <Link className="hover:text-coral transition-all" to="/pricing">요금제</Link>
        <Link className="hover:text-coral transition-all" to="/faq">FAQ</Link>
        <Link className="hover:text-coral transition-all" to="/contact">문의</Link>
      </div>
      <div className="flex items-center gap-3">
        <Link to="/pricing">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-coral text-white px-5 py-2 rounded-xl text-[13px] font-extrabold shadow-lg shadow-coral/20 hover:brightness-110 transition-all"
          >
            베타 신청하기
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
}
