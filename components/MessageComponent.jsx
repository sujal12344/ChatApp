export default function MessageComponent({
  className,
  primaryColor,
  secondaryColor,
  msg,
  isMessageReceive,
}) {
  return (
    <>
      <div
        className={`${isMessageReceive ? `flex justify-start` : `flex justify-end w-[92vw]`} 
        ${className} first:pt-[5px]`}
      >
        <div
          style={{ backgroundImage: `linear-gradient(to top left, ${primaryColor}, ${secondaryColor})` }}
          className={` 
          relative mx-[10px] my-[5px] w-fit max-w-[220px] rounded-md 
          ${msg ? `px-6 py-2` : `p-0`}`}
        >
          {msg}
        </div>
      </div>
    </>
  );
}
