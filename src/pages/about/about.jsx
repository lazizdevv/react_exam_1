import React from "react";
import { AboutUs } from "../../components/about-us";
import { aboutUsData } from "../../data/about-us-data";
import aboutUsHomeBg from "../../assets/images/about-us-bg.png";
import aboutBanner from "../../assets/images/about-banner.png";
import { teamData } from "../../data/team-data";
import { TeamCard } from "../../components/team-card/team-card";
import { aboutOfferProduct } from "../../data/offer-data";
import { AboutOfferCard } from "../../components/about-offer";
import { ChooseUsContent } from "../../components/choose-us-content/choose-us-content";
import { chooseUsContentData } from "../../data/why-choose-us-data";

export const About = () => {
  return (
    <>
      <section>
        <div
          className="max-w-[1920px] h-[450px] mx-auto"
          style={{ backgroundImage: `url(${aboutBanner})` }}
        >
          <h1></h1>
        </div>
      </section>

      <section className="max-w-[1920px] mx-auto bg-[#f9f8f8]">
        <section
          className="bg-left   bg-no-repeat max-w-[1691px]  py-[136px]  "
          style={{ backgroundImage: `url(${aboutUsHomeBg})` }}
        >
          <div className="flex justify-end ">
            {aboutUsData.map((aboutUs) => (
              <AboutUs
                key={aboutUs.id}
                {...aboutUs}
                icon1={aboutUs.points.point1.icon}
                icon2={aboutUs.points.point2.icon}
                btnChild={"Explor More"}
              />
            ))}
          </div>
        </section>
      </section>

      <section className="bg-custom pt-[100px] pb-[189px]">
        <div className="container">
          <div className="">
          {chooseUsContentData.map((chooseContent) => (
            <ChooseUsContent key={chooseContent.id} {...chooseContent}/>
          ))}
          </div>
        </div>
      </section>

      <div className="container">
        <div className="mb-10">
          <p className="font-tail font-normal text-4xl leading-[49px] text-secondary text-center">
            Team
          </p>
          <h1 className="font-roboto font-extrabold text-[50px] text-center leading-[59px] text-primary mb-4">
            Our Organic Experts
          </h1>
          <p className="font-sans font-normal text-lg leading-[165%] text-secondaryText text-center max-w-[852px] mx-auto">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div className="grid justify-center md:grid-cols-3 gap-7">
          {teamData.map((team) => (
            <TeamCard key={team.id} {...team} />
          ))}
        </div>
      </div>

      <section className="bg-primary py-[188px] mt-[200px]">
        <div className="container">
          <div className="text-center mb-8">
            <p className="font-tail font-normal text-4xl leading-[49px] text-secondary text-center">About Us</p>
            <h1 className="font-roboto font-extrabold text-[50px] text-center leading-[59px] text-white">What We Offer for You</h1>
          </div>
          <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutOfferProduct.map((aboutOffer) => (
              <AboutOfferCard key={aboutOffer.id} {...aboutOffer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
