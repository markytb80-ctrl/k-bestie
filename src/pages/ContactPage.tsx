import { motion } from "motion/react";
import { Mail, MapPin, MessageCircle, Heart, ShieldCheck, Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-40 pb-20 px-8 max-w-screen-xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-yellow text-coral text-xs font-black mb-6 uppercase tracking-widest">
          Brand & Contact
        </div>
        <h1 className="font-hand text-5xl md:text-7xl text-text-main mb-8 leading-tight">
          아이와 부모 사이의<br />따뜻한 연결 고리가 되겠습니다
        </h1>
        <p className="text-xl text-text-soft max-w-3xl mx-auto font-medium leading-relaxed">
          내친구 케이는 부모님이 아이의 마음을 더 잘 이해하고, 더 행복한 가정을 만들어갈 수 있도록 돕는 파트너입니다.
        </p>
      </motion.div>

      {/* 브랜드 소개 */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="bg-white p-12 rounded-[4rem] shadow-xl border border-peach/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-coral/5 rounded-full -mr-20 -mt-20"></div>
            <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-8">우리의 미션</h2>
            <p className="text-lg text-text-soft leading-relaxed mb-12 font-medium">
              "아이의 마음을 읽는 렌즈가 되어, 부모님의 막연한 불안감을 확신 있는 양육으로 바꿉니다."
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-coral/10 rounded-xl flex items-center justify-center text-coral">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-text-main">공감과 이해</h4>
                  <p className="text-sm text-text-soft">아이의 감정을 있는 그대로 존중하고 이해하는 문화를 만듭니다.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-kblue/10 rounded-xl flex items-center justify-center text-kblue">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-text-main">신뢰와 안전</h4>
                  <p className="text-sm text-text-soft">가장 안전한 기술로 소중한 데이터를 보호하고 신뢰를 구축합니다.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-yellow/20 rounded-xl flex items-center justify-center text-orange-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-text-main">성장과 변화</h4>
                  <p className="text-sm text-text-soft">데이터를 통해 아이와 부모가 함께 성장하는 경험을 제공합니다.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-8">문의하기</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 p-6 bg-kbg rounded-3xl border border-peach/10">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-coral">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-text-soft font-bold uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg font-black text-text-main">info@humease.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-kbg rounded-3xl border border-peach/10">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-yellow-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-text-soft font-bold uppercase tracking-widest mb-1">Address</p>
                  <p className="text-lg font-black text-text-main">서울시 강동구 상일로 55</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-peach/20 shadow-sm">
              <h4 className="text-xl font-black mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-coral" />
                1:1 문의 남기기
              </h4>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="성함"
                  className="w-full px-6 py-4 rounded-2xl border border-peach/10 focus:border-coral outline-none transition-all font-bold"
                />
                <input 
                  type="email" 
                  placeholder="이메일 주소"
                  className="w-full px-6 py-4 rounded-2xl border border-peach/10 focus:border-coral outline-none transition-all font-bold"
                />
                <textarea 
                  placeholder="문의 내용을 입력해주세요"
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl border border-peach/10 focus:border-coral outline-none transition-all font-bold resize-none"
                ></textarea>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-coral text-white rounded-2xl font-black shadow-lg hover:shadow-xl transition-all"
                >
                  문의 보내기
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 로고 섹션 */}
      <section className="text-center py-24 bg-kbg rounded-[4rem] px-12 mb-32 border border-peach/20">
        <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-12">내친구 케이 로고 다운로드</h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-peach/10 text-center group">
            <div className="w-48 h-48 bg-kbg rounded-2xl flex items-center justify-center mb-6 overflow-hidden group-hover:scale-105 transition-transform">
              <img src="https://i.ibb.co/DPGHq0wP/logo1.png" alt="Vertical Logo" className="w-32 h-32 object-contain" />
            </div>
            <p className="font-black text-text-main mb-4">세로형 로고</p>
            <button className="text-xs font-bold text-coral bg-coral/10 px-4 py-2 rounded-full hover:bg-coral hover:text-white transition-all">PNG 다운로드</button>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-peach/10 text-center group">
            <div className="w-48 h-48 bg-kbg rounded-2xl flex items-center justify-center mb-6 overflow-hidden group-hover:scale-105 transition-transform">
              <img src="https://i.ibb.co/KzVFzqKf/logo2.png" alt="Horizontal Logo" className="w-40 h-20 object-contain" />
            </div>
            <p className="font-black text-text-main mb-4">가로형 로고</p>
            <button className="text-xs font-bold text-coral bg-coral/10 px-4 py-2 rounded-full hover:bg-coral hover:text-white transition-all">PNG 다운로드</button>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-peach/10 text-center group">
            <div className="w-48 h-48 bg-kbg rounded-2xl flex items-center justify-center mb-6 overflow-hidden group-hover:scale-105 transition-transform">
              <img src="https://i.ibb.co/HfZfHNxG/2.png" alt="Character Only Logo" className="w-32 h-32 object-contain" />
            </div>
            <p className="font-black text-text-main mb-4">캐릭터 로고</p>
            <button className="text-xs font-bold text-coral bg-coral/10 px-4 py-2 rounded-full hover:bg-coral hover:text-white transition-all">PNG 다운로드</button>
          </div>
        </div>
      </section>
    </div>
  );
}
