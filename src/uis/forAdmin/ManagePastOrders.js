import React, { useState } from 'react';
import styles from './ManagePastOrders.module.css';

const ManagePastOrders = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [orders, setOrders] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: fetch orders from the server based on the employee ID or student ID
    setOrders([
      { id: 1, date: '2023-10-15', status: 'Delivered', amount: 90, paymentStatus: 'Paid' },
      { id: 2, date: '2023-10-14', status: 'In Progress', amount: 90, paymentStatus: 'Unpaid' },
      { id: 3, date: '2023-10-13', status: 'Cancelled',  amount: 90,paymentStatus: 'Paid' },
      { id: 4, date: '2023-10-12', status: 'Delivered', amount: 90, paymentStatus: 'Paid' },
      { id: 5, date: '2023-10-11', status: 'In Progress', amount: 90, paymentStatus: 'Unpaid' },
      { id: 6, date: '2023-10-10', status: 'Cancelled',  amount: 90,paymentStatus: 'Unpaid' },
      { id: 7, date: '2023-10-9', status: 'Delivered',  amount: 90,paymentStatus: 'Paid' },
      { id: 8, date: '2023-10-8', status: 'In Progress',  amount: 80,paymentStatus: 'Unpaid' },
      { id: 9, date: '2023-10-7', status: 'Cancelled',  amount: 90,paymentStatus: 'Unpaid' },
    ]);
  };

  const unpaidOrders = orders.filter(order => order.paymentStatus === 'Unpaid');
  const totalUnpaidOrders = unpaidOrders.length;
  const totalUnpaidDebt = unpaidOrders.reduce((total, order) => total + order.amount, 0);

  return (
    <div className={styles.container}>
      <h1>Order History</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="employeeId">Lecturer ID:</label>
        <input type="text" id="employeeId" name="employeeId" value={employeeId} onChange={(event) => setEmployeeId(event.target.value)} required className={styles.input} />
        <button type="submit" className={styles.button}>View Orders</button>
      </form>

      <h3>Order history for user with ID {employeeId}</h3>

      {orders.length > 0 ? (
        <div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Order Date</th>
                <th>Order Status</th>
                <th>Amount</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.status}</td>
                  <td>${order.amount}</td>
                  <td>{order.paymentStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total unpaid orders: {totalUnpaidOrders}</h3>
          <h3>Total unpaid debt for lecturer {employeeId}: ${totalUnpaidDebt}</h3>
          </div>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default ManagePastOrders;