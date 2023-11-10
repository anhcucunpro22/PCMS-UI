import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from './CartButton.module.css';

const CartButton = ({ cart, onClick }) => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
    return (
      <button className={styles.cartButton} onClick={onClick}>
        <div className={styles.faShoppingCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>

        <span className={styles.cartCount}>{totalItems}</span>
      </button>
    );
  };

export default CartButton;