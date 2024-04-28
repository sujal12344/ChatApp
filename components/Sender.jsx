import React, { createContext, useContext, useRef, useState } from "react";
import Profile from "./Profile";
import MessageComponent from "./MessageComponent";
import TextField from "./TextField";
import gsap from "gsap";

export default function Receiver({ color }) {
  const divRef = useRef(null);
  const [msg, setMsg] = useState("");

  let width;
  if (window.innerWidth < 768) {
    width = window.innerWidth - 26 - 48 - 80;
    console.log(width);
  } else {
    width = window.innerWidth / 2 - 220;
  }
  const getMessage = (msg) => {
    msg = msg.trim();

    gsap.to(".messageSender", {
      x: width,
    });
    gsap.from(".messageSender", {
      opacity: 0.1,
      duration: 5,
      // x: width,
    });
    setMsg(msg);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-start">
          <div
            className={`messageSender ${color} relative top-[10px] left-[10px] rounded-md ${
              msg ? `px-6 py-2` : `p-0`
            }`}
            ref={divRef}
          >
            {msg}
          </div>

          <div className="absolute bottom-[50%] left-[25px]">
            <TextField className="" getMessage={getMessage} />
          </div>
        </div>
      </div>
    </>
  );
}
