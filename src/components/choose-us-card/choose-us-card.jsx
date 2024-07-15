import React from 'react'

export const ChooseUsCard = ({icon:Icon,name,title}) => {
  return (
    <>
    <div className="w-64 flex flex-col gap-3 items-center justify-center py-12 rounded-[30px] bg-white hover:scale-105 transition-all cursor-pointer">
        <div className="w-24 h-24 rounded-[18px] bg-custom flex justify-center items-center cursor-pointer">
            <Icon/>
        </div>
        <h1 className='font-roboto font-extrabold text-2xl text-primary leading-7'>{name}</h1>
        <p className='text-center font-sans font-normal text-lg leading-[165%] text-secondaryText max-w-[184px]'>{title}</p>
    </div>
    </>
  )
}
