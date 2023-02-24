import React from 'react';
import download from '../icon/download.svg';
import pdf from "./assest/PDF.png"


function PdfDocument() {
  return (
    <div className='mt-5 ml-10'>
    <div className='flex flex-row justify-between w-60 bg-gray-200 pt-5'>
        <div className='pl-2'>
        <img className='w-15 h-20' src={pdf} />
        </div>
        <div className='flex flex-col flex-start pr-4'>
            <p className='font-medium '>GST certificate.pdf</p>
            <p className='flex flex-start text-xs'>GST certificate</p>
            <div className='flex flex-row'>
           <p className="text-sm     flex   pt-3 flex-start font-small dark:text-white">9MB</p>
           <img className="text-sm   h-14 flex  ml-10 pt-3 flex-start font-small dark:text-white" src={download}></img>
            </div>
        </div>
    </div>
    </div>

  )
}

export default PdfDocument