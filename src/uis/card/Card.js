import styles from './Card.module.css';

const Card = ({ document, addToCart }) => {

    return (
      <div className={styles.card}>
        <h3>{document.title}</h3>
        <p>Price: ${document.price}</p>
        {/* <p className={styles.quantity}>Quantity available: {document.quantity}</p> */}

        <button
          onClick={() => addToCart(document)}
          disabled={document.quantity === 0}
          className={styles.addCartBtn}
        >
          Add to Cart
        </button>
      </div>
    );
  };

export default Card;
