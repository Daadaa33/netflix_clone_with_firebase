import React from 'react'
import Header from '../components/browse/Header'
import Banner from '../components/browse/Banner'
import Row from '../components/browse/Row';
import requests from '../request';
import MOModel from '../components/MOModel';
const Browse = () => {
  return (
    <div className="relative h-screen w-screen bg-gradient-to-b lg:h-[140vh]">
      <Header />
      <main className="relative space-y-24 pl-4 lg:pl-10">
        <Banner />
        <Row title="Tranding Now" url={requests.fetchTrending} />
        <Row title="Actions Movies" url={requests.fetchActionMovies} />
        <Row title="Top Rated" url={requests.fetchTopRated} />
        <Row title="Romance Moviews" url={requests.fetchRomanceMovies} />
        <Row title="Horror Movies" url={requests.fetchHorrorMovies} />
        <Row title="Documantaries" url={requests.fetchDocumantaries} />
        <Row title="Comedy Movies" url={requests.fetchComedyMovies} />
        <MOModel />
      </main>
    </div>
  );
}

export default Browse