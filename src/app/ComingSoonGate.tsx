import logo from '../assets/logo.png';

type ComingSoonVariant = 'light' | 'dark';

interface ComingSoonGateProps {
  variant?: ComingSoonVariant;
}

export default function ComingSoonGate({ variant = 'light' }: ComingSoonGateProps) {
  // const isDark = variant === 'dark';
  const isDark = true;
  return (
    <div
      className={`min-h-screen relative overflow-hidden ${
        isDark
          ? 'bg-gradient-to-br from-[#0f1417] via-[#0c0f12] to-[#111820] text-white'
          : 'bg-gradient-to-br from-[#f7f2ea] via-white to-[#eef6f5] text-stone-900'
      }`}
    >
      <div
        className={`absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl animate-pulse ${
          isDark ? 'bg-[#3D9B93]/25' : 'bg-[#3D9B93]/15'
        }`}
      />
      <div
        className={`absolute -bottom-32 -left-16 h-80 w-80 rounded-full blur-3xl animate-pulse ${
          isDark ? 'bg-[#E88B7F]/25' : 'bg-[#E88B7F]/20'
        }`}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 relative">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Fresh Roots" className="h-16 w-auto object-contain" />
            <div className={`text-xs uppercase tracking-[0.35em] ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
              Coming Soon
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="space-y-6">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight ${
                  isDark ? 'text-white' : 'text-stone-900'
                }`}
              >
                Crafting a refined B2B experience for
                <span className="block text-[#3D9B93]">Himalayan minerals.</span>
              </h1>
              <p className={`text-lg max-w-2xl ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>
                We are in the final assembly phase. Expect a faster catalog, smoother ordering, and
                stronger compliance guidance built for export buyers.
              </p>
              <div
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] ${
                  isDark ? 'bg-white text-stone-900' : 'bg-stone-900 text-white'
                }`}
              >
                Under Maintenance
              </div>
              <div className={`flex flex-wrap gap-3 text-sm ${isDark ? 'text-stone-300' : 'text-stone-500'}`}>
                <span className={`rounded-full border px-4 py-2 ${isDark ? 'border-white/20' : 'border-stone-300'}`}>
                  Pakistan origin
                </span>
                <span className={`rounded-full border px-4 py-2 ${isDark ? 'border-white/20' : 'border-stone-300'}`}>
                  B2B export focus
                </span>
                <span className={`rounded-full border px-4 py-2 ${isDark ? 'border-white/20' : 'border-stone-300'}`}>
                  Custom packaging
                </span>
              </div>
            </div>
            <div className="relative">
              <div
                className={`rounded-3xl p-8 shadow-xl ${
                  isDark ? 'bg-white/5 border border-white/10' : 'bg-white/80 border border-stone-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`h-14 w-14 rounded-full flex items-center justify-center ${
                      isDark ? 'bg-white/10' : 'bg-[#3D9B93]/15'
                    }`}
                  >
                    <span className="h-3 w-3 rounded-full bg-[#3D9B93] animate-pulse" />
                  </div>
                  <div>
                    <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                      Maintenance in progress
                    </h2>
                    <p className={`text-sm ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                      Final tuning, QA, and launch prep.
                    </p>
                  </div>
                </div>
                <MaintenanceGears isDark={isDark} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface MaintenanceGearsProps {
  isDark: boolean;
}

function MaintenanceGears({ isDark }: MaintenanceGearsProps) {
  return (
    <div className="relative mt-10 h-44">
      <div className="relative h-44 w-44 mx-auto">
        <div className="absolute inset-0 orbit-spin-slow">
          <svg
            viewBox="0 0 120 120"
            className="absolute left-1/2 -translate-x-1/2 bottom-0 h-24 w-24 text-[#E88B7F]"
            aria-hidden="true"
          >
            <Gear />
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`h-12 w-12 rounded-full flex items-center justify-center text-xs font-semibold ${
              isDark ? 'bg-white text-stone-900' : 'bg-stone-900/90 text-white'
            }`}
          >
            60%
          </div>
        </div>
      </div>
      <div
        className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r ${
          isDark ? 'from-transparent via-white/30 to-transparent' : 'from-transparent via-stone-300 to-transparent'
        }`}
      />
    </div>
  );
}

function Gear() {
  return (
    <g fill="currentColor">
      <circle cx="60" cy="60" r="24" fill="currentColor" opacity="0.2" />
      <circle cx="60" cy="60" r="16" />
      <rect x="56" y="4" width="8" height="16" rx="2" />
      <rect x="56" y="100" width="8" height="16" rx="2" />
      <rect x="4" y="56" width="16" height="8" rx="2" />
      <rect x="100" y="56" width="16" height="8" rx="2" />
      <rect x="88" y="16" width="12" height="8" rx="2" transform="rotate(45 94 20)" />
      <rect x="88" y="96" width="12" height="8" rx="2" transform="rotate(-45 94 100)" />
      <rect x="16" y="16" width="12" height="8" rx="2" transform="rotate(-45 22 20)" />
      <rect x="16" y="96" width="12" height="8" rx="2" transform="rotate(45 22 100)" />
    </g>
  );
}
