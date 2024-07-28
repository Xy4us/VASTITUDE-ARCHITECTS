import React from "react";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ServiceCards = ({ image, desc, title }) => {
  return (
    <div className="w-[400px] h-[265px] relative rounded-md group">
      <img
        src={image}
        alt={title}
        className="w-full h-full z-0 rounded-md group-hover:scale-110 duration-200 ease-in-out"
      />
      <div className="absolute bg-[#00000077] top-0 group-hover:scale-110 duration-200 ease-in-out z-10 min-w-[400px] min-h-[265px] rounded-md "></div>

      <div className="absolute w-full h-full  z-20 group-hover:hidden duration-200 ease-in-out flex items-center justify-center text-primary text-xl font-bold tracking-widest uppercase top-0 ">
        {title}
      </div>

      <div className="group-hover:flex bg-[#00000097] scale-110 duration-200 ease-in-out rounded-md hidden absolute top-0 ease-in-out duration-200 z-20 min-w-[400px] min-h-[265px] gap-4 flex-col items-center ">
        <h1 className="text-primary text-xl font-bold tracking-widest uppercase text-primary mt-5">
          {title}
        </h1>
        <p className="text-tertiary max-w-[70%] line-clamp-3 text-ellipsis mt-7 text-justify">
          {desc}
        </p>
        <Button
          variant="outlined"
          sx={{
            color: "#e9ecef",
            borderColor: "#e9ecef",
            "&:hover": {
              backgroundColor: "#ffffff",
              borderColor: "#ffffff",
              color: "black",
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
    // <div className="w-[400px] h-[265px] relative rounded-md group overflow-hidden">
    //   <img
    //     src={image}
    //     alt={title}
    //     className="w-full h-full z-0 rounded-md transform transition-transform duration-300 group-hover:scale-110"
    //   />
    //   <div className="absolute bg-[#00000077] top-0 z-10 w-full h-full rounded-md flex items-center justify-center text-primary text-xl font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //     {title}
    //   </div>
    //   <div className="absolute bottom-0 left-0 z-20 w-full p-4 bg-black bg-opacity-50 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //     {desc}
    //   </div>
    // </div>
  );
};

export default ServiceCards;
