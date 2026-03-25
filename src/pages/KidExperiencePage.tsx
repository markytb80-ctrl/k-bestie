import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MessageCircle, Sparkles, Trophy, Gamepad2, Smile, Heart, CheckCircle2, Star, ChevronDown, Mic, X } from "lucide-react";

export default function KidExperiencePage() {
  return (
    <div className="pt-40 pb-20 px-8 max-w-screen-xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-yellow text-coral text-xs font-black mb-6 uppercase tracking-widest">
          Child User Experience
        </div>
        <h1 className="font-hand text-5xl md:text-7xl text-text-main mb-8 leading-tight">
          아이에게는 다정한 AI 친구,<br />
          자연스럽게 마음을 여는 즐거운 경험
        </h1>
        <p className="text-xl text-text-soft max-w-3xl mx-auto font-medium leading-relaxed">
          내친구 케이는 아이가 부담 없이 자신의 일상을 이야기하고, 재미있는 미션을 통해 자신의 감정을 표현할 수 있는 안전한 놀이터입니다.
        </p>
      </motion.div>

      {/* 아이의 하루 루틴 */}
      <section className="mb-32">
        <div className="text-center mb-20">
          <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-4">아이의 하루 루틴</h2>
          <p className="text-text-soft font-medium">하루 10분, 즐거운 대화와 미션으로 마음을 나눕니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="relative p-10 bg-white rounded-[3rem] shadow-xl border border-peach/20 text-center flex flex-col items-center">
            <div className="w-48 h-48 bg-kbg rounded-full flex items-center justify-center mb-8 shadow-inner border border-peach/10">
              <img src="https://i.ibb.co/HfZfHNxG/2.png" alt="K Character" className="w-32 h-32 object-contain" />
            </div>
            <h3 className="text-2xl font-black mb-4">안녕, 서아야!</h3>
            <p className="text-text-soft text-sm leading-relaxed mb-6">
              "오늘도 정말 반가워 :)"<br />
              다정한 인사로 대화를 시작합니다.
            </p>
            <div className="px-8 py-3 bg-white rounded-full shadow-md border border-peach/20 text-sm font-black text-text-main">
              케이와 대화하기
            </div>
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-coral text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">1</div>
          </div>
          <div className="relative p-10 bg-white rounded-[3rem] shadow-xl border border-peach/20 text-center">
            <div className="w-16 h-16 bg-kblue/10 rounded-2xl flex items-center justify-center text-kblue mb-8 mx-auto">
              <Sparkles className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black mb-4">오늘의 미션</h3>
            <div className="space-y-3 mt-6">
              <div className="p-4 bg-kbg rounded-2xl border border-peach/20 relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black text-coral">미션 완료!</span>
                  <CheckCircle2 className="w-4 h-4 text-coral" />
                </div>
                <p className="text-xs font-bold text-left">오늘 있었던 일 1가지 말하기</p>
                <div className="w-full h-1.5 bg-coral rounded-full mt-3"></div>
              </div>
              <div className="p-4 bg-kbg rounded-2xl border border-peach/20 opacity-60">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black text-text-soft">진행 중</span>
                </div>
                <p className="text-xs font-bold text-left">내일의 계획 1가지 세우기</p>
                <div className="w-full h-1.5 bg-peach rounded-full mt-3">
                  <div className="w-1/3 h-full bg-coral rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-kblue text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">2</div>
          </div>
          <div className="relative p-10 bg-white rounded-[3rem] shadow-xl border border-peach/20 text-center">
            <div className="w-16 h-16 bg-yellow/20 rounded-2xl flex items-center justify-center text-orange-600 mb-8 mx-auto">
              <Trophy className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black mb-4">즐거운 보상</h3>
            <p className="text-text-soft text-sm leading-relaxed">
              미션을 완료하면 뱃지를 획득하고,<br />
              케이와 더 깊은 우정을 쌓아갑니다.
            </p>
            <div className="mt-6 flex justify-center gap-2">
              <div className="w-10 h-10 bg-yellow/30 rounded-full flex items-center justify-center text-orange-600"><Star className="w-5 h-5" /></div>
              <div className="w-10 h-10 bg-coral/20 rounded-full flex items-center justify-center text-coral"><Heart className="w-5 h-5" /></div>
              <div className="w-10 h-10 bg-kblue/20 rounded-full flex items-center justify-center text-kblue"><Sparkles className="w-5 h-5" /></div>
            </div>
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow text-orange-600 rounded-full flex items-center justify-center font-black text-xl shadow-lg">3</div>
          </div>
        </div>
      </section>

      {/* AI 친구 케이 소개 */}
      <section className="mb-32 py-24 bg-white rounded-[4rem] px-12 border border-peach/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <img 
              src="https://i.ibb.co/HfZfHNxG/2.png" 
              alt="Kid Experience" 
              className="w-full max-w-md mx-auto drop-shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-coral/10 rounded-full blur-3xl"></div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-8">아이의 눈높이에 맞춘<br />다정한 AI 친구, 케이</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-kbg rounded-2xl shadow-sm flex items-center justify-center text-coral">
                  <Smile className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2">공감 중심의 대화</h4>
                  <p className="text-text-soft leading-relaxed">
                    아이의 말을 경청하고 공감하는 대화 방식을 통해 아이가 정서적 안정감을 느끼게 합니다.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-kbg rounded-2xl shadow-sm flex items-center justify-center text-kblue">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2">게이미피케이션 요소</h4>
                  <p className="text-text-soft leading-relaxed">
                    대화와 미션을 수행할 때마다 포인트와 뱃지를 획득하여 아이가 지속적으로 참여할 수 있는 동기를 부여합니다.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-kbg rounded-2xl shadow-sm flex items-center justify-center text-yellow-600">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2">안전한 대화 환경</h4>
                  <p className="text-text-soft leading-relaxed">
                    유해한 표현이나 부적절한 주제를 사전에 차단하는 필터링 시스템을 통해 아이에게 안전한 대화 경험을 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 미션 시스템 */}
      <section className="mb-32">
        <div className="text-center mb-20">
          <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-4">재미있는 데일리 미션</h2>
          <p className="text-text-soft font-medium">단순한 질문이 아닌, 아이의 성장을 돕는 활동입니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 bg-kbg rounded-[3rem] border border-peach/20">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-2xl font-black">학교생활 미션</h3>
              <span className="px-4 py-1 bg-white rounded-full text-xs font-bold text-coral shadow-sm">오늘의 미션</span>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 bg-coral/10 rounded-xl flex items-center justify-center text-coral">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="font-bold">오늘 학교에서 가장 웃겼던 일 1가지 말하기</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm flex items-center gap-4 opacity-50">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="font-bold">급식 시간에 가장 맛있었던 메뉴 사진 찍기</p>
              </div>
            </div>
          </div>
          <div className="p-10 bg-kbg rounded-[3rem] border border-peach/20">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-2xl font-black">친구관계 미션</h3>
              <span className="px-4 py-1 bg-white rounded-full text-xs font-bold text-kblue shadow-sm">내일의 미션</span>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 bg-kblue/10 rounded-xl flex items-center justify-center text-kblue">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="font-bold">오늘 친구에게 고마웠던 일 1가지 말하기</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm flex items-center gap-4 opacity-50">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="font-bold">친구와 함께 찍은 사진이나 그림 공유하기</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-yellow text-orange-600 py-24 rounded-[4rem]">
        <h2 className="font-hand text-5xl md:text-7xl mb-8">우리 아이의 첫 번째 AI 친구,<br />지금 바로 만나보세요</h2>
        <div className="flex justify-center gap-6">
          <Link to="/pricing">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-10 py-5 rounded-2xl text-xl font-black shadow-2xl transition-all"
            >
              베타 신청하기
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
