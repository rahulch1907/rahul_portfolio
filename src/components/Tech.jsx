/* eslint-disable */
import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mb-6`}>
          Tech Skills
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="flex flex-col items-center w-28 h-28"
            key={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="object-contain w-20 h-22"
            />
            <span className="mt-2 text-sm text-secondary">{technology.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
