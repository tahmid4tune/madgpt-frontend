import { getMessagesByChatId } from "../../actions/chat";
import { Messages } from "./Messages";

export default async function MessagesData({ chatId }: { chatId: string }) {
  const messages = await getMessagesByChatId(chatId);
  return <Messages messages={messages} />;
}
