const { Server } = require('socket.io');
const db = require('./db');

function initSocket(server) {
  const io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection",(socket) => {
  
    socket.on("message", async (msg) => {

      try {
        const now = new Date();
        const formattedDate = now.getFullYear() + '-' +
          String(now.getMonth() + 1).padStart(2, '0') + '-' +
          String(now.getDate()).padStart(2, '0') + ' ' +
          String(now.getHours()).padStart(2, '0') + ':' +
          String(now.getMinutes()).padStart(2, '0') + ':' +
          String(now.getSeconds()).padStart(2, '0');

        await db.query(
          'INSERT INTO messages (username, text, created_at) VALUES (?, ?, ?)',
          [msg.username, msg.text, formattedDate]
        );

        io.emit("message", { ...msg, createdAt: formattedDate });
      } catch (err) {
        console.error(err);
      }
    });
  });

  return io;
}

module.exports = initSocket;
