import React from "react";
import * as classes from "../ProjectCarousel.module.css";

const ProjectItem = (props) => {
  return (
    <button
      type="button"
      onClick={() => props.click(props.id)}
      className={[classes.ProjectCarouselItem, props.useClass].join(" ")}
      aria-label={`View details for ${props.children}`}
    >
      <p>{props.children}</p>
    </button>
  );
};

export default ProjectItem;
