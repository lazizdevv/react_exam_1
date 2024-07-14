import React from 'react'
import {InstagramIcon } from '../../assets/svg/InstagramIcon'
import {FacebookIcon } from '../../assets/svg/FacebookIcon'
import { TwitterIcon } from '../../assets/svg/TwitterIcon'
import {PintreastIcon } from '../../assets/svg/PintreastIcon'
export const SocialCard = () => {
  return (
    <>
    <div className="">
        <div className="flex gap-4 mt-10">
            <div className="flex justify-center items-center bg-spacial w-[60px] h-[60px] rounded-full cursor-pointer hover:scale-110"><InstagramIcon/> </div>
            <div className="flex justify-center items-center bg-spacial w-[60px] h-[60px] rounded-full cursor-pointer hover:scale-110"><FacebookIcon/> </div>
            <div className="flex justify-center items-center bg-spacial w-[60px] h-[60px] rounded-full cursor-pointer hover:scale-110"><TwitterIcon/> </div>
            <div className="flex justify-center items-center bg-spacial w-[60px] h-[60px] rounded-full cursor-pointer hover:scale-110"><PintreastIcon/> </div>
        </div>
    </div>
    </>
  )
}
