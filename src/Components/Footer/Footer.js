import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/logo_FreshFruit_transparent_bg_small.png";
import SocialMedia from "./SocialMedia";
import { navData } from "../../data";

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

        {/* <div className={styles.footer_content}>
        </div>
        <hr id={styles.footer_hr} /> */}
        <div className={styles.footer_content}>
          {navData.map((data, index) => {
            return (
              <nav key={index}>
                <NavLink
                  to={data.link}
                  className={styles.growing_border}
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
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
