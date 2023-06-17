import React from 'react';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1> React Meals </h1>
        <HeaderCartButton openCart={props.onOpenCart}> </HeaderCartButton>
      </header>
      <div className={styles['main-image']}>
        <img
          src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
          alt="food"
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
