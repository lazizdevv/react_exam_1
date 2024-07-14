import React from 'react'
import newsLatterBg from '../../assets/images/news-latter-bg.png'
import { Button } from '../ui/button'

export const NewsLatter = () => {
  return (
    <>
        <div className="w-full py-[105px] px-[71px] bg-left bg-no-repeat rounded-[33px]" style={{backgroundImage: `url(${newsLatterBg})`}}>
            <div className="flex justify-between items-center">
                <h1 className='font-roboto font-extrabold text-5xl leading-[59px] text-white max-w-[357px]'>Subscribe to our Newsletter</h1>
                <div className="flex gap-2">
                    <input className='w-[349px] rounded-2xl text-left py-7 px-6 font-roboto font-normal italic text-lg text-[#ababab] leading-5 outline-none focus:outline-4 focus:outline-primary' type="text" placeholder='Your Email Address'/>
                    <Button children={'Subscribe'} variant={'primary'}className="justify-center" />
                </div>
            </div>
        </div>
    </>
  )
}
