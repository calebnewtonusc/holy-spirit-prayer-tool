import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ConversationAgent from "@/components/ConversationAgent";

const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID ?? "";

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#b5621a] mb-4 tracking-wide">The Journey</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5">
              Your guide is ready.
            </h1>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Find a quiet place. The guide will walk you through scripture,
              prayer, and your first practice at your own pace.
            </p>
          </div>

          <div className="bg-[#f5f5f7] rounded-3xl py-16 px-8 mb-16">
            <ConversationAgent agentId={agentId} mode="journey" />
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold text-[#aeaeb2] uppercase tracking-widest mb-4">
              What to expect
            </p>
            {[
              "The guide orients you and makes sure you feel safe.",
              "You are grounded in what the Bible says about the Holy Spirit.",
              "You have space to share any fears or questions.",
              "You are led into a prayer of empowerment.",
              "You are guided through first practice, praying with your spirit.",
              "You reflect and receive a clear next step.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-[#aeaeb2] shrink-0" />
                <p className="text-sm text-[#6e6e73] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
