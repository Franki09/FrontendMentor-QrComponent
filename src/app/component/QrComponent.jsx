import Image from "next/image";
import React from "react";

function QrComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <div className=" flex flex-col items-center justify-center rounded-2xl bg-white p-4">
        <Image src={"/image-qr-code.png"} alt="qr" width={288} height={288} className="rounded-xl" />
        <h2 className="text-slate-900 font-outfit font-bold text-[22px] w-[288px] text-center tracking-normal my-4">
          Improve your front-end skills by building projects
        </h2>
        <p className="text-slate-500 font-outfit text-[15px] w-[256px] text-center mb-4">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <h3>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
          >
            Frontend Mentor
          </a>
        </h3>
        <h3>
          Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/Franki09"
            className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
          >
            Franco Gomez
          </a>
          .
        </h3>
      </div>
    </div>
  );
}

export default QrComponent;
