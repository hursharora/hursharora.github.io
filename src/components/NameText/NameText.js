import React from "react";
import classes from "./NameText.module.css"
import Zoom from "react-reveal/Zoom";

const NameText = () => {
    return (
        <Zoom>
            <h1 className={classes.NameText}>Hursh Arora</h1>
        </Zoom>
    );
}

export default NameText;
