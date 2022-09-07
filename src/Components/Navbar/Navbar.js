import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./../Assets/logo_FreshFruit_transparent_bg_small.png";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const navbar = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "How it works?",
      link: "/howitworks",
    },
    {
      name: "Fruit Catalogue",
      link: "/fruitcatalogue",
    },
    {
      name: "About us",
      link: "/aboutus",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <div className={styles.navbar_container}>
        <div className={styles.logo}>
          <NavLink to={"/"}>
            <img src={Logo} alt="logo" width={200} height={"auto"} />
          </NavLink>
          <label htmlFor="toggler">
            <Dropdown />
          </label>
        </div>
        <nav className={styles.nav}>
          <ul>
            {navbar.map((navbar, index) => (
              <li className={styles.navbar} key={index}>
                <NavLink to={navbar.link}>{navbar.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
