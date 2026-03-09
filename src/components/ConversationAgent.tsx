"use client";
import { useConversation } from "@elevenlabs/react";
import { useCallback, useState } from "react";

interface ConversationAgentProps {
  agentId: string;
  mode?: "journey" | "guide";
}

export default function ConversationAgent({
  agentId,
  mode = "journey",
}: ConversationAgentProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [micError, setMicError] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      setHasStarted(true);
      setMicError(null);
    },
    onDisconnect: () => {
      setHasStarted(false);
    },
    onError: (error) => {
      console.error("Conversation error:", error);
      setMicError(
        typeof error === "string"
          ? error
          : "Something went wrong. Please try again."
      );
    },
    onMessage: (message) => {
      console.log("Message:", message);
    },
  });

  const startConversation = useCallback(async () => {
    setMicError(null);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({ agentId });
    } catch {
      setMicError(
        "Microphone access is required to speak with the guide. Please allow microphone access and try again."
      );
    }
  }, [conversation, agentId]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const isConnected = conversation.status === "connected";
  const isSpeaking = conversation.isSpeaking;

  if (!agentId) {
    return (
      <div className="rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] p-8 text-center">
        <p className="text-[#6e6e73] text-sm">
          Agent not configured. Add{" "}
          <code className="bg-[#e5e5ea] px-1.5 py-0.5 rounded text-xs font-mono">
            NEXT_PUBLIC_ELEVENLABS_AGENT_ID
          </code>{" "}
          to your <code className="bg-[#e5e5ea] px-1.5 py-0.5 rounded text-xs font-mono">.env.local</code> and run{" "}
          <code className="bg-[#e5e5ea] px-1.5 py-0.5 rounded text-xs font-mono">npm run setup:agent</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      {!isConnected ? (
        /* ── Start Screen ──────────────────────────────────────── */
        <div className="text-center">
          <div className="mb-10">
            {/* Flame icon — SVG */}
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <svg
                viewBox="0 0 64 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-20 animate-breathe"
              >
                <path
                  d="M32 4C32 4 44 20 44 34C44 41 40 47 34 50C36 44 34 38 30 34C28 30 28 26 30 22C24 28 20 36 20 44C20 58 26 68 32 68C38 68 52 60 52 44C52 28 38 14 32 4Z"
                  fill="#b5621a"
                  opacity="0.9"
                />
                <path
                  d="M32 36C32 36 38 44 36 52C34 58 28 62 28 62C30 56 28 50 24 46C22 50 22 56 24 60C20 56 18 50 18 44C18 36 24 30 32 36Z"
                  fill="#e8924a"
                  opacity="0.8"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              {mode === "guide"
                ? "Guide Mode"
                : "Your guide is ready."}
            </h2>
            <p className="text-[#6e6e73] text-base leading-relaxed max-w-sm mx-auto">
              {mode === "guide"
                ? "I'll coach you step by step through walking a friend toward the baptism of the Holy Spirit."
                : "Find a quiet place. Take a breath. Your voice guide will lead you through scripture, prayer, and your first practice — at your pace."}
            </p>
          </div>

          {micError && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-xl px-5 py-4">
              <p className="text-red-700 text-sm">{micError}</p>
            </div>
          )}

          <button
            onClick={startConversation}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#1d1d1f] text-white text-base font-semibold rounded-full hover:bg-[#3a3a3c] active:scale-95 transition-all"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#b5621a]" />
            {mode === "guide" ? "Open Guide Mode" : "Begin the Journey"}
          </button>

          <p className="mt-5 text-xs text-[#aeaeb2]">
            Requires microphone access. Your audio is not stored.
          </p>
        </div>
      ) : (
        /* ── Active Conversation ───────────────────────────────── */
        <div className="text-center">
          {/* Status orb */}
          <div className="mb-10 flex flex-col items-center gap-4">
            <div
              className={`relative w-28 h-28 rounded-full flex items-center justify-center transition-all duration-500 ${
                isSpeaking
                  ? "bg-[#b5621a]/10 scale-110"
                  : "bg-[#f5f5f7]"
              }`}
            >
              {/* Outer ring */}
              {isSpeaking && (
                <div className="absolute inset-0 rounded-full border-2 border-[#b5621a]/30 animate-ping" />
              )}
              {/* Icon */}
              <svg
                viewBox="0 0 64 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`w-12 h-14 transition-all duration-300 ${
                  isSpeaking ? "opacity-100" : "opacity-50"
                }`}
              >
                <path
                  d="M32 4C32 4 44 20 44 34C44 41 40 47 34 50C36 44 34 38 30 34C28 30 28 26 30 22C24 28 20 36 20 44C20 58 26 68 32 68C38 68 52 60 52 44C52 28 38 14 32 4Z"
                  fill="#b5621a"
                />
                <path
                  d="M32 36C32 36 38 44 36 52C34 58 28 62 28 62C30 56 28 50 24 46C22 50 22 56 24 60C20 56 18 50 18 44C18 36 24 30 32 36Z"
                  fill="#e8924a"
                />
              </svg>
            </div>

            {/* Status text */}
            <div>
              <p className="text-base font-medium text-[#1d1d1f]">
                {isSpeaking ? "Guide is speaking..." : "Listening..."}
              </p>
              <p className="text-sm text-[#aeaeb2] mt-1">
                {isSpeaking
                  ? "Take your time. Let the words land."
                  : "Speak freely — ask questions, share how you feel, respond to the guide."}
              </p>
            </div>
          </div>

          {/* Live indicator */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-[#6e6e73]">Connected</span>
          </div>

          <button
            onClick={stopConversation}
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#f5f5f7] text-[#6e6e73] text-sm font-medium rounded-full hover:bg-[#e5e5ea] hover:text-[#1d1d1f] transition-colors"
          >
            End Session
          </button>

          <p className="mt-5 text-xs text-[#aeaeb2]">
            You can return anytime to continue your journey.
          </p>
        </div>
      )}
    </div>
  );
}
