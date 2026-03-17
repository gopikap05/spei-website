import endurance1 from "../assets/machines/Endurance testing machine (1).jpg";
import endurance2 from "../assets/machines/Endurance testing machine (2).jpg";

import spm1 from "../assets/machines/Spm machine.jpg";
import spm2 from "../assets/machines/Spm machine.webp";

import wash1 from "../assets/machines/Washing machine.jpg";
import wash2 from "../assets/machines/Washing machine1.jpg";

import belt1 from "../assets/machines/Belt conveyor (1).jpg";
import belt2 from "../assets/machines/Belt conveyor (2).jpg";

import assly1 from "../assets/machines/Assly line.webp";
import assly2 from "../assets/machines/Assly line1.jpeg";

import pipe1 from "../assets/machines/Pipe Line fabrication.jpg";
import pipe2 from "../assets/machines/pipeline work.webp";

// ✅ NEW imports
import pick1 from "../assets/machines/Pick and Place Machines.webp";
import pick2 from "../assets/machines/pick-and-place-system.jpg";
import pipeNew from "../assets/machines/pipe line and fabrication.png";

const productData = [
  {
    id: "endurance-machine",
    title: "Life cycle testing machine",
    description:
      "Our fabricated Life Cycle Endurance Machines are engineered to perform continuous cyclic testing on mechanical, automotive, industrial, and consumer product components. The systems are designed with robust structures, precision control mechanisms, and automated monitoring.",
    cardImage: endurance1,
    singleImage: endurance2,
  },
  {
    id: "spm-machines",
    title: "Special Purpose Machines (SPM)",
    description:
      "With over 30 years of experience in industrial machine manufacturing, we specialize in designing and fabricating Special Purpose Machines tailored to specific production requirements.",
    cardImage: spm1,
    singleImage: spm2,
  },
  {
    id: "washing-machine",
    title: "Industrial Washing Machines",
    description:
      "Our Industrial Washing Machines provide efficient cleaning solutions for industrial components and parts, removing oil, grease, dust, and contaminants.",
    cardImage: wash1,
    singleImage: wash2,
  },
  {
    id: "pick-place",
    title: "Pick and Place Machines",
    description:
      "Our Pick and Place Machines are designed for high-speed and accurate material transfer in automated production environments.",
    cardImage: pick1,
    singleImage: pick2,
  },
  {
    id: "conveyor",
    title: "Industrial Conveyor Systems",
    description:
      "Customized industrial conveyor systems designed to optimize material flow, reduce manual handling, and improve productivity.",
    cardImage: belt1,
    singleImage: belt2,
  },
  {
    id: "assembly-line",
    title: "Assembly Line Systems",
    description:
      "Customized assembly line setups designed to improve production efficiency and workflow in manufacturing environments.",
    cardImage: assly1,
    singleImage: assly2,
  },
  {
    id: "pipeline",
    title: "Pipeline Fabrication",
    description:
      "Precision pipeline fabrication and installation using MS, SS, and alloy steels for industrial applications.",
    cardImage: pipeNew,   // ✅ updated new image
    singleImage: pipe1,
  },
];

export default productData;