import React from "react";
import * as classes from "./NavLink.module.css"


class NavLink extends React.Component {

    scrollHandler = event => {
        if (this.props.clicked.current) {
            this.props.clicked.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }

    render() {
        return (
            <li className={classes.NavLink}>
                <button
                   onClick={this.scrollHandler}
                   className={this.props.active ? classes.active : null}>{this.props.children}</button>
            </li>
        );
    }
}


export default NavLink;