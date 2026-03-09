import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const scripturePillars = [
  {
    ref: "Luke 11:13",
    text: "How much more will your Father in heaven give the Holy Spirit to those who ask him!",
  },
  {
    ref: "1 Cor 14:1",
    text: "Eagerly desire gifts of the Spirit.",
  },
  {
    ref: "Acts 1:8",
    text: "You will receive power when the Holy Spirit comes on you.",
  },
];

const promises = [
  "We will not force a result.",
  "We will not shame your pace.",
  "We will not replace your church.",
  "We will help you seek God with clarity, faith, and peace.",
];

const howItWorks = [
  {
    step: "01",
    title: "Scripture first",
    body: "Every moment is grounded in the Bible. You will know exactly why you are asking and what you are asking for.",
  },
  {
    step: "02",
    title: "Guided by voice",
    body: "An AI guide speaks with you — warm, calm, and pastoral. You can close your eyes and simply follow along.",
  },
  {
    step: "03",
    title: "Yield, not perform",
    body: "The guide will help you stop praying with your mind and begin praying with your spirit — the way the apostle Paul described.",
  },
  {
    step: "04",
    title: "Continue and grow",
    body: "After the session, you receive a 3-day and 7-day follow-up plan, plus a mode for guiding someone else.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <p className="text-sm font-semibold text-[#b5621a] uppercase tracking-widest mb-6">
            A Ministry Tool by Erik Fish &amp; Caleb Newton
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#1d1d1f] tracking-tight leading-tight mb-8">
            Seek the Holy Spirit
            <br />
            <span className="text-[#b5621a]">with peace.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#6e6e73] leading-relaxed max-w-2xl mx-auto mb-12">
            A scripture-rooted guided prayer experience for Christians who want
            calm, biblical help asking God for spiritual gifts — including tongues.
            No pressure. No hype. Just a guided path.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/journey"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1d1d1f] text-white text-base font-semibold rounded-full hover:bg-[#3a3a3c] transition-colors"
            >
              Begin Your Journey
            </Link>
            <Link
              href="/guide"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#f5f5f7] text-[#1d1d1f] text-base font-semibold rounded-full hover:bg-[#e5e5ea] transition-colors"
            >
              Guide Someone Else
            </Link>
          </div>
        </div>
      </section>

      {/* ── Scripture Pillars ─────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scripturePillars.map((s) => (
              <div key={s.ref} className="bg-white rounded-2xl p-7">
                <p className="font-serif italic text-[#1d1d1f] text-base leading-relaxed mb-4">
                  &ldquo;{s.text}&rdquo;
                </p>
                <span className="text-sm font-semibold text-[#b5621a]">
                  — {s.ref}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What This Is ─────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-6">
            What this is.
          </h2>
          <p className="text-xl text-[#6e6e73] leading-relaxed mb-6">
            Many Christians are hungry for more of the Holy Spirit but don&apos;t
            know how to move from curiosity to action. They may believe in
            spiritual gifts in principle — but have never had someone calmly
            walk them through what to do, what to pray, what to expect, and
            how to continue afterward.
          </p>
          <p className="text-xl text-[#6e6e73] leading-relaxed">
            This tool does exactly that. It was built by Erik Fish — a
            disciple-maker who has personally guided hundreds of people through
            this experience — so that his method could reach every Christian
            in the world who has never had someone walk them through it.
          </p>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              How it works.
            </h2>
            <p className="text-xl text-[#6e6e73]">
              A voice-guided journey. All you need is a quiet place.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8">
                <span className="text-xs font-bold text-[#aeaeb2] tracking-widest uppercase">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mt-3 mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-[#6e6e73] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Promise ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-12">
            Our promise to you.
          </h2>
          <div className="space-y-5">
            {promises.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-4 text-left"
              >
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#b5621a]/10 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#b5621a]" />
                </span>
                <p className="text-xl text-[#1d1d1f] leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who This Is For ───────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight text-center mb-12">
            Who this is for.
          </h2>
          <div className="space-y-4">
            {[
              "Christians who already follow Jesus and want to seek the gifts of the Holy Spirit.",
              "People who have never had someone walk them through this clearly.",
              "College students, new believers, or longtime Christians newly curious about the Spirit.",
              "Christians in parts of the world where local guidance on this is limited.",
              "Leaders who want a structured tool to walk a friend or small group through this journey.",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl px-7 py-5 text-base text-[#1d1d1f] leading-relaxed"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="text-center text-[#6e6e73] mt-8 text-base">
            This tool is not for theological debate. It is for the sincere and the curious.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-6">
            Ready?
          </h2>
          <p className="text-xl text-[#6e6e73] mb-10">
            If you already belong to Jesus and want to seek the gifts of the
            Holy Spirit, you are in the right place. You do not need to strive.
            You do not need to pretend. You can ask your Father for good gifts.
          </p>
          <Link
            href="/journey"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#b5621a] text-white text-lg font-semibold rounded-full hover:bg-[#9a5216] transition-colors"
          >
            Begin Your Journey
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
