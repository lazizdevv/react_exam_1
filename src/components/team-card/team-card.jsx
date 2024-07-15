import React from 'react'

export const TeamCard = ({name,job,img}) => {
  return (
    <>
    <div className="rounded-b-[30px] max-w-[450px] bg-[#F9F8F8] hover:bg-white hover:scale-105 cursor-pointer transition-all hover:shadow-custom hover:shadow-accent">
        <div className="">
            <img className='rounded-t-[30px]' src={img} alt="team" />
        </div>
        <div className=" py-9 px-7">
            <h1 className='font-roboto font-extrabold text-2xl leading-7 text-primary'>{name}</h1>
            <p className='font-tail font-normal text-xl leading-7 text-secondary'>{job}</p>
        </div>
    </div>
    </>
  )
}
