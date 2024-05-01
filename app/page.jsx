"use client";

import dynamic from "next/dynamic";

const DynamicChat = dynamic(() => import("@/components/Chat"), {
  ssr: false,
  loading: () =>  
  <div className={`flex justify-center items-center h-screen text-[40px] font-semibold`}>
      <h1>Loading...</h1>
  </div>,
});

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 grid-rows-2 md:gap-x-4 gap-y-3 md:py-2 md:px-4 p-3">
      <DynamicChat primaryColor={`#5eff00`} secondaryColor={`#4c7833`} mainColor={`green`}/>
      <DynamicChat primaryColor={`#f687b3`} secondaryColor={`#7f1d1d`} mainColor={`#e42b69`}/>
    </div>
  );
}
