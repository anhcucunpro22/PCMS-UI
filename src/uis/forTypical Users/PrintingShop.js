import React, { useState, useEffect } from "react";
import styles from "./PrintingShop.module.css";
import Card from "../card/Card";
import Cart from "./all a cart has/Cart";
import CartButton from "./all a cart has/CartButton";
import CartPopupStyles from "./all a cart has/CartPopup.module.css";

const PrintingShop = ({ onCartButtonClick }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [availableDocuments, setAvailableDocuments] = useState([
    {
      id: 1,
      title: "Mathematics Textbook",
      price: 20,
      quantity: 10000,
    },
    {
      id: 2,
      title: "Physics Textbook",
      price: 25,
      quantity: 500,
    },
    {
      id: 3,
      title: "Economic Textbook",
      price: 26,
      quantity: 500,
    },
    {
      id: 4,
      title: "Bio Textbook",
      price: 28,
      quantity: 500,
    },
    {
      id: 5,
      title: "IT Textbook",
      price: 29,
      quantity: 500,
    },
    {
      id: 6,
      title: "Philosophy Textbook",
      price: 29,
      quantity: 500,
    },
    {
      id: 7,
      title: "Mathematics Textbook",
      price: 20,
      quantity: 10000,
    },
    {
      id: 8,
      title: "Physics Textbook",
      price: 25,
      quantity: 500,
    },
    {
      id: 9,
      title: "Economic Textbook",
      price: 26,
      quantity: 500,
    },
    {
      id: 10,
      title: "Bio Textbook",
      price: 28,
      quantity: 500,
    },
    {
      id: 11,
      title: "IT Textbook",
      price: 29,
      quantity: 500,
    },
    {
      id: 12,
      title: "Philosophys Textbook",
      price: 29,
      quantity: 500,
    },
    {
      id: 13,
      title: "Mathematics Textbook",
      price: 20,
      quantity: 10000,
    },
    {
      id: 14,
      title: "Physics Textbook",
      price: 25,
      quantity: 500,
    },
    {
      id: 15,
      title: "Economic Textbook",
      price: 26,
      quantity: 500,
    },
    {
      id: 16,
      title: "Bio Textbook",
      price: 28,
      quantity: 500,
    },
    {
      id: 17,
      title: "IT Textbook",
      price: 29,
      quantity: 500,
    },
    {
      id: 18,
      title: "Philosophys Textbook",
      price: 29,
      quantity: 500,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (document) => {
    const existingItem = cart.find((item) => item.id === document.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === document.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...document, quantity: 1 }]);
    }
    // Decrease the quantity of the document in the availableDocuments list
    const updatedAvailableDocuments = availableDocuments.map((item) =>
      item.id === document.id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setAvailableDocuments(updatedAvailableDocuments);
  };

  const addOneToCart = (item) => {
    const existingItem = cart.find((item) => item.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    // Decrease the quantity of the document in the availableDocuments list
    const updatedAvailableDocuments = availableDocuments.map((eachItem) =>
      eachItem.id === item.id && eachItem.quantity !== 0
        ? { ...eachItem, quantity: eachItem.quantity - 1 }
        : eachItem
    );
    setAvailableDocuments(updatedAvailableDocuments);
  };

  const removeFromCart = (document) => {
    const updatedCart = cart
      .map((item) =>
        item.id === document.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
    // Increase the quantity of the document in the availableDocuments list
    const updatedAvailableDocuments = availableDocuments.map((item) =>
      item.id === document.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setAvailableDocuments(updatedAvailableDocuments);
  };

  return (
    <div className={styles.printingShop}>
      <div className={styles.wholeContent}>
        <CartButton cart={cart} onClick={toggleCart} />
        <h1>Surf all the Documents you want!</h1>
        <div className={styles.documentList}>
          {availableDocuments.map((document) => (
            <div className={styles.flexItem}>
              <Card
                key={document.id}
                document={document}
                addToCart={addToCart}
              />
            </div>
          ))}
        </div>
      </div>
      {isCartOpen && (
        <div className={CartPopupStyles.blurredBackground}>
          <div className={CartPopupStyles.cartPopup}>
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              toggleCart={toggleCart}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PrintingShop;
