import React from "react";
import about from "../assets/About/About.jpg";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { Services } from "../utils/constants";
import ServiceCards from "./ServiceCards";
import HomeProjects from "./HomeProjects";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <div className="parallax-container">
        <div className="parallax"></div>
      </div>

      {/* About */}
      <div className="bg-denary w-full flex justify-between">
        <div className="h-[500px] w-[50%]">
          <img src={about} alt="" className="w-full h-full rounded-br-md" />
        </div>

        <div className="w-[43%] flex flex-col items-start justify-center">
          <h1 className="text-primary font-bold text-5xl tracking-wide">
            About Us
          </h1>
          <h2 className="text-secondary uppercase text-xl py-2 pt-5 tracking-widest">
            Vastitude Architects
          </h2>
          <div className="w-[70%] text-justify mt-8 pb-7 text-quaternary">
            <p className="py-2">
              Vastitude Architects is a full-service architectural firm that
              specializes in residential, commercial, and industrial projects.
            </p>
            <p className=" py-2">
              {" "}
              We are dedicated to providing our clients with innovative design
              solutions that are both functional and aesthetically pleasing.
            </p>
            {/* <p>
              Our team of experienced professionals works closely with each
              client to ensure that their vision is brought to life.
            </p> */}
            <p className=" py-2">
              Architecture has many faces and we at{" "}
              <span className="font-semibold">Vastitude Architects</span> enjoy
              expolring!
            </p>
          </div>
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
            <Link
              to="/about"
              className="flex items-center justify-center w-[150px]"
            >
              Read More{" "}
              <FontAwesomeIcon
                className="pl-2 p-1 font-extrabold"
                icon={faAngleRight}
              />
            </Link>
          </Button>
        </div>
      </div>

      {/*Design & Services */}
      <div className="w-full bg-denary mt-20 flex items-center justify-between flex-col gap-y-6">
        <h1 className="text-primary text-center text-5xl font-bold tracking-wide">
          Our Design & Build Services
        </h1>
        <div className="w-[45%] text-center flex justify-between items-center mt-7">
          <div className="border border-octonary w-[45%]"></div>
          <FontAwesomeIcon
            icon={faCircle}
            className="h-[7px] -translate-y-[0.5px] text-tertiary"
          />
          <div className="border border-octonary w-[45%]"></div>
        </div>

        <div className="mt-14 w-[75%] flex flex-wrap items-center gap-7 justify-center">
          {Services.map((item, index) => (
            <ServiceCards
              title={item.title}
              image={item.image}
              desc={item.description}
              key={index}
            />
          ))}
        </div>
      </div>

      {/* {All Projects} */}
      <HomeProjects />
    </div>
  );
};

export default HomePage;
