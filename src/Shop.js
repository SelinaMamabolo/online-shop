import React, { useEffect, useState } from 'react';
//import Firebase from 'firebase'
import db from './Firebase'
// const db = require('./Firebase');


const Shop = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        
        db.collection('Products').onSnapshot((snapshot) => {
            const prodData = []
            snapshot.forEach((doc) => {
                prodData.push({ ...doc.data(), id: doc.id })
            })
            setProducts(prodData)

            console.log(products);
        })
    }
    const addToCart = () => {
        alert('Item added to Cart!')
        }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="">
            <div className="container">
                <div className="column">
                    {products && products.map(product => (
                        <div className="prod-title">
                            <div className="product_image">
                                <img src={product.ProductImage} />
                            </div>
                            <h3>
                                {product.ProductName}
                            </h3>
                            <div style={{ width: "100%"}}>
                                <p style={{ color: "grey" }}>
                                    {product.ProductDescription}
                                    <br />
                                    R{product.ProductPrice}.00
                                    <br />
                                    <br />
                                </p>
                                <button className="add-to-cart" onClick={addToCart}> Add to Cart </button>
                            </div>
                        </div>

                    )
                    )

                    }
                </div>
            </div>

        </div>
    );
};

export default Shop;