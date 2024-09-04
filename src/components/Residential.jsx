import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { allResidential, ResidentialList } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";

const Residential = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full min-h-[100vh]"
      style={{
        backgroundColor: "#cccaca",
      }}
    >
      <div className="w-full flex items-center justify-center mt-[64px]">
        <div className="text-denary w-[75%] flex justify-between items-end min-h-[118px]">
          <p className="text-4xl tracking-widest font-bold uppercase">
            Residential
          </p>

          {/* link */}
          <p className="tracking-[0.4em] text-xs text-denary font-light uppercase lg:block xs:hidden">
            {" "}
            <span>
              <Link to="/">Home</Link>
            </span>{" "}
            /{" "}
            <span>
              <Link to="/services">services</Link>
            </span>{" "}
            / residential
          </p>
        </div>
      </div>

      {/* Main section */}

      <div className="w-full flex items-center justify-center bg-denary mt-24">
        <div className="lg:w-[70%] mt-20 xs:w-[95%] flex items-center gap-y-5 flex-col">
          {ResidentialList.map((item, index) => (
            <div key={index} className="w-full">
              {/* First title */}
              <div
                className={`w-full gap-x-5 ${
                  item.title === "01"
                    ? "flex lg:flex-row xs:flex-col xs:gap-y-5"
                    : "hidden"
                }`}
              >
                <div className="lg:min-w-[47%] xs:w-full relative group">
                  <img
                    src={item.photos[0]?.image}
                    alt=""
                    className="lg:min-w-full lg:max-w-full lg:min-h-[574px] xs:w-full xs:h-[275px] z-0"
                  />
                  {item.photos[0]?.title && (
                    <div
                      className="-z-10 absolute lg:w-full lg:h-[574px] xs:w-full xs:h-[275px] top-0 group-hover:z-10 flex items-center justify-center text-primary text-xl font-bold tracking-widest uppercase
                   bg-[#00000077]"
                    >
                      {item.photos[0].title}
                    </div>
                  )}
                </div>

                <div className="min-w-[28%] gap-y-6 flex items-start justify-between flex-col">
                  <div className="min-w-full xs:w-[360px] h-[275px] group relative">
                    <img
                      src={item.photos[1]?.image}
                      alt=""
                      className=" min-w-full   h-[275px] "
                    />
                    {item.photos[1]?.title && (
                      <div
                        className="absolute -z-10 top-0 group-hover:z-10 flex items-center justify-center text-primary text-xl font-bold tracking-widest uppercase min-w-full h-[275px] duration-200 ease-in-out
                   bg-[#00000077] "
                      >
                        {item.photos[1].title}
                      </div>
                    )}
                  </div>

                  <div className="min-w-full xs:w-[360px] h-[275px] group relative">
                    <img
                      src={item.photos[2]?.image}
                      alt=""
                      className="w-full h-[275px]"
                    />

                    {item.photos[2]?.title && (
                      <div
                        className="absolute -z-10 top-0 group-hover:z-10 flex items-center justify-center text-primary text-xl font-bold tracking-widest uppercase min-w-full lg:max-w-[400px] xs:w-[360px] h-[275px] duration-200 ease-in-out
                   bg-[#00000077] "
                      >
                        {item.photos[2].title}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Second title */}
              <div
                className={`w-full gap-x-5 ${
                  item.title === "02"
                    ? "flex lg:flex-row-reverse xs:flex-col xs:gap-y-5"
                    : "hidden"
                }`}
              >
                <div className="lg:min-w-[47%] xs:w-full relative group">
                  <img
                    src={item.photos[0]?.image}
                    alt=""
                    className="lg:min-w-full lg:max-w-full lg:min-h-[574px] xs:w-full xs:h-[275px] z-0 "
                  />
                  {item.photos[0]?.title && (
                    <div
                      className="-z-10 absolute lg:min-w-[759px] lg:min-h-[574px] xs:w-full xs:h-[275px]  top-0 group-hover:z-10 flex items-center justify-center text-primary text-xl font-bold tracking-widest uppercase
                   bg-[#00000077]"
                    >
                      {item.photos[0].title}
                    </div>
                  )}
                </div>

                <div className="min-w-[28%] gap-y-6 flex  items-start justify-between flex-col">
                  <div className="min-w-full xs:w-[360px] h-[275px] group relative">
                    <img
                      src={item.photos[1]?.image}
                      alt=""
                      className=" min-w-full   h-[275px]  "
                    />
                    {item.photos[1]?.title && (
                      <div
                        className="absolute -z-10 top-0 group-hover:z-10 flex items-center justify-center text-primary text-xl font-bold tracking-widest uppercase min-w-full lg:max-w-[400px] xs:w-[360px] h-[275px] duration-200 ease-in-out
                   bg-[#00000077] "
                      >
                        {item.photos[1].title}
                      </div>
                    )}
                  </div>

                  <div className="min-w-full xs:w-[360px] h-[275px] group relative">
                    <img
                      src={item.photos[2]?.image}
                      alt=""
                      className="w-full h-[275px]"
                    />

                    {item.photos[2]?.title && (
                      <div
                        className="absolute -z-10 top-0 group-hover:z-10 flex items-center justify-center text-primary text-xl font-bold tracking-widest uppercase min-w-full lg:max-w-[400px] xs:w-[360px] h-[275px] duration-200 ease-in-out
                   bg-[#00000077] "
                      >
                        {item.photos[2].title}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Third title */}
              <div
                className={`w-full gap-x-5 ${
                  item.title === "03"
                    ? "flex lg:flex-row xs:flex-col xs:gap-y-5"
                    : "hidden"
                }`}
              >
                <div className="lg:min-w-[49%] lg:max-w-[49%] relative group xs:w-full lg:max-h-[400px] lg:min-h-[400px] xs:h-[275px]">
                  <img
                    src={item.photos[0].image}
                    alt=""
                    className="w-full lg:min-h-full  xs:h-[275px]"
                  />
                  {item.photos[0]?.title && (
                    <div
                      className="-z-10 absolute w-full h-full top-0 group-hover:z-10 flex items-center justify-center text-primary text-xl font-bold tracking-widest uppercase
                   bg-[#00000077]"
                    >
                      {item.photos[0].title}
                    </div>
                  )}
                </div>

                <div className="lg:min-w-[49%] lg:max-w-[49%] xs:w-full relative group">
                  <img
                    src={item.photos[1]?.image}
                    alt=""
                    className="lg:max-w-full lg:min-w-full lg:min-h-[400px] lg:max-h-[400px] xs:w-full xs:h-[275px] z-0 "
                  />
                  {item.photos[1]?.title && (
                    <div
                      className="-z-10 absolute lg:max-w-full lg:min-w-full lg:min-h-[400px] lg:max-h-[400px] w-full xs:h-[275px] top-0 group-hover:z-10 flex items-center justify-center text-primary text-xl font-bold tracking-widest uppercase
                   bg-[#00000077]"
                    >
                      {item.photos[1].title}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Talks with us */}
      <div className="bg-quaternary w-full flex items-center justify-center min-h-[180px]">
        <Button
          variant="outlined"
          sx={{
            color: "#18191b",
            borderColor: "#18191b",
            "&:hover": {
              backgroundColor: "#18191b",
              color: "#f8f9fa",
              borderColor: "#18191b",
            },
          }}
        >
          <Link
            to="/contact-us"
            className="flex items-center justify-center w-[250px]"
          >
            TALK WITH US{" "}
            <FontAwesomeIcon
              className="pl-2 p-1 font-extrabold"
              icon={faAngleRight}
            />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Residential;
