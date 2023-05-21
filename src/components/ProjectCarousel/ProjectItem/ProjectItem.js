import React from "react";
import * as classes from "../ProjectCarousel.module.css"

const ProjectItem = props => {
    return (
        <div onClick={() => props.click(props.id)}
             className={[classes.ProjectCarouselItem, props.useClass].join(" ")}>
                <p>{props.children}</p>
        </div>
    )
}

export default ProjectItem;
