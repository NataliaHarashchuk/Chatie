import React, { useState, useContext } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import { ChatContext } from './ChatContext';

const ChatUserName = () => {
  const { username, setUsername } = useContext(ChatContext);
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(username);

  const handleDoubleClick = () => {
    setTempName(username);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setTempName(e.target.value);
  };

  const handleBlur = () => {
    if (tempName.trim()) setUsername(tempName.trim());
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  return (
    <Box sx={{ p: 1 }}>
      {isEditing ? (
        <TextField
          value={tempName}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          size="small"
          autoFocus
        />
      ) : (
        <Typography
          variant="h6"
          onDoubleClick={handleDoubleClick}
          sx={{ cursor: 'pointer' }}
        >
          {username || 'Ваш нікнейм'}
        </Typography>
      )}
    </Box>
  );
};

export default ChatUserName;
