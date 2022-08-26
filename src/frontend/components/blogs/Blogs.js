import React, { useEffect } from 'react';
import SingleBlog from './SingleBlog';
import { fetchAllBlogs } from '../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'
function Blogs(props) {
  const dispatch = useDispatch()
  const { blogs } = useSelector(state => state.serviceState)
  useEffect(() => {
    dispatch(fetchAllBlogs())
  }, [])
  console.log(blogs);
  return (
    <div className='xl:px-12 xl:max-w-7xl m-auto lg:px-12 md:px-10 sm:px-2 mb-24'>
      <h1 className='mt-32 pb-16 lg:text-4xl sm:text-3xl font-bold text-center '>
        OUR <span className='text-cyan-400 '> BLOGS </span>
      </h1>
      <div className='   grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
        {blogs.map((blog, index) => (
          <SingleBlog key={index}
            blogger={blog.blogger}
            description={blog.description}
            title={blog.title}
            date={blog.date}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Blogs;