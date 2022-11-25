import React from "react";
import Spring from "../Assets/spring.png";
import styles from "./Icons.module.css";

function SpringIcon() {
  return (
    <div className={styles.icon_nav_mobile}>
      <img src={Spring} alt="Spring" className={styles.season_icons} />
      <div className={styles.hide}>Spring</div>
    </div>
  );
}

export default SpringIcon;
