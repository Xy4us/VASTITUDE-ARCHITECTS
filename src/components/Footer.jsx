import React from "react";
import Logo from "../assets/Logo/logo.png";
import { quickLinks } from "../utils/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex xs:flex-col lg:flex-row px-3 justify-center items-start gap-8 min-h-[395px]">
      {/* About */}
      <div className="flex flex-col xs:w-full items-start lg:max-w-[25%] gap-7 lg:p-4 lg:mt-20 xs:mt-10">
        <div className="flex cursor-default">
          <img src={Logo} alt="Vastitude" className="h-[56px]" />
          <div className="flex flex-col justify-end items-end">
            <p className="text-primary font-custom2 font-bold text-2xl">
              ASTITUDE
            </p>
            <p className="text-primary font-medium text-sm font-custom2">
              <span className="text-lg">A</span>RCHITECTS
            </p>
          </div>
        </div>
        <p className="text-justify text-quinary xs:w-full  lg:w-full text-xs tracking-wider leading-6">
          We are an architectural and interior design firm based in the India.
          We have delivered a number of creative interiors for hospitality,
          healthcare, office, Institutional, retail and residential spaces, from
          design concept to handover.
        </p>
      </div>

      {/* Quicklinks */}
      <div className="flex flex-col items-start xs:w-full  lg:mt-20 xs:mt-5 lg:max-w-[25%]">
        <h1 className="uppercase text-primary font-bold tracking-widest ">
          Quicklinks
        </h1>
        <div className="mt-5 flex flex-col items-start ">
          {quickLinks.map((item, index) => (
            <Link
              to={item.path}
              className="p-2 py-3 border-b-[0.5px] border-[#111111] min-w-[360px]"
              key={index}
            >
              <p className="text-quinary text-xs hover:cursor-pointer hover:underline duration-150 ease-in-out">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-col items-start lg:mt-20 xs:mt-5 xs:w-full lg:max-w-[25%]  mb-16  ">
        <h1 className="uppercase text-primary font-bold tracking-widest">
          Contact Us
        </h1>
        <div className="mt-5 flex flex-col gap-2">
          <div className="text-justify text-quinary text-xs flex flex-col items-start tracking-wider gap-1 border-b-[0.5px] border-[#111111] pb-2 min-w-[360px]">
            <p className="text-justify text-quinary text-xs">
              {/* <span className="text-primary font-bold tracking-wider text-sm">
                Office:
              </span>{" "} */}
              H.no - D9A/1, 4<sup>th</sup> floor,
            </p>
            <p> Ardee city, sector-52, Gurugram,</p>
            <p>122003 - Haryana, India</p>
          </div>

          <div className="text-justify text-quinary text-xs flex flex-col items-start tracking-wider gap-1 border-b-[0.5px] border-[#111111] pb-2 min-w-[360px]">
            <p className="text-justify text-quinary text-xs">
              <span className="text-primary font-bold tracking-wider text-sm">
                Branch:
              </span>{" "}
              Block H, 502, supermax, sector-33, Sonipat, 133001 - Haryana,
              India
            </p>
          </div>
          <p className="text-justify text-quinary text-xs min-w-[360px] border-b-[0.5px] border-[#111111] pb-2">
            <span className="text-primary font-bold tracking-wider text-sm">
              Mobile:
            </span>{" "}
            +91 94675-77839
          </p>
          <p className="text-justify text-quinary text-xs min-w-[360px] border-b-[0.5px] border-[#111111] pb-2">
            <span className="text-primary font-bold tracking-wider text-sm">
              Phone:
            </span>{" "}
            +91 99962-63603
          </p>
          <p className="text-justify text-quinary text-xs min-w-[360px] border-b-[0.5px] border-[#111111] pb-2">
            <span className="text-primary font-bold tracking-wider text-sm">
              Email:
            </span>{" "}
            vastitudearchitects@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
