export default function MessageComponent({
  className,
  color,
  msg,
  isMessageReceive,
  flag,
}) {
  return (
    <>
      <div
        className={`${isMessageReceive ? `flex justify-start` : `flex justify-end w-[92vw]`} 
        ${className} first:pt-[10px]`}
      >
        <div
          style={{ background: color }}
          className={`${isMessageReceive ? `messageReceive` : `messageSend`} 
          relative mx-[10px] my-[5px] w-fit rounded-md 
          ${msg ? `px-6 py-2` : `p-0`}`}
        >
          {msg}
        </div>
      </div>
    </>
  );
}
