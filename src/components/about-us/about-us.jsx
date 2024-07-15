import React from 'react'
import { Button } from '../ui/button'
import { Arrow } from '../arrow/arrow'

export const AboutUs = ({heading1,heading2,context,points,icon1:Icon1,icon2:Icon2}) => {
  return (
    <>
    <div className="max-w-[702px] flex flex-col gap-11 pl-4">
        <div className="">
          <span className='font-tail font-normal text-4xl leading-[49px] text-secondary text-center'>{heading1}</span>
          <h1 className='font-roboto font-extrabold text-[50px] leading-[59px] text-primary'>{heading2}</h1>
          <p className='font-sans font-normal text-lg leading-[165%] text-secondaryText max-w-[690px]'>{context}</p>
        </div>
        <div className="flex flex-col gap-8">
            <div className="flex items-center gap-5">
              <div className="w-[100px] h-[100px] flex justify-center items-center border-2 rounded-[20px]"><span className=''><Icon1/></span></div>
              <div className="">
                <h1 className='font-roboto font-extrabold text-2xl leading-7 text-primary'>{points.point1.heading}</h1>
                <p className='font-sans font-normal text-lg leading-[165%] text-secondaryText max-w-[444px]'>{points.point1.context}</p>

              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-[100px] h-[100px] flex justify-center items-center border-2 rounded-[20px]"><span><Icon2/></span></div>
              <div className="">
                <h1 className='font-roboto font-extrabold text-2xl leading-7 text-primary'>{points.point2.heading}</h1>
                <p className='font-sans font-normal text-lg leading-[165%] text-secondaryText max-w-[444px]'>{points.point2.context}</p>
              </div>
            </div>
        </div>
        <Button children={'Shop Now'} variant={'primary'} endIcon={<Arrow/>}/>
    </div>
    </>
  )
}
