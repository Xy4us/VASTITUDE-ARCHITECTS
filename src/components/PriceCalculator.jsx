import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PriceCalculator = () => {
  const [floor, setFloor] = useState("");
  const [basement, setBasement] = useState("");
  const [stilt, setStilt] = useState("");
  const [city, setCity] = useState("");

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleStilt = (e) => {
    setStilt(e.target.value);
  };

  const handleFloor = (e) => {
    setFloor(e.target.value);
  };

  const handleBasement = (e) => {
    setBasement(e.target.value);
  };

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_30ckcje",
        "template_6g6wl6a",
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
      className="w-full"
      style={{
        backgroundColor: "#cccaca",
      }}
    >
      <div className="w-full flex items-center justify-center mt-[64px]">
        <div className="text-denary lg:w-[75%] xs:w-[95%] xs:gap-x-5 flex justify-between items-end min-h-[118px]">
          <p className="text-4xl tracking-widest font-bold uppercase">
            Price Calculator
          </p>

          {/* link */}
          <p className="tracking-[0.4em] text-xs text-denary font-light uppercase">
            {" "}
            <span>
              <Link to="/">Home</Link>
            </span>{" "}
            / Calculator
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-denary w-full flex items-center justify-center mt-24 min-h-[60vh] pb-10">
        <div className="flex lg:w-[75%] xs:w-[95%]  xs:flex-col-reverse lg:flex-row lg:gap-x-7 justify-between items-center mt-14 xs:gap-y-12">
          {/* Details  */}
          <div className="flex flex-col items-start lg:w-[45%] xs:w-[85%] min-h-[500px] gap-7">
            <h1 className="text-primary text-4xl font-bold tracking-wider">
              Construction Cost in Gurgaon
            </h1>

            <p className="text-justify text-quaternary ">
              Unlock a glimpse into your construction costs with our innovative
              calculator/estimator for construction costs in Gurgaon. Our goal
              is to provide you with an accurate estimate of the cost of
              building your dream home in Gurgaon.
            </p>

            <ul className="flex flex-col items-start w-full gap-8 list-disc text-quaternary p-5">
              <li>
                Simply enter your plot size and home design preferences to get a
                ballpark figure for your project's expenses.
              </li>
              <li>
                If you’re working within a budget, our experts are ready to
                customize your project to fit your financial goals. The price
                range provided is for preliminary guidance.
              </li>
              <li>
                For an accurate quote, schedule a personalized consultation with
                our home advisor{" "}
                <span className="font-bold"> by calling +91-99962-63603.</span>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            ref={form}
            className="lg:min-w-[45%] min-h-[500px] xs:min-w-[60%] bg-[#111111] rounded-2xl px-4 p-2 flex flex-col gap-y-10"
          >
            <div className="w-full flex lg:flex-row xs:flex-col items-center justify-between">
              <input
                className="p-3 px-4 bg-denary min-w-[250px] text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 "
                type="text"
                name="size"
                placeholder="Plot Size"
                required
              />

              <Box sx={{ minWidth: 250 }}>
                <p className="text-sm font-semibold tracking-wide p-2 py-3 uppercase">
                  Floor count
                </p>
                <FormControl fullWidth>
                  <InputLabel
                    sx={{
                      color: "#adb5bd",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#adb5bd", // Default border color
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#adb5bd", // Border color on hover
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#adb5bd", // Border color on focus
                      },
                      "&.Mui-focused": {
                        color: "#adb5bd", // Text color on focus
                      },
                      "& .MuiSelect-icon": {
                        color: "#adb5bd", // Arrow color
                      },
                      "&.Mui-focused .MuiSelect-icon": {
                        color: "#adb5bd", // Arrow color on focus
                      },
                    }}
                    id="demo-simple-select-label"
                  >
                    Floor
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={floor}
                    label="Floor"
                    name="Floor"
                    required
                    sx={{
                      color: "#adb5bd",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#adb5bd", // Default border color
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#adb5bd", // Border color on hover
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#adb5bd", // Border color on focus
                      },
                      "&.Mui-focused": {
                        color: "#adb5bd", // Text color on focus
                      },
                      "& .MuiSelect-icon": {
                        color: "#adb5bd", // Arrow color
                      },
                      "&.Mui-focused .MuiSelect-icon": {
                        color: "#adb5bd", // Arrow color on focus
                      },
                    }}
                    onChange={handleFloor}
                  >
                    <MenuItem value={1}>1 Floor</MenuItem>
                    <MenuItem value={2}>2 Floor</MenuItem>
                    <MenuItem value={3}>3 Floor</MenuItem>
                    <MenuItem value={4}>4 Floor</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div className="w-full flex items-center justify-between lg:flex-row xs:flex-col">
              <FormControl sx={{ minWidth: 250 }}>
                <FormLabel
                  sx={{
                    color: "#f8f9fa",
                    "&.Mui-focused": {
                      color: "#f8f9fa",
                    },
                  }}
                  id="demo-row-radio-buttons-group-label"
                >
                  <p className="text-sm font-semibold tracking-wide p-2 py-3 uppercase">
                    Basement
                  </p>
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="basement"
                  value={basement}
                  required
                  onChange={handleBasement}
                >
                  <FormControlLabel
                    value="Yes"
                    control={
                      <Radio
                        sx={{
                          color: "#adb5bd",
                          "&.Mui-checked": {
                            color: "white",
                          },
                        }}
                      />
                    }
                    label="Yes"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        color: "#adb5bd",
                      },
                    }}
                  />
                  <FormControlLabel
                    value="No"
                    control={
                      <Radio
                        sx={{
                          color: "#adb5bd",
                          "&.Mui-checked": {
                            color: "white",
                          },
                        }}
                      />
                    }
                    label="No"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        color: "#adb5bd",
                      },
                    }}
                  />
                </RadioGroup>
              </FormControl>

              <FormControl sx={{ minWidth: 250 }}>
                <FormLabel
                  sx={{
                    color: "#f8f9fa",
                    "&.Mui-focused": {
                      color: "#f8f9fa",
                    },
                  }}
                  id="demo-row-radio-buttons-group-label"
                >
                  <p className="text-sm font-semibold tracking-wide p-2 py-3 uppercase">
                    Stilt
                  </p>
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="stilt"
                  value={stilt}
                  onChange={handleStilt}
                >
                  <FormControlLabel
                    value="Yes"
                    control={
                      <Radio
                        sx={{
                          color: "#adb5bd",
                          "&.Mui-checked": {
                            color: "white",
                          },
                        }}
                      />
                    }
                    label="Yes"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        color: "#adb5bd",
                      },
                    }}
                  />
                  <FormControlLabel
                    value="No"
                    control={
                      <Radio
                        sx={{
                          color: "#adb5bd",
                          "&.Mui-checked": {
                            color: "white",
                          },
                        }}
                      />
                    }
                    label="No"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        color: "#adb5bd",
                      },
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="w-full xs:gap-y-4 lg:gap-y-0 flex items-center justify-between lg:flex-row xs:flex-col">
              <input
                className="p-3 px-4 bg-denary text-tertiary focus:outline-none min-w-[250px] focus:ring-2 focus:ring-primary focus:ring-opacity-50 "
                type="text"
                name="user_name"
                placeholder="Your Name *"
                required
              />
              <input
                className="p-3 px-4 bg-denary text-tertiary min-w-[250px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 "
                type="email"
                name="user_email"
                placeholder="Your email *"
                required
              />
            </div>

            <div className="w-full flex items-center justify-between lg:flex-row xs:flex-col xs:gap-y-4 lg:gap-y-0">
              <input
                className="p-3 px-4 bg-denary min-w-[250px] text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 "
                type="number"
                name="user_phone"
                placeholder="Your Phone *"
                required
              />

              <Box sx={{ minWidth: 250 }}>
                {/* <p className="text-sm font-semibold tracking-wide p-2 py-3 uppercase">
                  Floor count
                </p> */}
                <FormControl fullWidth>
                  <InputLabel
                    sx={{
                      color: "#adb5bd",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#adb5bd", // Default border color
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#adb5bd", // Border color on hover
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#adb5bd", // Border color on focus
                      },
                      "&.Mui-focused": {
                        color: "#adb5bd", // Text color on focus
                      },
                      "& .MuiSelect-icon": {
                        color: "#adb5bd", // Arrow color
                      },
                      "&.Mui-focused .MuiSelect-icon": {
                        color: "#adb5bd", // Arrow color on focus
                      },
                    }}
                    id="demo-simple-select-label"
                  >
                    City
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    label="City"
                    name="City"
                    required
                    sx={{
                      color: "#adb5bd",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#adb5bd", // Default border color
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#adb5bd", // Border color on hover
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#adb5bd", // Border color on focus
                      },
                      "&.Mui-focused": {
                        color: "#adb5bd", // Text color on focus
                      },
                      "& .MuiSelect-icon": {
                        color: "#adb5bd", // Arrow color
                      },
                      "&.Mui-focused .MuiSelect-icon": {
                        color: "#adb5bd", // Arrow color on focus
                      },
                    }}
                    onChange={handleCity}
                  >
                    <MenuItem value={"Gurgaon"}>Gurgaon</MenuItem>
                    <MenuItem value={"Noida"}>Noida</MenuItem>
                    <MenuItem value={"Delhi"}>Delhi</MenuItem>
                    <MenuItem value={"Faridabad"}>Faridabad</MenuItem>
                    <MenuItem value={"Ghaziabad"}>Ghaziabad</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
              type="submit"
              className="w-[170px]"
            >
              <div className="flex items-center justify-center">
                Calculate{" "}
                <FontAwesomeIcon
                  className="pl-2 p-1 font-extrabold"
                  icon={faAngleRight}
                />
              </div>
            </Button>
          </form>
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
      <ToastContainer />
    </div>
  );
};

export default PriceCalculator;
