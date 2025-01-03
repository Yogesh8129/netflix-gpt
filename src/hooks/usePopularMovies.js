import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  //Fetch data from TMDB and update store
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      //TODO move this into constants
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
