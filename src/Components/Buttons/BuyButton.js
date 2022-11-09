import React from "react";
import styles from "./Buttons.module.css";
import { buttonBuy } from "../../data";

function BuyButton() {
  return (
    <>
      <div className={styles.button_buy}>
        {buttonBuy.map((data, index) => {
          return <button key={index}>{data.icon}</button>;
        })}
      </div>
    </>
  );
}

export default BuyButton;
