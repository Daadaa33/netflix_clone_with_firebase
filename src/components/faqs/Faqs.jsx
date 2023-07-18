import React from 'react'
import data from '../../content/faq.json'
import Faq from './Faq'
import {AiOutlineRight} from 'react-icons/ai'


const Faqs = () => {
  return (
    <div>
      <h1></h1>
      {data.map((data) => (
        <Faq key={data.id} {...data} />
      ))}

      <div className="mx-auto mt-5 flex max-w-2xl flex-col ">
        <div className="">
          <p className="text-md my-[2px] text-center font-medium">
            Ready to watch ? enter your email address
          </p>
        </div>

        <div className="flex m-4 flex-col space-y-6  sm:flex-row sm:space-y-0 ">
          <input className='w-full min-w-[400px] bg-white px-24 py-4 text-black  rounded-tl-sm rounded-bl-sm outline-none sm:p-4' type="text" placeholder="Enter your Email" />
          <button className='bg-[#e50914] text-white w-full py-2 rounded-tr-sm rounded-br-sm text-lg px-2 sm:py-0 sm:px-8 flex  justify-center items-center'>Get Started <AiOutlineRight className='w-8 h-8'/></button>
        </div>
      </div>
    </div>
  );
}

export default Faqs