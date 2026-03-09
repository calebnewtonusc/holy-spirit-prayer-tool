/**
 * Setup ElevenLabs Conversational AI Agents
 *
 * Run: npm run setup:agent
 *
 * This script creates two agents:
 *   1. The main Holy Spirit Prayer Guide (for solo seekers)
 *   2. The Guide Mode agent (for leaders walking others through the experience)
 *
 * After running, copy the agent IDs into your .env.local file.
 */

import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
import "dotenv/config";
import { PRAYER_GUIDE_SYSTEM_PROMPT, GUIDE_MODE_SYSTEM_PROMPT } from "../src/data/agentPrompts";

const apiKey = process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
  console.error("❌  Missing ELEVENLABS_API_KEY in environment.");
  console.error("    Copy .env.example → .env.local and add your key.");
  process.exit(1);
}

const client = new ElevenLabsClient({ apiKey });

async function createAgent(name: string, prompt: string, description: string) {
  console.log(`\n⏳  Creating agent: ${name}...`);

  const agent = await client.conversationalAi.agents.create({
    name,
    conversationConfig: {
      agent: {
        prompt: {
          prompt,
        },
        firstMessage:
          name.includes("Guide")
            ? "Welcome to Guide Mode. I'm here to coach you through walking someone else toward the baptism of the Holy Spirit. Are you ready to get started?"
            : "Welcome. You're in a safe place. I'm here to guide you — with scripture, prayer, and peace — toward seeking the gifts of the Holy Spirit. There's no pressure here. Whenever you're ready, let's begin.",
        language: "en",
      },
      tts: {
        // "Rachel" voice — warm, calm, pastoral tone
        voiceId: "21m00Tcm4TlvDq8ikWAM",
        modelId: "eleven_turbo_v2",
      },
      conversation: {
        maxDurationSeconds: 3600, // 1 hour max session
      },
    },
    platformSettings: {
      widget: {
        variant: "full",
      },
    },
  });

  console.log(`✅  Created: ${name}`);
  console.log(`   Agent ID: ${agent.agentId}`);
  console.log(`   ${description}`);
  return agent.agentId;
}

async function main() {
  console.log("🕊️  Holy Spirit Prayer Tool — ElevenLabs Agent Setup\n");
  console.log("━".repeat(52));

  const prayerAgentId = await createAgent(
    "Holy Spirit Prayer Guide",
    PRAYER_GUIDE_SYSTEM_PROMPT,
    "Main journey agent for solo seekers"
  );

  const guideModeAgentId = await createAgent(
    "Holy Spirit Prayer Guide — Leader Mode",
    GUIDE_MODE_SYSTEM_PROMPT,
    "Coach agent for leaders guiding others"
  );

  console.log("\n━".repeat(52));
  console.log("\n✅  All agents created. Add these to your .env.local:\n");
  console.log(`NEXT_PUBLIC_ELEVENLABS_AGENT_ID=${prayerAgentId}`);
  console.log(`NEXT_PUBLIC_ELEVENLABS_GUIDE_AGENT_ID=${guideModeAgentId}`);
  console.log("\nThen restart your dev server.\n");
}

main().catch((err) => {
  console.error("❌  Setup failed:", err.message);
  process.exit(1);
});
