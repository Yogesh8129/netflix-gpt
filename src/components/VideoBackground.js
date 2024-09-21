import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <iframe
        className="absolute top-1/2 left-1/2 w-[200%] h-[200%] transform -translate-x-1/2 -translate-y-1/2"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?controls=0&fs=0&iv_load_policy=3&modestbranding=1&rel=0&mute=1&autoplay=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
