const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);

// node modules에서 socket.io를 불러옴
const socketIO = require("socket.io");

const io = socketIO(server);

// .env파일에 저장되어 있는 port를 사용하거나 5000번 포트 사용
const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  socket.on("chatting", (data) => {
    io.emit("chatting", data);
  });
});

app.use(express.static(path.join(__dirname, "src")));

server.listen(PORT, () => console.log(`Server is running ${PORT}`));
