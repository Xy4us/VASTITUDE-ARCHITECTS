import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircle, faX } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [padding, setPadding] = useState("py-3");
  const [menu, setMenu] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    setMenu(false);
  }, [location]);

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
      path: "/our-projects",
    },
    {
      name: "Price Calculator",
      path: "/price-calculator",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  return (
    <div className="w-[100vw] flex flex-col items-center bg-denary justify-center fixed top-0 z-50 border-b border-senary">
      <div
        className={`w-[85%] p-1 ${padding} flex justify-between transition-all duration-300`}
      >
        {/* Logo and text container */}
        <div className="flex w-[30%]">
          <img src={Logo} alt="Vastitude" className="h-[40px]" />
        </div>

        {/* Tabs */}
        {tabs.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="cursor-pointer gap-x-2 text-primary hover:text-quinary ease-in-out duration-150 items-center lg:flex xs:hidden justify-between font-custom2 font-medium"
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

        {/* Mobile Tabs */}
        <div
          onClick={() => {
            setMenu(!menu);
          }}
          className="w-[36px] h-[36px] xs:flex lg:hidden items-center justify-center duration-200 ease-in-out hover:bg-primary bg-[#111111] group"
        >
          <FontAwesomeIcon
            className="text-xl text-primary duration-500 ease-linear group-hover:text-denary"
            icon={menu ? faX : faBars}
          />
        </div>
      </div>
      <div
        className={`w-full p-3 z-50 gap-y-4 flex-col ${
          menu ? "flex" : "hidden"
        }`}
      >
        {tabs.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="cursor-pointer w-full gap-x-2 text-primary hover:text-quinary ease-in-out duration-150 items-center  justify-between border-b-[0.5px] border-[#333333] font-medium px-5 text-xl p-2 py-3"
          >
            {item.name}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
