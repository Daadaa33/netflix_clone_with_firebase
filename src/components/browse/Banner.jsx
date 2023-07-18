import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../../request'
import BASE_IMAGE_URL from '../../constants'
import { AiFillPlayCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { useRecoilState } from 'recoil';
import { modelState, movieState } from '../../atom/atom';


const Banner = () => {
    const[tranding,setTranding] = useState([])
    const [showModel ,setShowModel] = useRecoilState(modelState)
    const [movie , setMovie] = useRecoilState(movieState)

    
    const url = requests.fetchActionMovies
    useEffect(() => {
      const fetchMovies = async () => {
        const { data } = await axios.get(url);
        setTranding(
          data.results[Math.floor(Math.random() * data.results.length)]
        );
      };
      fetchMovies();
    }, [url]);

    
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh]  lg:justify-end lg:pb-2">
      <div className="absolute left-0 top-0 -z-10 h-[95vh] w-screen  ">
        <img
          src={`${BASE_IMAGE_URL}${
            tranding.backdrop_path || tranding.poster_path
          }`}
          alt=""
          className="h-screen w-screen object-cover"
        />
      </div>
      <div className=""></div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl ">
        {tranding.title || tranding.name || tranding.original_name}
      </h1>
      <p className="mx-w-xs text-sm md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl truncate">
        {tranding.overview}
      </p>

      <div className="items flex space-x-2 ">
        <button className="flex items-center gap-2 rounded bg-white px-5  py-1  text-black transition hover:bg-gray-200 md:px-7 md:py-2 md:text-lg">
          {
            <AiFillPlayCircle
              onClick={() => {
                setShowModel(true);
                 setMovie(tranding);
              }}
              className="h-6 w-6"
            />
          }{" "}
          Play
        </button>
        <button className="flex items-center gap-2 rounded bg-[#5a7272] px-5 py-1 hover:bg-[#718a8a] md:px-7 md:py-2 md:text-lg">
          {<AiOutlineInfoCircle className="h-6 w-6" />} info
        </button>
      </div>
    </div>
  );
}

export default Banner