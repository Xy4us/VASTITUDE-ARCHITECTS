import React, { useEffect } from "react";
import Service from "../assets/Service Page/ServiceBackground.jpg";
import { Link } from "react-router-dom";
import { Services } from "../utils/constants";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const OurServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full min-h-[100vh]"
      style={{
        backgroundImage: `url(${Service})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="w-full flex items-center justify-center mt-[85px]">
        <div className="text-primary w-[75%] flex justify-between items-end min-h-[118px]">
          <p className="text-4xl tracking-widest font-bold uppercase">
            Our Services
          </p>

          {/* link */}
          <p className="tracking-[0.4em] text-xs text-primary font-light uppercase">
            {" "}
            <span>
              <Link to="/">Home</Link>
            </span>{" "}
            / Services
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-denary w-full flex flex-col justify-between mt-24">
        {Services.map((item, index) => (
          <div
            key={index}
            className={`flex w-full items-center justify-between gap-5  ${
              index % 2 === 0 ? "flex-row-reverse bg-[#111111]" : ""
            }`}
          >
            <img
              src={item.image}
              alt=""
              className="min-h-[369px] max-h-[369px] min-w-[760px] max-w-[760px]"
            />
            <div className="w-full flex justify-center items-center">
              <div className="flex flex-col max-w-[600px] items-start justify-between gap-6 text-justify">
                <h1 className="text-primary text-3xl tracking-wider">
                  {item.title}
                </h1>
                <p className="text-quaternary tracking-wide mt-5">
                  {item.description}
                </p>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#e9ecef",
                    borderColor: "#e9ecef",
                    "&:hover": {
                      backgroundColor: "#18191b",
                      borderColor: "#e9ecef",
                    },
                  }}
                >
                  <div className="flex items-center justify-center w-[150px]">
                    Read More{" "}
                    <FontAwesomeIcon
                      className="pl-2 p-1 font-extrabold"
                      icon={faAngleRight}
                    />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        ))}
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
          <div className="flex items-center justify-center w-[250px]">
            TALK WITH US{" "}
            <FontAwesomeIcon
              className="pl-2 p-1 font-extrabold"
              icon={faAngleRight}
            />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default OurServices;
