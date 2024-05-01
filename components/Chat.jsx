import ChatFrame from "./ChatFrame";

export default function Chat({ color }) {
  return (
    <>
      <div
        style={{ height: innerHeight / 2 - 18, borderColor: color }}
        className={`md:col-span-1 row-span-1 border-4 border-solid rounded-2xl bg-[#20272b]`}
      >
        <ChatFrame color={color} />
      </div>
    </>
  );
}
