import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {BsChevronLeft ,BsChevronRight} from "react-icons/bs"
import BASE_IMAGE_URL from '../../constants';
import requests from '../../request';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { modelState, movieState } from '../../atom/atom';



const Row = ({title , url}) => {

    const[movies,setMovies] = useState([])
    const [isIScroll,setIsIScroll] = useState(false)
    const [showModel ,setShowModel] = useRecoilState(modelState)
    const [movie , setMovie] = useRecoilState(movieState)

    const rowRef = useRef(null)


    const urlx = requests.fetchActionMovies;
    useEffect(() => {
      const fetchMovies = async () => {
        const { data } = await axios.get(urlx);
        setMovies(data.results);
      };
      fetchMovies();
    }, []);

    const handalScroll =(direction) =>{
        setIsIScroll(true);
        if(rowRef.current) {
           const {clientWidth , scrollLeft} = rowRef.current
           const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
           rowRef.current.scrollTo({left : scrollTo, behavior : "smooth"})
        }
    }
  return (
    <div className="h-40">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="group relative md:ml-2">
        <BsChevronLeft 
        onClick={()=> handalScroll("left")}
        className={` ${!isIScroll && "hidden"} absolute bottom-0 top-0 left-2 z-50 m-auto w-9 h-9 cursor-pointer opacity-0 hover:scale-125 group-hover:opacity-100`}/>
        <div 
        ref={rowRef}
        className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
          {movies &&
            movies.map((movies) => (
              <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
                <img
                 onClick={() => {
                setShowModel(true);
                 setMovie(movies);
              }}
                  className="rounded-sm object-cover "
                  src={`${BASE_IMAGE_URL}${  movies.backdrop_path || movies.poster_path  }`}
                  alt=""
                />
              </div>
            ))}
        </div>
        <BsChevronRight
        onClick={()=> handalScroll("right")}
        className="absolute bottom-0 top-0 right-2 pr-2 z-50 m-auto w-9 h-9 cursor-pointer opacity-0 hover:scale-125 group-hover:opacity-100"/>
      </div>
    </div>
  );
}

export default Row