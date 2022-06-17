import React, { useState } from "react";
import "./Skills.scss";

import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import skillList from "./skillList";

const Skills = () => {
  return (
    <>
      <h2 className="head-text">
        Here are some of my <span>skills</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skillList.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: "#edf2f8" }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

//export default AppWrap(Skills, "skills");

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
