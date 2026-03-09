import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ConversationAgent from "@/components/ConversationAgent";
import ScriptureCard from "@/components/ScriptureCard";

const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID ?? "";

const keyScriptures = [
  {
    ref: "Luke 11:11–13",
    text: "If you then, though you are evil, know how to give good gifts to your children, how much more will your Father in heaven give the Holy Spirit to those who ask him!",
    plain: "Jesus says: it is good to ask the Father specifically for the Holy Spirit. Ask Him.",
  },
  {
    ref: "1 Corinthians 14:14–15",
    text: "For if I pray in a tongue, my spirit prays, but my mind is unfruitful. So what shall I do? I will pray with my spirit, but I will also pray with my understanding.",
    plain: "Paul distinguishes praying with the mind from praying with the spirit. You can do both.",
  },
  {
    ref: "Acts 2:4",
    text: "All of them were filled with the Holy Spirit and began to speak in other tongues as the Spirit enabled them.",
    plain: "The disciples were filled with the Spirit and spoke in tongues at Pentecost. This is available to you too.",
  },
];

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">

          {/* ── Header ─────────────────────────────────────────────── */}
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-sm font-semibold text-[#b5621a] uppercase tracking-widest mb-4">
              The Journey
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5">
              Your guide is ready.
            </h1>
            <p className="text-lg text-[#6e6e73] leading-relaxed max-w-lg mx-auto">
              Find a quiet place. Take a breath. The guide will walk you through
              scripture, prayer, and your first practice — completely at your pace.
            </p>
          </div>

          {/* ── Conversation Agent ──────────────────────────────────── */}
          <div className="mb-20 py-14 px-8 bg-[#f5f5f7] rounded-3xl">
            <ConversationAgent agentId={agentId} mode="journey" />
          </div>

          {/* ── Divider ─────────────────────────────────────────────── */}
          <div className="flex items-center gap-5 mb-14">
            <div className="flex-1 h-px bg-[#d2d2d7]" />
            <span className="text-xs text-[#aeaeb2] uppercase tracking-widest">
              Scriptures your guide uses
            </span>
            <div className="flex-1 h-px bg-[#d2d2d7]" />
          </div>

          {/* ── Key Scriptures ──────────────────────────────────────── */}
          <div className="space-y-4 mb-16">
            {keyScriptures.map((s) => (
              <ScriptureCard
                key={s.ref}
                reference={s.ref}
                text={s.text}
                plain={s.plain}
              />
            ))}
          </div>

          {/* ── What to expect ──────────────────────────────────────── */}
          <div className="bg-[#f5f5f7] rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-[#1d1d1f] mb-5">
              What to expect in this session
            </h3>
            <ul className="space-y-3">
              {[
                "The guide will orient you and make sure you feel safe and understood.",
                "You will be grounded in what the Bible says about the Holy Spirit and spiritual gifts.",
                "You will have space to ask questions and share any fears.",
                "You will be led into a prayer of empowerment.",
                "You will be guided through first practice — praying with your spirit, not just your mind.",
                "You will reflect on what you experienced and receive a clear next step.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#1d1d1f]">
                  <span className="mt-1 w-4 h-4 flex-shrink-0 rounded-full bg-[#b5621a]/15 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b5621a]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
