"use client";
import { useConversation } from "@elevenlabs/react";
import { useCallback, useState } from "react";

interface ConversationAgentProps {
  agentId: string;
  mode?: "journey" | "guide";
}

export default function ConversationAgent({ agentId, mode = "journey" }: ConversationAgentProps) {
  const [micError, setMicError] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => setMicError(null),
    onError: (error) => {
      setMicError(typeof error === "string" ? error : "Something went wrong. Please try again.");
    },
  });

  const start = useCallback(async () => {
    setMicError(null);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({ agentId });
    } catch {
      setMicError("Microphone access is required. Please allow it and try again.");
    }
  }, [conversation, agentId]);

  const stop = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const isConnected = conversation.status === "connected";
  const isSpeaking = conversation.isSpeaking;

  if (!agentId) {
    return (
      <div className="text-center">
        <p className="text-sm text-[#aeaeb2]">
          Agent not configured. Add{" "}
          <code className="bg-white px-1.5 py-0.5 rounded text-xs font-mono">
            NEXT_PUBLIC_ELEVENLABS_{mode === "guide" ? "GUIDE_" : ""}AGENT_ID
          </code>{" "}
          to your environment variables.
        </p>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="text-center">
        {/* Flame */}
        <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center">
          <svg viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-14 animate-breathe">
            <path d="M32 4C32 4 44 20 44 34C44 41 40 47 34 50C36 44 34 38 30 34C28 30 28 26 30 22C24 28 20 36 20 44C20 58 26 68 32 68C38 68 52 60 52 44C52 28 38 14 32 4Z" fill="#b5621a" opacity="0.9" />
            <path d="M32 36C32 36 38 44 36 52C34 58 28 62 28 62C30 56 28 50 24 46C22 50 22 56 24 60C20 56 18 50 18 44C18 36 24 30 32 36Z" fill="#e8924a" opacity="0.8" />
          </svg>
        </div>

        <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">
          {mode === "guide" ? "Coach is ready." : "Your guide is ready."}
        </h3>
        <p className="text-sm text-[#6e6e73] mb-8 leading-relaxed max-w-xs mx-auto">
          {mode === "guide"
            ? "Your coach will give you scripts and guidance step by step."
            : "Find a quiet place. Take a breath. Then begin."}
        </p>

        {micError && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-xl px-5 py-3">
            <p className="text-red-700 text-sm">{micError}</p>
          </div>
        )}

        <button
          onClick={start}
          className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#1d1d1f] text-white text-sm font-semibold rounded-full hover:bg-[#3a3a3c] active:scale-95 transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-[#b5621a]" />
          {mode === "guide" ? "Open Guide Mode" : "Begin"}
        </button>

        <p className="mt-4 text-xs text-[#aeaeb2]">Requires microphone. Your audio is not stored.</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      {/* Pulsing orb */}
      <div className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center">
        {isSpeaking && (
          <div className="absolute inset-0 rounded-full border-2 border-[#b5621a]/20 animate-ping" />
        )}
        <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${isSpeaking ? "bg-[#b5621a]/10 scale-105" : "bg-white"}`}>
          <svg viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-9 h-11 transition-opacity duration-300 ${isSpeaking ? "opacity-100" : "opacity-40"}`}>
            <path d="M32 4C32 4 44 20 44 34C44 41 40 47 34 50C36 44 34 38 30 34C28 30 28 26 30 22C24 28 20 36 20 44C20 58 26 68 32 68C38 68 52 60 52 44C52 28 38 14 32 4Z" fill="#b5621a" />
            <path d="M32 36C32 36 38 44 36 52C34 58 28 62 28 62C30 56 28 50 24 46C22 50 22 56 24 60C20 56 18 50 18 44C18 36 24 30 32 36Z" fill="#e8924a" />
          </svg>
        </div>
      </div>

      <p className="text-base font-medium text-[#1d1d1f] mb-1">
        {isSpeaking ? "Speaking..." : "Listening..."}
      </p>
      <p className="text-sm text-[#aeaeb2] mb-8">
        {isSpeaking ? "Let the words settle." : "Speak freely."}
      </p>

      <div className="flex items-center justify-center gap-2 mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs text-[#6e6e73]">Connected</span>
      </div>

      <button
        onClick={stop}
        className="px-6 py-2.5 bg-white border border-[#d2d2d7] text-[#6e6e73] text-sm font-medium rounded-full hover:bg-[#f5f5f7] hover:text-[#1d1d1f] transition-colors"
      >
        End Session
      </button>
    </div>
  );
}
