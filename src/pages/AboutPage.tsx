import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Heart, Users, Sparkles, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-40 pb-20 px-8 max-w-screen-xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-yellow text-coral text-xs font-black mb-6 uppercase tracking-widest">
          Service Introduction
        </div>
        <h1 className="font-hand text-5xl md:text-7xl text-text-main mb-8 leading-tight">
          아이 마음을 더 잘 이해하도록 돕는<br />
          부모 맞춤형 양육 인사이트 서비스
        </h1>
        <p className="text-xl text-text-soft max-w-3xl mx-auto font-medium leading-relaxed">
          내친구 케이는 초등학교 3~4학년 자녀를 둔 부모님이 아이의 감정 변화, 학교생활, 친구관계 신호를 더 구조적으로 이해할 수 있도록 돕는 AI 기반 서비스입니다.
        </p>
      </motion.div>

      {/* 서비스 개요 */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white p-12 blob-card shadow-xl border border-peach/30">
            <h2 className="text-3xl font-black mb-8">서비스의 본질</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-xl bg-coral/10 flex items-center justify-center text-coral">
                  <Heart className="w-5 h-5" />
                </div>
                <p className="text-text-soft leading-relaxed">
                  상담이나 진단을 대체하는 서비스가 아닙니다. 부모가 아이를 더 잘 이해하고 방치와 과잉개입을 줄이도록 돕는 <span className="text-text-main font-bold">“사전 이해 및 판단 지원 도구”</span>입니다.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-xl bg-kblue/10 flex items-center justify-center text-kblue">
                  <Users className="w-5 h-5" />
                </div>
                <p className="text-text-soft leading-relaxed">
                  아이의 짧은 대답 뒤에 숨겨진 감정의 맥락을 읽어내어, 부모와 아이 사이의 건강한 소통을 지원합니다.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-xl bg-yellow/20 flex items-center justify-center text-orange-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <p className="text-text-soft leading-relaxed">
                  장기적으로 누적되는 흐름을 통해 아이를 ‘점’이 아니라 <span className="text-text-main font-bold">‘변화의 선’</span>으로 보게 해줍니다.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-8">누구를 위한 서비스인가요?</h2>
            <ul className="space-y-6">
              {[
                "최근 1~3개월 내 자녀의 말수가 줄어들어 걱정인 부모님",
                "아이의 감정 기복이나 친구 갈등 신호를 감지한 부모님",
                "학교 이야기를 회피하는 아이의 속마음이 궁금한 부모님",
                "맞벌이로 인해 아이의 일상을 세밀하게 챙기기 어려운 부모님",
                "자녀 이해와 양육 커뮤니케이션을 개선하고 싶은 모든 부모님"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-bold text-text-main">
                  <CheckCircle2 className="w-6 h-6 text-coral" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 어떤 문제를 해결하는가 */}
      <section className="py-32 bg-white rounded-[4rem] px-12 mb-32 border border-peach/20">
        <div className="text-center mb-20">
          <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-4">어떤 문제를 해결하나요?</h2>
          <p className="text-text-soft font-medium">부모님의 막연한 불안감을 확신 있는 양육으로 바꿉니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 bg-kbg rounded-[3rem]">
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center text-xs">1</span>
              판단의 근거 부족
            </h3>
            <p className="text-text-soft leading-relaxed">
              검색이나 맘카페 정보만으로는 우리 아이의 특수한 상황을 판단하기 어렵습니다. 내친구 케이는 아이의 실제 대화 데이터를 기반으로 객관적인 인사이트를 제공합니다.
            </p>
          </div>
          <div className="p-10 bg-kbg rounded-[3rem]">
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center text-xs">2</span>
              개입 시점의 불확실성
            </h3>
            <p className="text-text-soft leading-relaxed">
              지금 도와줘야 할지, 아니면 스스로 해결하게 지켜봐야 할지 판단하기 어렵습니다. 감정 흐름과 학교생활 신호를 분석하여 적절한 개입 시점을 제안합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 사용 흐름 */}
      <section className="mb-32">
        <div className="text-center mb-20">
          <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-4">사용 흐름 한눈에 보기</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-coral border-b-2 border-coral/20 pb-4">아이의 사용 경험</h3>
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-peach/10">
                <h4 className="font-bold mb-2">1. AI 친구 케이와 대화</h4>
                <p className="text-sm text-text-soft">모바일 앱을 통해 AI 친구 케이와 편안하게 일상을 나눕니다.</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-peach/10">
                <h4 className="font-bold mb-2">2. 일일 미션 2개 수행</h4>
                <p className="text-sm text-text-soft">감정 확인, 학교생활, 친구관계 등 특정 주제의 미션을 즐겁게 수행합니다.</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-peach/10">
                <h4 className="font-bold mb-2">3. 자연스러운 자기표현</h4>
                <p className="text-sm text-text-soft">대답을 강요하지 않는 환경에서 아이는 자신의 속마음을 자연스럽게 표현합니다.</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-kblue border-b-2 border-kblue/20 pb-4">부모의 사용 경험</h3>
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-peach/10">
                <h4 className="font-bold mb-2">1. 일일/주간 리포트 확인</h4>
                <p className="text-sm text-text-soft">아이의 감정 흐름과 주요 키워드가 정리된 리포트를 확인합니다.</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-peach/10">
                <h4 className="font-bold mb-2">2. 대시보드 인사이트 분석</h4>
                <p className="text-sm text-text-soft">특정 기간의 변화 추이를 통해 아이의 상태를 체계적으로 파악합니다.</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-peach/10">
                <h4 className="font-bold mb-2">3. 맞춤형 양육 가이드 활용</h4>
                <p className="text-sm text-text-soft">리포트에서 제안하는 대화 팁과 개입 가이드를 참고하여 아이와 소통합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 어디까지 해주고, 어디까지는 하지 않는가 */}
      <section className="py-32 bg-kbg rounded-[4rem] px-12 mb-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-coral/5 blob-shape -mr-32 -mt-32"></div>
        <div className="max-w-screen-md mx-auto relative z-10">
          <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-12 text-center">서비스의 약속</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-peach/20">
              <h4 className="text-lg font-black text-coral mb-4">우리가 제공하는 가치</h4>
              <ul className="space-y-3">
                <li className="text-sm text-text-soft flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                  아이의 감정 및 일상 데이터의 구조적 시각화
                </li>
                <li className="text-sm text-text-soft flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                  부모의 판단을 돕는 객관적인 인사이트 리포트
                </li>
                <li className="text-sm text-text-soft flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                  적절한 개입 시점과 대화 방법 제안
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-peach/20">
              <h4 className="text-lg font-black text-text-soft mb-4">우리가 하지 않는 것</h4>
              <ul className="space-y-3">
                <li className="text-sm text-text-soft flex items-start gap-2 opacity-60">
                  <div className="w-4 h-4 rounded-full border-2 border-text-soft shrink-0 mt-0.5"></div>
                  의료적 진단이나 정신건강 장애 판별
                </li>
                <li className="text-sm text-text-soft flex items-start gap-2 opacity-60">
                  <div className="w-4 h-4 rounded-full border-2 border-text-soft shrink-0 mt-0.5"></div>
                  전문적인 심리치료나 교정 행위 대체
                </li>
                <li className="text-sm text-text-soft flex items-start gap-2 opacity-60">
                  <div className="w-4 h-4 rounded-full border-2 border-text-soft shrink-0 mt-0.5"></div>
                  아이의 사생활을 무분별하게 노출하는 원문 전체 공개
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-coral text-white py-24 rounded-[4rem]">
        <h2 className="font-hand text-5xl md:text-7xl mb-8">아이의 마음을 읽는 렌즈,<br />지금 바로 신청하세요</h2>
        <div className="flex justify-center gap-6">
          <Link to="/pricing">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-coral px-10 py-5 rounded-2xl text-xl font-black shadow-2xl transition-all"
            >
              베타 신청하기
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
