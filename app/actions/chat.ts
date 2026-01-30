"use server";

import { revalidatePath, revalidateTag } from "next/cache";
const backendUrl = process.env.MAD_GPT_BACKEND;

export async function sendPromptToMadGPT(
  chatId: string,
  prompt: string,
  model: string
) {
  // This is the API endpoint called when user sends message
  const res = await fetch(`${backendUrl}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt, chatId, model }),
    cache: "no-store", // important for AI calls
  });
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  revalidatePath(`/chat/${chatId}`);
  revalidateTag("chat-history", "default");
  return await res.json();
}

export async function getMessagesByChatId(chatId: string) {
  const res = await fetch(`${backendUrl}/chat/${chatId}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to load chat history");
  }
  return await res.json();
}

export async function getChatHistoryList() {
  const res = await fetch(`${backendUrl}/chat/history`, {
    next: {
      tags: ["chat-history"],
    },
  });
  if (!res.ok) {
    throw new Error("Failed to load chat history");
  }
  return await res.json();
}

export async function deleteChatHistory(chatId: string) {
  const res = await fetch(`${backendUrl}/chat/${chatId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  revalidateTag("chat-history", "default");
  return await res.json();
}
