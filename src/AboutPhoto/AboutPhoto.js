import React from "react";
import HeadShot from "../assets/headshot.jpg"
import classes from "./AboutPhoto.module.css"


const AboutPhoto = props => (
    <img className={classes.AboutPhoto} src={HeadShot} alt="AboutPhoto"/>
)


export default AboutPhoto;
