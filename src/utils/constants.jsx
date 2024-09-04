import { m } from "framer-motion";

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(
  require.context("../assets/Our services", false, /\.(png|jpe?g|svg)$/)
);

const Projects = importAll(
  require.context("../assets/All Projects", false, /\.(png|jpe?g|svg|jpg)$/)
);

const Residential = importAll(
  require.context("../assets/Residential Page", false, /\.(png|jpe?g|svg|jpg)$/)
);

const Corporate = importAll(
  require.context("../assets/Corporate", false, /\.(png|jpe?g|svg|jpg)$/)
);

const CorporateImage = importAll(
  require.context("../assets/CorporatePage", false, /\.(png|jpe?g|svg|jpg)$/)
);

const Industrail = importAll(
  require.context("../assets/Industrial", false, /\.(png|jpe?g|svg|jpg)$/)
);

const IndustrialImage = importAll(
  require.context("../assets/Industrial Page", false, /\.(png|jpe?g|svg|jpg)$/)
);

const Hotels = importAll(
  require.context("../assets/Hotels", false, /\.(png|jpe?g|svg|jpg)$/)
);

const HotelsPage = importAll(
  require.context("../assets/Hotel Page", false, /\.(png|jpe?g|svg|jpg)$/)
);

const Landscaping = importAll(
  require.context("../assets/Landscaping", false, /\.(png|jpe?g|svg|jpg)$/)
);

const LandscapePage = importAll(
  require.context("../assets/Landscape Page", false, /\.(png|jpe?g|svg|jpg)$/)
);

const Hospitality = importAll(
  require.context("../assets/Hospitality", false, /\.(png|jpe?g|svg|jpg)$/)
);

export const HospitalPage = importAll(
  require.context("../assets/Hospital Page", false, /\.(png|jpe?g|svg|jpg)$/)
);

const Vastu = importAll(
  require.context("../assets/Vastu", false, /\.(png|jpe?g|svg|jpg)$/)
);

const VastuPage = importAll(
  require.context("../assets/Interior Page", false, /\.(png|jpe?g|svg|jpg)$/)
);

const Retail = importAll(
  require.context("../assets/Retail", false, /\.(png|jpe?g|svg|jpg)$/)
);

const RetailPage = importAll(
  require.context("../assets/Retail Page", false, /\.(png|jpe?g|svg|jpg)$/)
);

const Housing = importAll(
  require.context("../assets/Housing", false, /\.(png|jpe?g|svg|jpg)$/)
);

const WhyUs = importAll(
  require.context("../assets/Extra Headings", false, /\.(png|jpe?g|svg|jpg)$/)
);

