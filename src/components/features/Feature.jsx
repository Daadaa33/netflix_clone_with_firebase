import React from 'react'

function Feature({id ,title, image ,alt, video, description}) {
  return (
    <div
      className={`relative mx-auto flex max-w-screen-lg flex-col items-center justify-center ${
        id % 2 !== 0 ? "sm:flex-row" : "sm:flex-row-reverse"
      }  `}
    >
      <div className="mt-2 flex-1 pl-2 space-y-4 tracking-wider">
        <h1 className="mx-w-lg text-center text-4xl font-bold sm:text-5xl  ">
          {title}
        </h1>
        <h2 className="text-centr text-2xl tracking-normal ">{description}</h2>
      </div>
      <div className="relative flex-1 ">
        <img className="z-10 " alt="f" src={`./images/${image}`} />
        <video
          className="sm:left  16 absolute top-1  -z-10 sm:top-20 sm:w-96 "
          loop
          muted
          type="video/m4v"
          autoPlay="autoplay"
          src={`./images/${video}`}
        />
      </div>
    </div>
  );
}

export default Feature