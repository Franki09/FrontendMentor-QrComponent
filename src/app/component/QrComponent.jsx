import Image from "next/image";
import React from "react";

function QrComponent() {
  return (
    <div className="self-center">
      <div className="rounded-md bg-red-500">
        <Image src={"/image-qr-code.png"} alt="qr" width={576} height={576} />
        <h2>Improve your front-end skills by building projects</h2>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
      <div>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        Coded by <a href="https://www.frontendmentor.io/profile/Franki09">Franco Gomez</a>.
      </div>
    </div>
  );
}

export default QrComponent;
