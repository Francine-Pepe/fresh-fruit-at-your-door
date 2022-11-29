import React from "react";
import styles from "./HowItWorksFullPage.module.css";
import {
  howItWorksFullPageText,
  howItWorksExplanation,
  howItWorksExplanationBottom,
} from "../../data";
import { NavLink } from "react-router-dom";

function HowItWorksFullPage() {
  return (
    <main className={styles.how_it_works_full_page_container}>
      <div className={styles.how_it_works_full_page_left_content}>
        {howItWorksFullPageText.map((data, index) => {
          return (
            <>
              <div className={styles.full_page_text_title} key={index}>
                <h1>{data.title}</h1>
              </div>
              <p>{data.text}</p>
            </>
          );
        })}
      </div>

      <div className={styles.how_it_works_full_page_right_content}>
        {howItWorksExplanation.map((data, index) => {
          return (
            <>
              <div className={styles.right_content_box} key={index}>
                <div className={styles.how_it_works_full_page_right_content_image}>
                  <img src={data.image} alt=""  />
                </div>
                <div className={styles.right_content_box}>
                  <p>{data.description}</p>
                </div>
              </div>
            </>
          );
        })}
        {howItWorksExplanationBottom.map((data, index) => {
          return (
            <>
              <div className={styles.questions_bottom_content} key={index}>
                <div className={styles.questions_bottom_content_image}>
                  <img src={data.image} alt="" width={"70px"} height={"70px"} />
                </div>
                <div className={styles.questions_bottom_content_title}>
                  <NavLink to={"/contact"}>
                    <p>{data.description}</p>
                  </NavLink>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
}

export default HowItWorksFullPage;
