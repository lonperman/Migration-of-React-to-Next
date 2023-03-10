import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import styles from '@styles/OrderItem.module.scss';

import icon from '@icons/icon_close.png';

const OrderItem = ({ product, indexValue }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (index) => {
    removeFromCart(index);
  };
  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product?.images[0]} alt={product?.title} width={100} height={100} />
      </figure>
      <p>{product?.title}</p>
      <p>{product?.price}</p>
      <Image src={icon} alt="close" onClick={() => handleRemove(indexValue)} />
    </div>
  );
};

export default OrderItem;