export const quickLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Our Services",
    path: "/services",
  },
  {
    name: "Projects",
    path: "/our-projects",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

export const Services = [
  {
    title: "Residential",
    image: images[0],
    page: "/services/residential",
    description:
      "Whether you’re looking to build a new home, renovate an existing space, or simply need expert advice on design elements, Vastitude Architects is here to guide you every step of the way. Let us help you create a living environment that truly feels like home.",
  },
  {
    title: "Corporate",
    image: images[1],
    page: "/services/corporate",
    description:
      "Sustainability and technology are at the heart of our design philosophy. We incorporate the latest advancements in building materials and smart office technologies to create spaces that are not only beautiful but also environmentally responsible and future-proof.",
  },
  {
    title: "Industrial",
    image: images[2],
    page: "/services/industrial",
    description:
      "We leverage cutting-edge technology and sustainable practices to deliver solutions that are not only visually compelling but also environmentally responsible. At Vastitude Architects, our commitment is to transform industrial spaces into hubs of innovation and efficiency, driving progress and success for our clients.",
  },
  {
    title: "Restaurants & Hotels",
    image: images[3],
    page: "/services/hotels",
    description:
      "In the realm of hotel design, we focus on creating welcoming, comfortable, and aesthetically pleasing spaces that enhance the guest experience. Our restaurant designs aim to reflect the culinary vision, fostering an ambiance that complements the dining experience. For bars, we strive to craft vibrant, engaging environments that invite patrons to relax and enjoy.",
  },
  {
    title: "Landscaping",
    image: images[4],
    page: "/services/landscape",
    description:
      "Whether it's designing a serene garden for a private residence, creating inviting public parks, or planning green spaces for commercial developments, we bring creativity, expertise, and passion to every project.",
  },
  {
    title: "Hospitals",
    image: images[5],
    page: "/services/hospital",
    description:
      "Our expertise ensures that every design promotes efficiency, patient comfort, and staff effectiveness. By integrating cutting-edge technology and thoughtful spatial planning, we strive to enhance the overall experience for patients, families, and medical professionals alike.",
  },
  {
    title: "Interiors",
    image: images[6],
    page: "/services/vastu",
    description:
      "Whether you are planning a new construction or seeking to optimize an existing space, we provide personalized Vastu consultations tailored to your unique needs and aspirations. Our approach combines a deep respect for ancient wisdom with a commitment to contemporary design excellence, ensuring that your space is not only functional and aesthetically pleasing but also energetically balanced.",
  },
  {
    title: "Retail",
    image: images[7],
    page: "/services/retail",
    description:
      "From conceptual design to final execution, we ensure every detail aligns with your vision and business goals. Partner with us to transform your retail space into an inviting destination that stands out in the marketplace.",
  },
  {
    title: "Housing",
    image: images[8],
    page: "/services/housing",
    description:
      "We understand that a home is more than just a structure—it's a reflection of your lifestyle and aspirations. Our team combines innovative design solutions with practical insights to deliver personalized, sustainable, and aesthetically pleasing housing solutions.",
  },
];

export const allProjects = [
  {
    title: "Residential",
    image: Projects[0],
  },
  {
    title: "Corporate",
    image: Projects[1],
  },
  {
    title: "Industrial",
    image: Projects[2],
  },
  {
    title: "Hotels",
    image: Projects[3],
  },
  {
    title: "Landscaping",
    image: Projects[4],
  },
  {
    title: "Hospitality",
    image: Projects[5],
  },
  {
    title: "Vastu Consultant",
    image: Projects[6],
  },
  {
    title: "Retail",
    image: Projects[7],
  },
  {
    title: "Housing",
    image: Projects[8],
  },
];

export const allResidential = [
  {
    title: "Agrawal House",
    image: Residential[0],
  },
  {
    title: "Arora_s Residence",
    image: Residential[1],
  },
  {
    title: "Beniwal House",
    image: Residential[2],
  },
];

export const ResidentialList = [
  {
    title: "01",
    photos: [
      {
        title: "FarmHouse Gurgaon",
        image: Residential[0],
      },
      {
        title: "Arora_s Residence",
        image: Residential[1],
      },
      {
        title: "Beniwal House",
        image: Residential[2],
      },
      {
        title: " Khanna's Residence",
        image: Residential[3],
      },
      {
        title: "Dahiya's Residence",
        image: Residential[4],
      },
      {
        title: "Dhull's Residence",
        image: Residential[5],
      },
    ],
  },
  {
    title: "02",
    photos: [
      {
        title: "Khanna's Residence",
        image: Residential[3],
      },
      {
        title: "Sharma's FarmHouse",
        image: Residential[4],
      },
      {
        title: "Dhull's Residence",
        image: Residential[5],
      },
    ],
  },
  {
    title: "03",
    photos: [
      {
        title: "Mangla_s Residence",
        image: Residential[6],
      },
      {
        title: "Thakran's House",
        image: Residential[13],
      },
    ],
  },
  {
    title: "01",
    photos: [
      {
        title: "Rana's Residence",
        image: Residential[7],
      },
      {
        title: "Rana's Villa Gurugram",
        image: Residential[8],
      },
      {
        title: "Row Housing Patiala",
        image: Residential[9],
      },
    ],
  },

  {
    title: "02",
    photos: [
      {
        title: "Dahiya's Farmhouse",
        image: Residential[10],
      },
      {
        title: "Singhi's House",
        image: Residential[11],
      },
      {
        title: "Tewatia House",
        image: Residential[12],
      },
    ],
  },

  {
    title: "03",
    photos: [
      {
        title: "Verma's Residence ",
        image: Residential[14],
      },
      {
        title: "Chaudhary Residence",
        image: Residential[15],
      },
    ],
  },

  {
    title: "01",
    photos: [
      {
        title: "Yadav's Residence",
        image: Residential[16],
      },
      {
        title: "Soni's Residence",
        image: Residential[17],
      },
      {
        title: "Dhiman's Residence",
        image: Residential[18],
      },
    ],
  },
];

export const allCorporate = [
  {
    title: "Qatar Office",
    image: Corporate[0],
  },
  {
    title: "Ditya Soft Noida",
    image: Corporate[1],
  },
  {
    title: "Lawyer Office",
    image: Corporate[2],
  },
];

export const corporateList = [
  {
    title: "01",
    photos: [
      {
        title: "Nandal's Office",
        image: CorporateImage[0],
      },
      {
        image: CorporateImage[1],
      },
      {
        title: "CA Cabin",
        image: CorporateImage[2],
      },
    ],
  },
  {
    title: "02",
    photos: [
      {
        title: "Qatar Office",
        image: CorporateImage[3],
      },
      {
        image: CorporateImage[4],
      },
      {
        title: "Misra's Office",
        image: CorporateImage[5],
      },
    ],
  },

  {
    title: "03",
    photos: [
      {
        title: "Qatar Office",
        image: CorporateImage[6],
      },
      {
        title: "Pooja Constructions",
        image: CorporateImage[7],
      },
    ],
  },

  {
    title: "03",
    photos: [
      {
        title: "Lawyer office",
        image: CorporateImage[8],
      },
      {
        title: "Ditya Soft Noida",
        image: CorporateImage[9],
      },
    ],
  },
];

export const allIndustrial = [
  {
    title: "YK Win",
    image: Industrail[0],
  },
  {
    title: "Factory Panipat",
    image: Industrail[1],
  },
  {
    title: "Office Building",
    image: Industrail[2],
  },
];

export const industrialList = [
  {
    title: "01",
    photos: [
      {
        title: "Factory Panipat",
        image: IndustrialImage[0],
      },
      {
        title: "Factory",
        image: IndustrialImage[1],
      },
      {
        title: "Plant Bahadurgarh",
        image: IndustrialImage[2],
      },
    ],
  },
  {
    title: "03",
    photos: [
      {
        title: "Office Building-Bahadurgarh",
        image: IndustrialImage[3],
      },
      {
        title: "Office Complex Factory",
        image: IndustrialImage[4],
      },
    ],
  },
  {
    title: "03",
    photos: [
      {
        title: "Factory Prithla",
        image: IndustrialImage[5],
      },
      {
        title: "YK WINS",
        image: IndustrialImage[6],
      },
    ],
  },
];

export const allHotels = [
  {
    title: "Resto Dimapur",
    image: Hotels[0],
  },
  {
    title: "Hotel Nehru",
    image: Hotels[1],
  },
  {
    title: "Hotel Banglore",
    image: Hotels[2],
  },
];

export const hotelsList = [
  {
    title: "01",
    photos: [
      {
        title: "Hotel Dimapur",
        image: HotelsPage[0],
      },
      {
        image: HotelsPage[1],
      },
      {
        image: HotelsPage[2],
      },
    ],
  },
  {
    title: "02",
    photos: [
      {
        title: "Bar",
        image: HotelsPage[3],
      },
      {
        image: HotelsPage[4],
      },
      {
        image: HotelsPage[5],
      },
    ],
  },

  {
    title: "03",
    photos: [
      {
        title: "Proposal New Hotel Banglore",
        image: HotelsPage[6],
      },
      {
        title: "Restro Naraingarh",
        image: HotelsPage[7],
      },
    ],
  },

  {
    title: "01",
    photos: [
      {
        title: "Hotel Naraingarh",
        image: HotelsPage[8],
      },
      {
        image: HotelsPage[9],
      },
      {
        image: HotelsPage[10],
      },
    ],
  },

  {
    title: "02",
    photos: [
      {
        title: "Restro",
        image: HotelsPage[11],
      },
      {
        title: "Hotel -Arunachal",
        image: HotelsPage[12],
      },
      {
        title: " Bar Chandigarh",
        image: HotelsPage[13],
      },
    ],
  },
];

export const allLandscaping = [
  {
    title: "Restro Landscape",
    image: Landscaping[0],
  },
  {
    title: "Dlf Golf Course",
    image: Landscaping[1],
  },
  {
    title: "Trophy CP-Kukreja",
    image: Landscaping[2],
  },
];

export const LandscapeList = [
  {
    title: "01",
    photos: [
      {
        title: " Competition CP Kukreja Trophy ",
        image: LandscapePage[0],
      },
      {
        image: LandscapePage[1],
      },
      {
        image: LandscapePage[2],
      },
    ],
  },

  {
    title: "02",
    photos: [
      {
        title: "",
        image: LandscapePage[3],
      },
      {
        image: LandscapePage[4],
      },
      {
        title: " Terrace Restaurant",
        image: LandscapePage[5],
      },
    ],
  },

  {
    title: "03",
    photos: [
      {
        image: LandscapePage[7],
      },
      {
        title: "Event-DLF Golf and Country Club",
        image: LandscapePage[6],
      },
    ],
  },
];

export const allHospitals = [
  {
    title: "Clinic Chandigarh",
    image: Hospitality[0],
  },
  {
    title: "Clinic",
    image: Hospitality[1],
  },
  {
    title: "Mangla Hospital",
    image: Hospitality[1],
  },
];

export const HospitalList = [
  {
    title: "03",
    photos: [
      {
        title: "Clinic Chandigarh",
        image: HospitalPage[0],
      },
      {
        image: HospitalPage[1],
      },
    ],
  },

  {
    title: "02",
    photos: [
      {
        title: "Mangla Hospital",
        image: HospitalPage[3],
      },
      {
        image: HospitalPage[4],
      },
      {
        image: HospitalPage[5],
      },
    ],
  },

  {
    title: "03",
    photos: [
      {
        image: HospitalPage[6],
      },
      {
        image: HospitalPage[7],
      },
    ],
  },

  {
    title: "03",
    photos: [
      {
        image: HospitalPage[8],
      },
      {
        image: HospitalPage[9],
      },
    ],
  },

  {
    title: "03",
    photos: [
      {
        image: HospitalPage[10],
      },
      {
        title: "Mangla Hospital",
        image: HospitalPage[11],
      },
    ],
  },
];

export const allVastu = [
  {
    title: "Karnal Residence",
    image: Vastu[0],
  },
  {
    title: "Jewellery Showroom",
    image: Vastu[1],
  },
  {
    title: "Banquet Hall",
    image: Vastu[2],
  },
];

export const VastuList = [
  {
    title: "01",
    photos: [
      {
        title: "Dahiya's Residence",
        image: VastuPage[0],
      },
      {
        title: "Banquet Hall",
        image: VastuPage[1],
      },
      {
        title: "Panipat Residence",
        image: VastuPage[2],
      },
    ],
  },

  {
    title: "02",
    photos: [
      {
        title: "Jwellery Showroom",
        image: VastuPage[3],
      },
      {
        title: "Karnal Residence",
        image: VastuPage[4],
      },
      {
        title: "Khanna's Residence",
        image: VastuPage[5],
      },
    ],
  },

  {
    title: "01",
    photos: [
      {
        title: "Khanna's Residence",
        image: VastuPage[6],
      },
      {
        title: "Nandal's Residence",
        image: VastuPage[7],
      },
      {
        title: "Panipat Residence",
        image: VastuPage[8],
      },
    ],
  },
];

export const allRetail = [
  {
    title: "Ambala Complex",
    image: Retail[0],
  },
  {
    title: "Commercial Complex",
    image: Retail[1],
  },
  {
    title: "Shopping Mall",
    image: Retail[2],
  },
];

export const RetailList = [
  {
    title: "01",
    photos: [
      {
        title: "Commercial Shops Palwal",
        image: RetailPage[0],
      },
      {
        image: RetailPage[1],
      },
      {
        image: RetailPage[2],
      },
    ],
  },

  {
    title: "02",
    photos: [
      {
        title: "Complex at Ambala",
        image: RetailPage[3],
      },
      {
        image: RetailPage[4],
      },
      {
        image: RetailPage[5],
      },
    ],
  },

  {
    title: "03",
    photos: [
      {
        title: "Competiton-College Buidling",
        image: RetailPage[6],
      },
      {
        image: RetailPage[7],
      },
    ],
  },

  {
    title: "03",
    photos: [
      {
        image: RetailPage[8],
      },
      {
        title: "Mall Patna Bihar",
        image: RetailPage[9],
      },
      {
        title: "Mix-Use Building At Mathura",
        image: RetailPage[10],
      },
    ],
  },
];

export const allHousing = [
  {
    title: "Row housing",
    image: Housing[0],
  },
  {
    title: "Pg- building",
    image: Housing[4],
  },
  {
    title: "Group Housing",
    image: Housing[6],
  },
];

export const HousingList = [
  {
    title: "03",
    photos: [
      {
        title: "Row Housing-A&N",
        image: Housing[0],
      },
      {
        image: Housing[1],
      },
    ],
  },

  {
    title: "03",
    photos: [
      {
        image: Housing[2],
      },
      {
        image: Housing[3],
      },
    ],
  },
  {
    title: "03",
    photos: [
      {
        title: "PG Building Banglore",
        image: Housing[4],
      },
      {
        image: Housing[5],
      },
    ],
  },

  {
    title: "03",
    photos: [
      {
        title: "Group Housing Noida",
        image: Housing[6],
      },
      {
        image: Housing[7],
      },
    ],
  },
];

export const Whyus = [
  {
    title: "Collaborations",
    image: WhyUs[0],
    para: [
      {
        highlighter: "30+",
        text: "In house Team",
      },
      {
        highlighter: "50+",
        text: "Outsourcing Team",
      },
      {
        highlighter: "",
        text: "Which serves you excellent quality of work",
      },
    ],
  },
  {
    title: "Our Commitment",
    image: WhyUs[1],
    para: [
      {
        highlighter: "10 years warrenty",
        text: "on Civil Structure",
      },
      {
        highlighter: "3 years warrenty",
        text: "on Furniture work",
      },
      {
        highlighter: "12 months warrenty",
        text: "on Interior & MEP",
      },
    ],
  },
  {
    title: "Stay Connected",
    image: WhyUs[2],
    para: [
      {
        highlighter: "",
        text: "Track the daily project report on the social media",
      },
      {
        highlighter: "",
        text: "Handling by the Engineering-in-charge and desigining team",
      },
    ],
  },
  {
    title: "Transparency In Rates",
    image: WhyUs[3],
    para: [
      {
        highlighter: "No hidden charges",
        text: "in the quoted rates",
      },
      {
        highlighter: "No extra charges",
        text: "in the name of taxes",
      },
      {
        highlighter: "",
        text: "Quotations and Pricing are very transparent to the clients",
      },
    ],
  },
  {
    title: "Innovative Designs",
    image: WhyUs[4],
    para: [
      {
        highlighter: "",
        text: "Our team excels in creating innovative designs",
      },
      {
        highlighter: "",
        text: "We are dedicated to providing our clients with innovative design solutions that are both functional and aesthetically pleasing",
      },
    ],
  },
];

export const approach = [
  {
    title: "Communication",
    text: "We value collaboration and open dialogue. Let's discuss your vision and needs to create a design that aligns perfectly with your goals. Your input is key to our process.",
  },
  {
    title: "Ideas & conceptualization",
    text: "Exploring innovative design ideas is crucial for architecture. Our focus is on blending functionality with aesthetics, considering sustainability, and adapting to client needs. Collaborative brainstorming and integrating emerging technologies guide our conceptualization process for unique and impactful structures.",
  },
  {
    title: "Design & Documentation",
    text: "The design and construction documentation for your project will encompass comprehensive architectural drawings, specifications, and material details. It will ensure alignment with the client's vision, adhere to safety and regulatory standards, and provide clear guidelines for contractors to execute the project with precision and efficiency.",
  },
  {
    title: "Execution & Handover",
    text: "Execution and handover represent the final phase of our architectural projects, where detailed plans are transformed into reality. Our focus during this stage is meticulous execution, ensuring every design detail is implemented accurately. Handover involves a comprehensive review and transition of the project to the client, ensuring satisfaction and functionality.",
  },
];
