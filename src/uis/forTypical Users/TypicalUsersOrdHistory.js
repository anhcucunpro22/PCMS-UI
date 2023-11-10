import React, { useState } from 'react';
import styles from './TypicalUsersOrdHistory.module.css';

const TypicalUsersOrdHistory = () => {
    const orderHistory = [
        {
          id: 1,
          branch: 'Hoa Khanh',
          date: '2023-10-20',
          products: [
            { name: 'A4 paper', quantity: 2, price: 10 },
            { name: 'B5 notebook', quantity: 1, price: 20 },
          ],
          paymentStatus: 'Paid',
        },
        {
          id: 2,
          branch: 'NVL',
          date: '2023-10-18',
          products: [
            { name: 'A3 paper', quantity: 1, price: 15 },
            { name: 'A4 paper', quantity: 3, price: 15 },
            { name: 'C5 envelope', quantity: 2, price: 5 },
          ],
          paymentStatus: 'Unpaid',
        },
        {
          id: 3,
          branch: 'Hoa Khanh',
          date: '2023-10-15',
          products: [
            { name: 'A4 paper', quantity: 5, price: 25 },
            { name: 'B5 notebook', quantity: 2, price: 40 },
            { name: 'C5 envelope', quantity: 3, price: 7.5 },
          ],
          paymentStatus: 'Paid',
        },
        {
            id: 4,
            branch: 'Hoa Khanh',
            date: '2023-10-17',
            products: [
              { name: 'A4 paper', quantity: 5, price: 25 },
              { name: 'Staple', quantity: 2, price: 40 },
              { name: 'C5 envelope', quantity: 3, price: 7.5 },
            ],
            paymentStatus: 'Unpaid',
          },
      ];

    return (
        <div className={styles.container}>
        <h1>Showing orders history for user Phan Ngo Tuan Kiet</h1>
        
        {orderHistory.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Branch</th>
                <th>Date</th>
                <th>Bought What</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((order) => (
                <React.Fragment key={order.id}>
                  {order.products.map((product, index) => (
                    <tr key={`${order.id}-${index}`}>
                      {index === 0 && (
                        <>
                          <td rowSpan={order.products.length}>{order.id}</td>
                          <td rowSpan={order.products.length}>{order.branch}</td>
                          <td rowSpan={order.products.length}>{order.date}</td>
                          <td>{product.name}</td>
                          <td>{product.quantity}</td>
                          <td>${product.quantity * product.price}</td>
                          <td rowSpan={order.products.length}>{order.paymentStatus}</td>
                        </>
                      )}
                      {index > 0 && (
                        <>
                          <td>{product.name}</td>
                          <td>{product.quantity}</td>
                          <td>${product.quantity * product.price}</td>
                        </>
                      )}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    );
}

export default TypicalUsersOrdHistory;
