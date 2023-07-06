import React, { useEffect, useState } from 'react';
import Header from '../components/Layout/Header';
import ProductCard from '../components/Route/ProductCard/ProductCard';
import styles from '../styles/styles';
import Footer from '../components/Layout/Footer';
import { productData } from '../static/data';

const BestSellingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sorted = productData.sort((a, b) => a.stock - b.stock);
    const firstRowData = sorted.slice(0, 5);
    setData(firstRowData);
  }, []);

  return (
    <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data.map((i, index) => (
            <ProductCard data={i} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BestSellingPage;
