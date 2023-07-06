import React from 'react';
import styles from '../../styles/styles';

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} bg-white py-50 px-5  cursor-pointer  w-full`}
      style={{ cursor: 'default' }}
    >
      <div className="flex justify-center flex-wrap">
        <div className="mx-10 my-6" style={{ width: '15%' }}>
          <img
            src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png"
            alt=""
            style={{ width: '100%', objectFit: 'contain' }}
            className="pointer-events-none"
          />
        </div>
        <div className="mx-10 my-6" style={{ width: '15%' }}>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png"
            style={{ width: '100%', objectFit: 'contain' }}
            alt=""
            className="pointer-events-none"
          />
        </div>
        <div className="mx-10 my-6" style={{ width: '15%' }}>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
            style={{ width: '100%', objectFit: 'contain' }}
            alt=""
            className="pointer-events-none"
          />
        </div>
        <div className="mx-10 my-6" style={{ width: '15%' }}>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png"
            style={{ width: '100%', objectFit: 'contain' }}
            alt=""
            className="pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
