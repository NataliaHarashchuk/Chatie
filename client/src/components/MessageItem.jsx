import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { useChat } from "./ChatContext";

const MessageItem = ({ message }) => {
  const { username } = useChat();
  const isMe = message.username === username;

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleString("uk-UA", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Box display="flex" justifyContent={isMe ? "flex-end" : "flex-start"} mb={1}>
      <Paper
        sx={{
          p: 1.5,
          maxWidth: "70%",
          bgcolor: isMe ? "primary.main" : "grey.300",
          color: isMe ? "white" : "black",
        }}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {isMe ? "Я" : message.username}
        </Typography>

        <Typography variant="body1">{message.text}</Typography>

        <Typography variant="caption" sx={{ display: "block", mt: 0.5, opacity: 0.8 }}>
          {formatDate(message.created_at)}
        </Typography>
      </Paper>
    </Box>
  );
};

export default MessageItem;
