import React from "react";
import classes from "./NavBar.module.css"
import NavLink from "./NavLink/NavLink";

class NavBar extends React.Component {
    state = {
        transparent: true
    }

    componentDidMount() {
        window.addEventListener("scroll", (event) => {
            if (window.pageYOffset > 10) {
                this.setState({transparent: false});
            } else {
                this.setState({transparent: true})
            }
        })
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.transparent !== nextState.transparent;
    }

    render() {
        let usedClasses = [classes.navBar];

        if (!this.state.transparent) {
            usedClasses.push(classes.navBarBlack);
        }

        return (
            <header className={usedClasses.join(" ")}>
                <p>Logo</p>
                <nav>
                    <ul className={classes.navLinks}>
                        <NavLink link="#" active={true}>Home</NavLink>
                        <NavLink link="#">About</NavLink>
                        <NavLink link="#">Projects</NavLink>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default NavBar;