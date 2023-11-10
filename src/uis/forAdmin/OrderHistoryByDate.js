import React, { useState } from 'react';
import styles from './OrderHistory.module.css';

const OrderHistory = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [orders, setOrders] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);


  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleViewOrders = (event) => {
    event.preventDefault();
    // Here you would make an API call to retrieve the orders for the selected date
    // For now, we'll just simulate the data
    // hãy thống nhất các keys cho việc universal format dữ liệu, ví dụ ở đây key là buyer, chứ sau này khi có db thì đổi thành customerName
    const orders = [
      { date: '2023-10-16', productName: 'Printer Paper', buyer: 'DTU Lecturer: John Doe', totalPrice: 10 },
      { date: '2023-10-16', productName: 'Stapler', buyer: 'Unnamed Bypass Customer', totalPrice: 5 },
      { date: '2023-10-16', productName: 'Pencil', buyer: 'DTU Lecturer: Jane Smith', totalPrice: 2 },
      { date: '2023-10-16', productName: 'Printer Ink', buyer: 'Unnamed Bypass Customer', totalPrice: 15 },
      { date: '2023-10-16', productName: 'Notebook', buyer: 'DTU Lecturer: John Doe', totalPrice: 8 },
      { date: '2023-10-16', productName: 'Printer Ink', buyer: 'Unnamed Bypass Customer', totalPrice: 15 },
      { date: '2023-10-16', productName: 'Notebook', buyer: 'DTU Lecturer: John Doe', totalPrice: 8 },
      { date: '2023-10-16', productName: 'Printer Ink', buyer: 'Unnamed Bypass Customer', totalPrice: 15 },
      { date: '2023-10-16', productName: 'Notebook', buyer: 'DTU Lecturer: John Doe', totalPrice: 8 },
      { date: '2023-10-16', productName: 'Printer Ink', buyer: 'Unnamed Bypass Customer', totalPrice: 15 },
      { date: '2023-10-16', productName: 'Notebook', buyer: 'DTU Lecturer: John Doe', totalPrice: 8 },
    ];
  
    // Calculate the total amount
    const amount = orders.reduce((total, order) => total + order.totalPrice, 0);
    setTotalAmount(amount);
  
    setOrders(orders);
  };
  

  return (
    <div className={styles.container}>
      <h2>Order History</h2>
      <form onSubmit={handleViewOrders}>
        <label htmlFor="selectedDate">Select a Date:</label>
        <input type="date" id="selectedDate" name="selectedDate" value={selectedDate} onChange={handleDateChange} required />
        <button type="submit" className={styles.viewOrdersButton}>View Orders</button>
      </form>
      {orders.length > 0 && (
        <div>
          <h3>Orders for {selectedDate}</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Product Name</th>
                <th>Buyer</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.date}</td>
                  <td>{order.productName}</td>
                  <td>{order.buyer}</td>
                  <td>${order.totalPrice}</td>
                </tr>
              ))}
              
              <tr>
                <td colSpan="2" className={styles.totalOrders}>Total Orders: {orders.length}</td>
                <td colSpan="2" className={styles.totalAmount}>Total Amount: ${totalAmount}</td>
              </tr>

            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
