import React from "react";
import styles from "./HowItWorksFullPage.module.css";
import { howItWorksFullPageText } from "../../data";

function HowItWorksFullPage() {
  return (
    <>
      <div className={styles.how_it_works_full_page_container}>
        <div className={styles.how_it_works_full_page_content}>
          {howItWorksFullPageText.map((data, index) => {
            return (
              <>
                <div className={styles.how_it_works_full_page_content_title}>
                  <h2>{data.title}</h2>
                </div>

                <div className={styles.how_it_works_full_page_content_text}>
                  <p>{data.text}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HowItWorksFullPage;
