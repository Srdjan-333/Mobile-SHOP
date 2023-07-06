import React from 'react';
import styles from '../../styles/styles';

const CheckoutSteps = ({ active }) => {
  console.log(active);
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-4xl flex items-center flex-wrap">
        <div className={`${styles.noramlFlex}`}>
          <div className={`${styles.cart_button}`}>
            <span className={`${styles.cart_button_text}`}>1. Dostava</span>
          </div>
          <div
            className={`${
              active > 1
                ? 'w-[17px] 800px:w-[70px] h-[4px] !bg-[#f63b60]'
                : 'w-[17px] 800px:w-[70px] h-[4px] !bg-[#466cb6]'
            }`}
          />
        </div>

        <div className={`${styles.noramlFlex}`}>
          <div
            className={`${
              active > 1
                ? `${styles.cart_button}`
                : `${styles.cart_button} !bg-[#dbd5d6]`
            }`}
          >
            <span
              className={`${
                active > 1
                  ? `${styles.cart_button_text}`
                  : `${styles.cart_button_text} !text-[#f63b60]`
              }`}
            >
              2. Plaćanje
            </span>
          </div>
        </div>

        <div className={`${styles.noramlFlex}`}>
          <div
            className={`${
              active > 3
                ? 'w-[17px] 800px:w-[70px] h-[4px] !bg-[#f63b60]'
                : 'w-[17px] 800px:w-[70px] h-[4px] !bg-[#466cb6]'
            }`}
          />
          <div
            className={`${
              active > 2
                ? `${styles.cart_button}`
                : `${styles.cart_button} !bg-[#dbd5d6]`
            }`}
          >
            <span
              className={`${
                active > 2
                  ? `${styles.cart_button_text}`
                  : `${styles.cart_button_text} !text-[#f63b60]`
              }`}
            >
              3. Kraj
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
