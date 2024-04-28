"use client";

import Receiver from "@/components/Receiver";
import Sender from "@/components/Sender";
import Image from "next/image";

export default function Home() {
  return (
      <div className="grid md:grid-cols-2 grid-rows-2 md:gap-x-4 gap-y-3 md:py-2 md:px-4 p-3 box-border h-[97dvh]">
        <div className="md:col-span-1 row-span-1 border-4 border-solid border-[#3b7a1d] rounded-2xl bg-[#20272b]">
          <Sender color={`bg-[#3b7a1d]`}/>
        </div>

        <div className="md:col-span-1 row-span-1 border-4 border-solid border-[#ff00f7] rounded-2xl bg-[#20272b]">
          <Receiver color={`bg-[#ff00f7]`}/>
        </div>
      </div>
  );
}