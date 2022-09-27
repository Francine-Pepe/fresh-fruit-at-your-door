import React from "react";
import { fruitSeason } from "../../data";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

function FruitSeason(props) {
  return (
    <>
      {fruitSeason.map((data, index) => {
        return (
          <nav className={styles.fruit_season}>
            <h3>{data.title}</h3>
            <NavLink to={data.link} key={index}>
              {data.name}
            </NavLink>
          </nav>
        );
      })}
    </>
  );
}

export default FruitSeason;
