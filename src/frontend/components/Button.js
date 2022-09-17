import React from 'react';

const Button = (props) => (
  <button className='transition-all  
  text-cyan-400 border-cyan-400 border-2 px-12 py-4    hover:bg-cyan-400 hover:text-white
                rounded-md text-xl lg:mb-6 md:mb-8 
                sm:mb-8 sm:inline-block mt-8 sm:text-center '>{props.text || "Learn More"}

    <span className={`${props.icon} pl-4`} />
  </button>
)

export default Button;