import React from "react";
import styles from "./CheckOut.module.css";

const CheckOut = ({ location }) => {
  const searchParams = location ? new URLSearchParams(location.search) : null;
  const cartQuery = searchParams ? searchParams.get("cart") : null;
  const cart = cartQuery ? JSON.parse(decodeURIComponent(cartQuery)) : [];

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={styles.checkoutContainer}>
      <h1>CheckOut</h1>
      <table className={styles.checkoutTable}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total Price:</td>
            <td>${getTotalPrice()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CheckOut;
