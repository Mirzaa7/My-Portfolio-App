import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        className="p-text"
        href="https://www.linkedin.com/in/mirza-mulavdi%C4%87-7b4249228/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a className="p-text" href="https://github.com/Mirzaa7" target="_blank">
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
