import { Modal } from '@mui/material'
import { useRecoilState } from 'recoil';
import { modelState, movieState } from '../atom/atom';
import ReactPlayer from 'react-player';
import {FaPause, FaPlay , FaPlus} from "react-icons/fa"
import {HiOutlineVolumeOff, HiThumbUp, HiVolumeUp} from "react-icons/hi"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillCloseCircle } from 'react-icons/ai';
const MOModel = () => {
  const [showModel ,setShowModel] = useRecoilState(modelState)
  const [movie , setMovie] = useRecoilState(movieState)
  const [key , setKey] = useState("")
  const [isPlaying , setIsPlaying] = useState(true)
  const [isMuted , setIsMuted] = useState(true)
  const [genres, setGenres] = useState([]);

  useEffect(()=> {
    const fetchTrailers = async () => {
			const { data } = await axios.get(
				`https://api.themoviedb.org/3/${
					movie?.media_type === "tv" ? "tv" : "movie"
				}/${movie?.id}?api_key=${
					import.meta.env.VITE_API_KEY
				}&language=en-US&append_to_response=videos`
			);
		console.log("data" , data)
    setKey(data?.videos.results[0].key)
		};
    
    console.log("movie" , movie)

    fetchTrailers();
  }, [movie])

 
  const handleClose = () => {
    setShowModel(false);
    setMovie(null)
  };
  return (
     <Modal
       className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-y-scroll
       rounded-md scrollbar-hide"
        open={showModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <div className="relative  pt-[56.24%]">
            <ReactPlayer
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
              url={`https://www.youtube.com/watch?v=${key}`}
              playing={isPlaying}
              muted={isMuted}
            />
            <div className="absolute bottom-10  flex w-full items-center justify-between px-10">
              <div className="flex space-x-2">
                <button className="hover:[#e6e6e6] flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition ">
                  {isPlaying ? (
                    <FaPause onClick={() => setIsPlaying(false)} />
                  ) : (
                    <FaPlay
                      onClick={() => setIsPlaying(true)}
                      className="h-6 w-6 text-black"
                    />
                  )}
                </button>
                <button className="flex h-11 w-11 items-center justify-center  rounded-full border-2 border-[gray] bg-[#2a2a2a]/60  transition  hover:border-white hover:bg-white/10">
                  <FaPlus className="h-7 w-7" />
                </button>
                <button className="flex h-11 w-11 items-center justify-center  rounded-full border-2 border-[gray] bg-[#2a2a2a]/60  transition  hover:border-white hover:bg-white/10">
                  <HiThumbUp className="h-7 w-7" />
                </button>
              </div>
              <div className="">
                {isMuted ? (
                  <HiOutlineVolumeOff
                    onClick={() => setIsMuted(false)}
                    className="h-7 w-7"
                  />
                ) : (
                  <HiVolumeUp
                    onClick={() => setIsMuted(true)}
                    className="h-6 w-6"
                  />
                )}
              </div>
            </div>
            <div className='absolute top-2 right-3 '>
					<AiFillCloseCircle onClick={handleClose} className='w-8  h-8 cursor-pointer' />
				</div>
          </div>

          <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
            <div className="space-y-6 text-lg">
              <div className="flex items-center space-x-2">
                <p className="font-semibold text-green-400">
                  {movie?.vote_average * 10} % Match
                </p>
                <p className="font-light">
                  {movie?.release_date || movie?.first_air_date}
                </p>
                <div className="flex h-4 items-center justify-center rounded  border border-white/40 px-1.5 text-xs">
                  HD
                </div>
              </div>
              <div className="flex flex-col gap-x-10 gap-y-4 font-light">
							<p className="w-5/6">{movie?.overview}</p>
							<div className="flex flex-col space-y-3 text-sm">
								<div>
									<span className="text-gray-400"> Genres :</span>
									{genres.map((genre) => genre.name).join(", ")}
								</div>
							</div>
							<div>
								<span className="text-gray-400">Original Language : </span>
								{movie?.original_language}
							</div>
							<div>
								<span className="text-gray-400">Total votes : </span>
								{movie?.vote_count}
							</div>
						</div>
            </div>
          </div>
        </>
      </Modal>
   
  );
}

export default MOModel