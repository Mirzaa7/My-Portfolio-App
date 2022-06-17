import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const abouts = [
    {
      title: "Front-end development",
      imageUrl: images.frontEndDev,
      description:
        "I am a front-end developer with a passion for building and designing beautiful front-ends.",
    },
    {
      title: "Back-end development",
      imageUrl: images.backEndDev,
      description:
        "I am a back-end developer with a passion for building functional back-ends.",
    },
    {
      title: "React JS development",
      imageUrl: images.reactDev,
      description: "I use React JS to build the front-end.",
    },
    {
      title: "Node JS and Express JS development",
      imageUrl: images.nodeDev,
      description: "I use Node JS and Express JS to build the back-end.",
    },
  ];

  return (
    <>
      <h2 className="head-text">
        <span>About</span> me
      </h2>
      <h4 className="p-text" style={{ marginTop: 40, fontSize: 15 }}>
        Hello! My name is Mirza. I am a Master study student at Faculty of
        Electrical Engineering Sarajevo. Currently, I am seeking knowledge in
        different fields of Full-stack software development and Embedded
        software engineering. I am very committed, motivated, hardworking and I
        am always willing to put in the work to learn new skills and improve my
        current skillset.
      </h4>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imageUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

//export default AppWrap(About, "about");

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
