import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addTopRatedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {
  //Fetch data from TMDB and update store
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      //TODO move this into constants
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies