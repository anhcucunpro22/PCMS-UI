import React, { useState } from 'react';
import styles from './ManageOrders.module.css';

const ManageOrders = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [orders, setOrders] = useState([]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleViewOrders = (event) => {
    event.preventDefault();
    // Here you would make an API call to retrieve the orders for the selected date
    // For now, we'll just simulate the data
    const orders = [
      { date: '2023-10-16', productName: 'Printer Paper', quantity: 5, price: 10, paymentStatus: 'paid', buyer: 'Lecturer A' },
      { date: '2023-10-16', productName: 'Stapler', quantity: 2, price: 5, paymentStatus: 'unpaid', buyer: 'Unnamed Bypass Customer' },
      { date: '2023-10-16', productName: 'Pencil', quantity: 10, price: 2, paymentStatus: 'paid', buyer: 'Lecturer B' },
      { date: '2023-10-16', productName: 'Eraser', quantity: 3, price: 1, paymentStatus: 'unpaid', buyer: 'Unnamed Bypass Customer' },
      { date: '2023-10-16', productName: 'Printer Ink', quantity: 1, price: 20, paymentStatus: 'paid', buyer: 'Lecturer C' },
    ];
    setOrders(orders);
  };

  return (
    <div className={styles.container}>
      <h2>Order History</h2>
      <form onSubmit={handleViewOrders}>
        <label htmlFor="date">Select a date:</label>
        <input type="date" id="date" name="date" value={selectedDate} onChange={handleDateChange} required />
        <button type="submit" className={styles.viewOrdersButton}>View Orders</button>
      </form>
      {orders.length > 0 ? (
        <table className={styles.orderTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment Status</th>
              <th>Buyer</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.date}</td>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                <td>${order.price}</td>
                <td>{order.paymentStatus}</td>
                <td>{order.buyer}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="3"></td>
              <td colSpan="2">Total in the day:</td>
              <td>${orders.reduce((total, order) => total + order.price, 0)}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No orders found for the selected date.</p>
      )}
    </div>
  );
};

export default ManageOrders;
