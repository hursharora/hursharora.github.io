import React from 'react';
import classes from './ProjectModal.module.css';
import Img from 'gatsby-image';

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
                        <Img
                            fluid={props.toDisplay.image}
                            alt="Not available"
                        />
                        {props.toDisplay.image2 && (
                            <Img
                                fluid={props.toDisplay.image2}
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
