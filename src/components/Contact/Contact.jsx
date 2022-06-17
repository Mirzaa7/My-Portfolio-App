import React, { useState } from "react";
import "./Contact.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
  };

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
          {/* <img src={images.email} alt="email" /> */}
          <EmailIcon
            fontSize="medium"
            style={{ color: "#313bac", marginRight: 10 }}
          ></EmailIcon>
          <a href="mailto:mirzamulavdic1@gmail.com" className="p-text">
            <h3>mirzamulavdic1@gmail.com</h3>
          </a>
        </motion.div>
      </div>
      {/* {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              autoComplete="none"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              autoComplete="none"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              autoComplete="none"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )} */}
    </>
  );
};

export default AppWrap(MotionWrap(Contact, "app__footer"), "contact", "");
