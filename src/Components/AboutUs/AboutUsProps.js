import React from "react";
import styles from "./AboutUs.module.css";

function AboutUsProps(props) {
  const { image1 } = props;
  const { image2 } = props;
  const { image3 } = props;


  return (
    <>
      <div className={styles.about_us_props_container}>
        <div className={styles.about_us_top_image}>
          <img src={image1} alt="" />
        </div>
        <div className={styles.about_us_bottom_image}>
          <div className={styles.left_image}>
            <img src={image2} alt="" />
          </div>
          <div className={styles.right_image}>
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsProps;
