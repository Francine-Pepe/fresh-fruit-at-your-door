// import { useEffect, useState } from "react";
import { fruitSeason } from "../../data";
// import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

// import useFetch from "react-fetch-hook";

// import axios from "axios";

function FruitSeason(props) {
  // const Items = () => {
  //   const { season } = useParams();

  //   const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     const getItems = async () => {
  //       const fruits = await axios.get(
  //         `https://fruits-api-project.herokuapp.com/fruits${season}`
  //       );
  //       setItems(fruits.season);
  //       console.log("fruits.season", fruits.season);
  //     };
  //     getItems();

  // const Season = () => {
  //   const { isLoading, error } = useFetch(
  //     "https://fruits-api-project.herokuapp.com/fruits"
  //   );

  //   const [data, setData] = useState(Season);

  //   const filterResult = (catSeason) => {
  //     const result = Season.filter((curSeason) => {
  //       return curSeason.season === catSeason;
  //     });
  //     setData(result);
  //   };
  // };

  return (
    <>
      {fruitSeason.map((data, fruits, index) => {
        return (
          <nav className={styles.fruit_season} key={index}>
            <h3>{data.title}</h3>

            <NavLink
              to={data.link}
              key={index}
              // onClick={() => filterResult("Season")}
            >
              {data.name}
            </NavLink>
          </nav>
        );
      })}
    </>
  );
}
// }
export default FruitSeason;
