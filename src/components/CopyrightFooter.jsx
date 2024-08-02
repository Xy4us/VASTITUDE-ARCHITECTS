import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const CopyrightFooter = () => {
  return (
    <div className="bg-[#111111] w-full min-h-[79px] flex items-center justify-center">
      <div className="w-[60%] flex items-center justify-start h-full">
        <p className="text-xs text-quinary">© Copyright 2024 - VASTITUDE</p>
      </div>
      {/* Pages */}
      <div className="flex items-center justify-between gap-x-8">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/bPiNQqE7xT1DFdzE/?mibextid=qi2Omg"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 px-3 duration-200 ease-in-out hover:bg-primary group"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-md text-primary duration-500 ease-linear group-hover:text-denary"
          />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/vastitudearchitects?igsh=MXA4cXRja3BleGJ5dQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 px-3 duration-200 ease-in-out hover:bg-primary group"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-md text-primary duration-500 ease-linear group-hover:text-denary"
          />
        </a>

        {/* WhatsApp  */}
        <a
          href="https://wa.me/919467577839?text=Hello%20there!"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-7 flex items-center justify-between group gap-x-4 right-4"
        >
          <div className="p-1 rounded-xl bg-primary text-denary font-semibold px-2 hidden group-hover:block relative tracking-wide duration-200 ease-linear">
            Contact Us
            <FontAwesomeIcon
              className="absolute -right-1 top-[30%] text-primary -translate-y-[0.5]"
              icon={faCaretRight}
            />
          </div>

          <FontAwesomeIcon
            className="w-[35px] h-[35px] bg-[#18191b] rounded-full p-3 text-primary"
            icon={faWhatsapp}
          />
        </a>
      </div>
    </div>
  );
};

export default CopyrightFooter;
