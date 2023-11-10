import React, { useState } from 'react';
import styles from './CashierInputOrders.module.css';

const CashierInputOrders = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isChecked, setIsChecked] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      date: new Date().toLocaleDateString(),
      id:  event.target.elements.customerID.value,
      customerName: event.target.elements.customerName.value,
      productName: event.target.elements.product.value,
      quantity: event.target.elements.quantity.value,
      // total price here just for the only one product name input in the form before submitting
      totalPriceEach: event.target.elements.price.value,
      paymentStatus: isChecked
    };
    setProducts([...products, product]);
    setTotalPrice(totalPrice + product.quantity * product.totalPriceEach);
    // event.target.reset();
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className={styles.whole}>
        <form onSubmit={handleSubmit} className={styles.cashierForm}>
          <h1>Bill out</h1>
          <button onClick={(event) => {
            event.target.form.reset();
            setProducts([]);
            setTotalPrice(0);
          }} className={styles.nextCustomer}>></button>

          <label htmlFor="customerID">Customer ID (optional, for DTU Staffs only):</label>
          <input type="number" id="customerID" name="customerID" defaultValue="0" className={styles.cashierInput} />
          <label htmlFor="customerName">Name of customer:</label>
          <input type="text" id="customerName" name="customerName" required className={styles.cashierInput} />
          <label htmlFor="product">Product:</label>
          <input type="text" id="product" name="product" required className={styles.cashierInput} />
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" required className={styles.cashierInput} />
          <label htmlFor="price">Price per one:</label>
          <input type="number" id="price" name="price" required className={styles.cashierInput} />
          
          <label for="paid">Paid?</label>
          <input type="checkbox" id="paid" name="paid" checked={isChecked} onChange={handleCheckboxChange}/>
          
          <button type="submit" className={styles.cashierSubmit}>Add Product</button>
        </form>
      
      <div className={styles.cashierContainer}>
        <ul>
          <h3>Products</h3>
          {products.map((product, index) => (
            <li key={index}>
              {product.productName} x {product.quantity} - Price per one {product.productName}: {product.totalPriceEach} 
              {/* {product.paymentStatus?.toString()} */}
            </li>
          ))}
        </ul>

        <div className={styles.cashierTotal}>
         Total Price: {totalPrice}
        </div>
      </div>
    </div>
  );
};

export default CashierInputOrders;
