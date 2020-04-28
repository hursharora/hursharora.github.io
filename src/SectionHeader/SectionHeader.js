import React from "react";
import classes from "./SectionHeader.module.css"


const SectionHeader = props => (
    <h1 className={classes.SectionHeader}>{props.children}</h1>
)

export default SectionHeader;