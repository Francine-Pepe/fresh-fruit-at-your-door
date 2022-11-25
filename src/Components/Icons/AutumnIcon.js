import React from "react";
import Autumn from "../Assets/leaves.png";
import styles from "./Icons.module.css";

function AutumnIcon() {
  return (
    <div className={styles.icon_nav_mobile}>
      <img src={Autumn} alt="Autumn" className={styles.season_icons} />
      <div className={styles.hide}>Autumn</div>
    </div>
  );
}

export default AutumnIcon;
