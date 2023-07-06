import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/styles';

const Hero = () => {
  return (
    <div
      className={`relative w-full bg-no-repeat bg-center bg-cover ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          'url(https://www.teamgroupinc.com/en/upload/banner_pr_list/340a5bf3c93b2297d549360e38b09df9.jpg)',
        height: 'calc(100vh - 250px)',
      }}
    >
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      >
        <div
          className={`relative ${styles.section} w-full px-4 md:px-0 md:w-[60%]`}
        >
          <div
            className="w-full h-full absolute top-0 left-0"
            style={{
              backgroundImage:
                'url(https://www.teamgroupinc.com/en/upload/banner_pr_list/340a5bf3c93b2297d549360e38b09df9.jpg)',
              filter: 'blur(5px)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              zIndex: '-1',
            }}
          />
          <h1
            className={`text-3xl md:text-6xl text-white font-semibold leading-tight`}
          >
            Nudimo vam najveći izbor uređaja
          </h1>
          <p className="mt-4 text-white font-medium text-lg md:text-xl">
            Dobrodošli u našu prodavnicu{' '}
            <span className="text-[#e23333]">Mobile</span>{' '}
            <span className="text-[#4a93bd]">SHOP</span>
            <br />
            Kod nas možete pronaći najnovije modele telefona po povoljnim
            cenama. Naša ponuda uključuje različite brendove i modele, od
            jeftinijih do najkvalitetnijih. Pored toga, nudimo i širok izbor
            opreme kao što su slušalice, tableti, laptopovi itd.
          </p>

          <Link to="/products" className="inline-block mt-4">
            <div
              className={`bg-[#000000] rounded-lg py-2 px-4 text-white font-medium hover:bg-red-600 transition-colors duration-300`}
            >
              Kupite odmah
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
