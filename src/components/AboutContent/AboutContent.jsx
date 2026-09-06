import React from "react";
import * as classes from "./AboutContent.module.css";
import headshot from "../../images/headshot.jpg";

const AboutContent = (props) => (
  <div className={classes.AboutContainer}>
    <div className={classes.ImageContainer}>
      <img
        src={headshot}
        alt="Hursh Arora"
        className={classes.AboutPhoto}
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className={classes.AboutText}>{props.desc}</div>
  </div>
);

export default AboutContent;
