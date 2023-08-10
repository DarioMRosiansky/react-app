import React from 'react'
import construction from '../assets/images/underconstruction.jpg'

export const CitiesMain = () => {
  return (
    <>
       <div className='flex flex-row items-center mx-auto min-h-[85vh] w-screen select-none'>
            <img className='w-full md:w-6/12' src={construction}></img>
          </div> 
    </>
  )
}

export default CitiesMain