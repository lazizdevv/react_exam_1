import React from 'react'
import { CountersCard } from '../counters/counters-card'
import { countersData } from '../../data/testimonial-data'

export const TestimonialCard = ({heading1, heading2,img,content,name,type,}) => {
  return (
    <>
        <div className="pb-[100px]">
            <div className="flex justify-center">
                <div className="text-center">
                    <span className='font-tail font-normal text-4xl leading-[49px] text-secondary text-center lg:text-left'>{heading1}</span>
                    <h1 className='font-roboto font-extrabold text-[50px] text-center leading-[59px] text-primary'>{heading2}</h1>
                    <img className='mx-auto mt-12' src={img} alt="human" />
                    <p className='font-sans font-normal text-lg text-secondaryText max-w-[720px]'>{content}</p>
                    <h2 className='font-roboto font-semibold text-2xl text-primary'>{name}</h2>
                    <span className='font-sans font-normal text-base text-secondaryText'>{type}</span>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-4">
            {countersData.map((counters) => (
                <CountersCard key={counters.id} {...counters}/>
            ))}
        </div>

    </>
  )
}
