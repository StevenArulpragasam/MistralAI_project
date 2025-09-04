import { NextResponse } from "next/server";
import { mistral } from "@ai-sdk/mistral";
import { generateText } from "ai";

//const apiKey = process.env.MISTRAL_API_KEY;

export async function POST(req: Request) {

  const { messages } = await req.json();

  const { text } = await generateText({
    model: mistral("mistral-small-latest"),
    prompt: messages.map((m: any) => `${m.role}: ${m.content}`).join("\n"),
  });

  return NextResponse.json({ reply: text });
}
