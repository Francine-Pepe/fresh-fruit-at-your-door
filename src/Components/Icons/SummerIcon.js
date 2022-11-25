import React from "react";
import Summer from "../Assets/sun.png";
import styles from "./Icons.module.css";

function SummerIcon() {
  return (
    <div className={styles.icon_nav_mobile}>
      <img src={Summer} alt="Summer" className={styles.season_icons} />
      <div className={styles.hide}>Summer</div>
    </div>
  );
}

export default SummerIcon;
