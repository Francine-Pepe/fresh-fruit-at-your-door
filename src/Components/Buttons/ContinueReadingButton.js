import React from "react";
import { howItWorksText } from "../../data";
import styles from "./Buttons.module.css";

function ContinueReadingButton() {
  return (
    <div className={styles.how_it_works_preview}>
      {howItWorksText.map((data, index) => {
        return (
          <>
            <button>{data.button}</button>
          </>
        );
      })}
    </div>
  );
}

export default ContinueReadingButton;
