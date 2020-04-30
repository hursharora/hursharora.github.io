import React from "react";
import HeadShot from "../assets/headshot.jpg";
import classes from "./AboutContent.module.css";

const aboutWriteup =
    <p>
        I'm a second year Computer Science student at
        The University of British Columbia. Thanks for visiting my website! <br/><br/>
        Currently I'm working on on a note taking and task management web app using React
        and Firebase. <br/><br/>
        Looking for co-op internship opportunities for Fall 2020.<br/><br/>
        Scroll down to see some of my projects.
    </p>


const AboutContent = props => (
    <div className={classes.AboutContainer}>
        <div className={classes.AboutPhoto}>
            <img  src={HeadShot} alt="AboutPhoto"/>
        </div>
        <div className={classes.AboutText}>
            {aboutWriteup}
        </div>
    </div>
)


export default AboutContent;
