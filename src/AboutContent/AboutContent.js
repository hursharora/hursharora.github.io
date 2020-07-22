import React from "react";
import HeadShot from "../assets/headshot.jpg";
import classes from "./AboutContent.module.css";
import {Zoom} from "react-reveal";


const AboutContent = props => (
    <div className={classes.AboutContainer}>
        <Zoom>
            <div className={classes.AboutPhoto}>
                <img  src={HeadShot} alt="AboutPhoto"/>
            </div>
            <div className={classes.AboutText}>
                {props.desc}
            </div>
        </Zoom>
    </div>
)


export default AboutContent;
