import React, { useRef, useState } from "react";
import TextField from "./TextField";
import gsap from "gsap";
import MessageComponent from "./MessageComponent";

export default function ChatFrame({ color }) {
  const divRef = useRef(null);
  const [msg, setMsg] = useState("");
  let width;

  // if (window.innerWidth < 768) {
    //   width = window.innerWidth - 26 - 48 - 80;
    //   console.log(width);
    // } else {
      //   width = window.innerWidth / 2 - 220;
      // }
  const getMessage = (msg, mW) => {
    msg = msg.trim();

    width = innerWidth - mW + 120;

    gsap.to(".messageSender", {
      x: width,
    });
    gsap.from(".messageSender", {
      opacity: 0.1,
      duration: 1.8,
      // x: width,
    });
    setMsg(msg);
  };

  return (
    <>
      <div className="flex flex-col justify-between h-[44%] absolute">
        {/* <div
          className={`messageSender ${color} relative m-[10px] w-fit rounded-md ${
            msg ? `px-6 py-2` : `p-0`
          }`}
          ref={divRef}
        >
          {msg}
        </div> */}
        <MessageComponent color={color} msg={msg}/>

        <div>
          <TextField className="" getMessage={getMessage} />
        </div>
      </div>
    </>
  );
}
