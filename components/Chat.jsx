import { useState } from "react";
import ChatFrame from "./ChatFrame";

export default function Chat({
  className,
  code,
  mainColor,
  primaryColor,
  secondaryColor,
}) {
  const [flag, setFlag] = useState(false);

  const identifyUser = (number) => {
    setFlag(code === number);
    return code === number;
  };

  return (
    <>
      <div
        style={{ minHeight: innerHeight / 2 - 18, borderColor: mainColor }}
        className={`md:col-span-1 row-span-1 border-4 border-solid rounded-2xl bg-black overflow-scroll ${className}`}
      >
        <ChatFrame
          setPassValue={identifyUser}
          value={flag}
          code={code}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          className={`${
            className === `you_are_able_to_receive_msg` ? `able_to_move` : `not`
          } chat-frame`}
        />
      </div>
    </>
  );
}
