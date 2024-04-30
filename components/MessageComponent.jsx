import React from "react";

export default function MessageComponent({ color, msg }) {
  return (
    <>
      <div
        className={`messageSender ${color} m-[10px] w-fit rounded-md ${
          msg ? `px-6 py-2` : `p-0`
        }`}
        // ref={divRef}
      >
        {msg}
      </div>
    </>
  );
}