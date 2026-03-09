import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-28 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-medium text-[#b5621a] mb-5 tracking-wide">
            By Erik Fish and Caleb Newton
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-[#1d1d1f] tracking-tight leading-none mb-8">
            Seek the<br />Holy Spirit.
          </h1>
          <p className="text-xl text-[#6e6e73] leading-relaxed mb-12 max-w-lg mx-auto">
            A calm, scripture-rooted prayer guide for Christians who want help
            asking God for spiritual gifts, including tongues. No pressure. No hype.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/journey"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#1d1d1f] text-white text-base font-semibold rounded-full hover:bg-[#3a3a3c] transition-colors"
            >
              Begin the Journey
            </Link>
            <Link
              href="/guide"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#f5f5f7] text-[#1d1d1f] text-base font-semibold rounded-full hover:bg-[#e5e5ea] transition-colors"
            >
              Guide Someone Else
            </Link>
          </div>
        </div>
      </section>

      {/* Scripture strip */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { ref: "Luke 11:13", text: "How much more will your Father in heaven give the Holy Spirit to those who ask him!" },
            { ref: "1 Corinthians 14:1", text: "Eagerly desire gifts of the Spirit." },
            { ref: "Acts 1:8", text: "You will receive power when the Holy Spirit comes on you." },
          ].map((s) => (
            <div key={s.ref} className="flex flex-col sm:flex-row sm:items-baseline gap-3">
              <span className="text-sm font-semibold text-[#b5621a] shrink-0 sm:w-44">{s.ref}</span>
              <p className="font-serif italic text-[#1d1d1f] text-base leading-relaxed">
                &ldquo;{s.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What this is */}
      <section className="py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            One thing, done well.
          </h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed mb-6">
            Many Christians are hungry for more of the Holy Spirit but have never had
            someone calmly walk them through what to pray, what to expect, and how to
            continue. This tool does exactly that.
          </p>
          <p className="text-lg text-[#6e6e73] leading-relaxed">
            Built by Erik Fish, a disciple-maker who has personally guided hundreds of
            people through this experience, so his method can reach every Christian who
            has never had someone walk them through it.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] tracking-tight mb-10 text-center">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { n: "01", title: "Scripture first", body: "Every moment is grounded in the Bible. You know exactly what you are asking for and why." },
              { n: "02", title: "Voice guided", body: "A calm AI guide speaks with you. Close your eyes and follow along at your own pace." },
              { n: "03", title: "Yield, not perform", body: "You will be guided to stop praying with your mind and begin praying with your spirit, the way Paul described." },
              { n: "04", title: "Keep going", body: "After the session you get a 3-day and 7-day plan, plus a mode to guide someone else." },
            ].map((item) => (
              <div key={item.n} className="bg-white rounded-2xl p-7">
                <span className="text-xs font-bold text-[#aeaeb2] tracking-widest">{item.n}</span>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mt-3 mb-2">{item.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-28 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1d1d1f] tracking-tight mb-10">
            Our promise.
          </h2>
          <div className="space-y-4 text-left">
            {[
              "We will not force a result.",
              "We will not shame your pace.",
              "We will not replace your church.",
              "We will help you seek God with clarity, faith, and peace.",
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#b5621a] shrink-0" />
                <p className="text-lg text-[#1d1d1f]">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1d1d1f] text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Ready to begin?
          </h2>
          <p className="text-lg text-[#aeaeb2] mb-10 leading-relaxed">
            If you follow Jesus and want to seek the gifts of the Holy Spirit,
            you are in the right place.
          </p>
          <Link
            href="/journey"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#1d1d1f] text-base font-semibold rounded-full hover:bg-[#f5f5f7] transition-colors"
          >
            Begin the Journey
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
