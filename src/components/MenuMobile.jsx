import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import close from '@icons/icon_close.png';
import AppContext from '@context/AppContext';
import styles from '@styles/MenuMobile.module.scss';

function MenuMobile() {
  const { toggleMobile, handleToggleMobile } = useContext(AppContext);

  return (
    <div className={styles['mobile-menu']}>
      <Image src={close} alt="close menu" className={styles.close} onClick={() => handleToggleMobile(!toggleMobile)} />
      <div>
        <ul>
          <li>
            <Link href="/">CATEGORIES</Link>
          </li>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Cloth</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furniture</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/">My orders</Link>
          </li>
          <li>
            <Link href="/">My Account</Link>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <Link href="/" className={styles['email']}>
            You-email@example.com
          </Link>
        </li>
        <li>
          <Link href="/" className={styles['sign-out']}>
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuMobile;
