export type MessageType = {
  role: string;
  content: string;
};

export type MessagesType = { messages: MessageType[] };
