import React, { useEffect, useRef } from "react";

export default function Type({ receiveMessage , sendMessage}) {
  let finalmsg;

  const message = useRef();

  const enterSendMessage = (e) => {
    if (e.keyCode == 13) {
      finalmsg = message.current.value;
      receiveMessage(finalmsg);
      sendMessage(finalmsg);
      message.current.value = "";
    }
  };

  const clickSendMessage = () => {
    finalmsg = message.current.value;
    receiveMessage(finalmsg);
    sendMessage(finalmsg);
    message.current.value = "";
  };

  useEffect(() => {
    message.current.focus();
  }, [finalmsg]);

  return (
    <>
      <div
        className={`flex justify-between p-2 ml-2 -mb-[10px] gap-[7vw] w-[75vw] md:w-[45vw] bg-[#181a25] rounded-2xl`}
      >
        <div className="items-start">
          <input
            type="text"
            placeholder="Enter your message"
            className="rounded-md bg-transparent text-white w-[72vw] md:w-[43vw] h-9"
            ref={message}
            onKeyDown={(e) => enterSendMessage(e)}
          />
        </div>

        <div className="items-end">
          <div
            className="scale-[2.5] md:scale-[3.5] cursor-pointer relative -top-2"
            onClick={() => clickSendMessage()}
          >
            <button className="h-3 w-3 bg-black dark:bg-white rounded-sm"></button>
          </div>
        </div>
      </div>
    </>
  );
}
