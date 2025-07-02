

export function GradientBorderBtn({text, onClick}: {text: string, onClick: () => void}) {
    return (
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-light leading-6  text-white inline-block
                 sm:text-base
                 lg:text-lg"
                 onClick={onClick}
                 >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 ring-1 px-4 py-1.5 ring-white/10
              sm:py-3 sm:px-4">
          <span>{text}</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    )
}

export function GradientBorderBtn2({text, onClick}: {text: string, onClick?: () => void}) {
    return (
        <button className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
                  md:h-13"
                onClick={onClick}  
                  >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-sm font-light text-white backdrop-blur-3xl
                sm:text-base sm:px-5 sm:py-1
                md:text-lg">
          {text}
        </span>
      </button>
    )
}

export function InvertBtn({ text, onClick }: { text: string, onClick?: () => void }) {
    return (
        <button className="px-4 py-1 text-xs rounded-full bg-blue-400 text-white font-light transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500
                 sm:text-sm
                 md:text-base"
                onClick={onClick} 
                >
            {text}
        </button>
    )
}

export function InvertBtn2({ text, onClick }: { text: string, onClick?: () => void }) {
    return (
        <button className="shadow-[inset_0_0_0_2px_#616467] text-xs text-black px-4 py-2 rounded-full font-light bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200
                 sm:text-sm
                 md:text-base"
                onClick={onClick} 
                >
            {text}
        </button>
    )
}