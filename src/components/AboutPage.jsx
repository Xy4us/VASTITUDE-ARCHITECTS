import React, { useEffect } from "react";
import about from "../assets/About/About.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import team from "../assets/About/Team.png";
import Button from "@mui/material/Button";
import transitionVideo from "../assets/Video/Loading.mp4";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full min-h-[100vh]"
      style={{ backgroundColor: "#cccaca" }}
    >
      <div className="w-full flex items-center justify-center mt-[64px]">
        <div className="text-denary lg:w-[75%] xs:w-[95%] flex justify-between items-end min-h-[118px]">
          <p className="text-4xl tracking-widest font-bold uppercase">About</p>
          <p className="tracking-[0.4em] text-xs text-denary font-light uppercase">
            <span>
              <Link to="/">Home</Link>
            </span>{" "}
            / About
          </p>
        </div>
      </div>

      <div className="bg-denary w-full flex lg:flex-row xs:flex-col justify-between mt-24 ">
        <div className="lg:h-[700px] xs:w-full lg:w-[70%] lg:-ml-96 mt-20">
          <img src={about} alt="" className="w-full h-full rounded-br-md" />
        </div>

        <div className="lg:w-[43%] xs:w-full flex xs:pl-8 xs:mt-10 flex-col items-start justify-center">
          <h1 className="text-primary font-bold text-5xl tracking-wide">
            About Us
          </h1>
          <h2 className="text-secondary uppercase text-xl py-2 pt-5 tracking-widest">
            Vastitude Architects
          </h2>
          <div className="lg:w-[70%] xs:w-[90%] text-justify mt-8 pb-7 text-quaternary">
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

        <div className="w-full flex items-center mt-20 lg:flex-row-reverse xs:flex-col-reverse justify-between ">
          <div className="lg:h-[500px] lg:w-[40%] xs:w-full xs:h-[300px]">
            <img src={team} alt="" className="w-full h-full rounded-l-md" />
          </div>

          <div className="lg:w-[60%] xs:w-full flex flex-col items-center justify-center">
            <div className="lg:w-[70%] xs:w-[95%] flex flex-col items-center justify-between">
              <h1 className="text-primary font-bold text-5xl tracking-wide">
                The Firm
              </h1>
              <h2 className="text-secondary uppercase text-xl py-2 pt-5 tracking-widest">
                Vastitude Architects
              </h2>
              <div className="w-[70%] text-justify flex items-center flex-col justify-between mt-4 pb-7 text-quaternary ">
                <p className="tracking-wider text-sm ">Founders</p>
                <div className="w-full flex gap-x-20 justify-evenly items-center ">
                  <div className=" text-2xl font-bold tracking-wide">
                    Harish
                    <div>Dhiman</div>
                  </div>

                  <div className="text-2xl font-bold tracking-wide">
                    Manish
                    <div>Bhardwaj</div>
                  </div>
                </div>

                <h1 className="text-xl font-bold tracking-wide mt-7">&</h1>

                <p className=" mt-3 pt-2 tracking-wider text-sm">Team</p>
                <h1 className=" text-xl font-bold tracking-wide">
                  30+ Team Members
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center lg:justify-evenly xs:justify-between lg:flex-row xs:flex-col bg-denary pb-5">
        <div className="lg:w-[20%] xs:w-full flex flex-col items-center mt-28 justify-between">
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

        <div className="lg:w-[20%] xs:w-full flex flex-col items-center mt-28 justify-between">
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

        <div className="lg:w-[20%] xs:w-full flex flex-col items-center mt-28 justify-between">
          <h1 className="text-primary text-4xl font-semibold tracking-widest text-left p-2">
            Why Us
          </h1>
          <ul className="text-quaternary w-full tracking-wider flex flex-col items-center text-justify justify-between p-2 list-none mt-3 ">
            <li>Innovative Design Approach</li>
            <li>Case Studies</li>
            <li>Sustainable Designs </li>
            <li>Industry Connectivity</li>
            <li>Collaborative Process</li>
            <li>Work On Reinvent</li>
          </ul>
        </div>
      </div>

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
          {/* <div className="flex items-center justify-center w-[250px]">
            TALK WITH US{" "}
            <FontAwesomeIcon
              className="pl-2 p-1 font-extrabold"
              icon={faAngleRight}
            />
          </div> */}
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

export default AboutPage;
