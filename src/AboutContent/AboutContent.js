import React from "react";
import HeadShot from "../assets/headshot.jpg";
import classes from "./AboutContent.module.css";



const AboutContent = props => (
    <div className={classes.AboutContainer}>
        <div className={classes.AboutPhoto}>
            <img  src={HeadShot} alt="AboutPhoto"/>
        </div>
        <div className={classes.AboutText}>
            {props.desc}
        </div>
    </div>
)


export default AboutContent;
