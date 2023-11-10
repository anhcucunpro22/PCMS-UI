import React, { useState } from "react";
import styles from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import CheckOut from "../CheckOut";

const Cart = ({ cart, removeFromCart, addToCart, toggleCart }) => {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={styles.cartContainer}>
      <button className={styles.closeButton} onClick={toggleCart}>
        <FontAwesomeIcon icon={faTimes} />
      </button>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                {item.title} - Quantity: {item.quantity}
                <div className={styles.cartItemBtn}>
                  <button onClick={() => removeFromCart(item)}>-</button>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </li>
            ))}
          </ul>
          <p className={styles.totalPrice}>Total Price: ${getTotalPrice()}</p>

          <button
            className={styles.checkoutButton}
            onClick={() => {
              const cartQuery = encodeURIComponent(JSON.stringify(cart));
              window.location.href = `/checkout?cart=${cartQuery}`;
            }}
          >
            Check Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
