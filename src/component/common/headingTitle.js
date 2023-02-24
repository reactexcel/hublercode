import React from 'react'

function HeadingTitle(props) {

  return (
    <div className='fixed top-0 z-80 w-full  bg-gray-100 h-14 flex flex-row justify-between border-b-4 border-solid border-darkgray'>
        <h5 class=" text-xl flex flex-start pt-3 ml-10 font-bold dark:text-white">Create New Landlord</h5>
        <p className='mt-4 mr-5 font-bold' onClick={()=>props.handleRemove()}>X</p>
    </div>
  )
}

export default HeadingTitle