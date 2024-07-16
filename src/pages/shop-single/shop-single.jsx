import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// components
import { ProductCard } from "../../components/product-card";
import { Button } from "../../components/ui/button";
import { Arrow } from "../../components/arrow";
// data
import { productData } from "../../data/product-data";
// images
import shopSingleBg from "../../assets/images/shop-single-banner-bg.png"

export const ShopSingle = () => {
  const obj = useParams();
  const data = productData.find((item) => item.id == obj.id);

  useEffect(() => {
    const element = document.getElementById('single');
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  }, [obj]);

  return (
    <>
      <section
        className="max-w-[1920px] mx-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${shopSingleBg})` }}
      >
        <div className="container py-[184px]">
          <h1 className="font-roboto font-extrabold text-7xl text-primary leading-[82px] text-center">
            Shop Single
          </h1>
        </div>
      </section>
      <div id="single" className="container mt-20">
        <div className="grid justify-center lg:grid-cols-2">
          <div className="w-fit relative">
            <img className="w-[600px] h-[600px]" src={data?.img} alt="" />
            <p className="absolute top-14 left-10 bg-primary text-white py-1 px-3 rounded-lg font-sans font-semibold text-base text-center">
              {data?.type}
            </p>
          </div>
          <div className="py-[125px]">
            <p className="font-roboto font-semibold text-[40px] text-primary leading-[47px]">
              {data?.name}
            </p>
            <div className="flex gap-2 items-center">
              <del className="font-sans font-semibold text-base text-[#b8b8b8] ">
                {data?.oldPrice}
              </del>
              <p className="font-sans font-bold text-lg text-primary">
                {data?.price}
              </p>
            </div>

            <p className="font-sans font-normal text-lg leading-[165%] text-secondaryText max-w-[658px] text-left my-6">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>

            <div className="flex items-center flex-wrap justify-center lg:justify-start gap-5 mt-9">
              <div className="">
                <p className="font-roboto font-bold text-xl text-primary">
                  Quality:
                </p>
              </div>
              <div className="">
                <input
                  className="w-[134px] h-[80px] rounded-2xl border-2 border-primary text-center font-roboto text-xl font-bold text-primary"
                  type="number"
                  placeholder="1"
                />
              </div>
              <div className="">
                <Button
                  children={"Add To Cart"}
                  variant={"primary"}
                  endIcon={<Arrow />}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 my-[70px]">
          <div className="flex gap-5 justify-center flex-wrap">
            <Button
              className={"w-[363px] justify-center"}
              children={"Product Description"}
              variant={"primary"}
              endIcon={<Arrow />}
            />
            <Button
              className={"w-[309px] justify-center"}
              children={"Additional Info"}
              variant={"info"}
              endIcon={<Arrow />}
            />
          </div>

          <div className="mx-auto max-w-[1137px] text-center">
            <p className="font-sans font-normal text-lg leading-[165%] text-secondaryText">
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health,
              ecology, and care. We aim to give our customers a healthy
              chemical-free meal for perfect nutrition. It offers about 8–10%
              carbs. Simple sugars — such as glucose and fructose — make up 70%
              and 80% of the carbs in raw.
            </p>
          </div>
        </div>

        <div className="pt-[70px]">
          <div className="text-center mb-10">
            <h1 className="font-roboto font-extrabold text-[50px] text-primary leading-[59px]">
              Related Products
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {productData.slice(0, 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
