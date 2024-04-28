import React, { useEffect, useRef } from "react";

export default function Type({ className, getMessage }) {
  let finalmsg;

  const message = useRef();

  const enterSendMessage = (e) => {
    if (e.keyCode == 13) {
      finalmsg = message.current.value;
      // console.log(finalmsg);
      getMessage(finalmsg);
      message.current.value = "";
    }
  };
  
  const clickSendMessage = () => {
    finalmsg = message.current.value;
    // console.log(finalmsg);
    getMessage(finalmsg);
    message.current.value = "";
  };

  useEffect(() => {
    message.current.focus();
    console.log(message.current.value);
  }, [finalmsg])

  return (
    <>
      <div className={`${className} flex justify-between relative bottom-[30px] p-2 gap-[5vw] w-[80vw] md:w-[45vw] bg-[#181a25] rounded-2xl`}>
        <div className="items-start">
          <input
            type="text"
            placeholder="Enter your message"
            className="rounded-md bg-transparent text-white w-[78vw] md:w-[43vw] h-9"
            ref={message}
            onKeyDown={(e) => enterSendMessage(e)}
          />
        </div>

        <div className="items-end">
          <div
            className="scale-[3.5] cursor-pointer relative top-1.5"
            onClick={() => clickSendMessage()}
          >
            <button>&#10148;</button>
          </div>
        </div>
      </div>
    </>
  );
}
