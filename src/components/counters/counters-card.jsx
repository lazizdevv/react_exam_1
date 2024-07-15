import React from 'react'

export const CountersCard = ({num,name}) => {
  return (
    <>
    <div className="flex justify-center border-t-2 pt-[100px]">
        <div className="w-[211px] h-[211px] rounded-full bg-[#f1f1f1] flex justify-center items-center cursor-pointer hover:scale-110">
            <div className="w-[146px] text-center">
            <h1 className='font-roboto font-extrabold text-[50px] text-primary leading-[59px]'>{num}</h1>
            <p className='font-sans font-semibold text-lg text-primary'>{name}</p>
            </div>
        </div>
    </div>
    </>
  )
}
