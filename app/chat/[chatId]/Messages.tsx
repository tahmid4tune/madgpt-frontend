"use client";

import { Box, Paper, Stack } from "@mui/material";
import { MessagesType } from "./types/messageType";

export const Messages = ({ messages }: MessagesType) => {
  const parseStructuredMessage = (message: string) => {
    try {
      const messageArr = JSON.parse(message);

      if (!Array.isArray(messageArr)) return message;

      return (
        <>
          {messageArr.map((item, index) => {
            if (item.type === "bold") {
              return (
                <div key={index}>
                  <strong>{item.text}</strong>
                </div>
              );
            }

            return (
              <div key={index}>
                <span>{item.text}</span>
              </div>
            );
          })}
        </>
      );
    } catch (_e) {
      return message;
    }
  };
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
            {msg.role === "user"
              ? msg.content
              : parseStructuredMessage(msg.content)}
          </Paper>
        </Box>
      ))}
    </Stack>
  );
};
