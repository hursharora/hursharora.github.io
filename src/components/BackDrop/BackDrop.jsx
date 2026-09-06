import React from "react";
import Particles from "@tsparticles/react";
import * as classes from "./BackDrop.module.css";

const particleOptions = {
  particles: {
    links: {
      color: "#ffffff",
      enable: true,
    },
    move: {
      enable: true,
    },
    number: { value: 50 },
    size: { value: 3 },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
};

const BackDrop = (props) => {
  const particles = props.particle ? (
    <Particles
      className={classes.ParticleCanvas}
      id="tsparticles"
      options={particleOptions}
    />
  ) : null;

  return (
    <section className={classes.BackDrop} ref={props.sectionRef}>
      {props.children}
      {particles}
    </section>
  );
};

export default BackDrop;
