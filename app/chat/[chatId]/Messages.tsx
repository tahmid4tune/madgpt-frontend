"use client";

import { Box, Paper, Stack } from "@mui/material";
import { MessagesType } from "./types/messageType";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Messages = ({ messages }: MessagesType) => {
  return (
    <Stack spacing={1.5} sx={{ flexGrow: 1, overflowY: "auto", p: 2 }}>
      {messages.map((msg, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
          }}
        >
          <Paper
            sx={{
              px: 2,
              py: 1,
              maxWidth: "70%",
              borderRadius: 2,
              bgcolor: msg.role === "user" ? "#FADADD" : "grey.200",
            }}
          >
            <pre
              className="font-serif"
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                overflowWrap: "anywhere",
              }}
            >
              <Markdown remarkPlugins={[remarkGfm]}>{msg.content}</Markdown>
            </pre>
          </Paper>
        </Box>
      ))}
    </Stack>
  );
};
