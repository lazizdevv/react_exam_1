import React from "react";
import shopBannerBg from "../../assets/images/shop-banner-bg.png";
import { productData } from "../../data/product-data";
import { ProductCard } from "../../components/product-card/product-card";
import { Link } from "react-router-dom";

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
