import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [padding, setPadding] = useState("py-3");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setPadding("py-1");
    } else {
      setPadding("py-3");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tabs = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Our Services",
      path: "/services",
    },
    {
      name: "Projects",
      path: "/about",
    },
    {
      name: "Contact Us",
      path: "/about",
    },
  ];

  return (
    <div className="w-[100vw] flex items-center bg-denary justify-center fixed top-0 z-50 border-b border-senary ">
      <div
        className={`w-[75%] p-1 ${padding} flex justify-between transition-all duration-300`}
      >
        {/* Logo and text container */}
        <div className="flex w-[30%]">
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

        {/* Tabs */}
        {tabs.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="cursor-pointer gap-x-2 text-primary hover:text-quinary ease-in-out duration-150 items-center flex justify-between"
          >
            {item.name}{" "}
            <p className="font-bold text-xs">
              <FontAwesomeIcon
                icon={faCircle}
                className="h-[7px] -translate-y-[0.5px]"
              />
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
