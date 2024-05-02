import ChatFrame from "./ChatFrame";

export default function Chat({ className, code, whatsAppId,  mainColor, primaryColor, secondaryColor }) {
  return (
    <>
      <div
        style={{ minHeight: innerHeight / 2 - 18, borderColor: mainColor }}
        className={`md:col-span-1 row-span-1 border-4 border-solid rounded-2xl bg-black overflow-scroll ${className}`}
      >
        <ChatFrame id={whatsAppId} primaryColor={primaryColor} secondaryColor={secondaryColor} className={`${className === `you_are_able_to_receive_msg` ? `able_to_move`:`not`} chat-frame`}/>
      </div>
    </>
  );
}
