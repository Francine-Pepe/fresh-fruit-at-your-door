import styles from './Cart.module.css';

import React from 'react'

function Cart(props) {
  return (
    <aside className={styles.basket_container}>
      <h2>Cart Items</h2>
    </aside>
  )
}

export default Cart