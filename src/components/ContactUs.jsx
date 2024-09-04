import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_30ckcje",
        "template_5fv3enc",
        form.current,
        "S7XBVtxwMBuCY8cwb"
      )
      .then(
        () => {
          toast.success("Email sent successfully!", {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            zIndex: 9999,
          });
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error(`Failed to send email. Error: ${error.text}`, {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            zIndex: 9999,
          });
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full min-h-[100vh]"
      style={{
        backgroundColor: "#cccaca",
      }}
    >
      <div className="w-full flex items-center justify-center mt-[64px]">
        <div className="text-denary lg:w-[75%] xs:w-[95%] xs:gap-x-5 flex justify-between items-end min-h-[118px]">
          <p className="text-4xl tracking-widest font-bold uppercase">
            Contact
          </p>

          {/* link */}
          <p className="tracking-[0.4em] text-xs text-denary font-light uppercase">
            {" "}
            <span>
              <Link to="/">Home</Link>
            </span>{" "}
            / Contact
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-nonary w-full mt-24 flex items-center justify-center lg:min-h-[80vh]">
        <div className="flex items-start justify-center lg:w-[75%] xs:w-[90%] xs:flex-col lg:flex-row mt-[60px] gap-7">
          {/* Send Message */}
          <div className="flex flex-col items-start gap-5">
            <h1 className="text-primary w-full uppercase  text-xl tracking-[0.2em] font-light">
              Send Us Message
            </h1>
            <form onSubmit={handleSubmit} ref={form} className="flex gap-7">
              <div className="flex flex-col gap-y-12">
                <input
                  className="p-3 px-4 bg-[#111111] text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  type="text"
                  name="user_name"
                  placeholder="Your Name *"
                  required
                />
                <input
                  className="p-3 px-4 bg-[#111111] text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  type="email"
                  name="user_email"
                  placeholder="Your email *"
                  required
                />
                <input
                  className="p-3 px-4 bg-[#111111] w-[350px] text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  type="number"
                  name="user_phone"
                  placeholder="Your Phone *"
                  required
                />
                {window.innerWidth < 1024 ? (
                  <textarea
                    rows="10"
                    cols="4"
                    name="message"
                    required
                    aria-multiline
                    placeholder="Your Message *"
                    className="p-3 px-4 bg-[#111111] text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 min-w-[90%] h-[175px]"
                  />
                ) : null}
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
                  type="submit"
                  className="w-[170px]"
                >
                  <div className="flex items-center justify-center">
                    Submit Form{" "}
                    <FontAwesomeIcon
                      className="pl-2 p-1 font-extrabold"
                      icon={faAngleRight}
                    />
                  </div>
                </Button>
              </div>
              {window.innerWidth >= 1024 ? (
                <textarea
                  rows="10"
                  cols="4"
                  name="message"
                  required
                  aria-multiline
                  placeholder="Your Message *"
                  className="p-3 px-4 bg-[#111111] text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 w-[450px] h-[175px]"
                />
              ) : null}
            </form>
          </div>

          <div className="flex flex-col items-start">
            <h1 className="text-primary w-full uppercase  text-xl tracking-[0.2em] font-light">
              Contact Info
            </h1>
            <div className="mt-5 flex flex-col gap-2">
              <div className="text-justify text-quinary text-xs flex flex-col items-start tracking-wider gap-1 border-b-[0.5px] border-[#111111] pb-2 min-w-[360px]">
                <p className="text-justify text-quinary text-xs">
                  H.no - D9A/1, 4<sup>th</sup> floor,
                </p>
                <p> Ardee city, sector-52, Gurugram,</p>
                <p>122003 - Haryana, India</p>
              </div>

              <div className="text-justify text-quinary text-xs flex flex-col items-start tracking-wider gap-1 border-b-[0.5px] border-[#111111] pb-2 min-w-[360px]">
                <p className="text-justify text-quinary text-xs">
                  <span className="text-primary font-bold tracking-wider text-sm">
                    Branch:
                  </span>{" "}
                  Block H, 502, supermax, sector-33, Sonipat, 133001 - Haryana,
                  India
                </p>
              </div>
              <p className="text-justify text-quinary text-xs min-w-[360px] border-b-[0.5px] border-[#111111] pb-2">
                <span className="text-primary font-bold tracking-wider text-sm">
                  Mobile:
                </span>{" "}
                +91 94675-77839
              </p>
              <p className="text-justify text-quinary text-xs min-w-[360px] border-b-[0.5px] border-[#111111] pb-2">
                <span className="text-primary font-bold tracking-wider text-sm">
                  Phone:
                </span>{" "}
                +91 99962-63603
              </p>
              <p className="text-justify text-quinary text-xs min-w-[360px] border-b-[0.5px] border-[#111111] pb-2">
                <span className="text-primary font-bold tracking-wider text-sm">
                  Email:
                </span>{" "}
                vastitudearchitects@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
