import React from "react";
import classes from "./BackDrop.module.css"
import Video from "../assets/VideoBackground.mp4"

const BackDrop = props => {
    let video = null;
    if (props.video) {
        video = (
            <video autoPlay muted loop>
                <source src={Video}/>
            </video>
        )
    }
    
    return (
        <div className={classes.BackDrop} ref={props.sectionRef}>
            {props.children}
            {video}
        </div>
    )
}




export default BackDrop;