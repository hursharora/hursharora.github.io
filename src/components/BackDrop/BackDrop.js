import React from "react";
import * as classes from "./BackDrop.module.css"
import Particles from "react-tsparticles";

const BackDrop = props => {
    let particles = null;
    if (props.particle) {
        particles = (
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
            {particles}
        </div>
    )
}


export default BackDrop;
