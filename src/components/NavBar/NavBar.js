import React, { useEffect, useState } from 'react';
import classes from './NavBar.module.css';
import NavLink from './NavLink/NavLink';
import Logo from '../../images/logo.png';

// make about section fully responsive, laptop screen test
// change navbar to functional
// remove excess empty space?

const NavBar = (props) => {
    const [transparent, setTransparent] = useState(true);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const windowHeight = window.innerHeight;
        const halfWindowH = windowHeight / 2;
        window.addEventListener('scroll', () => {
			setTransparent(window.pageYOffset <= 10);

            if (window.pageYOffset + halfWindowH < windowHeight) {
                setActiveSection('home');
            } else if (
                window.pageYOffset + halfWindowH > windowHeight &&
                window.pageYOffset + halfWindowH < windowHeight * 2
            ) {
                setActiveSection('about');
            } else {
                setActiveSection('projects');
            }
        });
    }, []);

    let usedClasses = [classes.navBar];

    if (!transparent) {
        usedClasses.push(classes.navBarBlack);
    }

    return (
        <header className={usedClasses.join(' ')}>
            <img src={Logo} alt="logo" className={classes.logo}/>
            <nav>
                <ul className={classes.navLinks}>
                    <NavLink
                        clicked={props.homeRef}
                        active={activeSection === 'home'}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        clicked={props.aboutRef}
                        active={activeSection === 'about'}
                    >
                        About
                    </NavLink>
                    <NavLink
                        clicked={props.projectRef}
                        active={activeSection === 'projects'}
                    >
                        Projects
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default React.memo(NavBar);
