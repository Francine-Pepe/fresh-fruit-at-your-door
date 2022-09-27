import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./../Assets/logo_FreshFruit_transparent_bg_small.png";
import Dropdown from "./Dropdown";
import { navData } from "../../data";
import NavbarPink from "./NavbarPink";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar_container}>
        <div className={styles.logo}>
          <NavLink to={"/"}>
            <img src={Logo} alt="logo" width={200} height={"auto"} />
          </NavLink>
          <label htmlFor="toggler">
            <Dropdown />
          </label>
        </div>
        <nav className={styles.nav}>
          <ul>
            {navData.map((data, index) => {
              return (
                <li className={styles.navbar} key={index}>
                  <NavLink to={data.link}>{data.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
