import React, { useEffect, useState } from "react";
import * as classes from "./NavBar.module.css";
import NavLink from "./NavLink/NavLink";
import Logo from "../../images/logo.png";

// make about section fully responsive, laptop screen test
// change navbar to functional
// remove excess empty space?

const NavBar = (props) => {
  const [transparent, setTransparent] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [
      ["home", props.homeRef],
      ["about", props.aboutRef],
      ["projects", props.projectRef],
    ];

    const updateNavigation = () => {
      setTransparent(window.scrollY <= 10);

      const viewportMiddle = window.innerHeight / 2;
      const current = sections.find(([, ref]) => {
        const bounds = ref.current?.getBoundingClientRect();
        return (
          bounds &&
          bounds.top <= viewportMiddle &&
          bounds.bottom > viewportMiddle
        );
      });

      if (current) {
        setActiveSection(current[0]);
      }
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    window.addEventListener("resize", updateNavigation);

    return () => {
      window.removeEventListener("scroll", updateNavigation);
      window.removeEventListener("resize", updateNavigation);
    };
  }, [props.aboutRef, props.homeRef, props.projectRef]);

  let usedClasses = [classes.navBar];

  if (!transparent) {
    usedClasses.push(classes.navBarBlack);
  }

  return (
    <header className={usedClasses.join(" ")}>
      <img src={Logo} alt="Hursh Arora logo" className={classes.logo} />
      <nav>
        <ul className={classes.navLinks}>
          <NavLink clicked={props.homeRef} active={activeSection === "home"}>
            Home
          </NavLink>
          <NavLink clicked={props.aboutRef} active={activeSection === "about"}>
            About
          </NavLink>
          <NavLink
            clicked={props.projectRef}
            active={activeSection === "projects"}
          >
            Projects
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(NavBar);
