import { Suspense } from "react";
import MessagesSkeleton from "./MessagesSkeleton";
import MessagesData from "./MessagesData";
import ChatInput from "./ChatInput";

export default async function ChatPage({
  params,
}: {
  params: Promise<{ chatId: string }>;
}) {
  const { chatId } = await params;
  return (
    <div className="h-[85vh] flex flex-col">
      <Suspense fallback={<MessagesSkeleton />}>
        <MessagesData chatId={chatId} />
      </Suspense>

      <ChatInput chatId={chatId} />
    </div>
  );
}
