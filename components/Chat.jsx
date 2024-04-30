import ChatFrame from "./ChatFrame";

export default function Chat({ color }) {
  let borderColor = `border-${color}`;
  let bgColor = `bg-${color}`;
  let windowHeight = `${700 / 2 - 18}px`;
  console.log(windowHeight);

  return (
    <>
      <div
        style={{ height: windowHeight, borderColor: color }}
        className={`md:col-span-1 row-span-1 border-4 border-solid ${borderColor} rounded-2xl bg-[#20272b] ${windowHeight}`}
      >
        <ChatFrame color={bgColor} />
      </div>
    </>
  );
}
