import React, { useState } from "react";
import {
  allCorporate,
  allHospitals,
  allHotels,
  allHousing,
  allIndustrial,
  allLandscaping,
  allProjects,
  allResidential,
  allRetail,
  allVastu,
} from "../utils/constants";
import LazyLoad from "react-lazyload";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { slideInFromInside } from "../utils/motion.ts";
import { Link } from "react-router-dom";

const HomeProjects = () => {
  const [currentTab, setCurrentTab] = useState("Projects");

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const tabs = [
    {
      name: "Projects",
    },
    {
      name: "Residential",
    },
    {
      name: "Corporate",
    },
    {
      name: "Industrial",
    },
    {
      name: "Hotels",
    },
    {
      name: "Landscaping",
    },
    {
      name: "Hospitality",
    },
    {
      name: "Interior",
    },
    {
      name: "Retail",
    },
    {
      name: "Housing",
    },
  ];

  return (
    <div className="w-full mt-10 flex-col items-center flex justify-center">
      {/* Tabs Container */}
      <div className="lg:w-[50%] xs:w-[95%] flex flex-wrap items-center justify-center gap-7">
        {tabs.map((item, index) => (
          <div
            onClick={() => setCurrentTab(item.name)}
            key={index}
            className={`uppercase tracking-widest text-xs font-light cursor-pointer ${
              currentTab === item.name
                ? "text-black bg-primary"
                : "hover:bg-tabs text-primary"
            } p-2 px-3   duration-200 ease-in-out rounded-sm`}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Tabs Items */}

      <div
        className="w-[80%] mt-7 p-2 flex items-center flex-wrap gap-2 justify-center"
        ref={ref}
      >
        {currentTab === "Projects" &&
          allProjects.slice(0, 9).map((item, index) => (
            <LazyLoad
              className="relative w-[365px] h-[280px]   duration-300 ease-linear group"
              key={index}
            >
              <motion.div
                className="absolute top-0 w-full h-full "
                variants={slideInFromInside(0.25)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full absolute top-0 group-hover:scale-105 duration-200 ease-linear"
                />
              </motion.div>
            </LazyLoad>
          ))}

        {currentTab === "Residential" &&
          allResidential.slice(0, 6).map((item, index) => (
            <LazyLoad
              className="relative w-[365px] h-[280px]   duration-300 ease-linear group"
              key={index}
            >
              <motion.div
                className="absolute top-0 w-full h-full "
                variants={slideInFromInside(0.01)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full absolute top-0 group-hover:scale-105 duration-200 ease-linear"
                />

                <div className="group-hover:flex uppercase group-hover:scale-105 hidden text-2xl items-center justify-center absolute top-0 z-20 duration-200 ease-linear bg-[#00000097] min-w-full min-h-full text-primary font-semibold tracking-wider">
                  {item.title}
                </div>
              </motion.div>
            </LazyLoad>
          ))}

        {currentTab === "Corporate" &&
          allCorporate.slice(0, 6).map((item, index) => (
            <LazyLoad
              className="relative w-[365px] h-[280px]   duration-300 ease-linear group"
              key={index}
            >
              <motion.div
                className="absolute top-0 w-full h-full "
                variants={slideInFromInside(0.01)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full absolute top-0 group-hover:scale-105 duration-200 ease-linear"
                />

                <div className="group-hover:flex uppercase group-hover:scale-105 hidden text-2xl items-center justify-center absolute top-0 z-20 duration-200 ease-linear bg-[#00000097] min-w-full min-h-full text-primary font-semibold tracking-wider">
                  {item.title}
                </div>
              </motion.div>
            </LazyLoad>
          ))}

        {currentTab === "Industrial" &&
          allIndustrial.slice(0, 6).map((item, index) => (
            <LazyLoad
              className="relative w-[365px] h-[280px]   duration-300 ease-linear group"
              key={index}
            >
              <motion.div
                className="absolute top-0 w-full h-full "
                variants={slideInFromInside(0.01)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full absolute top-0 group-hover:scale-105 duration-200 ease-linear"
                />

                <div className="group-hover:flex uppercase group-hover:scale-105 hidden text-2xl items-center justify-center absolute top-0 z-20 duration-200 ease-linear bg-[#00000097] min-w-full min-h-full text-primary font-semibold tracking-wider">
                  {item.title}
                </div>
              </motion.div>
            </LazyLoad>
          ))}

        {currentTab === "Hotels" &&
          allHotels.slice(0, 6).map((item, index) => (
            <LazyLoad
              className="relative w-[365px] h-[280px]   duration-300 ease-linear group"
              key={index}
            >
              <motion.div
                className="absolute top-0 w-full h-full "
                variants={slideInFromInside(0.01)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full absolute top-0 group-hover:scale-105 duration-200 ease-linear"
                />

                <div className="group-hover:flex uppercase group-hover:scale-105 hidden text-2xl items-center justify-center absolute top-0 z-20 duration-200 ease-linear bg-[#00000097] min-w-full min-h-full text-primary font-semibold tracking-wider">
                  {item.title}
                </div>
              </motion.div>
            </LazyLoad>
          ))}

        {currentTab === "Landscaping" &&
          allLandscaping.slice(0, 6).map((item, index) => (
            <LazyLoad
              className="relative w-[365px] h-[280px]   duration-300 ease-linear group"
              key={index}
            >
              <motion.div
                className="absolute top-0 w-full h-full "
                variants={slideInFromInside(0.01)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full absolute top-0 group-hover:scale-105 duration-200 ease-linear"
                />

                <div className="group-hover:flex uppercase group-hover:scale-105 hidden text-2xl items-center justify-center absolute top-0 z-20 duration-200 ease-linear bg-[#00000097] min-w-full min-h-full text-primary font-semibold tracking-wider">
                  {item.title}
                </div>
              </motion.div>
            </LazyLoad>
          ))}

        {currentTab === "Hospitality" &&
          allHospitals.slice(0, 6).map((item, index) => (
            <LazyLoad
              className="relative w-[365px] h-[280px]   duration-300 ease-linear group"
              key={index}
            >
              <motion.div
                className="absolute top-0 w-full h-full "
                variants={slideInFromInside(0.01)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full absolute top-0 group-hover:scale-105 duration-200 ease-linear"
                />

                <div className="group-hover:flex uppercase group-hover:scale-105 hidden text-2xl items-center justify-center absolute top-0 z-20 duration-200 ease-linear bg-[#00000097] min-w-full min-h-full text-primary font-semibold tracking-wider">
                  {item.title}
                </div>
              </motion.div>
            </LazyLoad>
          ))}

        {currentTab === "Interior" &&
          allVastu.slice(0, 6).map((item, index) => (
            <LazyLoad
              className="relative w-[365px] h-[280px]   duration-300 ease-linear group"
              key={index}
            >
              <motion.div
                className="absolute top-0 w-full h-full "
                variants={slideInFromInside(0.01)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full absolute top-0 group-hover:scale-105 duration-200 ease-linear"
                />

                <div className="group-hover:flex uppercase group-hover:scale-105 hidden text-2xl items-center justify-center absolute top-0 z-20 duration-200 ease-linear bg-[#00000097] min-w-full min-h-full text-primary font-semibold tracking-wider">
                  {item.title}
                </div>
              </motion.div>
            </LazyLoad>
          ))}

        {currentTab === "Retail" &&
          allRetail.slice(0, 6).map((item, index) => (
            <LazyLoad
              className="relative w-[365px] h-[280px]   duration-300 ease-linear group"
              key={index}
            >
              <motion.div
                className="absolute top-0 w-full h-full "
                variants={slideInFromInside(0.01)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full absolute top-0 group-hover:scale-105 duration-200 ease-linear"
                />

                <div className="group-hover:flex uppercase group-hover:scale-105 hidden text-2xl items-center justify-center absolute top-0 z-20 duration-200 ease-linear bg-[#00000097] min-w-full min-h-full text-primary font-semibold tracking-wider">
                  {item.title}
                </div>
              </motion.div>
            </LazyLoad>
          ))}

        {currentTab === "Housing" &&
          allHousing.slice(0, 6).map((item, index) => (
            <LazyLoad
              className="relative w-[365px] h-[280px]   duration-300 ease-linear group"
              key={index}
            >
              <motion.div
                className="absolute top-0 w-full h-full "
                variants={slideInFromInside(0.01)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full absolute top-0 group-hover:scale-105 duration-200 ease-linear"
                />

                <div className="group-hover:flex uppercase group-hover:scale-105 hidden text-2xl items-center justify-center absolute top-0 z-20 duration-200 ease-linear bg-[#00000097] min-w-full min-h-full text-primary font-semibold tracking-wider">
                  {item.title}
                </div>
              </motion.div>
            </LazyLoad>
          ))}
      </div>
    </div>
  );
};

export default HomeProjects;

export const HomeProjectsModified = ({ name, link }) => {
  return (
    <div className="flex flex-col">
      <HomeProjects />
      <div className="-mt-4 min-h-[160px] bg-quaternary w-full items-center justify-center flex ">
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
            to={link}
            className="flex items-center justify-center w-[250px]"
          >
            {name}{" "}
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
