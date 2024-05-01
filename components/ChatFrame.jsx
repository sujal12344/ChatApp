import React, { useState } from "react";
import TextField from "./TextField";
import gsap from "gsap";
import MessageComponent from "./MessageComponent";

export default function ChatFrame({ color }) {
  const [msg, setMsg] = useState("");

  let isMessageReceive;

  const receiveMessage = (msg) => {
    msg = msg.trim();
    isMessageReceive = true;

    gsap.from(".messageReceive", {
      opacity: 0.1,
      duration: 1.8,
      x: (innerWidth/2 - 60),
    });
    setMsg(msg);
  };

  const sendMessage = (msg) => {
    msg = msg.trim();
    isMessageReceive = false;

    gsap.from(".messageSend", {
      opacity: 0.1,
      duration: 1.8,
      x: -(innerWidth/2 - 60),
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
          <MessageComponent color={color} msg={msg} isMessageReceive={isMessageReceive} className={""}/> 
        </div>

        <div>
          <TextField className="" receiveMessage={receiveMessage} sendMessage={sendMessage}/>
        </div>
      </div>
    </>
  );
}
