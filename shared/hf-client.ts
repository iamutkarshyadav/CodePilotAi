import OpenAI from 'openai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize OpenRouter client with environment variables
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY || "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",
  defaultHeaders: {
    "HTTP-Referer": process.env.SITE_URL || "http://localhost:8080", // Optional. Site URL for rankings on openrouter.ai.
    "X-Title": process.env.SITE_NAME || "Zen Studio", // Optional. Site title for rankings on openrouter.ai.
  },
});

// AI chat interface
export interface AIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

// Generate AI response with context
export async function generateAIResponse(
  messages: AIMessage[],
): Promise<string> {
  try {
    // Convert messages to OpenAI format
    const chatMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    try {
      const completion = await openai.chat.completions.create({
        model: "google/gemini-2.5-flash",
        messages: chatMessages,
        max_tokens: 500,
        temperature: 0.7,
      });

      const generatedText = completion.choices[0]?.message?.content?.trim();
      if (generatedText && generatedText.length > 10) {
        return generatedText;
      }
    } catch (chatError) {
      console.log("OpenRouter chat completion failed, using fallback...");
    }

    // If the response is too short or empty, provide a helpful fallback
    const lastUserMessage = messages.filter((msg) => msg.role === "user").pop()?.content || "";
    return generateFallbackResponse(lastUserMessage);
  } catch (error) {
    console.error("OpenRouter API error:", error);

    // Return a contextual fallback response
    const lastUserMessage =
      messages.filter((msg) => msg.role === "user").pop()?.content || "";
    return generateFallbackResponse(lastUserMessage);
  }
}

// Helper function to generate fallback responses
function generateFallbackResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  if (message.includes("function")) {
    return "**Functions** are reusable code blocks that take inputs and return outputs. Use `function` keyword or arrow functions `() => {}`.";
  } else if (message.includes("variable")) {
    return "**Variables** store data values. Use `let`, `const`, or `var`. `const` is preferred for values that won't change.";
  } else if (message.includes("loop")) {
    return "**Loops** repeat code. Try `for`, `while`, or `forEach()`. Which type are you working with?";
  } else if (message.includes("error") || message.includes("bug")) {
    return "**Debugging tip**: Check for missing semicolons, typos, or syntax errors. Share the error message for specific help!";
  } else if (message.includes("array")) {
    return "**Arrays** are ordered lists. Access with `[index]`, use methods like `push()`, `pop()`, `forEach()`.";
  } else {
    return "**Need help?** Ask about functions, variables, loops, arrays, or share your code for specific feedback!";
  }
}

// Helper function to create system context for code explanation
export function createCodeContext(
  code: string,
  challengeDescription?: string,
): AIMessage {
  let context = `You are an expert JavaScript tutor helping a student learn to code. Be encouraging, clear, and provide practical examples.

Current code:
\`\`\`javascript
${code}
\`\`\``;

  if (challengeDescription) {
    context += `\n\nChallenge: ${challengeDescription}`;
  }

  return {
    role: "system",
    content: context,
  };
}

// Helper function to create hint context
export function createHintContext(code: string, challenge: string): AIMessage {
  return {
    role: "system",
    content: `You are a helpful coding tutor. The student is working on this challenge: "${challenge}"

Their current code:
\`\`\`javascript
${code}
\`\`\`

Provide a helpful hint (not the full solution) to guide them in the right direction. Keep it encouraging and educational.`,
  };
}
