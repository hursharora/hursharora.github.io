import React from 'react';
import * as classes from './AboutContent.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const AboutContent = (props) => (
    <div className={classes.AboutContainer}>
        <div className={classes.ImageContainer}>
            <StaticImage
                src="../../images/headshot.jpg"
                alt="headshot"
                className={classes.AboutPhoto}
            />
        </div>

        <div className={classes.AboutText}>{props.desc}</div>
    </div>
);

export default AboutContent;
