import React from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import classes from "./ProjectCarousel.module.css"

const ProjectCarousel = () => {
    return (
        <div className={classes.ProjectCarousel}>
            <div className={classes.ProjectCarouselRow}>
                <ProjectItem>test 1</ProjectItem>
                <ProjectItem>test 2</ProjectItem>
                <ProjectItem>test 3</ProjectItem>
                <ProjectItem>test 4</ProjectItem>
            </div>
        </div>
    );
}

export default ProjectCarousel;