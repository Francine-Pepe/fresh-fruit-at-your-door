import React from "react";
import styles from "./AboutUs.module.css";
import AboutUsProps from "./AboutUsProps";
import { aboutUsImagesLeft, aboutUsImagesRight, aboutUsText } from "../../data";

function AboutUs(props) {
  return (
    <>
      <div className={styles.about_us_container}>
        {aboutUsImagesLeft.map((data, index) => {
          return (
            <>
              <AboutUsProps
                image1={data.image1}
                image2={data.image2}
                image3={data.image3}
                key={index}
              />
            </>
          );
        })}

        <div className={styles.about_us_text_container}>
          {aboutUsText.map((data, index) => {
            return (
              <>
                <div className={styles.about_us_content} key={index}>
                  <h1>{data.title}</h1>
                  <p>{data.text}</p>
                </div>
              </>
            );
          })}
        </div>

        {aboutUsImagesRight.map((data, index) => {
          return (
            <>
              <AboutUsProps
                image1={data.image1}
                image2={data.image2}
                image3={data.image3}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default AboutUs;
