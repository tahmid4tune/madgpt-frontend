"use client";

import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function NewChatButton() {
  const router = useRouter();

  const handleNewChat = () => {
    const chatId = uuidv4();
    router.push(`/chat/${chatId}`);
  };

  return (
    <Button
      variant="contained"
      fullWidth
      sx={{
        mb: 2,
        bgcolor: "#374151",
        color: "white",
        "&:hover": { bgcolor: "#4b5563" },
      }}
      startIcon={<AddIcon />}
      onClick={handleNewChat}
    >
      New Chat
    </Button>
  );
}
