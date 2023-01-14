import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';

import iconBtAddCart from '@icons/bt_add_to_cart.svg';
import iconBtAddedCart from '@icons/bt_added_to_cart.svg';

import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const {
    addToCart,
    removeFromCart,
    state: { cart },
  } = useContext(AppContext);

  const handleClick = (item) => {
    itsProductAdded() ? removeFromCart(item) : addToCart(item);
  };

  const itsProductAdded = () => (cart.some((item) => item.id === product.id) ? true : false);

  return (
    <div className={styles.ProductItem}>
      <Image loader={() => product.images[0]} src={product.images[0]} alt={product.title} width={100} height={100} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <button onClick={() => handleClick(product)}>
          <figure>{itsProductAdded() ? <Image src={iconBtAddedCart} alt="" /> : <Image src={iconBtAddCart} alt="" />}</figure>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
