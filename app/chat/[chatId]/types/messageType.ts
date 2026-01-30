export type MessageType = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type MessagesType = { messages: MessageType[] };
