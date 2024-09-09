import React from 'react'
import list from "./list.json"
import Cards from "./components/Cards"
import { Link } from 'react-router-dom'
function Course() {
  return (
    <div className='max-w-screen-2xl container md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'> Here!</span></h1>
        <p className='mt-12'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus reprehenderit rem distinctio suscipit provident tenetur sint ipsa doloribus numquam praesentium eligendi pariatur esse quas libero, vitae laboriosam expedita minus.
      </p>
      <Link to="/">
      <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700'>
        Back
      </button>
      </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {list.map(item=>(
            <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Course
