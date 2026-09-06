import React from "react";
import * as classes from "./NavLink.module.css";

const NavLink = ({ active, children, clicked }) => {
  const scrollHandler = () => {
    clicked.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <li className={classes.NavLink}>
      <button
        type="button"
        onClick={scrollHandler}
        className={active ? classes.active : undefined}
        aria-current={active ? "page" : undefined}
      >
        {children}
      </button>
    </li>
  );
};

export default NavLink;
