import React from 'react';
import ProjectItem from './ProjectItem/ProjectItem';
import * as classes from './ProjectCarousel.module.css';

const ProjectCarousel = (props) => {
    let projects = props.projects.map((proj) => (
        <ProjectItem
            id={proj.id}
            click={props.projectClick}
            key={proj.id}
            useClass={proj.tileStyle}
        >
            {proj.name}
        </ProjectItem>
    ));

    return (
        <div className={classes.ProjectCarousel}>
            <div className={classes.ProjectCarouselRow}>{projects}</div>
        </div>
    );
};

export default ProjectCarousel;
