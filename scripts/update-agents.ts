/**
 * Update existing ElevenLabs agents with:
 * - eleven_flash_v2 model (significantly faster response)
 * - More conversational, natural system prompts
 * - Separate solo vs guide mode clearly
 */

import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
import "dotenv/config";
import { PRAYER_GUIDE_SYSTEM_PROMPT, GUIDE_MODE_SYSTEM_PROMPT } from "../src/data/agentPrompts";

const apiKey = process.env.ELEVENLABS_API_KEY;
if (!apiKey) { console.error("Missing ELEVENLABS_API_KEY"); process.exit(1); }

const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID!;
const GUIDE_AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_GUIDE_AGENT_ID!;

const client = new ElevenLabsClient({ apiKey });

async function updateAgent(agentId: string, name: string, prompt: string, firstMessage: string) {
  console.log(`Updating: ${name} (${agentId})`);
  await client.conversationalAi.agents.update(agentId, {
    name,
    conversationConfig: {
      agent: {
        prompt: { prompt },
        firstMessage,
        language: "en",
      },
      tts: {
        voiceId: "21m00Tcm4TlvDq8ikWAM",
        modelId: "eleven_flash_v2",
      },
      conversation: { maxDurationSeconds: 3600 },
    },
  });
  console.log(`Done: ${name}`);
}

async function main() {
  await updateAgent(
    AGENT_ID,
    "Holy Spirit Prayer Guide",
    PRAYER_GUIDE_SYSTEM_PROMPT,
    "Hey, welcome. I'm really glad you're here. This is a safe place -- no pressure, no performance. I'm just here to walk with you toward the Holy Spirit in a calm, scripture-grounded way. Before we begin, can I ask -- are you somewhere quiet where you can pray for a few minutes?"
  );

  await updateAgent(
    GUIDE_AGENT_ID,
    "Holy Spirit Prayer Guide -- Leader Mode",
    GUIDE_MODE_SYSTEM_PROMPT,
    "Hey, welcome to guide mode. I'm going to coach you through walking a friend toward the baptism of the Holy Spirit, step by step, the way Erik Fish does it. Are you ready to start? And is your friend with you now, or are you preparing for later?"
  );

  console.log("\nBoth agents updated. Deploy to pick up changes.");
}

main().catch(console.error);
