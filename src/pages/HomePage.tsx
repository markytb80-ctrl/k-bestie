import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  MessageCircle, 
  BarChart3, 
  ShieldCheck, 
  Heart, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles,
  Search,
  Users,
  Calendar
} from "lucide-react";

export default function HomePage() {
  const heroImages = [
    "https://i.ibb.co/mrKNmtkN/Hero1.png",
    "https://i.ibb.co/R4vGjYfR/Hero2.png",
    "https://i.ibb.co/spSg5T4d/Hero3.png",
    "https://i.ibb.co/k2P78hJP/Hero4.png",
    "https://i.ibb.co/kgjM8zkR/Hero5.png",
    "https://i.ibb.co/KcHVz79p/Hero6.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-48 pb-32 px-8 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-yellow text-coral text-xs font-black mb-6 uppercase tracking-widest">
            ✨ K-Bestie Beta Open
          </div>
          <h1 className="font-hand text-5xl md:text-7xl leading-tight text-text-main mb-8">
            아이가<br />
            <span className="text-coral font-black inline-block transform -rotate-1">
              "그냥 괜찮아"
            </span>
            라고만<br />
            말할 때가 있나요?
          </h1>
          <p className="text-xl font-medium text-text-soft leading-relaxed mb-10 max-w-lg">
            학교 이야기나 친구 이야기를 회피하는 아이의 짧은 대답 뒤에 있는 변화를 더 잘 이해하도록 돕는 부모 맞춤형 양육 인사이트 서비스입니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/pricing">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-coral text-white px-10 py-5 rounded-2xl text-lg font-black shadow-xl shadow-coral/20 transition-all flex items-center gap-2"
              >
                베타 신청하기 <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button 
                whileHover={{ backgroundColor: "#F3E8FF" }}
                className="bg-white text-text-main border-2 border-lavender px-10 py-5 rounded-2xl text-lg font-black transition-all"
              >
                서비스 자세히 보기
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 relative flex justify-center items-center"
        >
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-lavender blob-shape -z-10 animate-pulse opacity-50"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-yellow blob-shape -z-10 opacity-50"></div>
          
          <div className="relative w-full max-w-[500px] aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white bg-white">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={heroImages[currentImageIndex]}
                alt={`Hero Slide ${currentImageIndex + 1}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            {/* Slider Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {heroImages.map((_, i) => (
                <div 
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentImageIndex ? "bg-coral w-6" : "bg-coral/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Empathy/Problem Section */}
      <section className="py-32 bg-white">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-4">부모님, 이런 고민을 하고 계시진 않나요?</h2>
            <p className="text-text-soft font-medium">초등 3~4학년, 아이의 마음이 조금씩 닫히기 시작하는 시기입니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: "https://i.ibb.co/HL6P0q41/1.png",
                icon: <AlertCircle className="w-6 h-6 text-coral" />,
                title: "신호는 있는데 확신이 없다",
                desc: "아이의 표정이 어두워진 것 같은데, 정말 무슨 일이 있는 건지 아니면 사춘기 시작인지 헷갈려요."
              },
              {
                image: "https://i.ibb.co/1JYzzf27/2.png",
                icon: <Search className="w-6 h-6 text-coral" />,
                title: "맘카페나 블로그 검색만으로는 안 나온다",
                desc: "맘카페나 블로그의 일반적인 정보는 우리 아이의 특수한 상황을 설명해주지 못해 답답합니다."
              },
              {
                image: "https://i.ibb.co/bjKqGCJK/3.png",
                icon: <MessageCircle className="w-6 h-6 text-coral" />,
                title: "다그치면 닫히고, 두면 놓칠까봐 걱정된다",
                desc: "자세히 물어보면 짜증을 내고, 그냥 두자니 학교 폭력이나 따돌림 같은 큰 문제를 놓칠까 봐 불안해요."
              },
              {
                image: "https://i.ibb.co/yn0fmBMf/4.png",
                icon: <Users className="w-6 h-6 text-coral" />,
                title: "부부의 해석이 달라 대화가 엇갈린다",
                desc: "아이 상태를 두고 한 명은 '예민하다', 한 명은 '괜찮다'고 하며 부부 싸움으로 번지기도 합니다."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="overflow-hidden bg-kbg rounded-[2.5rem] border border-peach/50 flex flex-col"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-black mb-4 leading-tight">{item.title}</h3>
                  <p className="text-sm text-text-soft leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why existing methods are not enough */}
      <section className="py-32 bg-peach/30">
        <div className="max-w-screen-lg mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-8">
              왜 기존 방식만으로<br />는 부족할까요?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-coral/20 flex items-center justify-center text-coral mt-1">
                  <span className="text-xs font-black">!</span>
                </div>
                <p className="text-text-soft text-sm leading-relaxed">
                  <span className="text-text-main font-bold">단편적인 정보:</span> 맘카페나 담임 상담은 특정 시점의 정보만 제공합니다. 아이의 변화를 '선'으로 연결해 보기 어렵습니다.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-coral/20 flex items-center justify-center text-coral mt-1">
                  <span className="text-xs font-black">!</span>
                </div>
                <p className="text-text-soft text-sm leading-relaxed">
                  <span className="text-text-main font-bold">주관적 판단:</span> 부모의 감이나 아이의 짧은 대답에만 의존하면 과잉 개입하거나 방치하게 될 위험이 있습니다.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-coral/20 flex items-center justify-center text-coral mt-1">
                  <span className="text-xs font-black">!</span>
                </div>
                <p className="text-text-soft text-sm leading-relaxed">
                  <span className="text-text-main font-bold">맥락의 부재:</span> 아이가 왜 그런 감정을 느꼈는지, 어떤 상황에서 그런 표현을 했는지에 대한 구조적 맥락이 없습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white p-10 blob-card shadow-xl">
            <p className="text-center font-bold text-coral mb-8 italic">"내친구 케이는 아이를 진단하는 것이 아니라,<br />부모가 아이를 더 잘 보게 해주는 렌즈입니다."</p>
            <div className="space-y-4">
              <div className="p-4 bg-kbg rounded-2xl flex items-center justify-between">
                <span className="text-sm font-bold">연속적인 변화 추적</span>
                <CheckCircle2 className="text-green-500 w-5 h-5" />
              </div>
              <div className="p-4 bg-kbg rounded-2xl flex items-center justify-between">
                <span className="text-sm font-bold">구조화된 데이터 인사이트</span>
                <CheckCircle2 className="text-green-500 w-5 h-5" />
              </div>
              <div className="p-4 bg-kbg rounded-2xl flex items-center justify-between">
                <span className="text-sm font-bold">객관적인 개입 시점 판단</span>
                <CheckCircle2 className="text-green-500 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How it works */}
      <section className="py-32 bg-white">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-4">내친구 케이는 이렇게 작동합니다</h2>
            <p className="text-text-soft font-medium">아이와 부모 사이의 따뜻한 가교가 되어드릴게요.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "Step 1",
                title: "아이의 일상 대화",
                desc: "아이는 AI 친구 케이와 하루 2개의 미션을 수행하며 자연스럽게 감정과 일상을 표현합니다.",
                img: "https://i.ibb.co/mrm1SVz9/1.png"
              },
              {
                step: "Step 2",
                title: "데이터 구조화",
                desc: "아이의 표현 패턴, 감정 흐름, 학교생활 신호를 AI가 부모가 이해하기 쉬운 구조로 정리합니다.",
                img: "https://i.ibb.co/qhsG4Vk/2.png"
              },
              {
                step: "Step 3",
                title: "부모 인사이트 리포트",
                desc: "부모는 대시보드를 통해 아이의 상태를 체계적으로 파악하고 적절한 대화 시점을 찾습니다.",
                img: "https://i.ibb.co/Y7vmYFXH/3.png"
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-8 relative">
                  <div className="w-64 h-64 bg-peach blob-shape overflow-hidden shadow-lg">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-coral text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-black mb-4">{item.title}</h3>
                <p className="text-sm text-text-soft leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Changes for parents (Before/After) */}
      <section className="py-32 bg-kblue/5">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-4">내친구 케이와 함께하는 변화</h2>
            <p className="text-text-soft font-medium">막연한 걱정이 확신 있는 양육으로 바뀝니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                before: "“요즘 왜 이러지?”라는 막연한 걱정",
                after: "어떤 신호가 언제부터 반복됐는지 구조적으로 확인"
              },
              {
                before: "감정적으로 캐묻거나 참는 선택만 있음",
                after: "지금은 지켜볼지, 대화를 열지, 도움을 구할지 판단 가능"
              },
              {
                before: "하루하루 단편 정보만 쌓임",
                after: "일일/주간/월간 흐름으로 변화 추적 가능"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-peach/20">
                <div className="p-8 bg-peach/30 border-b border-peach/20">
                  <span className="text-[10px] font-black text-coral uppercase tracking-widest mb-2 block">Before</span>
                  <p className="text-text-soft font-medium">{item.before}</p>
                </div>
                <div className="p-8">
                  <span className="text-[10px] font-black text-kblue uppercase tracking-widest mb-2 block">After</span>
                  <p className="text-text-main font-bold text-lg">{item.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Parent Report Preview */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
              <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-8">부모님의 판단을 돕는<br />정교한 리포트</h2>
              <p className="text-text-soft mb-12 leading-relaxed">
                일일, 주간, 월간 리포트를 통해 아이의 마음 지도를 그려보세요. 
                단순한 요약이 아니라, 부모가 어떤 행동을 취해야 할지 가이드를 제공합니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "감정 흐름 추적", "학교생활 신호", "친구관계 관련 표현", "대화 참여도 분석", "미션 완료율", "데이터 충분도 표시"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold text-text-main">
                    <CheckCircle2 className="w-4 h-4 text-coral" />
                    {text}
                  </div>
                ))}
              </div>
              <Link to="/report-detail">
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="mt-12 text-coral font-black flex items-center gap-2"
                >
                  리포트 예시 자세히 보기 <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <div className="bg-kbg p-8 rounded-[3rem] shadow-2xl border-8 border-white">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-black text-xl">오늘의 핵심 인사이트</h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-coral text-white text-[10px] font-black rounded-full">LIVE UPDATE</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-white rounded-3xl shadow-sm border border-peach/10">
                    <Heart className="w-5 h-5 text-coral mb-3" />
                    <p className="text-[10px] text-text-soft font-bold mb-1">감정 변화</p>
                    <p className="text-sm font-black">매우 긍정적</p>
                  </div>
                  <div className="p-6 bg-white rounded-3xl shadow-sm border border-peach/10">
                    <Users className="w-5 h-5 text-green-500 mb-3" />
                    <p className="text-[10px] text-text-soft font-bold mb-1">친구 관계</p>
                    <p className="text-sm font-black">안정적임</p>
                  </div>
                  <div className="p-6 bg-white rounded-3xl shadow-sm border border-peach/10">
                    <AlertCircle className="w-5 h-5 text-red-500 mb-3" />
                    <p className="text-[10px] text-text-soft font-bold mb-1">학교 스트레스</p>
                    <p className="text-sm font-black">약간 높음</p>
                  </div>
                  <div className="p-6 bg-white rounded-3xl shadow-sm border border-peach/10">
                    <Sparkles className="w-5 h-5 text-kblue mb-3" />
                    <p className="text-[10px] text-text-soft font-bold mb-1">에너지 레벨</p>
                    <p className="text-sm font-black">매우 활발함</p>
                  </div>
                </div>
                
                <div className="mt-6 p-6 bg-kblue rounded-3xl text-white shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-xs font-black">오늘의 대화 가이드</span>
                  </div>
                  <p className="text-sm font-bold leading-relaxed">
                    "서아야, 오늘 학교에서 어떤 일이 너를 가장 크게 웃게 했어?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Kid Experience */}
      <section className="py-32 bg-lavender/20">
        <div className="max-w-screen-xl mx-auto px-8 text-center">
          <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-8">아이에게는 다정한 친구가 생깁니다</h2>
          <p className="text-text-soft max-w-2xl mx-auto mb-16 font-medium">
            심문이나 검사가 아닙니다. 친구처럼 편안하게 대화하고 미션을 수행하는 과정이 
            부모님에게는 구조적인 인사이트로 연결됩니다.
          </p>
          <div className="px-8 md:px-12 py-[1px] max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex gap-4 md:gap-8 items-end justify-center py-[1px]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-1 flex justify-center"
              >
                <img 
                  src="https://i.ibb.co/9kWsWMJP/1.png" 
                  alt="Kid Experience 1" 
                  className="h-[400px] md:h-[550px] w-auto drop-shadow-2xl object-contain object-bottom" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex-1 flex justify-center"
              >
                <img 
                  src="https://i.ibb.co/HfZfHNxG/2.png" 
                  alt="Kid Experience 2" 
                  className="h-[410px] md:h-[565px] w-auto drop-shadow-2xl object-contain object-bottom" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 text-left space-y-8 py-12">
              <div>
                <h4 className="font-black text-xl mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-600" /> 부담 없는 일일 미션
                </h4>
                <p className="text-sm text-text-soft leading-relaxed">
                  하루 5분, 아이가 즐겁게 참여할 수 있는 2개의 미션으로 자연스러운 표현을 유도합니다.
                </p>
              </div>
              <div>
                <h4 className="font-black text-xl mb-2 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-kblue" /> 친구 같은 상호작용
                </h4>
                <p className="text-sm text-text-soft leading-relaxed">
                  AI 친구 케이는 아이를 가르치려 하지 않습니다. 공감하고 들어주며 아이의 마음을 엽니다.
                </p>
              </div>
              <Link to="/kid-experience">
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="text-coral font-black flex items-center gap-2"
                >
                  아이 사용 경험 더 알아보기 <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Safety & Trust */}
      <section className="py-32 bg-white">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-4">안전과 신뢰를 최우선으로 합니다</h2>
            <p className="text-text-soft font-medium">내친구 케이는 부모님의 가장 든든한 조력자가 되고자 합니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-kblue" />,
                title: "부모 동의 기반 사용",
                desc: "모든 서비스 이용은 부모님의 명확한 동의 하에 이루어지며, 데이터는 엄격하게 보호됩니다."
              },
              {
                icon: <Heart className="w-8 h-8 text-coral" />,
                title: "진단이 아닌 이해의 도구",
                desc: "의료적 진단이나 치료를 대체하지 않습니다. 부모가 아이를 더 잘 이해하도록 돕는 보조 도구입니다."
              },
              {
                icon: <AlertCircle className="w-8 h-8 text-amber-600" />,
                title: "전문가 상담 연계 지원",
                desc: "민감한 신호가 관찰될 경우, 부모님이 전문가와 상의할 수 있도록 구조화된 리포트를 제공합니다."
              }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-kbg rounded-[2.5rem] border border-peach/30">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-black mb-4">{item.title}</h3>
                <p className="text-sm text-text-soft leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/safety" className="text-text-soft underline font-bold text-sm">안전 및 개인정보 정책 자세히 보기</Link>
          </div>
        </div>
      </section>

      {/* 9. Beta/Launch Announcement */}
      <section className="py-32 bg-coral text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blob-shape -mr-48 -mt-48"></div>
        <div className="max-w-screen-xl mx-auto px-8 relative z-10 text-center">
          <h2 className="font-hand text-5xl md:text-7xl mb-8">지금 베타 서비스 신청하고<br />가장 먼저 경험해보세요</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">
            초등 3~4학년 자녀를 둔 부모님 100분을 모십니다. 
            아이와의 대화가 다시 즐거워지는 마법을 경험해보세요.
          </p>
          <div className="flex justify-center gap-6">
            <Link to="/pricing">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-coral px-12 py-6 rounded-2xl text-2xl font-black shadow-2xl transition-all"
              >
                베타 신청하기
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQ Preview */}
      <section className="py-32 bg-white">
        <div className="max-w-screen-md mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-4">자주 묻는 질문</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "어떤 연령대의 아이에게 적합한가요?", a: "주로 초등학교 3~4학년 자녀를 둔 가정을 위해 설계되었습니다." },
              { q: "아이가 매일 꼭 길게 대화해야 하나요?", a: "아니요, 하루 5분 내외의 짧은 대화와 미션만으로도 충분한 인사이트를 얻을 수 있습니다." },
              { q: "이 서비스가 상담이나 치료를 대신하나요?", a: "아니요, 내친구 케이는 부모의 이해를 돕는 '사전 판단 지원 도구'입니다." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-kbg rounded-2xl border border-peach/30">
                <h4 className="font-black mb-2 flex items-center gap-2">
                  <span className="text-coral">Q.</span> {item.q}
                </h4>
                <p className="text-sm text-text-soft">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/faq" className="text-coral font-bold">전체 FAQ 보기</Link>
          </div>
        </div>
      </section>

      {/* 11. Final CTA Section */}
      <section className="py-32 bg-peach/30 text-center">
        <div className="max-w-screen-xl mx-auto px-8">
          <h2 className="font-hand text-5xl md:text-7xl text-text-main mb-8">아이의 침묵이<br />대화의 시작이 될 수 있도록</h2>
          <p className="text-xl text-text-soft mb-12 max-w-xl mx-auto font-medium">
            더 이상 혼자 고민하지 마세요. 내친구 케이가 부모님의 따뜻한 시선이 되어드릴게요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/pricing">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-coral text-white px-10 py-5 rounded-2xl text-lg font-black shadow-xl shadow-coral/20 transition-all"
              >
                베타 신청하기
              </motion.button>
            </Link>
            <Link to="/report-detail">
              <motion.button 
                whileHover={{ backgroundColor: "#F3E8FF" }}
                className="bg-white text-text-main border-2 border-lavender px-10 py-5 rounded-2xl text-lg font-black transition-all"
              >
                부모 리포트 예시 보기
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
