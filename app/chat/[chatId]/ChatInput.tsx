"use client";

import { IconButton, InputAdornment, TextField } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useState, useTransition } from "react";
import { sendPromptToMadGPT } from "../../actions/chat";

export default function ChatInput({ chatId }: { chatId: string }) {
  const [prompt, setPrompt] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    if (!prompt.trim()) return;

    const userMessage = prompt;
    setPrompt("");

    startTransition(async () => {
      await sendPromptToMadGPT(chatId, userMessage);
    });
  };

  return (
    <TextField
      placeholder="What's on your mind...?"
      multiline
      minRows={3}
      maxRows={8}
      fullWidth
      variant="standard"
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      disabled={isPending}
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              sx={{
                color: "#9ca3af",
                alignSelf: "flex-end",
                mb: 1, // nudges it down for multiline
              }}
              onClick={handleSubmit}
              disabled={isPending}
            >
              <ArrowCircleUpIcon fontSize="large" />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        bgcolor: "#0b1220",
        borderRadius: 3,
        px: 2,
        py: 1.5,
        color: "white",
        "& textarea": {
          color: "white",
          paddingRight: "36px", // IMPORTANT: space for the icon
        },
        "&::placeholder": {
          color: "#9ca3af",
          opacity: 1,
        },
      }}
    />
  );
}
