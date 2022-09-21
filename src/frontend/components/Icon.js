const Icon = (props) => (
  
  <a href={props.href}>
    <button className='transition-all  text-cyan-400 border-cyan-400 border-2 px-4 py-4    hover:bg-cyan-400 hover:text-white
  rounded-md text-xl lg:mb-6 md:mb-8 
  sm:mb-8 sm:inline-block
   '>
      {props.icon}
    </button>
  </a>
)
export default Icon