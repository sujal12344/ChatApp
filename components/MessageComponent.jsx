import React, { useRef } from "react";

export default function MessageComponent({ color, msg, getWidth }) {
  const divRef = useRef(0)
  let lastmW = divRef.current.offsetWidth;
  console.log("lastmW", lastmW);
  getWidth(lastmW);
  return (
    <>
      <div
        style={{ background: color}}
        className={`messageSender relative m-[10px] w-fit rounded-md ${
          msg ? `px-6 py-2` : `p-0`
        }`}
        ref={divRef}
      >
        {msg}
        {lastmW}
      </div>
    </>
  );
}