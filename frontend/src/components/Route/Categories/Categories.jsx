import React from 'react';
import { useNavigate } from 'react-router-dom';
import { brandingData, categoriesData } from '../../../static/data';
import styles from '../../../styles/styles';

const Categories = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${styles.section}`}>
        <div
          className={`branding my-12 flex flex-col sm:flex-row justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((item, index) => (
              <div
                className={`flex items-start ml-3 mb-5 sm:mb-0 ${
                  index !== 0 ? 'mt-4 sm:mt-0' : ''
                }`}
                key={item.id}
              >
                <div className="flex items-center">{item.icon}</div>
                <div className="ml-3">
                  <h3 className="font-bold text-sm md:text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div className={`${styles.heading}`}>
          <h1 className="text-center">Kategorije proizvoda</h1>
        </div>
        <div className="grid grid-cols-2 gap-[10px] md:grid-cols-4 md:gap-[20px] lg:grid-cols-5 lg:gap-[30px] xl:grid-cols-6 xl:gap-[40px]">
          {categoriesData &&
            categoriesData.map((item) => {
              const handleSubmit = () => {
                navigate(`/products?category=${item.title}`);
              };
              return (
                <div
                  className="w-full h-[170px] flex flex-col items-center justify-center cursor-pointer relative"
                  key={item.id}
                  onClick={handleSubmit}
                >
                  <div className="flex-grow flex flex-col justify-center items-center">
                    <h5
                      className={`text-[18px] text-center font-bold leading-[1.1]`}
                    >
                      {item.title}
                    </h5>
                  </div>
                  <div className="border-b-2 border-gray-500 absolute bottom-0 w-full"></div>
                  <div className="flex-grow-0">
                    <img
                      src={item.image_Url}
                      className="w-[120px] h-[120px] object-cover"
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
