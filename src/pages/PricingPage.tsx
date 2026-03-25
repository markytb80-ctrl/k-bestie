import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Star, Sparkles, Gift, ArrowRight } from "lucide-react";

export default function PricingPage() {
  const [gender, setGender] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("초등학교 3학년");
  const [customGrade, setCustomGrade] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    let formattedValue = "";

    if (value.length <= 3) {
      formattedValue = value;
    } else if (value.length <= 7) {
      formattedValue = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else if (value.length <= 11) {
      formattedValue = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
    } else {
      formattedValue = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`;
    }

    setPhone(formattedValue);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget as HTMLFormElement;
      const rawData = new FormData(form);
      
      const emailValue = rawData.get("email") as string;
      if (!validateEmail(emailValue)) {
        setEmailError("올바른 이메일 형식이 아닙니다.");
        setIsSubmitting(false);
        return;
      }
      setEmailError("");

      // Create a new FormData to control the order and labels in the email
      const submissionData = new FormData();
      
      // FormSubmit Configuration
      const today = new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });
      submissionData.append("_subject", `내친구케이 베타 테스터 신청하기 [${today}]`);
      
      // 1. 부모님성함
      submissionData.append("부모님성함", rawData.get("parent_name") as string);
      
      // 2. 연락처
      submissionData.append("연락처", phone);
      
      // 3. 이메일주소
      submissionData.append("이메일주소", rawData.get("email") as string);
      
      // 4. 자녀성별
      const genderText = gender === 'male' ? '남아' : gender === 'female' ? '여아' : '미선택';
      submissionData.append("자녀성별", genderText);
      
      // 5. 자녀학년
      const finalGrade = grade === "기타" ? customGrade : grade;
      submissionData.append("자녀학년", finalGrade);
      
      // 6. 신청동기
      submissionData.append("신청동기", rawData.get("motivation") as string);
      
      // Using formsubmit.co to send a real email to Info@humease.com
      const response = await fetch("https://formsubmit.co/ajax/Info@humease.com", {
        method: "POST",
        body: submissionData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-40 pb-20 px-8 max-w-screen-xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-yellow text-coral text-xs font-black mb-6 uppercase tracking-widest">
          Pricing & Beta Application
        </div>
        <h1 className="font-hand text-5xl md:text-7xl text-text-main mb-8 leading-tight">
          지금 바로 베타 테스터로<br />
          참여하고 특별한 혜택을 받으세요
        </h1>
        <p className="text-xl text-text-soft max-w-3xl mx-auto font-medium leading-relaxed">
          내친구 케이는 현재 베타 테스트 기간으로, 선정된 분들께는 무료 이용권과 다양한 혜택을 드립니다.
        </p>
      </motion.div>

      {/* 베타 테스터 혜택 */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-white rounded-[3rem] shadow-xl border border-peach/20 text-center">
            <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center text-coral mb-8 mx-auto">
              <Star className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black mb-4">3개월 무료 이용</h3>
            <p className="text-text-soft text-sm leading-relaxed">
              베타 테스터로 선정되시면 3개월 동안 모든 기능을 무료로 이용하실 수 있습니다.
            </p>
          </div>
          <div className="p-10 bg-white rounded-[3rem] shadow-xl border border-peach/20 text-center">
            <div className="w-16 h-16 bg-kblue/10 rounded-2xl flex items-center justify-center text-kblue mb-8 mx-auto">
              <Sparkles className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black mb-4">평생 할인 혜택</h3>
            <p className="text-text-soft text-sm leading-relaxed">
              정식 출시 후에도 평생 50% 할인된 가격으로 서비스를 이용하실 수 있는 권한을 드립니다.
            </p>
          </div>
          <div className="p-10 bg-white rounded-[3rem] shadow-xl border border-peach/20 text-center">
            <div className="w-16 h-16 bg-yellow/20 rounded-2xl flex items-center justify-center text-orange-600 mb-8 mx-auto">
              <Gift className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black mb-4">웰컴 키트 증정</h3>
            <p className="text-text-soft text-sm leading-relaxed">
              아이와 함께 사용할 수 있는 귀여운 케이 캐릭터 굿즈 세트를 선물로 보내드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* 신청 폼 */}
      <section className="mb-32 py-24 bg-kbg rounded-[4rem] px-12 border border-peach/20 max-w-screen-md mx-auto">
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="font-hand text-4xl text-text-main mb-4">신청이 완료되었습니다!</h2>
            <p className="text-text-soft font-bold mb-8">
              입력하신 정보가 Info@humease.com으로 전달되었습니다.<br />
              검토 후 빠른 시일 내에 연락드리겠습니다.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-coral font-black hover:underline"
            >
              다시 신청하기
            </button>
          </motion.div>
        ) : (
          <>
            <div className="text-center mb-16">
              <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-4">베타 테스터 신청하기</h2>
              <p className="text-text-soft font-medium">아래 정보를 입력해주시면 순차적으로 연락드리겠습니다.</p>
            </div>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-black text-text-main ml-2">부모님 성함</label>
                  <input 
                    required
                    name="parent_name"
                    type="text" 
                    placeholder="성함을 입력해주세요"
                    className="w-full px-6 py-4 rounded-2xl border border-peach/20 focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none transition-all font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-text-main ml-2">연락처</label>
                  <input 
                    required
                    name="phone_number"
                    type="tel" 
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="010-0000-0000"
                    maxLength={13}
                    className="w-full px-6 py-4 rounded-2xl border border-peach/20 focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none transition-all font-bold"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-text-main ml-2">이메일 주소</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  placeholder="example@email.com"
                  className={`w-full px-6 py-4 rounded-2xl border outline-none transition-all font-bold ${
                    emailError 
                      ? 'border-red-500 focus:ring-red-500/20' 
                      : 'border-peach/20 focus:border-coral focus:ring-2 focus:ring-coral/20'
                  }`}
                />
                {emailError && (
                  <p className="text-xs text-red-500 ml-2 font-bold">{emailError}</p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-black text-text-main ml-2">자녀 성별</label>
                  <div className="flex gap-4">
                    <button 
                      type="button" 
                      onClick={() => setGender('male')}
                      className={`flex-1 py-4 rounded-2xl border font-bold transition-all ${
                        gender === 'male' 
                          ? 'bg-coral text-white border-coral shadow-lg' 
                          : 'bg-white text-text-soft border-peach/20 hover:border-coral/50'
                      }`}
                    >
                      남아
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setGender('female')}
                      className={`flex-1 py-4 rounded-2xl border font-bold transition-all ${
                        gender === 'female' 
                          ? 'bg-coral text-white border-coral shadow-lg' 
                          : 'bg-white text-text-soft border-peach/20 hover:border-coral/50'
                      }`}
                    >
                      여아
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-text-main ml-2">자녀 학년</label>
                  <div className="space-y-3">
                    <select 
                      name="child_grade"
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full px-6 py-4 rounded-2xl border border-peach/20 focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none transition-all font-bold appearance-none bg-white font-bold"
                    >
                      <option>초등학교 3학년</option>
                      <option>초등학교 4학년</option>
                      <option>기타</option>
                    </select>
                    
                    {grade === "기타" && (
                      <motion.input 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        required
                        type="text"
                        name="custom_grade"
                        value={customGrade}
                        onChange={(e) => setCustomGrade(e.target.value)}
                        placeholder="학년을 직접 입력해주세요 (예: 중학교 1학년)"
                        className="w-full px-6 py-4 rounded-2xl border border-peach/20 focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none transition-all font-bold bg-white"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-text-main ml-2">신청 동기 (선택)</label>
                <textarea 
                  name="motivation"
                  placeholder="아이의 어떤 점이 가장 걱정되시나요? (예: 말수가 줄어듦, 친구 관계 등)"
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl border border-peach/20 focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none transition-all font-bold resize-none"
                ></textarea>
              </div>
              <div className="flex items-center gap-3 ml-2">
                <input required type="checkbox" id="privacy" className="w-5 h-5 rounded border-peach/20 text-coral focus:ring-coral" />
                <label htmlFor="privacy" className="text-sm font-bold text-text-soft">개인정보 수집 및 이용에 동의합니다. (필수)</label>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`w-full py-6 bg-coral text-white rounded-3xl text-xl font-black shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    전송 중...
                  </>
                ) : (
                  '신청 완료하기'
                )}
              </motion.button>
            </form>
          </>
        )}
      </section>

      {/* 정식 출시 가격 안내 */}
      <section className="mb-32">
        <div className="text-center mb-20">
          <h2 className="font-hand text-4xl md:text-6xl text-text-main mb-4">정식 출시 예정 가격</h2>
          <p className="text-text-soft font-medium">베타 테스터 기간 종료 후 적용될 예정입니다.</p>
        </div>
        <div className="max-w-screen-md mx-auto bg-white rounded-[4rem] shadow-2xl border border-peach/20 overflow-hidden">
          <div className="p-12 text-center border-b border-peach/10">
            <h3 className="text-3xl font-black mb-4">Standard Plan</h3>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-5xl font-black text-text-main">29,000원</span>
              <span className="text-xl text-text-soft font-bold">/ 월</span>
            </div>
            <p className="text-text-soft font-medium">아이의 마음을 이해하는 가장 합리적인 방법</p>
          </div>
          <div className="p-12 bg-kbg">
            <ul className="space-y-6 max-w-xs mx-auto">
              <li className="flex items-center gap-3 font-bold text-text-main">
                <CheckCircle2 className="w-6 h-6 text-coral" />
                일일/주간/월간 리포트 제공
              </li>
              <li className="flex items-center gap-3 font-bold text-text-main">
                <CheckCircle2 className="w-6 h-6 text-coral" />
                AI 친구 케이 무제한 대화
              </li>
              <li className="flex items-center gap-3 font-bold text-text-main">
                <CheckCircle2 className="w-6 h-6 text-coral" />
                맞춤형 양육 가이드 제공
              </li>
              <li className="flex items-center gap-3 font-bold text-text-main">
                <CheckCircle2 className="w-6 h-6 text-coral" />
                실시간 특이 신호 알림 서비스
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
