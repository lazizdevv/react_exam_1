import React from "react";
import { Link } from "react-router-dom";
// components
import { ProductCard } from "../../components/product-card";
// data
import { productData } from "../../data/product-data";
// images
import shopBannerBg from "../../assets/images/shop-banner-bg.png";

export const Shop = () => {
  return (
    <>
      <section
        className="max-w-[1920px] mx-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${shopBannerBg})` }}
      >
        <div className="container py-[184px]">
          <h1 className="font-roboto font-extrabold text-7xl text-primary leading-[82px] text-center">
            Shop
          </h1>
        </div>
      </section>

      <div className="container mt-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {productData.slice(0, 12).map((product) => (
            <Link to={`/shop-single/${product.id}`} key={product.id}>
              <ProductCard key={product.id} {...product} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
