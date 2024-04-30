"use client";

import dynamic from "next/dynamic";

const DynamicChat = dynamic(() => import("@/components/Chat"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 grid-rows-2 md:gap-x-4 gap-y-3 md:py-2 md:px-4 p-3">
      <DynamicChat color={"green"} />
      <DynamicChat color={"magenta"} />
    </div>
  );
}
