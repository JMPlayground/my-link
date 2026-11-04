"use client";

import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const userEmail = "felix2010@naver.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(userEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${userEmail}`;
    }
  };

  return (
    <div className="min-h-dvh w-full flex flex-col items-center justify-center py-6 px-3 sm:px-6 md:px-8 box-border overflow-x-hidden">
      {/* Toast Notification */}
      <div
        className={`fixed top-4 z-50 transition-all duration-300 transform max-w-[90vw] ${
          copied
            ? "translate-y-0 opacity-100 scale-100"
            : "-translate-y-8 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-[#22c55e] text-black font-black text-xs sm:text-sm px-4 py-2 rounded-xl border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_#000] flex items-center gap-2">
          <span>✨</span>
          <span>이메일이 복사되었습니다!</span>
        </div>
      </div>

      {/* Main Profile Card Container with safe shadow margin */}
      <main className="w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[430px] min-w-0 bg-white border-3 sm:border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] sm:shadow-[7px_7px_0px_0px_#000] overflow-hidden flex flex-col transition-all box-border">
        {/* Retro Window Top Bar */}
        <div className="bg-[#fbbf24] border-b-3 sm:border-b-4 border-black px-3 py-2 sm:px-4 sm:py-2.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ef4444] border-1.5 sm:border-2 border-black inline-block"></span>
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#f59e0b] border-1.5 sm:border-2 border-black inline-block"></span>
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10b981] border-1.5 sm:border-2 border-black inline-block"></span>
          </div>
          <span className="text-[10px] sm:text-xs font-black tracking-wider text-black uppercase bg-white px-2 py-0.5 border-1.5 sm:border-2 border-black rounded shadow-[1.5px_1.5px_0px_0px_#000] truncate">
            PROFILE.EXE
          </span>
          <div className="flex items-center gap-1 font-mono text-[10px] sm:text-xs font-black shrink-0">
            <span>●</span>
            <span className="hidden sm:inline">2026</span>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-3.5 sm:p-6 flex flex-col items-center text-center w-full min-w-0 box-border">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#86efac] border-2 border-black shadow-[2px_2px_0px_0px_#000] text-[10px] sm:text-xs font-black mb-3 -rotate-1">
            <span className="w-2 h-2 rounded-full bg-[#15803d] animate-pulse"></span>
            <span>OPEN TO WORK & CODE 2ND</span>
          </div>

          {/* Avatar Section */}
          <div className="relative mb-3 sm:mb-4">
            <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-2xl bg-[#a78bfa] border-3 sm:border-4 border-black shadow-[3.5px_3.5px_0px_0px_#000] sm:shadow-[5px_5px_0px_0px_#000] p-1 flex items-center justify-center rotate-1 hover:rotate-0 transition-transform">
              <div className="w-full h-full rounded-xl bg-[#c4b5fd] border-2 border-black flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-black text-black tracking-wider">
                  JM
                </span>
              </div>
            </div>
            {/* Stamp Sticker */}
            <span className="absolute -bottom-1 -right-2 sm:-bottom-2 sm:-right-2.5 px-1.5 py-0.5 bg-[#f43f5e] text-white border-2 border-black rounded text-[9px] sm:text-[10px] font-black shadow-[1.5px_1.5px_0px_0px_#000] rotate-6">
              SAP ⚡
            </span>
          </div>

          {/* Name & Title */}
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-black mb-1">
            이정민
          </h1>
          <div className="mb-3 sm:mb-4 inline-block">
            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#67e8f9] text-black border-2 border-black rounded-lg text-[11px] sm:text-sm font-black shadow-[2px_2px_0px_0px_#000] tracking-wide inline-block">
              SAP ABAP & Cloud Developer
            </span>
          </div>

          {/* Bio Box */}
          <div className="w-full min-w-0 bg-[#fef9c3] border-2 sm:border-3 border-black rounded-xl p-3 sm:p-4 mb-3.5 sm:mb-4 text-left shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] box-border">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <span className="self-start bg-black text-[#fef08a] px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-black tracking-wide border border-black">
                💡 SUMMARY
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-black/70">
                경영학부(MIS) | 학점 4.08
              </span>
            </div>
            <p className="text-[11px] sm:text-sm text-black font-bold leading-relaxed break-keep">
              비즈니스 프로세스와 IT의 접점을 설계하는 신입 SAP ABAP 개발자입니다.
              450시간의 집중 교육과 MM 모듈 리포팅 프로젝트를 완수하였으며,
              <span className="bg-[#bbf7d0] px-1 mx-0.5 border border-black rounded inline-block">
                정보처리기사
              </span>
              ·
              <span className="bg-[#bae6fd] px-1 mx-0.5 border border-black rounded inline-block">
                ABAP Cloud
              </span>
              ·
              <span className="bg-[#fed7aa] px-1 mx-0.5 border border-black rounded inline-block">
                SQLD
              </span>
              자격을 취득했습니다.
            </p>
            <p className="text-[10px] sm:text-xs text-black/85 font-semibold mt-2 leading-relaxed pt-2 border-t-2 border-black/20 break-keep">
              현재 <strong className="underline decoration-wavy decoration-[#f43f5e]">Code 2기</strong>에서 <strong>SAP UI5 및 ABAP</strong>을 심화 학습 중이며, Claude AI(MCP) 서버 연동까지 기술 영역을 끊임없이 확장하고 있습니다.
            </p>
          </div>

          {/* Skills Badges */}
          <div className="w-full min-w-0 mb-3.5 sm:mb-4">
            <div className="text-[10px] sm:text-xs font-black text-left mb-1.5 text-black/80 flex items-center gap-1">
              <span>🛠️</span>
              <span>CORE STACK & CERTIFICATES</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5">
              <span className="px-2 py-0.5 text-[10px] sm:text-xs font-black bg-[#c4b5fd] text-black rounded-lg border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000] hover:-translate-y-0.5 transition-transform">
                ⚡ SAP ABAP
              </span>
              <span className="px-2 py-0.5 text-[10px] sm:text-xs font-black bg-[#fde047] text-black rounded-lg border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000] hover:-translate-y-0.5 transition-transform">
                🎨 SAP UI5
              </span>
              <span className="px-2 py-0.5 text-[10px] sm:text-xs font-black bg-[#86efac] text-black rounded-lg border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000] hover:-translate-y-0.5 transition-transform">
                📜 정보처리기사
              </span>
              <span className="px-2 py-0.5 text-[10px] sm:text-xs font-black bg-[#7dd3fc] text-black rounded-lg border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000] hover:-translate-y-0.5 transition-transform">
                ☁️ ABAP Cloud
              </span>
              <span className="px-2 py-0.5 text-[10px] sm:text-xs font-black bg-[#fca5a5] text-black rounded-lg border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000] hover:-translate-y-0.5 transition-transform">
                💾 SQLD
              </span>
              <span className="px-2 py-0.5 text-[10px] sm:text-xs font-black bg-[#f9a8d4] text-black rounded-lg border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000] hover:-translate-y-0.5 transition-transform">
                🤖 AI & MCP
              </span>
              <span className="px-2 py-0.5 text-[10px] sm:text-xs font-black bg-[#fed7aa] text-black rounded-lg border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000] hover:-translate-y-0.5 transition-transform">
                📦 SAP MM
              </span>
            </div>
          </div>

          {/* Action Links */}
          <div className="w-full min-w-0 flex flex-col gap-2 sm:gap-2.5">
            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              type="button"
              className="w-full py-2.5 sm:py-3 px-3 rounded-xl bg-[#f43f5e] hover:bg-[#e11d48] text-white text-xs sm:text-sm font-black border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <svg
                className="w-4 h-4 stroke-[2.5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{copied ? "이메일 복사완료! ✨" : "이메일 주소 복사하기"}</span>
            </button>

            {/* GitHub Profile Button */}
            <a
              href="https://github.com/JMPlayground"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 sm:py-3 px-3 rounded-xl bg-[#a3e635] hover:bg-[#84cc16] text-black text-xs sm:text-sm font-black border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all flex items-center justify-center gap-1.5"
            >
              <svg className="w-4 h-4 fill-black shrink-0" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub 프로필 방문</span>
            </a>

            {/* Direct Mailto Fallback Link */}
            <a
              href={`mailto:${userEmail}`}
              className="w-full py-2 px-3 rounded-xl bg-white hover:bg-zinc-100 text-black text-[11px] sm:text-xs font-bold border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-1.5 overflow-hidden"
            >
              <span>✉️</span>
              <span className="truncate">메일 앱 직접 열기</span>
            </a>
          </div>
        </div>
      </main>

      {/* Neobrutalist Footer Badge */}
      <footer className="mt-4 sm:mt-5 flex items-center justify-center text-center select-none px-2 box-border max-w-full">
        <span className="px-3 py-1 bg-white text-black font-black text-[10px] sm:text-xs border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] text-center break-keep leading-tight">
          © {new Date().getFullYear()} LEE JEONGMIN ★ ALL RIGHTS RESERVED
        </span>
      </footer>
    </div>
  );
}
