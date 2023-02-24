import React from 'react'

function HeadingTitle(props) {

  return (
    <div className='bg-gray-100 h-14 flex flex-row justify-between mt-auto border-b-4 border-solid border-darkgray'>
        <h5 class=" text-xl flex flex-start pt-3 ml-10 font-bold dark:text-white">Create New Landlord</h5>
        <p className='mt-4 mr-5 font-bold' onClick={()=>props.handleRemove()}>X</p>
    </div>
  )
}

export default HeadingTitle