import React from "react";
import "./Contact.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <>
      <h2 className="head-text">
        <span>Contact</span> me via Email
      </h2>

      <div className="app__footer-cards">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          whileHover={{ scale: 1.1 }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="app__footer-card"
        >
          <EmailIcon
            fontSize="medium"
            style={{ color: "#313bac", marginRight: 10 }}
          ></EmailIcon>
          <a href="mailto:mirzamulavdic1@gmail.com" className="p-text">
            <h3>mirzamulavdic1@gmail.com</h3>
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Contact, "app__footer"), "contact", "");
