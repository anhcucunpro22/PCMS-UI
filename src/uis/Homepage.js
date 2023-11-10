import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Homepage.module.css';
import Card from './card/Card';
import PrintingShop from './forTypical Users/PrintingShop';

const Homepage = ({ isLoggedIn, isAdmin, isCashier, handleLogout }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          <Link to="/" className={styles.logo}>
            DTU Printing
          </Link>
        </h1>

        <nav className={styles.menu}>
          {(isLoggedIn && !isAdmin && !isCashier) && (
            <div>
              <Link to='/printing-shop' className={styles.menuButton}>Shop</Link>
              <Link to="/users-order-history" className={styles.menuButton}>
                My Order History
              </Link>
              <button className={styles.menuButton} onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
          {!isLoggedIn && (
            <Link to="/signin" className={styles.menuButton}>
              Login
            </Link>
          )}
          {isLoggedIn && isAdmin && !isCashier && (
            <div>
              <Link to="/managePastOrd" className={styles.menuButton}>
                Order history by ID
              </Link>
              <Link to="/employeeManage" className={styles.menuButton}>
                Manage Employee
              </Link>
              <Link to='/printersList' className={styles.menuButton}>Printer(s)</Link>
              <Link to='/debt-management' className={styles.menuButton}>Debt Management</Link>
              <Link to="/order-history-manage-by-date" className={styles.menuButton}>
                Order history by date
              </Link>
              <Link to="/productsManage" className={styles.menuButton}>
                Manage Products
              </Link>
              <button className={styles.menuButton} onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
          {isLoggedIn && isCashier && (
            <div>
              <Link to="/order-history-manage-by-date" className={styles.menuButton}>
                Order history by date
              </Link>
              <Link to="/check-out-for-cashier" className={styles.menuButton}>
                Bill out
              </Link>
              <button className={styles.menuButton} onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Homepage;
