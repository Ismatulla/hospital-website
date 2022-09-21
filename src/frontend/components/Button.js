import React from 'react';

const Button = (props) => (
  <button
    type={props.type}
    onClick={props.onClick}
    className=" transition-all  
  text-cyan-400 border-cyan-400 border-2 px-12 py-4    hover:bg-cyan-400 hover:text-white
                rounded-md text-xl lg:mb-6 md:mb-8 
                sm:mb-8 sm:inline-block mt-8 sm:text-center"> {props.text || "Learn More"}

    < span className={`${props.icon} pl-4 `} />
  </button >
)

export const DangerButton = (props) => (
  <button
    type={props.type}
    onClick={props.onClick}
    className="transition-all text-red-500 border-red-500 border-2 px-12 py-4 hover:bg-red-500 hover:text-white rounded-md text-xl lg:mb-6 md:mb-8 sm:mb-8 sm:inline-block mt-8 sm:text-center"
  >{props.text || "Delete it "}
    <span className={`${props.icon} pl-4`} />
  </button>
)


export default Button;