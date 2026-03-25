import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Search, ChevronDown, MessageCircle, ShieldCheck, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    category: "서비스 일반",
    question: "내친구 케이는 어떤 서비스인가요?",
    answer: "내친구 케이는 초등학교 3~4학년 자녀를 둔 부모님이 아이의 감정 변화, 학교생활, 친구관계 신호를 더 구조적으로 이해할 수 있도록 돕는 AI 기반 양육 인사이트 서비스입니다. 아이는 AI 친구 케이와 즐겁게 대화하고, 부모님은 그 데이터를 바탕으로 한 리포트를 통해 아이를 더 깊이 이해하게 됩니다."
  },
  {
    category: "서비스 일반",
    question: "상담이나 진단을 대신할 수 있나요?",
    answer: "아니요, 내친구 케이는 의료적 진단이나 전문적인 심리 상담을 대체하는 서비스가 아닙니다. 부모님이 아이의 상태를 객관적으로 파악하고, 적절한 개입 시점을 판단할 수 있도록 돕는 '사전 이해 및 판단 지원 도구'입니다. 심각한 징후가 보일 경우 반드시 전문가의 도움을 받으시길 권장합니다."
  },
  {
    category: "아이 사용 경험",
    question: "아이가 AI와 대화하는 것을 어려워하지 않을까요?",
    answer: "내친구 케이의 AI는 아이들의 눈높이에 맞춘 다정하고 공감적인 대화 방식을 사용합니다. 또한, 재미있는 데일리 미션과 보상 시스템(포인트, 뱃지)을 통해 아이들이 마치 게임을 하듯 즐겁게 참여할 수 있도록 설계되었습니다."
  },
  {
    category: "아이 사용 경험",
    question: "하루에 얼마나 사용해야 하나요?",
    answer: "아이의 부담을 최소화하기 위해 하루 10~15분 정도의 사용을 권장합니다. AI 친구 케이와의 짧은 대화와 2개의 데일리 미션만으로도 충분한 데이터를 수집하고 분석할 수 있습니다."
  },
  {
    category: "부모 리포트",
    question: "리포트는 언제 확인할 수 있나요?",
    answer: "일일 리포트는 매일 저녁 아이의 활동이 마무리된 후 발송됩니다. 주간 리포트는 매주 월요일 아침, 월간 리포트는 매월 1일에 대시보드를 통해 확인하실 수 있습니다. 특이 신호가 감지될 경우에는 즉시 알림 리포트가 발송됩니다."
  },
  {
    category: "보안 및 개인정보",
    question: "아이의 대화 내용이 안전하게 보호되나요?",
    answer: "네, 매우 안전합니다. 모든 데이터는 최고 수준의 암호화 기술로 보호되며, 분석 과정에서 개인 식별 정보는 비식별화 처리됩니다. 또한, 부모님께 제공되는 리포트도 아이의 사생활을 존중하여 원문 전체가 아닌 요약된 인사이트 중심으로 제공됩니다."
  },
  {
    category: "보안 및 개인정보",
    question: "데이터를 삭제하고 싶으면 어떻게 하나요?",
    answer: "회원 탈퇴 시 모든 데이터는 즉시 영구 파기됩니다. 서비스 이용 중에도 특정 기간의 기록 삭제를 요청하실 수 있으며, 요청 즉시 시스템에서 삭제 처리됩니다."
  }
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaq = faqData.filter(faq => 
    faq.question.includes(searchTerm) || faq.answer.includes(searchTerm)
  );

  return (
    <div className="pt-40 pb-20 px-8 max-w-screen-xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-kblue/10 text-kblue text-xs font-black mb-6 uppercase tracking-widest">
          Frequently Asked Questions
        </div>
        <h1 className="font-hand text-5xl md:text-7xl text-text-main mb-8 leading-tight">
          궁금하신 점을<br />무엇이든 물어보세요
        </h1>
        <div className="max-w-screen-md mx-auto relative">
          <input 
            type="text" 
            placeholder="궁금한 키워드를 입력해보세요 (예: 보안, 리포트, 가격 등)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-12 py-6 rounded-3xl border border-peach/20 shadow-xl focus:border-coral focus:ring-4 focus:ring-coral/10 outline-none transition-all font-bold text-lg"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-soft w-6 h-6" />
        </div>
      </motion.div>

      {/* FAQ 리스트 */}
      <section className="mb-32 max-w-screen-md mx-auto">
        <div className="space-y-4">
          {filteredFaq.length > 0 ? (
            filteredFaq.map((faq, index) => (
              <div 
                key={index}
                className={`bg-white rounded-3xl border border-peach/10 shadow-sm overflow-hidden transition-all ${activeIndex === index ? 'ring-2 ring-coral/20' : ''}`}
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-kbg transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-black text-coral bg-coral/10 px-3 py-1 rounded-full uppercase tracking-tighter shrink-0">{faq.category}</span>
                    <h3 className="text-lg font-black text-text-main">{faq.question}</h3>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-text-soft transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-8 pb-8 pt-2"
                  >
                    <div className="p-6 bg-kbg rounded-2xl border border-peach/10">
                      <p className="text-text-soft leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-kbg rounded-3xl border border-dashed border-peach/30">
              <HelpCircle className="w-12 h-12 text-text-soft mx-auto mb-4 opacity-30" />
              <p className="text-text-soft font-bold">검색 결과가 없습니다. 다른 키워드로 검색해보세요.</p>
            </div>
          )}
        </div>
      </section>

      {/* 추가 문의 */}
      <section className="text-center py-24 bg-white rounded-[4rem] px-12 border border-peach/20">
        <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-8">더 궁금한 점이 있으신가요?</h2>
        <p className="text-text-soft font-medium mb-12">전문 상담원이 친절하게 답변해드리겠습니다.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-coral text-white px-10 py-5 rounded-2xl text-xl font-black shadow-xl transition-all flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              1:1 문의하기
            </motion.button>
          </Link>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-kblue text-white px-10 py-5 rounded-2xl text-xl font-black shadow-xl transition-all flex items-center gap-3"
          >
            <ShieldCheck className="w-6 h-6" />
            보안 정책 확인
          </motion.button>
        </div>
      </section>
    </div>
  );
}
