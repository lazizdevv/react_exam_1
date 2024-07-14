import React from 'react'
import './button.css'
export const Button = ({
    children,
    className,
    id,
    type,
    variant,
    startIcon,
    endIcon,

}) => {
  return (
    <div className="">
      <button id={id} type={type} className={className + " btn " + variant}>
        {startIcon ? <span>{startIcon}</span> : ""} 
        <span>{children}</span>
        {endIcon ? <span>{endIcon}</span> : ""} 
        </button>
    </div>
  )
}
