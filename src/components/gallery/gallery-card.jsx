import React from 'react'

export const GalleryCard = ({img,title}) => {
  return (
    <>
    <div className=" bg-cover bg-left max-w-[612px] h-[583px] flex justify-center items-center" style={{backgroundImage: `url(${img})`}}>
        <div className="w-[320px] h-24 bg-white rounded-[20px] flex justify-center items-center cursor-pointer hover:bg-accent">
            <h1 className='font-roboto font-medium text-2xl leading-[29px] text-primary'>{title}</h1>
        </div>
    </div>
    </>
  )
}
