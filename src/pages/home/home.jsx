import React from "react";
import { OfferBanner } from "./components/offer-banner";
import { offerBanner } from "../../data/offer-data";
import { AboutUs } from "../../components/about-us";
import { productData } from "../../data/product-data";
import { ProductCard } from "../../components/product-card/product-card";
import { Button } from "../../components/ui/button";
import { Arrow } from "../../components/arrow/arrow";
import { galleryData } from "../../data/gallery";
import { GalleryCard } from "../../components/gallery";
import { HeaderBanner } from "../../components/header-banner/header-banner";
import { blogData } from "../../data/blog-data";
import { BlogCard } from "../../components/blog/blog-card";
import { testimonialData } from "../../data/testimonial-data";
import { TestimonialCard } from "../../components/testimonial/testimonial-card";
import testimonialbg from '../../assets/images/testimonial-bg.png'
import whoWeAreBg from '../../assets/images/who-we-are-bg.png'
import { WhoWeAreCard } from "../../components/who-we";
import { aboutUsHomeData } from "../../data/about-us-data";
import aboutUsHomeBg from '../../assets/images/about-us-home-bg.png'
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <HeaderBanner/>
      <div className="container mb-52">
        <div className="grid grid-cols-1 lg:grid-cols-2 my-[145px]">
          {offerBanner.map((offer) => (
            <OfferBanner key={offer.id} {...offer} />
          ))}
        </div>

        <section className="bg-[-90px]  bg-no-repeat max-w-[1920px] mx-auto py-[186px] mb-[176px] bg-[#f9f8f8]" style={{backgroundImage: `url(${aboutUsHomeBg})`}}>
          <div className="flex justify-end ">
          {aboutUsHomeData.map((aboutUs) => (
            <AboutUs key={aboutUs.id} {...aboutUs} icon1={aboutUs.points.point1.icon} icon2={aboutUs.points.point2.icon} btnChild={'Shop Now'} />
          ))}
          </div>
        </section>

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
            {productData.slice(0,8).map((product) => (
              <Link to={`/shop-single/${product.id}`} key={product.id}>

              <ProductCard key={product.id} {...product} />
              </Link>
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

      <section className="bg-center bg-no-repeat py-[164px] max-w-[1920px] mx-auto" style={{backgroundImage: `url(${testimonialbg})`}}>
        <div className="container">
          <div className="">
            {testimonialData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial}/>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="container py-[200px]">
          <div className="flex items-center justify-between flex-wrap gap-5 mb-12">
            <div className="">
              <p className="font-tail font-normal text-4xl leading-[49px] text-secondary text-center lg:text-left">
                Offer
              </p>
              <h1 className="font-roboto font-extrabold text-[50px] text-center leading-[59px] text-white">
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
            {productData.slice(12,16).map((offerProduct) => (
              <Link to={`/shop-single/${offerProduct.id}`} key={offerProduct.id}>
              
              <ProductCard key={offerProduct.id} {...offerProduct} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] bg-left bg-no-repeat mx-auto py-[100px]" style={{backgroundImage: `url(${whoWeAreBg})`}}>
            <div className="flex justify-end">
                <WhoWeAreCard/>
            </div>
      </section>

      <div className="mx-auto max-w-[1920px]">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 py-[187px]">
            {galleryData.map(gallery => (
              <GalleryCard key={gallery.id} {...gallery} />
            ))}
        </div>
      </div>

      <div className="container">
      <div className="flex items-end justify-between flex-wrap gap-5 mb-11">
            <div className="max-w-[702px]">
              <p className="font-tail font-normal text-4xl leading-[49px] text-secondary text-center lg:text-left">
                Offer
              </p>
              <h1 className="font-roboto font-extrabold text-[50px] text-left leading-[59px] text-primary">
              Discover weekly content about organic food, & more
              </h1>
            </div>

            <div className="flex justify-center w-full lg:w-fit">
              <Button
                children={"More News"}
                variant={"primary"}
                className={"bg-white text-primary border-2 border-primary"}
                endIcon={<Arrow />}
              />
            </div>
          </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 ">
              {blogData.map(blog => (
                <BlogCard key={blog.id} {...blog} />
              ))}
            </div>
      </div>
    </>
  );
};
