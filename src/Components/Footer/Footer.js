import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/logo_FreshFruit_transparent_bg_small.png";
import SocialMedia from "./SocialMedia";
// import MenuDrop from "../Navbar/MenuDrop";
import { navData } from "../../data";
import FruitSeason from "../FruitSeason/FruitSeason";

function Footer(props) {

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
        <hr id={styles.footer_hr} />

        <div className={styles.footer_content}>
          <FruitSeason  />
        </div>
        <hr id={styles.footer_hr} />
        <div className={styles.footer_content}>
          {navData.map((data, index) => {
            return (
              <nav key={index}>
                <NavLink to={data.link} >
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
