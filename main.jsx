import { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

const pages = [
  {
    type: "intro",
    content: [
      "To. 사랑하는 채희에게",
      "오늘은 특별한 하루야.",
      "우리의 미래에 대해 한 번 상상해볼래? 🌸",
    ],
  },
                      {
    type: "confess",
    content: [
      "이 모든 상상들이",
      "현실이 되기를 바래.",
      "나랑 결혼해줄래? 💍",
    ],
  },
  {
    type: "rejection",
    content: [
      "진짜 아니야...? 😭",
      "나는 채희가 웃어주는 그 순간만을 기다렸는데...",
      "",
      "그래도 한 번만 더 물어볼게...",
      "",
      "나랑 결혼해줄래? 💍",
    ],
  },
  {
    type: "ending",
    content: [
      "💖 우리 이야기의 시작 💖",
      "다시 보고 싶다면 아래 버튼을 눌러줘!",
    ],
  },
];

function App() {
  const [page, setPage] = useState(0);
  const goToPage = (index) => setPage(index);
  const nextPage = () => setPage((prev) => (prev < pages.length - 1 ? prev + 1 : 0));
  const current = pages[page];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-pink-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-center px-6"
        >
          {current.type === "intro" && (
            <div>
              {current.content.map((line, i) => (
                <p key={i} className="text-xl mb-2 font-bold">{line}</p>
              ))}
              <button onClick={nextPage} className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-full font-bold">
                시작하기 💌
              </button>
            </div>
          )}

          {current.question && (
            <div>
              <p className="text-xl font-bold mb-6 whitespace-pre-wrap">{current.question}</p>
              <div className="flex gap-4 justify-center">
                <button onClick={nextPage} className="bg-green-400 px-5 py-2 rounded-full text-white font-bold">좋아</button>
                <button onClick={nextPage} className="bg-red-400 px-5 py-2 rounded-full text-white font-bold">아니</button>
              </div>
            </div>
          )}

          {current.type === "confess" && (
            <div>
              {current.content.map((line, i) => (
                <p key={i} className="text-xl mb-2 font-bold">{line}</p>
              ))}
              <div className="flex gap-4 justify-center mt-6">
                <button onClick={() => goToPage(12)} className="bg-green-400 px-5 py-2 rounded-full text-white font-bold">좋아</button>
                <button onClick={() => goToPage(11)} className="bg-red-400 px-5 py-2 rounded-full text-white font-bold">아니</button>
              </div>
            </div>
          )}

          {current.type === "rejection" && (
            <div>
              {current.content.map((line, i) => (
                <p key={i} className="text-xl mb-2 font-bold">{line}</p>
              ))}
              <div className="flex gap-4 justify-center mt-6">
                <button onClick={() => goToPage(12)} className="bg-green-400 px-5 py-2 rounded-full text-white font-bold">좋아</button>
                <button onClick={() => goToPage(12)} className="bg-green-400 px-5 py-2 rounded-full text-white font-bold">좋아</button>
              </div>
            </div>
          )}

          {current.type === "ending" && (
            <div>
              {current.content.map((line, i) => (
                <p key={i} className="text-lg mb-2 font-bold">{line}</p>
              ))}
              <button onClick={() => goToPage(0)} className="mt-6 bg-purple-500 text-white px-6 py-2 rounded-full font-bold">
                다시 보기 🔁
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);  { question: "아침에 출근 전에 내가 삶은 계란이랑 바나나 챙겨줄게. 채희의 허기 내가 책임져도 될까? 🍌🥚" },
  { question: "우리 신혼집 인테리어는 음,,, 모던 심플 어때!? 🛋️✨
근데... 가끔 가구 옮겨야 하면 같이 해줄 거지? 혼자는 무거워... 😅" },
  { question: "우리 신혼집 인테리어는... 음, 모던 심플 어때!? 🛋️✨
근데... 가끔은 가구도 옮겨야 하는데 같이 해줄 거지? 혼자는 무거워... 😅" },
  { question: "주말엔 같이 장 보고 내가 요리할게! 혹시 맛이 망해도 맛있게 먹어줄 수 있어? 🍳😆" },
  { question: "리버풀 경기할 땐 가끔 닭강정 시켜서 같이 보면 안 될까? 나 혼자 보기엔 아쉬워서... 🍗⚽❤️❤️" },
  { question: "퇴근하고는 같이 밥 먹으면서 오늘 어땠는지 얘기 나눠줄래? 채희 이야기 듣는 게 제일 좋거든 😆🍚" },
  { question: "재밌는 드라마 나오면 우리 같이 정주행 하는 거 어때? 근데 나 중간에 졸아도 이해해줄 거지? 😴📺" },
  { question: "채희가 힘든 날엔 아무 말 없이 꼭 안아줘도 괜찮을까? 말보단 포옹으로 위로하고 싶어 🤗🫂" },
  { question: "채희 눈에 내가 답답해 보여도 너무 뭐라하지 말고 상냥하게 대해줄 수 있어...?.. 호호 😅💗" },
  { question: "앞으로 평생 ‘채희 편’만 들 건데 각오돼 있지? 물론 이미 나는 채희만의 편이긴 해 😎❤️" },

