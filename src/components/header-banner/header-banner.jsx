import React from 'react'
import headerBg from '../../assets/images/header-bg.png'
const bgPosition = '75% center';
import bg from '../../assets/images/Background.png' 
import { Button } from '../ui/button';
export const HeaderBanner = () => {
  return (
    <>
    <div className=" z-[1] relative h-screen  max-h-[898px] bg-cover bg-no-repeat w-full  max-w-[1920px] m-auto flex flex-col justify-center" style={{ backgroundImage: `url(${headerBg})`, backgroundPosition: bgPosition }}>
      
    <div className="container  flex flex-col  border-8  w-full h-[405px]">
        <h1 className="text-5xl font-bold text-green-700 mb-4">100% Natural Food</h1>
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Choose the best healthier way</h2>
        <Button children={"Explore Now"} variant="primary" />
      </div>
      <img className='z-[-1] absolute top-0' src={bg} alt="" />
  </div>
    
    </>
  )
}
