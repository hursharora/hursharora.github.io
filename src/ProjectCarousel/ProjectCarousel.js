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
        <Zoom>
            <div className={classes.ProjectCarousel}>
                <div className={classes.ProjectCarouselRow}>
                    {projects}
                </div>

            </div>
        </Zoom>
    );
}

export default ProjectCarousel;