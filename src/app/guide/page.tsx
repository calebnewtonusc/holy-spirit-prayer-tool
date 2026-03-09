import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ConversationAgent from "@/components/ConversationAgent";

const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_GUIDE_AGENT_ID ?? "";

const steps = [
  { num: "01", label: "Set the environment" },
  { num: "02", label: "Confirm their foundation" },
  { num: "03", label: "Ask the hook question" },
  { num: "04", label: "Read scripture together" },
  { num: "05", label: "Address their fears" },
  { num: "06", label: "Prepare the heart" },
  { num: "07", label: "Pray for empowerment" },
  { num: "08", label: "Guide first practice" },
  { num: "09", label: "Debrief with grace" },
  { num: "10", label: "Give next steps" },
];

const cautions = [
  "Never prompt specific syllables or repeat sounds at the person.",
  "Never tell them what the experience should look or sound like.",
  "Never fill the silence during the practice window.",
  "Never evaluate whether their experience was valid.",
  "Point them to Jesus — not to you, not to an experience.",
  "The goal is a continuing practice, not a memorable moment.",
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">

          {/* ── Header ─────────────────────────────────────────────── */}
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-sm font-semibold text-[#b5621a] uppercase tracking-widest mb-4">
              Guide Mode
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5">
              Walk someone else
              <br />through this.
            </h1>
            <p className="text-lg text-[#6e6e73] leading-relaxed max-w-lg mx-auto">
              The AI coach will give you scripts, cautions, and step-by-step
              guidance — based on how Erik Fish personally leads this experience.
              You speak out loud. Your friend walks with you.
            </p>
          </div>

          {/* ── Conversation Agent ──────────────────────────────────── */}
          <div className="mb-20 py-14 px-8 bg-[#f5f5f7] rounded-3xl">
            <ConversationAgent agentId={agentId} mode="guide" />
          </div>

          {/* ── Steps Overview ──────────────────────────────────────── */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-6">
              The 10-step process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {steps.map((s) => (
                <div
                  key={s.num}
                  className="flex items-center gap-4 bg-[#f5f5f7] rounded-xl px-5 py-4"
                >
                  <span className="text-xs font-bold text-[#aeaeb2] tracking-widest w-6 flex-shrink-0">
                    {s.num}
                  </span>
                  <span className="text-sm font-medium text-[#1d1d1f]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Critical Cautions ───────────────────────────────────── */}
          <div className="bg-[#fff4eb] border border-[#e8924a]/30 rounded-2xl p-8 mb-14">
            <h3 className="text-base font-semibold text-[#b5621a] mb-5 uppercase tracking-wide">
              Critical cautions
            </h3>
            <ul className="space-y-3">
              {cautions.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#3a3a3c]">
                  <span className="mt-0.5 flex-shrink-0 text-[#b5621a]">—</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Printable tip ───────────────────────────────────────── */}
          <div className="text-center">
            <p className="text-sm text-[#6e6e73]">
              After your session, visit the{" "}
              <a
                href="/follow-up"
                className="text-[#b5621a] font-medium hover:underline"
              >
                Follow-Up Plans page
              </a>{" "}
              to give your friend a 3-day or 7-day next-steps plan.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
