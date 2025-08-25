const http = require('http');
const express = require('express');
const path = require('path');
const initSocket = require('./socket');
const messagesRouter = require('./routes/messages');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../../client/build')));
app.use('/messages', messagesRouter);

const server = http.createServer(app);
initSocket(server);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
