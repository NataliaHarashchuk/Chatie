import React, { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";

export const ChatContext = createContext();

const socket = io("http://localhost:4000");

export const ChatProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch("http://localhost:4000/messages");
        const data = await res.json();
        console.log("📦 Raw дані з сервера:", data);

        setMessages(data);
      } catch (err) {
        console.error("Помилка при завантаженні історії:", err);
      }
    };

    fetchHistory();
  }, []);

  useEffect(() => {
    const handleMessage = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("message", handleMessage);
    return () => socket.off("message", handleMessage);
  }, []);

  const sendMessage = () => {
    if (!input.trim() || !username.trim()) return;

    const msg = {
      text: input,
      username,
      created_at: new Date().toISOString(),
      self: true,
    };

    socket.emit("message", msg);
    setMessages((prev) => [...prev, msg]);
    setInput("");
  };

  return (
    <ChatContext.Provider
      value={{
        username,
        setUsername,
        messages,
        input,
        setInput,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
