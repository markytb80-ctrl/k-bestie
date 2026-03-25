import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, EyeOff, UserCheck, Database, FileCheck, CheckCircle2 } from "lucide-react";

export default function SafetyPage() {
  return (
    <div className="pt-40 pb-20 px-8 max-w-screen-xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-kblue/10 text-kblue text-xs font-black mb-6 uppercase tracking-widest">
          Safety, Trust & Privacy
        </div>
        <h1 className="font-hand text-5xl md:text-7xl text-text-main mb-8 leading-tight">
          아이의 소중한 데이터,<br />
          가장 안전하게 보호합니다
        </h1>
        <p className="text-xl text-text-soft max-w-3xl mx-auto font-medium leading-relaxed">
          내친구 케이는 부모님의 신뢰를 최우선으로 생각하며, 엄격한 보안 기준과 윤리적인 AI 운영 원칙을 준수합니다.
        </p>
      </motion.div>

      {/* 3대 보안 원칙 */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-10 bg-white rounded-[3rem] shadow-xl border border-peach/20 text-center">
            <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center text-coral mb-8 mx-auto">
              <Lock className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black mb-4">철저한 데이터 암호화</h3>
            <p className="text-text-soft text-sm leading-relaxed">
              아이와 부모님의 모든 데이터는 전송 및 저장 시 최고 수준의 암호화 기술로 보호됩니다.
            </p>
          </div>
          <div className="p-10 bg-white rounded-[3rem] shadow-xl border border-peach/20 text-center">
            <div className="w-16 h-16 bg-kblue/10 rounded-2xl flex items-center justify-center text-kblue mb-8 mx-auto">
              <EyeOff className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black mb-4">개인정보 비식별화</h3>
            <p className="text-text-soft text-sm leading-relaxed">
              분석 과정에서 개인을 식별할 수 있는 정보는 철저히 비식별화 처리되어 안전하게 관리됩니다.
            </p>
          </div>
          <div className="p-10 bg-white rounded-[3rem] shadow-xl border border-peach/20 text-center">
            <div className="w-16 h-16 bg-yellow/20 rounded-2xl flex items-center justify-center text-orange-600 mb-8 mx-auto">
              <UserCheck className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black mb-4">엄격한 접근 제어</h3>
            <p className="text-text-soft text-sm leading-relaxed">
              허가된 관리자 외에는 데이터에 접근할 수 없으며, 모든 접근 기록은 실시간으로 모니터링됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* AI 윤리 및 안전 가이드라인 */}
      <section className="mb-32 py-24 bg-kbg rounded-[4rem] px-12 border border-peach/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-8">안전한 AI를 위한<br />우리의 약속</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-coral">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2">유해 콘텐츠 차단</h4>
                  <p className="text-text-soft leading-relaxed">
                    아이에게 부적절한 언어나 주제가 노출되지 않도록 실시간 필터링 시스템을 운영합니다.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-kblue">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2">데이터 투명성</h4>
                  <p className="text-text-soft leading-relaxed">
                    데이터가 어떻게 수집되고 분석되는지 부모님께 투명하게 공개하며, 언제든 삭제를 요청하실 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-yellow-600">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2">정기적인 보안 감사</h4>
                  <p className="text-text-soft leading-relaxed">
                    외부 전문 기관을 통해 정기적으로 보안 취약점을 점검하고 시스템을 고도화합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-peach/20">
            <h3 className="text-2xl font-black mb-8">개인정보 처리 방침 요약</h3>
            <div className="space-y-6">
              <div className="p-6 bg-kbg rounded-2xl">
                <h4 className="font-bold mb-2">수집 항목</h4>
                <p className="text-sm text-text-soft">아이의 대화 텍스트, 감정 체크 결과, 미션 수행 데이터, 부모님의 연락처 및 기본 정보</p>
              </div>
              <div className="p-6 bg-kbg rounded-2xl">
                <h4 className="font-bold mb-2">이용 목적</h4>
                <p className="text-sm text-text-soft">아이의 정서 및 생활 패턴 분석, 부모 맞춤형 리포트 생성, 서비스 품질 개선</p>
              </div>
              <div className="p-6 bg-kbg rounded-2xl">
                <h4 className="font-bold mb-2">보유 기간</h4>
                <p className="text-sm text-text-soft">서비스 이용 기간 동안 보유하며, 회원 탈퇴 시 즉시 파기합니다.</p>
              </div>
              <p className="text-xs text-text-soft mt-4">
                * 상세한 내용은 전체 개인정보 처리 방침에서 확인하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 자주 묻는 보안 질문 */}
      <section className="mb-32">
        <div className="text-center mb-20">
          <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-4">보안 관련 자주 묻는 질문</h2>
        </div>
        <div className="max-w-screen-md mx-auto space-y-6">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-peach/10">
            <h4 className="text-lg font-black mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center text-xs">Q</span>
              아이의 대화 내용이 다른 곳에 유출되지는 않나요?
            </h4>
            <p className="text-text-soft leading-relaxed pl-11">
              절대 유출되지 않습니다. 모든 대화 데이터는 암호화되어 저장되며, 분석 목적 외에는 사용되지 않습니다. 또한, 부모님께 제공되는 리포트도 원문 전체가 아닌 요약된 인사이트 중심으로 제공됩니다.
            </p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-peach/10">
            <h4 className="text-lg font-black mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-kblue text-white rounded-full flex items-center justify-center text-xs">Q</span>
              AI가 아이에게 나쁜 말을 가르치지는 않을까요?
            </h4>
            <p className="text-text-soft leading-relaxed pl-11">
              내친구 케이의 AI는 아동용 데이터셋으로 학습되었으며, 다단계 필터링 시스템을 통해 욕설, 비속어, 혐오 표현 등을 완벽하게 차단합니다. 아이에게는 항상 다정하고 긍정적인 대화 상대가 되어줍니다.
            </p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-peach/10">
            <h4 className="text-lg font-black mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-yellow text-orange-600 rounded-full flex items-center justify-center text-xs">Q</span>
              데이터를 삭제하고 싶으면 어떻게 하나요?
            </h4>
            <p className="text-text-soft leading-relaxed pl-11">
              회원 탈퇴 시 모든 데이터는 즉시 파기됩니다. 또한, 서비스 이용 중에도 특정 기간의 대화 기록 삭제를 요청하실 수 있으며, 요청 즉시 시스템에서 영구 삭제 처리됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-coral text-white py-24 rounded-[4rem]">
        <h2 className="font-hand text-5xl md:text-7xl mb-8">안심하고 사용하세요,<br />우리가 지켜드릴게요</h2>
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
