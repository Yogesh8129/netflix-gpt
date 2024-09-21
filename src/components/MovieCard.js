import React from 'react'
import { IMG_PATH } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
      <img src={ IMG_PATH + posterPath } alt="movie_poster"/>
    </div>
  )
}

export default MovieCard