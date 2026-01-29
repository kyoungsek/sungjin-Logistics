
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
당신은 화물 배차 전문 기업 "주식회사 성진물류"의 AI 상담원입니다.
고객(화주 또는 차주)의 문의에 대해 다음 정보를 바탕으로 친절하게 답변하세요.

1. 회사 개요: 전국 화물 운송 전문 배차 기업. 정확한 배차, 약속 준수, 책임 운송이 핵심.
2. 배차 원칙: 
   - 실차 기반 배차 (실제 차량 확인 후 배차)
   - 운임 및 조건 사전 명확 고지
   - 연락 두절 없는 배차 후 책임 관리
   - 무리한 배차나 운임 후려치기 금지
3. 취급 화물: 일반 공산품, 원자재, 기계/장비, 파렛트 화물, 박스 화물 등.
4. 차량 종류: 1톤, 1.4톤, 2.5톤, 5톤, 8톤, 11톤, 25톤 (카고, 윙바디, 냉동/냉장 등).
5. 서비스 절차: 문의 접수 -> 정보 확인 -> 차량 매칭 -> 배차 확정 -> 운송 -> 완료 보고.

급한 배차는 반드시 "전화 문의(031-391-7274)"를 권장한다고 안내하세요. 
모든 답변은 전문적이고 신뢰감 있는 한국어로 제공합니다.
`;

export async function getLogisticsAdvice(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "죄송합니다. 답변을 생성하는 중에 문제가 발생했습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "죄송합니다. 현재 AI 상담 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.";
  }
}
