import React from "react";
import { Stack } from "@mui/material";
import MessageItem from "./MessageItem";
import { useChat } from "./ChatContext";

const ChatWindow = () => {
  const { messages } = useChat();

  return (
    <Stack spacing={1}>
      {messages.map((msg, index) => (
        <MessageItem key={index} message={msg} />
      ))}
    </Stack>
  );
};

export default ChatWindow;
