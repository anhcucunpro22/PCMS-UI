import React, { useState, useEffect } from 'react';
import styles from './ProductManagement.module.css';
// import { getProductData } from './api'; 
// function to fetch data from SQL database, khi nào có db thì triển cái import này

const ProductManagement = () => {

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getProductData();
//       setProductData(data);
//     };
//     fetchData();
//   }, []);
    // khi nào có db từ sql thì uncomment trên đây, và nhớ set state products ở bên dưới về mặc định '[]'

    const [products, setProducts] = useState([
        { id: 1, name: 'A3 paper', unit:'Piece',price: 10, quantity: 5 },
        { id: 2, name: 'Staple',  unit:'Piece',price: 20, quantity: 10 },
        { id: 3, name: 'Pencil',  unit:'One',price: 30, quantity: 15 },
      ]);

    const [isAddingProduct, setIsAddingProduct] = useState(false);

    const handleAddProduct = () => {
        setIsAddingProduct(!isAddingProduct);
    };
      
    const [newProductName, setNewProductName] = useState('');
    const [newProductUnit, setNewProductUnit] = useState('');
    const [newProductPrice, setNewProductPrice] = useState(0);
    const [newProductQuantity, setNewProductQuantity] = useState(0);

    const handleAdd = () => {
    const newProduct = {
        id: products.length + 1,
        name: newProductName,
        unit: newProductUnit,
        price: newProductPrice,
        quantity: newProductQuantity,
    };

    setProducts([...products, newProduct]);
    setIsAddingProduct(false);
    setNewProductName('');
    setNewProductUnit('')
    setNewProductPrice(0);
    setNewProductQuantity(0);
    };

      const handlePriceEdit = (id, newPrice) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? { ...product, price: newPrice } : product
          )
        );
      };
      
      const handleQuantityEdit = (id, newQuantity) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? { ...product, quantity: newQuantity } : product
          )
        );
      };
      
      const handleNameEdit = (id, newName) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? { ...product, name: newName } : product
          )
        );
      };

      const handleUnitEdit = (id, newUnit) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? { ...product, unit: newUnit } : product
          )
        );
      };
      
      const handleDelete = (id) => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
        alert('Product deleted');
      };

      return (
        <div className={styles.container}>
      <h2>Products List Management</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Unit</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <input
                  type="text"
                  value={product.name}
                  onChange={(e) => handleNameEdit(product.id, e.target.value)}
                  className={styles.input}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={product.unit}
                  onChange={(e) => handleUnitEdit(product.id, e.target.value)}
                  className={styles.input}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={product.price}
                  onChange={(e) =>
                    handlePriceEdit(product.id, parseFloat(e.target.value))
                  }
                  className={styles.input}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) =>
                    handleQuantityEdit(product.id, parseInt(e.target.value))
                  }
                  className={styles.input}
                />
              </td>
              <td>
                <button
                  onClick={() => handleDelete(product.id)}
                  className={styles.button}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.itali}>Just type in the change you want in every input fields, and I insure you everything are automatically changed into the database.</div>
    
      <h2>Add more products...</h2>

      
      <button onClick={handleAddProduct} className={styles.button}>Add more product</button>

      {isAddingProduct && (<div className={styles.addMoreProduct}>
      <thead>
          <tr>
            <th>New product name</th>
            <th>Unit</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead></div>
      )}

      {isAddingProduct && (
        <tr>

            <td>
            <input
                type="text"
                value={newProductName}
                onChange={(e) => setNewProductName(e.target.value)}
                className={styles.input}
            />
            </td>
            <td>
            <input
                type="text"
                value={newProductUnit}
                onChange={(e) => setNewProductUnit(e.target.value)}
                className={styles.input}
            />
            </td>
            <td>
            <input
                type="number"
                value={newProductPrice}
                onChange={(e) => setNewProductPrice(parseFloat(e.target.value))}
                className={styles.input}
            />
            </td>
            <td>
            <input
                type="number"
                value={newProductQuantity}
                onChange={(e) => setNewProductQuantity(parseInt(e.target.value))}
                className={styles.input}
            />
            </td>
            <td>
            <button onClick={handleAdd} className={styles.button}>
                Add
            </button>
            </td>
        </tr>
        )}

    </div>
      );
    }

export default ProductManagement;