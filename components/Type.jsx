import React, { useEffect, useRef } from "react";

export default function Type({ receiveMessage, sendMessage }) {
  let finalmsg;
  let number = 5;

  const message = useRef();

  const enterSendMessage = (e) => {
    if (e.keyCode == 13) {
      finalmsg = message.current.value;
      // receiveMessage(finalmsg);
      sendMessage(finalmsg, number);
      message.current.value = "";
    }
  };

  const clickSendMessage = () => {
    finalmsg = message.current.value;
    // receiveMessage(finalmsg);
    sendMessage(finalmsg, number);
    message.current.value = "";
  };

  useEffect(() => {
    message.current.focus();
  }, [finalmsg]);

  return (
    <>
      <div
        className={`flex justify-between items-center mt-8 p-2 ml-2  w-[87vw] md:w-[45vw] bg-[#181a25] rounded-2xl`}
      >
        <div className="">
          <input
            type="text"
            placeholder="Enter your message"
            className="outline-none rounded-md bg-transparent text-white w-[72vw] md:w-[43vw] h-9"
            ref={message}
            onKeyDown={(e) => enterSendMessage(e)}
          />
        </div>

        <div
          className="scale-[2.5] md:scale-[3.5] cursor-pointer flex items-center"
          onClick={() => clickSendMessage()}
        >
          <button className="h-3 w-3 bg-black dark:bg-white rounded-[3px] mr-2"></button>
        </div>
      </div>
    </>
  );
}
