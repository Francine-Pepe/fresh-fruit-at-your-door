import React from "react";
import All from "../Assets/alle.png";
import styles from "./Icons.module.css";

function AllIcon() {
  return (
    <div className={styles.icon_nav_mobile}>
      <img src={All} alt="All" className={styles.season_icons} />
      <div className={styles.hide}>All</div>
    </div>
  );
}

export default AllIcon;
