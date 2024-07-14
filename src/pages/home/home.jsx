import React from "react";
import { OfferBanner } from "./components/offer-banner";
import { offerProduct, offerBanner } from "../../data/offer-data";
import { AboutUs } from "../../components/about-us";
import { productData } from "../../data/product-data";
import { ProductCard } from "../../components/product-card/product-card";
import { Button } from "../../components/ui/button";
import { Arrow } from "../../components/arrow/arrow";
import { galleryData } from "../../data/gallery";
import { GalleryCard } from "../../components/gallery";

export const Home = () => {
  return (
    <>
      <div className="container mb-52">
        <div className="grid grid-cols-1 lg:grid-cols-2 my-[145px]">
          {offerBanner.map((offer) => (
            <OfferBanner key={offer.id} {...offer} />
          ))}
        </div>

        <div className="">
          <AboutUs />
        </div>

        <div className="">
          <div className="mb-10">
            <p className="font-tail font-normal text-4xl leading-[49px] text-secondary text-center">
              Categories
            </p>
            <h1 className="font-roboto font-extrabold text-[50px] text-center leading-[59px] text-primary">
              Our Products
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {productData.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="flex justify-center mt-32 mb-52">
            <Button
              children={"Load More"}
              variant={"primary"}
              endIcon={<Arrow />}
            />
          </div>
        </div>
      </div>

      <section className="bg-primary">
        <div className="container py-[200px]">
          <div className="flex items-center justify-between flex-wrap gap-5 mb-12">
            <div className="">
              <p className="font-tail font-normal text-4xl leading-[49px] text-secondary text-center lg:text-left">
                Offer
              </p>
              <h1 className="font-roboto font-extrabold text-[50px] text-center leading-[59px] text-primary">
                We Offer Organic For You
              </h1>
            </div>

            <div className="flex justify-center w-full lg:w-fit">
              <Button
                children={"View All Product"}
                variant={"gold"}
                className={"w-[256px]"}
                endIcon={<Arrow />}
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {offerProduct.map((offerProduct) => (
              <ProductCard key={offerProduct.id} {...offerProduct} />
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1920px]">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 py-[187px]">
            {galleryData.map(gallery => (
              <GalleryCard key={gallery.id} {...gallery} />
            ))}
        </div>
      </div>
    </>
  );
};
