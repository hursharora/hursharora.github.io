import React from "react";
import classes from "./BackDrop.module.css"
// import Video from "../assets/VideoBackground.mp4"
import Particles from "react-particles-js";

const BackDrop = props => {
    let video = null;
    if (props.video) {
        video = (
            // <video autoPlay muted loop>
            //     <source src={Video}/>
            // </video>
            <Particles className={classes.ParticleCanvas} params={
                {
                    "particles": {
                        "number": {"value": 50},
                        "size": {"value": 3}
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }
            }/>
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