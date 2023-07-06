import React, { useEffect, useState } from 'react';
import { productData } from '../../../static/data';
import styles from '../../../styles/styles';
import ProductCard from '../ProductCard/ProductCard';

const BestDeals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sortedData = [...productData].sort((a, b) => {
      const priceDiffA = a.price - a.discount_price;
      const priceDiffB = b.price - b.discount_price;
      return priceDiffB - priceDiffA;
    });

    const slicedData = sortedData.slice(0, 5);

    setData(slicedData);
  }, []);

  return (
    <div className="py-12 bg-gray-300">
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1 className="text-center">Najbolje ponude</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data &&
            data.map((i, index) => (
              <ProductCard data={i} key={index} className="mb-4" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
