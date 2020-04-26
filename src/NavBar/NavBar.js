import React from "react";
import classes from "./NavBar.module.css"
import NavLink from "./NavLink/NavLink";

class NavBar extends React.Component {
    state = {
        transparent: true,
        activeSection: "home"
    }

    componentDidMount() {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 10) {
                this.setState({transparent: false});
            } else {
                this.setState({transparent: true});
            }
            if (window.pageYOffset < window.innerHeight) {
                this.setState({activeSection: "home"});
            } else if (window.pageYOffset > window.innerHeight && window.pageYOffset < window.innerHeight*2) {
                this.setState({activeSection: "about"});
            } else {
                this.setState({activeSection: "projects"});
            }
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (this.state.transparent !== nextState.transparent ||
                this.state.activeSection !== nextState.activeSection);
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
                        <NavLink clicked={this.props.homeRef}
                                 active={this.state.activeSection === "home"}>Home</NavLink>
                        <NavLink clicked={this.props.aboutRef}
                                 active={this.state.activeSection === "about"}>About</NavLink>
                        <NavLink clicked={this.props.projectRef}
                                 active={this.state.activeSection === "projects"}>Projects</NavLink>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default NavBar;