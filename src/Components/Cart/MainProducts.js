import React from "react";
import styles from "./Cart.module.css";

function MainProducts(props) {
    const {products} = props;
    
  return (
    <main>
      <div className={styles.main_products}>
        <h2>Products</h2>
      </div>
    </main>
  );
}

export default MainProducts;
