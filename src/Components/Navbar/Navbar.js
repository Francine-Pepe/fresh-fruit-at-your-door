import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "./../Assets/logo_FreshFruit_transparent_bg_small.png";

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
      <div className="navbar_container">
          <NavLink to={"/"}>
            <img src={Logo} alt="logo" width={200} height={"auto"} />
          </NavLink>
        <nav className="nav">
          <ul>
            {navbar.map((navbar, index) => (
              <li className="navbar" key={index}>
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
