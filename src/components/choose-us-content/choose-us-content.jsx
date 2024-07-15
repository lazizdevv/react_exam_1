import React from 'react'
import { ChooseUsCard } from '../choose-us-card/choose-us-card'
import { chooseUsCardData } from '../../data/why-choose-us-data'

export const ChooseUsContent = ({heading1,heading2,content,type1,info1,type2,info2,img}) => {
  return (
    <>
    <div className="grid justify-center items-center md:grid-cols-2 my-[90px]">
        <div className="">
            <div className="">
                <p className='font-tail font-normal text-4xl leading-[49px] text-secondary'>{heading1}</p>
                <h1 className='font-roboto font-extrabold text-[50px] leading-[59px] text-primary max-w-[524px]'>{heading2}</h1>
                <p className='font-sans font-normal text-lg leading-[165%] text-secondaryText max-w-[671px] my-9'>{content}</p>
            </div>
            <div className="">
                <div className="flex items-center gap-2 mt-3 px-7 py-7 bg-[#ECECEC] max-w-[339px] rounded-[49px]">
                    <div className="w-3 h-3 rounded-full border-2 border-secondary"></div>
                    <p className='font-roboto  font-medium text-xl text-primary leading-6'>{type1}</p>
                </div>
                <p className='max-w-[444px] mt-3 font-sans font-normal text-lg leading-[165%] text-secondaryText'>{info1}</p>
            </div>

            <div className="">
                <div className="flex items-center gap-2 mt-3 px-7 py-7 bg-[#ECECEC] max-w-[339px] rounded-[49px]">
                    <div className="w-3 h-3 rounded-full border-2 border-secondary"></div>
                    <p className='font-roboto  font-medium text-xl text-primary leading-6'>{type2}</p>
                </div>
                <p className='max-w-[444px] mt-3 font-sans font-normal text-lg leading-[165%] text-secondaryText'>{info2}</p>
            </div>
        </div>
        <div className="">
            <img className='rounded-[30px]' src={img} alt="" />
        </div>
    </div>

    <div className="grid justify-center grid-cols-1 md:grid-cols-4 gap-7">
        {chooseUsCardData.map((chooseCard) => (
            <ChooseUsCard key={chooseCard.id} {...chooseCard} />
        ))}
    </div>
    </>
  )
}
