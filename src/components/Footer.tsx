export default function Footer() {
  return (
    <footer className="border-t border-[#d2d2d7] bg-[#f5f5f7] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-[#6e6e73]">
              Created by{" "}
              <a
                href="https://erikfish.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1d1d1f] font-medium hover:text-[#b5621a] transition-colors"
              >
                Erik Fish
              </a>{" "}
              &amp;{" "}
              <a
                href="https://calebnewton.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1d1d1f] font-medium hover:text-[#b5621a] transition-colors"
              >
                Caleb Newton
              </a>
            </p>
            <p className="text-xs text-[#aeaeb2] mt-1">
              A ministry tool. Not a startup.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-[#6e6e73]">
            <a href="/journey" className="hover:text-[#1d1d1f] transition-colors">
              Begin Journey
            </a>
            <a href="/guide" className="hover:text-[#1d1d1f] transition-colors">
              Guide Mode
            </a>
            <a href="/follow-up" className="hover:text-[#1d1d1f] transition-colors">
              Follow-Up Plans
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#d2d2d7]">
          <p className="text-xs text-[#aeaeb2] text-center leading-relaxed max-w-2xl mx-auto">
            Scripture quotations taken from the Holy Bible, New International Version® NIV®.
            This tool is designed to guide Christians toward God, not to replace pastoral care,
            church community, or human discipleship. If you are experiencing a mental health crisis,
            please contact a medical professional or call 988.
          </p>
        </div>
      </div>
    </footer>
  );
}
