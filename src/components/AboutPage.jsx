import React, { useEffect } from "react";
import About from "../assets/About/AboutBackground.jpg";
import about from "../assets/About/About.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import team from "../assets/About/Team.png";
import Button from "@mui/material/Button";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full min-h-[100vh]"
      style={{
        backgroundImage: `url(${About})`,
      }}
    >
      <div className="w-full flex items-center justify-center mt-[85px]">
        <div className="text-primary w-[75%] flex justify-between items-end min-h-[118px]">
          <p className="text-4xl tracking-widest font-bold uppercase">About</p>

          {/* link */}
          <p className="tracking-[0.4em] text-xs text-primary font-light uppercase">
            {" "}
            <span>
              <Link to="/">Home</Link>
            </span>{" "}
            / About
          </p>
        </div>
      </div>

      {/* Mian section */}
      <div className="bg-denary w-full flex justify-between mt-24">
        <div className="h-[700px] w-[70%] -ml-96">
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
            <p className="py-3">
              We are group of like-minded architects and designers from across
              the India, who have collaborated to bring you an array of tailored
              design solutions and products to suit your needs.
            </p>
            <p className="py-3">
              Our approach is to discuss the requirements and try to know more
              about the design line, the look and feel of the space, the budget
              and the time frame. We then come up with a design concept and
              present it to you.
            </p>
            <p className="py-3">
              Once you approve the design, we create detailed drawings and 3D
              views, assist with material and furniture selection, and supervise
              the execution to ensure it matches the design.
            </p>
          </div>
        </div>
      </div>

      {/* The Firm */}
      <div className="bg-denary flex flex-col items-center justify-between w-full ">
        <h1 className="text-primary mt-20 text-center text-5xl font-bold tracking-wide">
          Our Team Members
        </h1>
        <div className="w-[45%] text-center flex justify-between items-center mt-7">
          <div className="border border-octonary w-[45%]"></div>
          <FontAwesomeIcon
            icon={faCircle}
            className="h-[7px] -translate-y-[0.5px] text-tertiary"
          />
          <div className="border border-octonary w-[45%]"></div>
        </div>

        <div className="w-full flex items-center mt-20 flex-row-reverse justify-between ">
          <div className="h-[500px] w-[40%] ">
            <img src={team} alt="" className="w-full h-full rounded-l-md" />
          </div>

          <div className="w-[60%] flex flex-col items-center justify-center">
            <div className="w-[70%] flex flex-col items-start justify-between">
              <h1 className="text-primary font-bold text-5xl tracking-wide">
                The Firm
              </h1>
              <h2 className="text-secondary uppercase text-xl py-2 pt-5 tracking-widest">
                Vastitude Architects
              </h2>
              <div className="w-[70%] text-justify mt-4 pb-7 text-quaternary">
                <p className="tracking-wider text-sm ">Founders</p>
                <h1 className=" text-lg font-bold tracking-wide">
                  Harish Dhiman
                </h1>
                <h1 className="text-lg font-bold tracking-wide">
                  Manish Bhardwaj
                </h1>

                <p className=" mt-3 pt-2 tracking-wider text-sm">
                  Senior Architect
                </p>
                <h1 className=" text-lg font-bold tracking-wide">
                  Obaid Khurshid
                </h1>

                <p className=" mt-3 pt-2 tracking-wider text-sm">
                  Project Manager
                </p>
                <h1 className=" text-lg font-bold tracking-wide">
                  Krishna Kant Sharma
                </h1>

                <p className=" mt-3 pt-2 tracking-wider text-sm">Team</p>
                <h1 className=" text-lg font-bold tracking-wide">
                  30+ Team Members
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="flex items-center justify-evenly bg-denary pb-5">
        {/* Services */}
        <div className="w-[20%] flex flex-col items-center mt-28 justify-between">
          <h1 className="text-primary text-4xl tracking-widest text-left p-2 font-semibold">
            Services
          </h1>
          <ul className="text-quaternary w-full tracking-wider flex flex-col items-center text-justify justify-between p-2 list-none mt-3">
            <li>Conceptualization</li>
            <li>Architectural Design</li>
            <li> Structural Design</li>
            <li>Mep Design</li>
            <li>Interior Design</li>
            <li>Project Management Engineering </li>
            <li>Execution</li>
          </ul>
        </div>

        {/* Industries */}
        <div className="w-[20%] flex flex-col items-center mt-28 justify-between">
          <h1 className="text-primary text-4xl tracking-widest text-left p-2 font-semibold ">
            Industries
          </h1>
          <ul className="text-quaternary w-full tracking-wider flex flex-col items-center text-justify justify-between p-2 list-none mt-3 ">
            <li>Residential</li>
            <li>Commercial</li>
            <li>Industrial </li>
            <li>Terminals </li>
            <li>Hospitality</li>
            <li>Conservatin & Tourism </li>
            <li>Institutional</li>
          </ul>
        </div>

        {/* Why Us */}
        <div className="w-[20%] flex flex-col items-center mt-28 justify-between">
          <h1 className="text-primary text-4xl font-semibold tracking-widest text-left p-2">
            Why Us
          </h1>
          <ul className="text-quaternary w-full tracking-wider flex flex-col items-center text-justify justify-between p-2 list-none mt-3 ">
            <li>Innovative Design Approach</li>
            <li>Case Studies</li>
            <li> Sustainable Designs </li>
            <li>Industr Connectivity </li>
            <li>Industry Connectivity</li>
            <li>Collaborative Process</li>
            <li>Work On Reinvent</li>
          </ul>
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

export default AboutPage;
