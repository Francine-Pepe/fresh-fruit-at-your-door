import React from "react";
import Winter from "../Assets/snow-flake.png";
import styles from "./Icons.module.css";

function WinterIcon() {
  return (
    <div className={styles.icon_nav_mobile}>
      <img src={Winter} alt="Summer" className={styles.season_icons} />
      <div className={styles.hide}>Summer</div>
    </div>
  );
}

export default WinterIcon;
