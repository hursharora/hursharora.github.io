import React from "react";
import * as classes from "./SectionHeader.module.css"


const SectionHeader = props => (
    <div className={classes.SectionHeader}>{props.children}</div>
)

export default SectionHeader;