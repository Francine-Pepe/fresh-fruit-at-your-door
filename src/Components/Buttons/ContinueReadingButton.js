import React from "react";
import { howItWorksText } from "../../data";
import styles from "./Buttons.module.css";
import { NavLink } from "react-router-dom";

function ContinueReadingButton() {
  return (
    <div className={styles.how_it_works_preview}>
      {howItWorksText.map((data, index) => (
        <button key={index}>
          <NavLink to={data.link}>{data.button}</NavLink>
        </button>
      ))}
    </div>
  );
}

export default ContinueReadingButton;
