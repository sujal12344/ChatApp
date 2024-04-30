import React from "react";
import Sender from "./Sender"

export default function Chat({color, position}) {
  let borderColor= `border-${color}`;
  let bgColor= `bg-${color}`;
  console.log(borderColor);
  return (
    <>
      <div className={`md:col-span-1 row-span-1 border-4 border-solid ${borderColor} rounded-2xl bg-[#20272b]`}>
        <Sender color={`${bgColor}`} position={position}/>
      </div>
    </>
  );
}