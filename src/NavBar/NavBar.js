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
                        <NavLink link="#" clicked={this.props.homeRef} active={true}>Home</NavLink>
                        <NavLink link="#" clicked={this.props.aboutRef}>About</NavLink>
                        <NavLink link="#" clicked={this.props.projectRef}>Projects</NavLink>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default NavBar;