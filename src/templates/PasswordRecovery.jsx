import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/RecoveryPassword.module.scss';

import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';

const PasswordRecovery = () => {
  return (
    <div className={styles.login}>
      <div className={styles['form-container']}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Email has been sent!</h1>
        <p className={styles.subtitle}>Please check your inbox for instructions on how to reset password</p>
        <div className={styles['email-image']}>
          <Image src={email} alt="email" />
        </div>
        <button className={(styles['primary-button'], styles['login-button'])}>Login</button>
        <p className={styles.resend}>
          <span>Didn`&apos;`t receive the email?</span>
          <Link href="/">Resend</Link>
        </p>
      </div>
    </div>
  );
};

export default PasswordRecovery;
