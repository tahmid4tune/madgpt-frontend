export type MessageType = {
  role: "system" | "user" | "assistant";
  content: string;
  optimistic?: boolean;
};

export type MessagesType = {
  messages: MessageType[];
};
