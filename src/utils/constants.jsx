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
  require.context("../assets/Residential", false, /\.(png|jpe?g|svg|jpg)$/)
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
    path: "/projects",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

export const Services = [
  {
    title: "Residential",
    image: images[0],
    color: "#18344a",
    description:
      "Whether you’re looking to build a new home, renovate an existing space, or simply need expert advice on design elements, Vastitude Architects is here to guide you every step of the way. Let us help you create a living environment that truly feels like home.",
  },
  {
    title: "Corporate",
    image: images[1],
    color: "#1f4022",
    description:
      "Sustainability and technology are at the heart of our design philosophy. We incorporate the latest advancements in building materials and smart office technologies to create spaces that are not only beautiful but also environmentally responsible and future-proof.",
  },
  {
    title: "Industrial",
    image: images[2],
    color: "#513a22",
    description:
      "We leverage cutting-edge technology and sustainable practices to deliver solutions that are not only visually compelling but also environmentally responsible. At Vastitude Architects, our commitment is to transform industrial spaces into hubs of innovation and efficiency, driving progress and success for our clients.",
  },
  {
    title: "Restaurants & Hotels",
    image: images[3],
    color: "#24293d",
    description:
      "In the realm of hotel design, we focus on creating welcoming, comfortable, and aesthetically pleasing spaces that enhance the guest experience. Our restaurant designs aim to reflect the culinary vision, fostering an ambiance that complements the dining experience. For bars, we strive to craft vibrant, engaging environments that invite patrons to relax and enjoy.",
  },
  {
    title: "Landscaping",
    image: images[4],
    color: "#2e1117",
    description:
      "Whether it's designing a serene garden for a private residence, creating inviting public parks, or planning green spaces for commercial developments, we bring creativity, expertise, and passion to every project.",
  },
  {
    title: "Hospitality",
    image: images[5],
    color: "#4a3612",
    description:
      "Our expertise ensures that every design promotes efficiency, patient comfort, and staff effectiveness. By integrating cutting-edge technology and thoughtful spatial planning, we strive to enhance the overall experience for patients, families, and medical professionals alike.",
  },
  {
    title: "Vastu Consultancy",
    image: images[6],
    color: "#18344a",
    description:
      "Whether you are planning a new construction or seeking to optimize an existing space, we provide personalized Vastu consultations tailored to your unique needs and aspirations. Our approach combines a deep respect for ancient wisdom with a commitment to contemporary design excellence, ensuring that your space is not only functional and aesthetically pleasing but also energetically balanced.",
  },
  {
    title: "Retail",
    image: images[7],
    color: "#1f4022",
    description:
      "From conceptual design to final execution, we ensure every detail aligns with your vision and business goals. Partner with us to transform your retail space into an inviting destination that stands out in the marketplace.",
  },
  {
    title: "Housing",
    image: images[8],
    color: "#24293d",
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
    title: "Rana's Villa",
    image: Residential[0],
  },
  {
    title: "Dahiya's Residence",
    image: Residential[1],
  },
  {
    title: "Khanna's Residence",
    image: Residential[2],
  },
  {
    title: "Verma's Residence",
    image: Residential[3],
  },
  {
    title: "Yadav's Residence",
    image: Residential[4],
  },
  {
    title: "Soni's Residence",
    image: Residential[5],
  },
  {
    title: "Dhiman's Residence",
    image: Residential[6],
  },
];
