"use server"
import { OpenAI } from 'openai'

export type Message = {
  role: 'user' | 'assistant',
  content: string
}

const openai = new OpenAI({
  baseURL: 'https://glama.ai/api/gateway/openai/v1',
  apiKey: process.env.GLAMA_API_KEY,
});

export const getCompletion = async (
  messageHistory: Message[]
) => {
  const response = await openai.chat.completions.create({
    messages: messageHistory,
    model: 'anthropic/claude-3-5-haiku-20241022',
  });

  console.log(response);

  const messages = [...messageHistory, response.choices[0].message as Message]

  return {
    messages
  }
}