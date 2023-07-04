import React from "react";
import { useCallback } from "react";
import * as classes from "./BackDrop.module.css"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackDrop = props => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    let particles = null;
    if (props.particle) {
        particles = (
            <Particles className={classes.ParticleCanvas}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={
                    {
                        particles: {
                            line_linked: {
                                color: "#ffffff",
                                enable: true
                            },
                            move: {
                                enable: true
                            },
                            number: { value: 50 },
                            size: { value: 3 }
                        },
                        interactivity: {
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse"
                                }
                            }
                        }
                    }
                } />
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
