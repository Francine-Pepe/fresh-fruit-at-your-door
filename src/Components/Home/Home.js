import React from "react";
import styles from "./Home.module.css";
import { homeText } from "../../data";
import HowItWorks from "../HowItWorks/HowItWorks";

function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_top_content}>
        {homeText.map((data, index) => {
          return (
            <div className={styles.home_text_container}>
              <p>{data.text}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.how_it_works_component}>
        <HowItWorks />
      </div>
    </div>
  );
}

export default Home;
