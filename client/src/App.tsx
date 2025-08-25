import React from 'react';
import { Container,  Box, Paper, Typography } from '@mui/material';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import ChatUserName from './components/ChatUserName';

function App() {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ p: 2, borderBottom: "1px solid #ddd" }}>
        <ChatUserName/>
      </Box>

      <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
        <ChatWindow />
      </Box>

      <Box sx={{ p: 2, borderTop: "1px solid #ddd" }}>
        <MessageInput />
      </Box>
    </Paper>
  );
}

export default App;
