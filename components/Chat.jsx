import React from "react";
import Sender from "./Sender"

export default function Chat({color, position}) {
  // let Color= color;
  // console.log(Color);
  return (
    <>
      <div className={`md:col-span-1 row-span-1 border-4 border-solid border-${color} rounded-2xl bg-[#20272b]`}>
        <Sender color={`bg-${color}`} position={position}/>
      </div>
    </>
  );
}