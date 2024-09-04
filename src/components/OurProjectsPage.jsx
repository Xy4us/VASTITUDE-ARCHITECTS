import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeProjectsModified } from "./HomeProjects";

const OurProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "#cccaca",
      }}
    >
      <div className="w-full flex items-center justify-center mt-[64px]">
        <div className="text-denary lg:w-[75%] xs:w-[95%] xs:gap-x-6 flex justify-between items-end min-h-[118px]">
          <p className="text-4xl tracking-widest font-bold uppercase">
            Projects
          </p>

          {/* link */}
          <p className="tracking-[0.4em] text-xs text-denary font-medium uppercase">
            {" "}
            <span>
              <Link to="/">Home</Link>
            </span>{" "}
            / Projects
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="w-full bg-denary mt-24 pt-4">
        <HomeProjectsModified name="Talk with us" link="/contact" />
      </div>
    </div>
  );
};

export default OurProjectsPage;
