interface ScriptureCardProps {
  reference: string;
  text: string;
  translation?: string;
  plain?: string;
  variant?: "default" | "featured" | "minimal";
}

export default function ScriptureCard({
  reference,
  text,
  translation = "NIV",
  plain,
  variant = "default",
}: ScriptureCardProps) {
  if (variant === "featured") {
    return (
      <div className="bg-[#f5f5f7] rounded-2xl p-8 md:p-10">
        <p className="scripture-text text-lg md:text-xl text-[#1d1d1f] leading-relaxed mb-6">
          &ldquo;{text}&rdquo;
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-[#b5621a]">
            {reference}
          </span>
          <span className="text-xs text-[#aeaeb2] uppercase tracking-wider">
            {translation}
          </span>
        </div>
        {plain && (
          <p className="mt-4 pt-4 border-t border-[#d2d2d7] text-sm text-[#6e6e73] leading-relaxed">
            {plain}
          </p>
        )}
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className="border-l-2 border-[#b5621a] pl-5 py-1">
        <p className="scripture-text text-base text-[#1d1d1f] leading-relaxed mb-2">
          &ldquo;{text}&rdquo;
        </p>
        <span className="text-xs font-semibold text-[#b5621a]">
          — {reference} ({translation})
        </span>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#d2d2d7] rounded-xl p-6">
      <p className="scripture-text text-base text-[#1d1d1f] leading-relaxed mb-4">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5621a]">{reference}</span>
        <span className="text-xs text-[#aeaeb2] uppercase tracking-wider">
          {translation}
        </span>
      </div>
      {plain && (
        <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">{plain}</p>
      )}
    </div>
  );
}
