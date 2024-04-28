import React, { useState } from "react";
import Profile from "./Profile";
import MessageComponent from "./MessageComponent";
import TextField from "./TextField";
import gsap from "gsap";

export default function Sender({color}) {
  const [msg, setMsg] = useState("");

  const getMessage = (msg) => {
    msg = msg.trim();
    gsap.to(".message", {
      x: 200
    });
    setMsg(msg);
  };

  return (
    <>
        <div className="">
          <div className="flex justify-start">
            <div
              className={`message ${color} relative top-[10px] left-[10px] rounded-md ${
                msg ? `px-6 py-2` : `p-0`
              }`}
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
