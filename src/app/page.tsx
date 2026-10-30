export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 p-4 sm:p-6 select-none">
      <main className="w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl shadow-zinc-200/50 dark:shadow-none flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl">
        {/* Profile Avatar / Initials */}
        <div className="relative mb-6">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-lg">
            <div className="w-full h-full rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                JM
              </span>
            </div>
          </div>
          <span className="absolute bottom-1 right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-zinc-900"></span>
          </span>
        </div>

        {/* Profile Name & Role */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-1">
          이정민
        </h1>
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-4">
          SAP ABAP & Cloud Developer
        </p>

        {/* Bio Section */}
        <div className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-4 w-full mb-6 text-left">
          <p className="text-sm text-zinc-700 dark:text-zinc-200 leading-relaxed font-normal">
            비즈니스 프로세스와 IT의 접점을 설계하는 신입 SAP ABAP 개발자입니다. 
            450시간의 집중 교육과 MM 모듈 리포팅 프로젝트 경험을 쌓았으며, 
            <strong> 정보처리기사</strong> · <strong>SAP ABAP Cloud</strong> · <strong>SQLD</strong> 자격을 갖추었습니다.
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
            현재 <strong>Code 2기</strong>에서 <strong>SAP UI5 및 ABAP</strong>을 심화 학습 중이며, 모던 Cloud 환경과 Claude AI(MCP) 연동까지 기술 스펙트럼을 넓혀가고 있습니다.
          </p>
        </div>

        {/* Interest / Tech Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6">
          <span className="px-2.5 py-1 text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-800">
            ⚡ SAP ABAP
          </span>
          <span className="px-2.5 py-1 text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 rounded-full border border-amber-200 dark:border-amber-800">
            🎨 SAP UI5
          </span>
          <span className="px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
            📜 정보처리기사
          </span>
          <span className="px-2.5 py-1 text-xs font-medium bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 rounded-full border border-sky-200 dark:border-sky-800">
            ☁️ ABAP Cloud
          </span>
          <span className="px-2.5 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 rounded-full border border-emerald-200 dark:border-emerald-800">
            💾 SQLD
          </span>
          <span className="px-2.5 py-1 text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800">
            🤖 AI & MCP
          </span>
        </div>

        {/* Quick Links / Actions */}
        <div className="w-full flex flex-col gap-3">
          <a
            href="mailto:contact@example.com"
            className="w-full py-3 px-4 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium transition-transform duration-150 active:scale-95 hover:opacity-90 flex items-center justify-center gap-2 shadow-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            이메일 보내기
          </a>
          <a
            href="https://github.com/JMPlayground"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-sm font-medium transition-all duration-150 active:scale-95 flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub 프로필
          </a>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="mt-8 text-xs text-zinc-400 dark:text-zinc-600">
        © {new Date().getFullYear()} 이정민. All rights reserved.
      </footer>
    </div>
  );
}
