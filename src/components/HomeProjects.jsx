import React, { useState } from "react";
import { allProjects, allResidential } from "../utils/constants";
import LazyLoad from "react-lazyload";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { slideInFromInside } from "../utils/motion.ts";

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
      name: "Vastu Consultant",
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
      <div className="w-[50%] flex flex-wrap items-center justify-center gap-7">
        {tabs.map((item, index) => (
          <div
            onClick={() => setCurrentTab(item.name)}
            key={index}
            className={`uppercase tracking-widest text-xs font-light ${
              currentTab === item.name
                ? "text-black bg-primary"
                : "hover:bg-tabs text-primary"
            } p-2 px-3 cursor-pointer duration-200 ease-in-out rounded-sm`}
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
          allProjects.slice(0, 6).map((item, index) => (
            <LazyLoad
              className="relative w-[365px] h-[280px] cursor-pointer duration-300 ease-linear group"
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
              className="relative w-[365px] h-[280px] cursor-pointer duration-300 ease-linear group"
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
          <div className="flex items-center justify-center w-[250px]">
            View All Projects{" "}
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

export default HomeProjects;
