import React from "react";
import styles from "./HowItWorks.module.css";
import { howItWorksText } from "../../data";
import { NavLink } from "react-router-dom";
import ContinueReadingButton from "../Buttons/ContinueReadingButton";

function HowItWorks() {
  return (
    <>
      <main className={styles.how_it_works_main_container}>
        <div className={styles.how_it_works_left_content}>
          <div className={styles.how_it_works_preview}>
            {howItWorksText.map((data, index) => {
              return (
                <>
                  <h1 key={index}>{data.title}</h1>
                  <hr id={styles.preview_hr} />
                  <div className={styles.how_it_works_preview_text}>
                    <p>{data.text}</p>
                  </div>
                  <div>
                    <ContinueReadingButton />
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className={styles.how_it_works_right_content}></div>
      </main>
    </>
  );
}

export default HowItWorks;
