//js의 오류를 줄임
"use strict";

const socket = io();

const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");

sendButton.addEventListener("click", () => {
  const param = {
    name: nickname.value,
    msg: chatInput.value,
  };
  // 보내는 내용
  socket.emit("chatting", param);
});

// 받아주는 내용
socket.on("chatting", (data) => {
  const li = document.createElement("li");
  li.innerText = `${data.name}님이 - ${data.msg}`;
  // chatList에 위에서 생성한 li 내용을 넣는다
  chatList.appendChild(li);
});

console.log(socket);
