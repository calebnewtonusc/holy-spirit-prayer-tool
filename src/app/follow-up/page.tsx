import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScriptureCard from "@/components/ScriptureCard";
import { followUpPlans } from "@/data/content";

export default function FollowUpPage() {
  const { threeDay, sevenDay } = followUpPlans;

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">

          {/* ── Header ─────────────────────────────────────────────── */}
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-sm font-semibold text-[#b5621a] uppercase tracking-widest mb-4">
              Follow-Up Plans
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5">
              Keep going.
            </h1>
            <p className="text-lg text-[#6e6e73] leading-relaxed max-w-lg mx-auto">
              The session was a beginning, not a conclusion. Return daily.
              Continuation matters more than spectacle.
            </p>
          </div>

          {/* ── 3-Day Plan ──────────────────────────────────────────── */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
                3-Day Plan
              </h2>
              <span className="text-xs font-semibold text-[#6e6e73] bg-[#f5f5f7] px-3 py-1.5 rounded-full">
                Recommended after your first session
              </span>
            </div>

            <div className="space-y-6">
              {threeDay.map((day) => (
                <div
                  key={day.day}
                  className="border border-[#d2d2d7] rounded-2xl overflow-hidden"
                >
                  {/* Day header */}
                  <div className="bg-[#f5f5f7] px-7 py-4 flex items-center gap-4">
                    <span className="text-xs font-bold text-[#aeaeb2] uppercase tracking-widest">
                      Day {day.day}
                    </span>
                    <h3 className="text-base font-semibold text-[#1d1d1f]">
                      {day.title}
                    </h3>
                  </div>

                  <div className="p-7 space-y-6">
                    {/* Scripture */}
                    <ScriptureCard
                      reference={day.scripture.ref}
                      text={day.scripture.text}
                      variant="minimal"
                    />

                    {/* Action */}
                    <div>
                      <p className="text-xs font-bold text-[#aeaeb2] uppercase tracking-widest mb-2">
                        Today&apos;s Action
                      </p>
                      <p className="text-sm text-[#3a3a3c] leading-relaxed">
                        {day.action}
                      </p>
                    </div>

                    {/* Prayer */}
                    <div className="bg-[#fff4eb] rounded-xl p-5">
                      <p className="text-xs font-bold text-[#b5621a] uppercase tracking-widest mb-3">
                        Suggested Prayer
                      </p>
                      <p className="prayer-text text-sm text-[#3a3a3c] whitespace-pre-line leading-loose">
                        {day.prayer}
                      </p>
                    </div>

                    {/* Reflection */}
                    <div>
                      <p className="text-xs font-bold text-[#aeaeb2] uppercase tracking-widest mb-2">
                        Reflect
                      </p>
                      <p className="text-sm text-[#6e6e73] italic">
                        {day.reflection}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Divider ─────────────────────────────────────────────── */}
          <div className="flex items-center gap-5 mb-14">
            <div className="flex-1 h-px bg-[#d2d2d7]" />
            <span className="text-xs text-[#aeaeb2] uppercase tracking-widest">
              Going deeper
            </span>
            <div className="flex-1 h-px bg-[#d2d2d7]" />
          </div>

          {/* ── 7-Day Plan ──────────────────────────────────────────── */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
                7-Day Plan
              </h2>
              <span className="text-xs font-semibold text-[#6e6e73] bg-[#f5f5f7] px-3 py-1.5 rounded-full">
                For sustained growth
              </span>
            </div>

            <div className="space-y-3">
              {sevenDay.map((day) => (
                <div
                  key={day.day}
                  className="bg-[#f5f5f7] rounded-2xl px-7 py-5"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 text-center">
                      <span className="block text-xs font-bold text-[#aeaeb2] uppercase tracking-widest">
                        Day
                      </span>
                      <span className="block text-2xl font-bold text-[#1d1d1f] leading-tight">
                        {day.day}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1.5">
                        <h3 className="text-base font-semibold text-[#1d1d1f]">
                          {day.title}
                        </h3>
                        <span className="text-xs text-[#b5621a] font-medium">
                          {day.theme}
                        </span>
                      </div>
                      <p className="font-serif italic text-sm text-[#6e6e73] leading-relaxed">
                        &ldquo;{day.scripture.text}&rdquo;
                        <span className="not-italic font-semibold text-[#b5621a] ml-2">
                          — {day.scripture.ref}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Multiplication CTA ──────────────────────────────────── */}
          <div className="bg-[#1d1d1f] rounded-2xl p-10 text-center text-white">
            <h3 className="text-2xl font-bold tracking-tight mb-4">
              Walk someone else through it.
            </h3>
            <p className="text-[#aeaeb2] text-base leading-relaxed mb-8 max-w-sm mx-auto">
              The greatest blessing is sharing with others what you&apos;ve received
              from God. Guide Mode gives you a step-by-step process — just like
              Erik Fish does it.
            </p>
            <a
              href="/guide"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1d1d1f] text-sm font-semibold rounded-full hover:bg-[#f5f5f7] transition-colors"
            >
              Open Guide Mode
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
