import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@components/Menu';
import MenuMobile from '@components/MenuMobile';
import MyOrder from '@containers/MyOrder';
import AppContext from '@context/AppContext';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const {
    state: { cart },
    toggleOrders,
    handleToggleOrder,
    toggleMobile,
    handleToggleMobile,
  } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className={styles.Nav}>
        <Image src={menu} alt="menu" className={styles.menu} onClick={handleToggleMobile} />
        <div className={styles['navbar-left']}>
          <Link href="/">
            <div className={styles['nav-logo']}>
              <Image src={logo} alt="logo" />
            </div>
          </Link>
          <ul>
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furnitures</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li>
              <button className={styles['navbar-email']} onClick={handleToggle}>
                You-email@example.com
              </button>
            </li>
            <li className={styles['navbar-shopping-cart']}>
              <button onClick={() => handleToggleOrder(!toggleOrders)}>
                <Image src={shoppingCart} alt="shopping cart" />
              </button>
              {cart.length > 0 ? <div>{cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {toggle ? <Menu /> : ''}
        {toggleOrders ? <MyOrder /> : ''}
        {toggleMobile ? <MenuMobile /> : ''}
      </nav>
    </>
  );
};

export default Header;
