import React from "react";
import classes from "./NavBar.module.css"
import NavLink from "./NavLink/NavLink";
import Button from "../Button/Button";

const NavBar = props => {
    return (
        <header className={classes.navBar}>
            <p>Logo</p>
            <nav>
                <ul className={classes.navLinks}>
                    <NavLink link="#" active={true}>Home</NavLink>
                    <NavLink link="#">About</NavLink>
                    <NavLink link="#">Projects</NavLink>
                </ul>
            </nav>
            <Button btnType={"Normal"}>Contact</Button>
        </header>
    );
}

export default NavBar;