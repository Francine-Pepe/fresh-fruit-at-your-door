import React from "react";
import styles from "./HowItWorks.module.css";
import { howItWorksText } from "../../data";
import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

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
                  <NavLink to={data.link} target="blank">
                    <Button
                      color="#707070"
                      variant="outline"
                      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                      fontFamily={"Raleway Thin"}
                    >
                      {data.button}
                    </Button>
                  </NavLink>
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
