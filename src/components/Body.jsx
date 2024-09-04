// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Home";
// import AboutPage from "./AboutPage";
// import HomePage from "./HomePage";
// import OurServices from "./OurServices";
// import OurProjectsPage from "./OurProjectsPage";
// import PriceCalculator from "./PriceCalculator";
// import ContactUs from "./ContactUs";
// import Residential from "./Residential";
// import Corporate from "./Corporate";
// import Industrial from "./Industrial";
// import Hotels from "./Hotels";
// import Landscape from "./Landscape";
// import Hospital from "./Hospital";
// import Vastu from "./Vastu";
// import Retail from "./Retail";
// import Housing from "./Housing";
// import LoadingComponent from "./LoadingComponent";

// const Body = () => {
//   const appRouter = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//       children: [
//         {
//           index: true,
//           element: <HomePage />,
//         },
//         {
//           path: "/about",
//           element: (
//             <div>
//               <LoadingComponent />
//               <AboutPage />
//             </div>
//           ),
//         },
//         {
//           path: "/services",
//           element: <OurServices />,
//         },
//         {
//           path: "/our-projects",
//           element: (
//             <div>
//               <LoadingComponent />
//               <OurProjectsPage />
//             </div>
//           ),
//         },
//         {
//           path: "/price-calculator",
//           element: (
//             <div>
//               <LoadingComponent />
//               <PriceCalculator />
//             </div>
//           ),
//         },
//         {
//           path: "/contact-us",
//           element: (
//             <div>
//               <LoadingComponent />
//               <ContactUs />
//             </div>
//           ),
//         },
//         {
//           path: "/services/residential",
//           element: (
//             <div>
//               <LoadingComponent />
//               <Residential />
//             </div>
//           ),
//         },
//         {
//           path: "/services/corporate",
//           element: (
//             <div>
//               <LoadingComponent />
//               <Corporate />
//             </div>
//           ),
//         },
//         {
//           path: "/services/industrial",
//           element: (
//             <div>
//               <LoadingComponent />
//               <Industrial />
//             </div>
//           ),
//         },
//         {
//           path: "/services/hotels",
//           element: <Hotels />,
//         },
//         {
//           path: "/services/landscape",
//           element: <Landscape />,
//         },
//         {
//           path: "/services/hospital",
//           element: <Hospital />,
//         },
//         {
//           path: "/services/vastu",
//           element: <Vastu />,
//         },
//         {
//           path: "/services/retail",
//           element: <Retail />,
//         },
//         {
//           path: "/services/housing",
//           element: <Housing />,
//         },
//       ],
//     },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={appRouter} />
//     </div>
//   );
// };

// export default Body;

import React, { useEffect, useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import OurServices from "./OurServices";
import OurProjectsPage from "./OurProjectsPage";
import PriceCalculator from "./PriceCalculator";
import ContactUs from "./ContactUs";
import Residential from "./Residential";
import Corporate from "./Corporate";
import Industrial from "./Industrial";
import Hotels from "./Hotels";
import Landscape from "./Landscape";
import Hospital from "./Hospital";
import Vastu from "./Vastu";
import Retail from "./Retail";
import Housing from "./Housing";
import LoadingComponent from "./LoadingComponent";

// const AppWrapper = ({ children }) => {
//   const location = useLocation();

//   return (
//     <>
//       <LoadingComponent key={location.pathname} />
//       {children}
//     </>
//   );
// };

const AppWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 1650);

    return () => clearTimeout(timer);
  }, [location]);

  return <>{isLoading ? <LoadingComponent /> : children}</>;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppWrapper>
        <Home />
      </AppWrapper>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <OurServices />,
      },
      {
        path: "/our-projects",
        element: <OurProjectsPage />,
      },
      {
        path: "/price-calculator",
        element: <PriceCalculator />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/services/residential",
        element: <Residential />,
      },
      {
        path: "/services/corporate",
        element: <Corporate />,
      },
      {
        path: "/services/industrial",
        element: <Industrial />,
      },
      {
        path: "/services/hotels",
        element: <Hotels />,
      },
      {
        path: "/services/landscape",
        element: <Landscape />,
      },
      {
        path: "/services/hospital",
        element: <Hospital />,
      },
      {
        path: "/services/vastu",
        element: <Vastu />,
      },
      {
        path: "/services/retail",
        element: <Retail />,
      },
      {
        path: "/services/housing",
        element: <Housing />,
      },
    ],
  },
]);

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
