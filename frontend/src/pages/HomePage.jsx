import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Hero from '../components/Route/Hero/Hero';
import Categories from '../components/Route/Categories/Categories';
import BestDeals from '../components/Route/BestDeals/BestDeals';
import Sponsored from '../components/Route/Sponsored';
import Footer from '../components/Layout/Footer';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;
