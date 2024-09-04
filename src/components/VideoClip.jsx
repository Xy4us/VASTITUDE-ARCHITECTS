import React, { useEffect, useState } from "react";
import video from "../assets/Video/Vastitude Architects.mp4";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromTopInside } from "../utils/motion.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const VideoClip = () => {
  const [visible, setVisible] = useState(true);

  const { ref, inView } = useInView({
    triggerOnce: visible,
  });

  useEffect(() => {
    if (!visible && ref.current) {
      ref.current.unobserve();
    }
  }, [visible, ref]);

  return (
    visible && (
      <motion.div
        className="fixed lg:block xs:hidden top-40 right-10 min-w-[400px] min-h-[300px] max-w-[400px] max-h-[300px] group z-50"
        variants={slideInFromTopInside(0.1)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <video
          autoPlay
          muted
          loop
          className="min-w-full min-h-full object-cover z-50 rounded-xl "
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <FontAwesomeIcon
          icon={faXmark}
          className="text-black text-2xl cursor-pointer font-bold absolute top-2 z-50 right-2  lg:group-hover:block lg:hidden block"
          onClick={() => setVisible(false)}
        />
      </motion.div>
    )
  );
};

export default VideoClip;
