import React from "react";
import classes from "../ProjectCarousel.module.css"

const ProjectItem = props => {
    return (
        <div className={classes.ProjectCarouselItem}>{props.children}</div>
    )
}

export default ProjectItem;