import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ConversationAgent from "@/components/ConversationAgent";

const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_GUIDE_AGENT_ID ?? "";

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#b5621a] mb-4 tracking-wide">Guide Mode</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5">
              Walk someone through it.
            </h1>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              The coach gives you scripts and step-by-step guidance based on how
              Erik Fish leads this experience in person. You speak out loud. Your
              friend walks with you.
            </p>
          </div>

          <div className="bg-[#f5f5f7] rounded-3xl py-16 px-8 mb-16">
            <ConversationAgent agentId={agentId} mode="guide" />
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-7 mb-10">
            <p className="text-xs font-bold text-[#b5621a] uppercase tracking-widest mb-4">
              Critical cautions
            </p>
            <div className="space-y-3">
              {[
                "Never prompt specific syllables or repeat sounds at the person.",
                "Never fill the silence during the practice window. Give 3 to 5 full minutes.",
                "Never evaluate whether their experience was valid.",
                "Point them to Jesus, not to you, not to an outcome.",
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#b5621a] shrink-0" />
                  <p className="text-sm text-[#92400e] leading-relaxed">{c}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-[#6e6e73] text-center">
            After your session, visit{" "}
            <a href="/follow-up" className="text-[#b5621a] font-medium hover:underline">
              Follow-Up Plans
            </a>{" "}
            to give your friend a 3-day or 7-day next steps plan.
          </p>

        </div>
      </main>

      <Footer />
    </div>
  );
}
