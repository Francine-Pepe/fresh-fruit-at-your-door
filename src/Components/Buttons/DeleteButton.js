import React from "react";
import styles from "./Buttons.module.css";
import { buttonDelete } from "../../data";
import { useState } from "react";

function DeleteButton(props) {
  return (
    <div className={styles.button_delete}>
      {buttonDelete.map((data, index) => {
        return (
          <>
            <button key={index} type="button">
              {data.icon}
            </button>
          </>
        );
      })}
    </div>
  );
}

export default DeleteButton;
