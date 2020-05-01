import React from "react";
import classes from "../ProjectCarousel.module.css"

const ProjectItem = props => {
    return (
        <div onClick={() => props.click(props.id)} className={classes.ProjectCarouselItem}>
                <p>{props.children}</p>
        </div>
    )
}

export default ProjectItem;