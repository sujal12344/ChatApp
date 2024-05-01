import React, { useState } from "react";
import TextField from "./TextField";
import gsap from "gsap";
import MessageComponent from "./MessageComponent";

export default function ChatFrame({ color }) {
  const [msg, setMsg] = useState("");


  const receiveMessage = (msg) => {
    msg = msg.trim();

    gsap.from(".messageReceive", {
      opacity: 0.1,
      duration: 1.8,
      x: innerWidth - 176,
    });
    setMsg(msg);
  };

  const sendMessage = (msg) => {
    msg = msg.trim();

    gsap.from(".messageSend", {
      opacity: 0.1,
      duration: 1.8,
      x: -(innerWidth - 176),
    });
    setMsg(msg);
  };

  return (
    <>
      <div
        style={{ height: innerHeight / 2 - 50 }}
        className={`flex flex-col justify-between absolute`}
      >
        <div className="flex flex-col justify-between">
          <MessageComponent color={color} msg={msg} isMessageReceive={true} />
          <MessageComponent color={color} msg={msg} isMessageReceive={false} />
        </div>

        <div>
          <TextField className="" receiveMessage={receiveMessage} sendMessage={sendMessage}/>
        </div>
      </div>
    </>
  );
}
