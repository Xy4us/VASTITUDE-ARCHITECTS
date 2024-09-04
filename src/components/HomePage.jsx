import React, { useEffect, useState } from "react";
import about from "../assets/About/About.jpg";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { approach, Services, Whyus } from "../utils/constants";
import ServiceCards from "./ServiceCards";
import { HomeProjectsModified } from "./HomeProjects";
import { Link } from "react-router-dom";
import video from "../assets/Video/Vastitude Architects.mp4";
import VideoClip from "./VideoClip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showVideoClip, setShowVideoClip] = useState(false);
  const [approachTab, setApproachTab] = useState(approach[0]?.title || "");
  const [approachDesc, setApproachDesc] = useState(approach[0]?.text || "");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth > 1000 ? 3 : 2,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const videoDiv = document.getElementById("top-video-div");
      if (videoDiv) {
        const videoDivBottom = videoDiv.getBoundingClientRect().bottom;
        setShowVideoClip(window.scrollY > videoDivBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <div
        id="top-video-div"
        className="lg:max-h-[90vh] lg:min-h-[90vh] w-full mt-[60px]"
      >
        <video
          autoPlay
          muted
          loop
          className="w-full lg:min-h-[90vh] object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-full min-h-[50px]"></div>

      {/* About */}
      <div className="lg:mt-[210.5px] xs:mt-[100px] bg-denary w-full flex lg:flex-row xs:flex-col-reverse xs:gap-y-20 lg:gap-y-0 justify-between mt-20">
        <div className="lg:h-[500px] lg:w-[50%] xs:w-full">
          <img src={about} alt="" className="w-full h-full rounded-br-md" />
        </div>

        <div className="lg:w-[43%] xs:w-full xs:px-3 lg:px-0 flex flex-col items-start justify-center">
          <h1 className="text-primary font-bold text-5xl tracking-wide">
            About Us
          </h1>
          <h2 className="text-secondary uppercase text-xl tracking-widest">
            Vastitude Architects
          </h2>
          <div className="lg:w-[70%] xs:w-[97%] text-justify mt-8 pb-7 text-quaternary">
            <p className="py-2">
              Vastitude Architects is a full-service architectural firm that
              specializes in residential, commercial, and industrial projects.
            </p>
            <p className=" py-2">
              {" "}
              We are dedicated to providing our clients with innovative design
              solutions that are both functional and aesthetically pleasing.
            </p>
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
              page={item.page}
            />
          ))}
        </div>
      </div>

      {/* Why us */}
      <div className="w-full bg-denary mt-20 flex items-center justify-between flex-col gap-y-6">
        <h1 className="text-primary text-center text-5xl font-bold tracking-wide">
          Why Choose Vastitude Architects
        </h1>
        <div className="w-[45%] text-center flex justify-between items-center mt-7">
          <div className="border border-octonary w-[45%]"></div>
          <FontAwesomeIcon
            icon={faCircle}
            className="h-[7px] -translate-y-[0.5px] text-tertiary"
          />
          <div className="border border-octonary w-[45%]"></div>
        </div>

        <div className="lg:w-[75%] xs:w-[90%] mt-14">
          <Slider {...settings}>
            {Whyus.map((item, index) => (
              <div
                className="flex flex-col w-full items-center justify-between xs:min-w-[190px] xs:max-h-[300px] lg:min-h-[500px] lg:min-w-[400px]  bg-[#111111] rounded-lg p-3 h-full "
                key={index}
              >
                <div className="min-w-full lg:h-[500px] xs:h-[300px] flex flex-col items-center  justify-evenly">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-full xs:max-h-[150px] xs:max-w-[150px] lg:w-[300px] lg:h-[200px] justify-center items-center"
                  />

                  <div className="flex w-full flex-col items-center justify-between text-justify">
                    <h1 className="text-primary xs:text-sm md:text-base lg:text-3xl font-bold tracking-wider">
                      {item.title}
                    </h1>
                    <div className="text-quaternary lg:text-base xs:text-[9px] md:text-sm items-center flex justify-between flex-col lg:mt-5 lg:w-[75%] xs:w-[90%]">
                      {item.para.map((para, index) => (
                        <p className="text-quaternary text-base" key={index}>
                          <span className="font-bold tracking-wide ">
                            {para.highlighter}{" "}
                          </span>

                          {para.text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Our Approach */}
      <div className="parallax-container mt-20 ">
        <div className="parallax flex flex-col">
          <div className=" z-10 w-full h-full bg-[#10212db8]  flex items-center flex-col gap-y-4">
            <h1 className="text-primary text-center text-5xl mt-14 font-bold tracking-wide">
              Our Approach
            </h1>
            <div className="w-[45%] text-center flex justify-between items-center mt-7">
              <div className="border border-quinary w-[45%]"></div>
              <FontAwesomeIcon
                icon={faCircle}
                className="h-[7px] -translate-y-[0.5px] text-tertiary"
              />
              <div className="border border-quinary w-[45%]"></div>
            </div>
            <div className="lg:w-[75%] xs:w-full flex items-center justify-between mt-14">
              {approach.map((item, index) => (
                <div
                  className={`lg:min-h-[200px] xs:min-h-[70px]  lg:min-w-[200px] rounded-full relative text-denary flex items-center uppercase text-sm font-medium justify-center cursor-pointer duration-200 ease-in-out p-2 px-3 hover:bg-[#0b0b0b9c] group ${
                    approachTab === item.title
                      ? "bg-[#0b0b0b9c] border border-[#d4d5d6b6]"
                      : "bg-[#d4d5d6b6]"
                  } `}
                  key={index}
                  onClick={() => {
                    setApproachTab(item.title);
                    setApproachDesc(item.text);
                  }}
                >
                  <p
                    className={`text-black lg:text-base sm:text-xs xs:text-[9px] xs:leading-[0.5rem] duration-500 ease-linear group-hover:text-primary ${
                      approachTab === item.title && "text-primary"
                    }`}
                  >
                    <div className="w-full flex items-center flex-col gap-y-1">
                      {item.title.split(" ").map((word, index) => (
                        <span key={index}>{word}</span>
                      ))}
                    </div>
                  </p>

                  {approachTab === item.title && (
                    <div className="border border-quinary min-h-[96.3px] absolute -bottom-24 right-[50%]"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="lg:w-[75%] md:w-[95%] xs:w-full mt-20 flex items-center justify-between flex-col ">
              <div className="border border-quinary w-full"></div>
              <div className="lg:w-[80%] md:w-[90%] xs:w-[97%]  tracking-wide p-2 text-justify text-quinary mt-10">
                {approachDesc}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {All Projects} */}
      <HomeProjectsModified name="View All Projects" link="/our-projects" />

      {/* Video Clip */}
      {showVideoClip && <VideoClip />}
    </div>
  );
};

export default HomePage;
