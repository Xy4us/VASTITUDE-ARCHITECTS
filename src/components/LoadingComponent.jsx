import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import transitionVideo from "../assets/Video/Loading.mp4";

const LoadingComponent = () => {
  const [showContent, setShowContent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowContent(true);
    const timer = setTimeout(() => {
      setShowContent(false);
      window.scrollTo(0, 0);
    }, 1650);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div
      className={`w-full min-h-[100vh]  z-[999999] ${
        showContent ? "block" : "hidden"
      }`}
    >
      <video
        src={transitionVideo}
        autoPlay
        muted
        className="w-full h-full object-contain md:object-cover z-[9999] xs:min-h-[100vh]"
      />
    </div>
  );
};

export default LoadingComponent;
