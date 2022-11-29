import { fruitSeason } from "../../data";
import { NavLink } from "react-router-dom";
import styles from "./FruitSeason.module.css";

function FruitSeason(props) {

  const { link } = props;
  return (
    <>
      {fruitSeason.map((data, index) => {
        return (
          <nav className={styles.fruit_season} key={index}>
            <h3>{data.title}</h3>

            <NavLink to={data.link} key={index}>
              {data.category}
            </NavLink>
          </nav>
        );
      })}
    </>
  );
}
export default FruitSeason;
