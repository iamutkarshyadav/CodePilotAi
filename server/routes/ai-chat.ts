import { RequestHandler } from "express";
import { generateAIResponse, AIMessage } from "../../shared/hf-client";

export interface AIChatRequest {
  messages: AIMessage[];
  includeCode?: boolean;
  currentCode?: string;
  challengeDescription?: string;
}

export interface AIChatResponse {
  message: string;
  error?: string;
}

export const handleAIChat: RequestHandler = async (req, res) => {
  try {
    const { messages, currentCode, challengeDescription } =
      req.body as AIChatRequest;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        error: "Invalid request format. Messages array is required.",
      });
    }

    // Add system context if code is provided
    let contextualMessages = [...messages];
    if (currentCode) {
      const systemContext: AIMessage = {
        role: "system",
        content: `You are a concise JavaScript tutor. Keep responses brief (2-3 sentences max) and use markdown formatting. Be encouraging and practical.

Current student's code:
\`\`\`javascript
${currentCode}
\`\`\`${challengeDescription ? `\n\nChallenge: ${challengeDescription}` : ""}`,
      };
      contextualMessages = [systemContext, ...messages];
    }

    const aiResponse = await generateAIResponse(contextualMessages);

    const response: AIChatResponse = {
      message: aiResponse,
    };

    res.json(response);
  } catch (error) {
    console.error("AI Chat API error:", error);

    const errorResponse: AIChatResponse = {
      message:
        "I'm having trouble connecting right now. Please try again in a moment.",
      error: "AI service temporarily unavailable",
    };

    res.status(500).json(errorResponse);
  }
};

// Helper route for generating hints
export const handleAIHint: RequestHandler = async (req, res) => {
  try {
    const { code, challenge } = req.body;

    if (!code || !challenge) {
      return res.status(400).json({
        error: "Code and challenge description are required for hints.",
      });
    }

    const hintMessage: AIMessage = {
      role: "user",
      content:
        "Can you give me a hint for this challenge? Don't give me the full solution, just point me in the right direction.",
    };

    const systemContext: AIMessage = {
      role: "system",
      content: `You are a concise coding tutor. Provide brief hints (1-2 sentences) using markdown. Challenge: "${challenge}"

Code:
\`\`\`javascript
${code}
\`\`\`

Give a helpful hint, not the full solution.`,
    };

    const aiResponse = await generateAIResponse([systemContext, hintMessage]);

    const response: AIChatResponse = {
      message: aiResponse,
    };

    res.json(response);
  } catch (error) {
    console.error("AI Hint API error:", error);

    const errorResponse: AIChatResponse = {
      message:
        "I'm having trouble generating hints right now. Try breaking down the problem into smaller steps!",
      error: "Hint service temporarily unavailable",
    };

    res.status(500).json(errorResponse);
  }
};
