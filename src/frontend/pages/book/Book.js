import React from 'react';

function Book(props) {
  return (
    <div className=' mt-24 mb-8 '>
      <div className='text-center my-12'>
        <h1 className=' pb-16 lg:text-6xl sm:text-3xl font-bold text-center block'>
          <span className='text-cyan-400 '>BOOK </span>
          NOW
        </h1>
      </div>
      <form className='flex items-center justify-center border-2 rounded-md border-cyan-400 flex-col xl:w-1/2 lg:w-1/2 xl:m-auto lg:m-auto md:w-4/5 md:m-auto sm:m-auto sm:w-4/5 gap-y-8 lg:px-16 xl:px-16 md:px-8 sm:px-8'>
        <h1 className='text-4xl my-4 font-semibold sm:text-center md:text-center'>Book Appoinment</h1>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border-2 border-cyan-400 rounded-md py-2 pl-9 pr-3 focus:outline-none   sm:text-sm" placeholder="your name" type="text" name="search" required/>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border-2 border-cyan-400 rounded-md py-2 pl-9 pr-3 focus:outline-none   sm:text-sm" placeholder="your number" type="tel" name="search" required />
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border-2 border-cyan-400 rounded-md py-2 pl-9 pr-3 focus:outline-none   sm:text-sm" type="date" name="search" required/>
        <div>
          <button type="submit" className='transition-all  text-cyan-400 border-cyan-400 border-2 xl:px-12 py-4 md:px-8 md:py-4 sm:px-8 sm:py-4   hover:bg-cyan-400 hover:text-white
                rounded-md text-xl lg:mb-6 md:mb-8 
                sm:mb-8 sm:inline-block mt-8 sm:text-center '>Book Now <span className='fas fa-chevron-right pl-4  '>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Book;