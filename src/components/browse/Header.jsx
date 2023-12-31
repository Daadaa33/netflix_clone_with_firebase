import React, { useEffect, useState } from 'react'
import { AiFillBell ,AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [isScroll ,setIsIScroll] = useState(false)

  useEffect(() => {
   
    const handalScroll =() =>{
       if (window.scrollY > 0) {
         setIsIScroll(true);
       } else {
         setIsIScroll(false);
       }
    }
    window.addEventListener("scroll" , handalScroll);
    return() =>  window.removeEventListener("scroll",handalScroll);

  },[])
  return (
    <header className={`${isScroll && "bg-[#141414]"} duration-500 fixed top-0  z-50 flex h-[50px] w-full justify-between  p-4 shadow lg:px-10 lg:py-6`}>
      <div className="flex items-center space-x-2 md:space-x-10 ">
        <div>
          <Link to="/">
            <div>
              <svg
                className="h-10 w-28"
                xmlns="http://www.w3.org/2000/svg"
                width="2500"
                height="677"
                viewBox="0.238 0.034 919.406 248.488"
              >
                <path
                  fill="#e50914"
                  d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89L782.71.034h41.937l25.362 65.22L877.194.034h42.442zM749.596.034h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177V.035h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zM532.417 88.305v38.822h-53.06v88.263h-38.3V.034H549.77v38.822h-70.405v49.45h53.06zM375.82 38.856v178.605c-12.946 0-26.14 0-38.83.514V38.856h-40.122V.034H416.19v38.822zM254.94 129.19c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548V.034h107.405v38.822H203.17v52.29c15.017 0 38.052-.778 51.768-.778v38.83zM39.831 107.447V243.08c-13.965 1.557-26.398 3.371-39.593 5.442V.034h37.017L87.724 141.11V.034h38.83V232.47c-13.717 2.336-27.698 3.114-42.45 5.177z"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="flex  hidden text-sm  font-medium  md:flex">
          <Link className="link-app">Home</Link>
          <Link className="link-app">Tv Shows</Link>
          <Link className="link-app">Movies</Link>
          <Link className="link-app">Latest</Link>
          <Link className="link-app">My List</Link>
        </div>
      </div>

      <div className="flex items-center space-x-4 text-sm ">
        <AiOutlineSearch className="h-6 w-6 cursor-pointer" />
        <AiFillBell className="h-6 w-6 cursor-pointer" />
        <div className="relative">
          <AiOutlineMenu
            onClick={() => setOpen(!open)}
            className={`h-6 w-6 cursor-pointer md:hidden`}
          />
        </div>
        <img
          src="./images/logo/profile.png"
          className="hidden w-[40px] cursor-pointer rounded md:flex"
          alt=""
        />
      </div>
      <div
        className={`rounded-g translate-x-1 rounded-bl-lg rounded-tl-sm shadow-sm duration-100 md:hidden ${
          open
            ? "right-0 top-[49px] h-screen w-[14rem] bg-[#0c0a0aec]"
            : "hidden"
        } absolute`}
      >
        <div className="flex   flex-col space-y-10 py-4  text-center text-sm  font-medium">
          <Link className="link-app">Home</Link>
          <Link className="link-app">Tv Shows</Link>
          <Link className="link-app">Movies</Link>
          <Link className="link-app">Latest</Link>
          <Link className="link-app">My List</Link>

          <div className="flex items-center space-x-2 px-4 py-6">
            <img
              src="./images/logo/profile.png"
              className=" p w-[40px] cursor-pointer rounded "
              alt="profile"
            />
            <h1 className="text-sm font-normal text-gray-500">
              Abdikadir qulle
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header