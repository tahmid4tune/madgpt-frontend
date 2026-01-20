import { getChatHistoryList } from "../../actions/chat";
import { HistoryList } from "./historyList";

export default async function ChatHistory() {
  const chatHistoryList = await getChatHistoryList();
  return chatHistoryList?.length > 0 ? (
    <HistoryList history={chatHistoryList} />
  ) : (
    <></>
  );
}
