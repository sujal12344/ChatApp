"use client";

import Receiver from "@/components/Receiver";
import Sender from "@/components/Sender";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2 h-screen gap-x-4 py-2 px-4">
      <div className="col-span-2 border-4 border-solid border-[#3b7a1d] rounded-2xl bg-[#20272b]">
        <Sender />
      </div>
      {/* <div className="col-span-1 border-4 border-solid border-pink-600 rounded-2xl bg-pink-400 text-[#03f869]">
        <Receiver />
      </div> */}
    </div>
  );
}
