"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./page.module.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState({
    categories: false,
    price: false,
    rating: false,
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const toggleDropdown = (filter) => {
    setIsOpen({ ...isOpen, [filter]: !isOpen[filter] });
  };

  return (
    <div>
      <Head>
        <title>Discover Our Products</title>
        <meta
          name="description"
          content="Explore our latest collection of products including bags, shoes, and accessories."
        />
      </Head>

      <nav className={styles.navbar}>
        <div className={styles.logo}>LOGO</div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
        </ul>
        <div className={styles.userActions}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.cartBtn}>Cart</button>
        </div>
      </nav>

      <header className={styles.header}>
        <h1>Discover Our Products</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <h2>Filters</h2>
            <div className={styles.filterSection}>
              <h3 onClick={() => toggleDropdown("categories")}>Categories</h3>
              {isOpen.categories && (
                <ul>
                  <li>Bags</li>
                  <li>Shoes</li>
                  <li>Accessories</li>
                </ul>
              )}
            </div>

            <div className={styles.filterSection}>
              <h3 onClick={() => toggleDropdown("price")}>Price</h3>
              {isOpen.price && (
                <div>
                  <input type="range" min="0" max="1000" />
                </div>
              )}
            </div>

            <div className={styles.filterSection}>
              <h3 onClick={() => toggleDropdown("rating")}>Rating</h3>
              {isOpen.rating && (
                <ul>
                  <li>4 stars & above</li>
                  <li>3 stars & above</li>
                </ul>
              )}
            </div>
          </div>

          <div className={styles.productList}>
            {products.map((product) => (
              <div className={styles.productCard} key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.productImage}
                />
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productPrice}>${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerColumn}>
            <h3>Shop</h3>
            <ul>
              <li>
                <a href="#">Bags</a>
              </li>
              <li>
                <a href="#">Shoes</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Help</h3>
            <ul>
              <li>
                <a href="#">Customer Service</a>
              </li>
              <li>
                <a href="#">Size Guide</a>
              </li>
              <li>
                <a href="#">Shipping Information</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>About Us</h3>
            <ul>
              <li>
                <a href="#">Company Info</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Follow Us</h3>
            <div className={styles.socialIcons}>
              <a href="#">
                <img src="/facebook-icon.png" alt="Facebook" />
              </a>
              <a href="#">
                <img src="/twitter-icon.png" alt="Twitter" />
              </a>
              <a href="#">
                <img src="/instagram-icon.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 Company Name. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
