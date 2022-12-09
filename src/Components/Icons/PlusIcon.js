import React from "react";
import { Icon } from "@iconify/react";
import styles from "./Icons.module.css";

function PlusIcon(props) {
  const { color } = props;

  return (
    <div className={styles.plus_icon}>
      <Icon icon="ion:add-outline" width="18" height="18" />
    </div>
  );
}

export default PlusIcon;
