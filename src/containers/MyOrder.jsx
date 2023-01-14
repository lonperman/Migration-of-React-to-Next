import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import styles from '@styles/MyOrder.module.scss';

import icon from '@icons/flechita.svg';

const MyOrder = () => {
  const {
    state: { cart },
    toggleOrders,
    handleToggleOrder,
  } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image src={icon} alt="arrow" onClick={() => handleToggleOrder(!toggleOrders)} />
        <p className={styles['title']}>My order</p>
      </div>
      <div className={styles['my-order-content']}>
        <div className={styles['cart-product-list']}>
          {cart.map((product, index) => (
            <OrderItem indexValue={index} product={product} key={`orderItem-${index}`} />
          ))}
        </div>
        <div className={styles['order']}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <Link className={styles['primary-button']} href="/checkout">
          <p>Checkout</p>
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
