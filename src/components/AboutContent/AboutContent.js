import React from 'react';
import classes from './AboutContent.module.css';
import Img from 'gatsby-image';

const AboutContent = (props) => (
    <div className={classes.AboutContainer}>
        <div className={classes.ImageContainer}>
            <Img
                fluid={props.imgData}
                alt="headshot"
                className={classes.AboutPhoto}
            />
        </div>

        <div className={classes.AboutText}>{props.desc}</div>
    </div>
);

export default AboutContent;
