import ChatFrame from "./ChatFrame";

export default function Chat({ className, mainColor, primaryColor, secondaryColor }) {
  return (
    <>
      <div
        style={{ minHeight: innerHeight / 2 - 18, borderColor: mainColor }}
        className={`md:col-span-1 row-span-1 border-4 border-solid rounded-2xl bg-black overflow-scroll`}
      >
        <ChatFrame primaryColor={primaryColor} secondaryColor={secondaryColor} className={className}/>
      </div>
    </>
  );
}
