import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/logo_FreshFruit_transparent_bg_small.png";
import SocialMedia from "./SocialMedia";
// import MenuDrop from "../Navbar/MenuDrop";
import { fruitSeason, navData } from "../../data";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer className={styles.footer_container}>
        <div className={styles.footer_content}>
          <NavLink to={"/"}>
            <img src={Logo} alt="logo" width={200} height={"auto"} />
          </NavLink>
          <SocialMedia />
          <small>&copy; Copyright {getCurrentYear()} - Francine Pêpe</small>
        </div>

        <div className={styles.footer_content}>
          {fruitSeason.map((data, index) => {
            return (
              <nav className={styles.fruit_season}>
                <h3>{data.title}</h3>
                <NavLink to={data.link} key={index}>
                  {data.name}
                </NavLink>
              </nav>
            );
          })}
        </div>

        <div className={styles.footer_content}>
          {navData.map((data, index) => {
            return (
              <nav>
                <NavLink to={data.link} key={index}>
                  {data.name}
                </NavLink>
              </nav>
            );
          })}
        </div>
      </footer>
    </>
  );
}

export default Footer;
