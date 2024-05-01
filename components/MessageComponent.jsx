export default function MessageComponent({ color, msg, isMessageReceive }) {
  return (
    <>
      <div
        className={`${
          isMessageReceive ? `flex justify-start` : `flex justify-end w-[92vw]`
        }`}
      >
        <div
          style={{ background: color }}
          className={`${
            isMessageReceive ? `messageReceive` : `messageSend`
          } relative m-[10px] w-fit rounded-md ${msg ? `px-6 py-2` : `p-0`}
        `}
        >
          {msg}
        </div>
      </div>
    </>
  );
}
