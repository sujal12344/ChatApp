import React, { useRef, useState } from "react";
import TextField from "./TextField";
import gsap from "gsap";
import MessageComponent from "./MessageComponent";

export default function ChatFrame({ color }) {

  const [msg, setMsg] = useState("");

  const divRef = useRef(null);

  const getlenth = (gl) => {
    console.log("getlength", gl);
    console.log("innerW", innerWidth);
    console.log("innerH", innerHeight);
    
    gsap.to(".messageSender", {
      x: innerWidth - gl,
    });
  };
  
  const getMessage = (msg) => {
    msg = msg.trim();

    gsap.from(".messageSender", {
      opacity: 0.1,
      duration: 1.8,
    });
    setMsg(msg);
  };

  return (
    <>
      <div
        style={{ height: innerHeight / 2 - 50 }}
        className={`flex flex-col justify-between absolute`}
      >
        <MessageComponent color={color} msg={msg} getWidth={getlenth} />

        <div>
          <TextField className="" getMessage={getMessage} />
        </div>
      </div>
    </>
  );
}
