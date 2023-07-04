import React from 'react';
import * as classes from './ProjectModal.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';

const ProjectModal = (props) => {
    let modalContent = null;
    if (props.toDisplay) {
        modalContent = (
            <div className={classes.Modal}>
                <h1>{props.toDisplay.name}</h1>
                <button
                    onClick={props.closed}
                    className={classes.CloseButton}
                />
                <div className={classes.Container}>
                    <div className={classes.ImageContainer}>
                        <GatsbyImage
                            image={props.toDisplay.image}
                            alt="Not available"
                        />
                        {props.toDisplay.image2 && (
                            <GatsbyImage
                                image={props.toDisplay.image2}
                                alt="Not Available"
                            />
                        )}
                    </div>
                    <div className={classes.TextContainer}>
                        {props.toDisplay.description}
                    </div>
                </div>
            </div>
        );
    }

    if (!props.show) {
        return null;
    }

    return (
        <>
            <div
                className={classes.ModalBackdrop}
                onClick={props.closed}
            />
            {modalContent}
        </>
    );
};

export default ProjectModal;
