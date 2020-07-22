import React from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import classes from "./ProjectCarousel.module.css"
import {Zoom} from "react-reveal"

const ProjectCarousel = props => {
    let projects = props.projects.map(proj => (
        <ProjectItem id={proj.id}
                     click={props.projectClick}
                     key={proj.id}
                     useClass={proj.tileStyle}>{proj.name}</ProjectItem>
    ))

    return (
        <div className={classes.ProjectCarousel}>
            <Zoom>
                <div className={classes.ProjectCarouselRow}>
                    {projects}
                </div>
            </Zoom>
        </div>
    );
}

export default ProjectCarousel;