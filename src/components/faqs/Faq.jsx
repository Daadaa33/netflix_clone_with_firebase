import { useState } from 'react'
import {AiOutlineClose, AiOutlinePlus,AiOutlineRight} from 'react-icons/ai'

const Faq = ({id,description,title}) => {

    const [open, setopen] = useState(false)
    return (
      <div className="mx-auto flex-col px-2 py-[2px] sm:max-w-screen-md ">
        <div className="my-[2px] flex items-center justify-between bg-[#303030] px-[20px]  py-4 text-lg sm:py-5  sm:text-2xl">
          <h1>{title}</h1>
          {open ? (
            <AiOutlineClose
              className="h-8 w-8 cursor-pointer"
              onClick={() => setopen(false)}
            />
          ) : (
            <AiOutlinePlus
              className="h-8 w-8 cursor-pointer"
              onClick={() => setopen(true)}
            />
          )}
        </div>

        <div className={`bg-[#303030] ${open ? "block" : "hidden"}`}>
          <p className=" px-2 py-4 text-lg sm:py-6 sm:text-2xl ">{description}</p>
        </div>

       
      </div>
    );
}

export default Faq