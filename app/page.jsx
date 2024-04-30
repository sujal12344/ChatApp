"use client";

import Chat from "@/components/Chat";

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 grid-rows-2 md:gap-x-4 gap-y-3 md:py-2 md:px-4 p-3 box-border h-screen">
      <Chat color={"[#3b7a1d]"} position={"bottom-[50%]"} />
      <Chat color={"[#ff00f7]"} position={"bottom-[3%] "} />
    </div>
  );
}