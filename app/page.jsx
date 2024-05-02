"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicChat = dynamic(() => import("@/components/Chat"), {
  ssr: false,
  loading: () => (
    <div
      className={`flex justify-center items-center h-screen text-[40px] font-semibold`}
    >
      <div>Loading...</div>
    </div>
  ),
});
let code = 5;
let chatId;
let contact1 = 5;
let contact2 = 6;

export default function Home() {
  let [isRightId, setIsRightId] = useState(false);
  if (!isRightId) {
    chatId = parseInt(prompt("Enter Chat ID:"));
  }

  if (chatId == code) {
    isRightId = true;
    alert(`Successfully connected with Chat ID: ${chatId}`);
    // {
    //   <div
    //     className={`flex justify-center bg-yellow-600 duration-[2] items-center h-screen text-[40px] font-semibold`}
    //   >
    //     <div>Successfully connected to chat {chatId}</div>
    //   </div>;
    // }
  } else {
    setIsRightId(false);
    alert(`Please enter correct Chat ID.`);
    // {
    //   <div
    //     className={`flex justify-center bg-red-600 duration-[2] items-center h-screen text-[40px] font-semibold`}
    //   >
    //     <div>Please enter correct Chat ID.</div>
    //   </div>;
    // }
  }

  return (
    <div className="grid md:grid-cols-2 grid-rows-2 md:gap-x-4 gap-y-3 md:py-2 md:px-4 p-3">
      <DynamicChat
        className={
          contact1 !== code
            ? `not_same_number_you_can_send_msg   you_are_not_receive_msg`
            : `Same_number_you_can_not_send_msg  you_are_able_to_receive_msg`
        }
        contact={contact1}
        code={chatId}
        primaryColor={`#5eff00`}
        secondaryColor={`#4c7833`}
        mainColor={`green`}
      />
      <DynamicChat
        className={
          contact2 !== code
            ? `not_same_number_you_can_send_msg   you_are_not_receive_msg`
            : `Same_number_you_can_not_send_msg  you_are_able_to_receive_msg`
        }
        contact={contact2}
        code={chatId}
        primaryColor={`#f687b3`}
        secondaryColor={`#7f1d1d`}
        mainColor={`#e42b69`}
      />
    </div>
  );
}
