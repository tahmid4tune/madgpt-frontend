"use client";

import { Box, Paper, Stack } from "@mui/material";
import { MessagesType } from "./types/messageType";

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
              bgcolor: msg.role === "user" ? "primary.main" : "grey.200",
            }}
          >
            {msg.content}
          </Paper>
        </Box>
      ))}
    </Stack>
  );
};
