import React, { useContext } from "react";
import { ChatContext } from "./ChatContext";
import { Box, TextField, Button } from "@mui/material";

const MessageInput = () => {
  const { input, setInput, sendMessage } = useContext(ChatContext);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Box sx={{ display: "flex", p: 1, bgcolor: "grey.200" }}>
      <TextField
        fullWidth
        size="small"
        placeholder="Напишіть повідомлення..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button variant="contained" sx={{ ml: 1 }} onClick={sendMessage}>
        Відправити
      </Button>
    </Box>
  );
};

export default MessageInput;
