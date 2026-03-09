"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#d2d2d7]/60">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold text-[#1d1d1f] tracking-tight hover:text-[#b5621a] transition-colors"
        >
          Holy Spirit Prayer
        </Link>

        <div className="flex items-center gap-1">
          <Link
            href="/journey"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              pathname.startsWith("/journey")
                ? "bg-[#1d1d1f] text-white"
                : "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7]"
            }`}
          >
            Journey
          </Link>
          <Link
            href="/guide"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              pathname.startsWith("/guide")
                ? "bg-[#1d1d1f] text-white"
                : "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7]"
            }`}
          >
            Guide Mode
          </Link>
          <Link
            href="/follow-up"
            className={`hidden sm:block px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              pathname.startsWith("/follow-up")
                ? "bg-[#1d1d1f] text-white"
                : "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7]"
            }`}
          >
            Follow-Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
