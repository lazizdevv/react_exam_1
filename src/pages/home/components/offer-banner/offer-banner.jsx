import React from 'react'

export const OfferBanner = ({img,title,name,titleColor,nameColor}) => {
  return (
    <>
    <div className="max-w-[682px] max-h-[367px]">
    <div className=" w-full h-full flex items-center pl-[54px] bg-cover bg-center md:py-28" style={{backgroundImage: `url(${img})`}}>
        <div className="" >
            <p className={`font-tail font-normal text-4xl leading-[49px] ${titleColor}`}>{title}</p>
            <h1 className={`font-roboto font-extrabold text-[40px] leading-[47px] w-[277px] ${nameColor}`}>{name}</h1>
        </div>
    </div>
    </div>
    </>
  )
}
