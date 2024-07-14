import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../assets/svg/Logo'
import { SocialCard } from '../../components/social-card'

export const Footer = () => {
  return (
    <>
    <div className="container mt-[50px]">
      <div className="flex justify-between gap-[50px] pb-[100px] flex-wrap">
        <div className="flex flex-col gap-8 text-end w-[285px]">
          <div className="font-roboto font-bold text-3xl text-primary">
            <h1>Contact Us</h1></div>                                                                     
          <div className="flex flex-col gap-1">
            <h1 className='font-sans font-bold text-lg text-primary' >Email</h1>
            <a className='font-sans font-normal text-base text-[#525C60]' href="#">needhelp@Organia.com</a>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className='font-sans font-bold text-lg text-primary' >Phone</h1>
            <a className='font-sans font-normal text-base text-[#525C60]' href="#">666 888 888</a>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className='font-sans font-bold text-lg text-primary' >Address</h1>
            <a className='font-sans font-normal text-base text-[#525C60]' href="#">88 road, borklyn street, USA</a>
          </div>
        </div>

        <div className="border-x-2 flex flex-col items-center px-10 gap-6">
            <div className="">
            <Link to={"/"}>
              <div className="flex items-center gap-2 ">
                <Logo />
                <h1 className="font-roboto font-bold text-primary text-[38px] text-left">Organick</h1>
              </div>
            </Link>
            </div>

            <div className="font-sans font-normal text-lg text-center leading-[165.4%] max-w-[543px]">
              <p>Simply dummy text of the printing and typesetting industry.
              Lorem Ipsum simply dummy text of the printing </p>
            </div>

            <div className="">
                <SocialCard />
            </div>
        </div>

        <div className="w-[285px] flex flex-col gap-6">
          <div className="font-roboto font-bold text-3xl text-primary">
            <h1>Utility Pages</h1>
          </div>
          
          <div className="flex flex-col gap-6 font-sans font-normal text-lg">
            <a href="#">Style Guide</a>
            <a href="#">404 Not Found</a>
            <a href="#">Password Protected</a>
            <a href="#">Licences</a>
            <a href="#">Changelog</a>
          </div>
        </div>
      </div>
      <div className="border-t-2 py-4 text-center font-sans font-normal text-lg text-[#525C60]">
        <h1>Copyright © <span className='font-bold'>Organick</span> | Designed by <span className='font-bold'>VictorFlow</span> Templates - Powered by <span className='font-bold'>Webflow</span></h1>
      </div>
    </div>
    </>
  )
}
