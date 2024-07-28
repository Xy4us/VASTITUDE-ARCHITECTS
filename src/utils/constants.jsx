const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(
  require.context("../assets/Our services", false, /\.(png|jpe?g|svg)$/)
);

export const OurServices = [
  {
    title: "Residential",
    image: images[0],
    color: "#18344a",
    description:
      "We provide innovative design solutions for residential projects that are both functional and aesthetically pleasing.",
  },
  {
    title: "Corporate",
    image: images[1],
    color: "#1f4022",
    description:
      "We specialize in designing commercial spaces that are both functional and aesthetically pleasing.",
  },
  {
    title: "Industrial",
    image: images[2],
    color: "#513a22",
    description:
      "We provide innovative design solutions for industrial projects that are both functional and aesthetically pleasing.",
  },
  {
    title: "Restaurants & Hotels",
    image: images[3],
    color: "#24293d",
    description: "We provide.",
  },
  {
    title: "Landscaping",
    image: images[4],
    color: "#2e1117",
    description:
      "We provide innovative design solutions for educational projects that are both functional and aesthetically pleasing.",
  },
  {
    title: "Hospitality",
    image: images[5],
    color: "#4a3612",
    description:
      "We provide innovative design solutions for educational projects that are both functional and aesthetically pleasing.",
  },
  {
    title: "Vastu Consultancy",
    image: images[6],
    color: "#18344a",
    description:
      "We provide innovative design solutions for educational projects that are both functional and aesthetically pleasing.",
  },
  {
    title: "Retail",
    image: images[7],
    color: "#1f4022",
    description:
      "We provide innovative design solutions for educational projects that are both functional and aesthetically pleasing.",
  },
  {
    title: "Housing",
    image: images[8],
    color: "#24293d",
    description:
      "We provide innovative design solutions for educational projects that are both functional and aesthetically pleasing.",
  },
];
